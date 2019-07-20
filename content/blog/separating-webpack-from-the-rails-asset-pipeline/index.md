---
date: 2019-07-20T08:00:00.000Z
title: "Separating webpack from the Rails Asset Pipeline"
description: "An approach for decoupling a webpack build process from the Rails Asset Pipeline build process"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Rodion Kutsaev"
tags:
  - webpack
  - rails asset pipeline
  - build process
---

Years ago, if generating a new Rails app, the out-of-the-box setup for writing 
client-side functionality was CoffeeScript. This CoffeeScript was 
then transpiled by the [Rails Asset Pipeline](https://guides.rubyonrails.org/asset_pipeline.html) 
to vanilla JavaScript for use in the browser. 

This worked great at the time, especially when creating a server-rendered app 
and sprinkling on a bit of additional functionality only when needed on the client. However,
consumer products and the world of JavaScript have evolved quickly. Today we have tooling 
and technology like webpack, TypeScript, React, CSS Modules and patterns 
like client side routing and single page applications.

These tools were either in their infancy or didn't exist at all when generating 
a new Rails app several years ago. How can these be leveraged in an existing
Rails app?

## Transitioning to a new frontend stack

In 2016, Handshake started to "modernize" the frontend stack and introduce
React, TypeScript and webpack to build the necessary product experience and 
scale with the growing engineering team.

At the time, the build tool of choice was webpack. However, the application
was almost entirely server-rendered with additional functionality added on with
CoffeeScript. The Asset Pipeline along with some custom build steps handled all 
the processing for transpilation, minification, fingerprinting (hashing), CDN
deployment, etc. 

It wasn't ideal to spend the time re-thinking this entire 
process for use with webpack. There were more important questions to figure out: 
will these technologies work for our needs? what are the foundations and patterns we 
want to establish? what does a good build process look like with this setup?

The approach that required the least effort to begin using these new tools was
to let webpack compile the TypeScript and extract the CSS Modules into a single
file. This output was then put through the Asset Pipeline to take advantage of
the existing tooling _([webpacker](https://github.com/rails/webpacker)
also wasn't an option at the time)_. So how did this legacy setup work?

### Hooking into the Asset Pipeline

The first step is to run webpack and get the output as single JavaScript and
CSS bundle. For example, a `bundle.js` and `bundle.css` file are output to a
`dist` directory. This directory is presumably ignored from source control since 
it's usually undesirable to check-in built assets. Rails now needs to be 
informed to search this directory for assets when requiring files in the Asset 
Pipeline manifest files.

```ruby
# config/application.rb

# Search the `/dist` directory for files when
# resolving required assets in the Asset Pipeline
config.assets.paths << Rails.root.join('dist')
```

Then configuring the
[Rails manifest files](https://guides.rubyonrails.org/asset_pipeline.html#manifest-files-and-directives)
to require the webpack JavaScript and CSS bundles.

```javascript
// app/assets/javascripts/application.js

//= require bundle
```

```css
/* app/assets/stylesheets/application.css */

/* ...
 *= require bundle
 */
```

This takes full advantage of the existing build process with only a few lines of
Rails configuration code to get it up and running. At the time it was chosen to 
start building product features as quickly as possible rather than over-engineer 
the build process.

## Running into problems

This setup lasted a long time. As the codebase grew using the new technology,
the engineering team grew, and the product needs changed the disadvantages of 
this setup started to become bigger problems. There were three main pain points.

### Source maps

With this setup source maps weren't an option. The [`devtool`](https://webpack.js.org/configuration/devtool/)
option for webpack provides the optionality to generate source maps. Even with
this set, the webpack output is again processed by the Asset Pipeline so the
webpack generated source maps are then invalid. This was particularly painful
debugging minified source in production for bug reports. Without source maps,
hopefully there was a unique function or variable name in the stacktrace that 
can be used to globally search in the codebase.

### Build cost and complexity

Second, this setup has an added build time cost (especially as a code base
grows). These build steps _must_ be synchronous. Before the Asset Pipeline can
begin, webpack must do all it's processing and have completed. Furthermore,
the Asset Pipeline is re-loading and re-processing these assets output by 
webpack. Effectively, the assets were being double processed. Both of these
issues can add minutes to the build process.

### Advanced webpack usage

Lastly, this approach drastically limits the functionality of webpack. For 
example, more advanced patterns or usages like code splitting, processing images, 
or filenaming for long-term caching would be nearly impossible without
introducing a lot of complexity and custom logic.

## Solution

As mentioned earlier, the main advantages of hooking into the Asset Pipeline
was the existing build process. All of these steps it handled have to be
effectively emulated to decouple the webpack build. Namely: compiling,
minimizing, fingerprinting (hashing), deploying to the CDN and then asset lookup
at runtime in production. Fortunately, webpack is great at compiling (which it
was already doing), minimizing and hashing files. The only pieces not quite
handled were deploying to the CDN and finding these files at runtime.

By convention, Rails has the `public` directory to store the static assets
and the subdirectory `public/assets` to contain the output from the Asset
Pipeline. With this setup, anything in this `public` directory can
be deployed to a CDN. As long as the webpack output ends up somewhere in here
(eg: `public/dist` or `public/webpack`), it'll also end up on the CDN (assuming
the entire `public` directory is published).

The last piece is the dynamic file lookup since webpack is now responsible for
the file hashing. The file name could change every deploy (depending on the
filenaming used and assuming the contents have changed).

Fortunately, the Asset Pipeline has to do something almost identical so it can
provide some inspiration. [Sprockets](https://github.com/rails/sprockets) (the tool used by the Asset Pipeline)
outputs the file [`.sprockets-manifest-[hash].json`](https://guides.rubyonrails.org/asset_pipeline.html#precompiling-assets)
that is effectively a lookup hash mapping the original file name to the compiled file name (including the unique
hash).

### Creating a webpack manifest file

The first step is to emulate this manifest file for mapping a constant, unhashed
filename to the hashed output file that lives on the CDN. With webpack, this can
be easily accomplished using the
[`ManifestPlugin`](https://github.com/danethurber/webpack-manifest-plugin).

```typescript{4,10}
// webpack.config.ts

import * as webpack from "webpack";
import * as ManifestPlugin from "webpack-manifest-plugin";

const config: webpack.Configuration = {
  // Other webpack configuration options...
  plugins: [
    // Other plugins...
    new ManifestPlugin()
  ]
};

module.exports = config;
```
<span class="image-caption">
Note: all webpack configuration examples are written in TypeScript
</span>

The output manifest contents depends on the exact webpack configuration, entry
points, filenaming, output path, etc. However, the file generated by this plugin
will look something like the following (maybe a few more chunks if code splitting).

```json
{
  "main.js": "bundle.1234567890.js",
  "main.css": "bundle.0987654321.css"
}
```

Assuming no configuration changes are made, every manifest file generated should
have the same keys with the values (possibly) changing between each build.

### Finding the built asset at runtime

Now, there is a way to find the files but how are they referenced?
This solution was originally inspired by the solution in the post
[Squeezing Webpack into backend frameworks](https://infinum.co/the-capsized-eight/squeezing-webpack-into-backend-frameworks)
along with a few adaptations.

```ruby
# app/helpers/webpack_helper.rb

module WebpackHelper
  def webpack_asset_url(asset)
    "/dist/#{manifest.fetch(asset)}"
  end

  private

  def manifest
    # Set WEBPACK_MANIFEST_PATH to point to the manifest file
    JSON.parse(File.read(WEBPACK_MANIFEST_PATH))
  rescue Errno::ENOENT
    fail 'Please run webpack'
  end
end
```

Then this helper can be used in a Rails view to to load the corresponding
webpack asset.

```haml
-# app/views/layouts/application.html.haml

%script(type="text/javascript" src="#{webpack_asset_url('dist/main.js')}")
```

One problem you might notice with this solution is that every single call
too `webpack_asset_url` is loading the manifest file from the file system.
The private `manifest` method could be memoized but that would only help for
looking up multiple assets within the same request. Realistically, this file
should never be changing in a production environment (without deploying a new
change which presumably requires a restart). An approach [similar to
Sprockets](https://github.com/rails/sprockets-rails/blob/49bf8022c8d3e1d7348b3fe2e0931b2e448f1f58/lib/sprockets/railtie.rb#L214)
can be used to load the file once on boot.

```ruby
# config/initializers/webpack.rb

def load_webpack_manifest
  JSON.parse(File.read(WEBPACK_MANIFEST_PATH))
rescue Errno::ENOENT
  fail "The webpack manifest file does not exist."
end

Rails.configuration.x.webpack.manifest = load_webpack_manifest
```

Now the file is loaded once and then held in-memory. Additionally, this
approach fails early and won't boot if the manifest file doesn't exist for
whatever reason. Now the `webpack_asset_url` helper can be updated to rely on
this file loaded once on boot rather than every request. The
`configuration.x` is provided by Rails for adding
[custom configurations](https://guides.rubyonrails.org/v4.2/configuring.html#custom-configuration).

```ruby
# app/helpers/webpack_helper.rb

module WebpackHelper
  def webpack_asset_url(asset)
    "/dist/#{manifest.fetch(asset)}"
  end

  private

  def manifest
    Rails.configuration.x.webpack.manifest
  end
end
```

One disadvantage to this approach could be the development experience. Now
the Rails server and the webpack process are ran separately and presumably
the webpack process will output new files as changes are made. It's probably
not desirable to fail the boot in an environment where assets can be compiled
on the fly. Rails has on option for [live compilation](https://guides.rubyonrails.org/asset_pipeline.html#live-compilation)
and can be enabled by setting the proper configuration option.

```ruby
# config/application.rb

# In this mode all requests for assets in the
# pipeline are handled by Sprockets directly
config.assets.compile = true
```

Now, this behavior could be emulated on boot as well for environments that
allows assets to be compiled on the fly.

```ruby{6-8}
# config/initializers/webpack.rb

def load_webpack_manifest
  JSON.parse(File.read(WEBPACK_MANIFEST_PATH))
rescue Errno::ENOENT
  if Rails.configuration.assets.compile
    nil # The file doesn't exist, can we lazy load it instead?
  else
    fail "The webpack manifest file does not exist."
  end
end

Rails.configuration.x.webpack.manifest = load_webpack_manifest
```

The `webpack_asset_url` will also have to be updated, presumably to always
load the manifest file from the file system when in an environment where the
assets can be compiled on the fly since it could have changed at any point.

## Other Considerations

One of the other options could be to use `webpacker`. However, we want to move to a single
page application powered by an API. Using something like webpacker could make
that transition more challenging (if not technically, culturally) by keeping
our frontend build process directly tied to Rails. This setup requires some
custom Rails code but the only contract is the manifest file. Rails is no longer
responsible for hashing the file names or the CDN deployment. Now there is not a
dependency on Rails, it just happens to be the current tool repsonsible for
consuming the manifest file.

Another one of the motivations of this change was to leverage more complex
features of webpack and give it 100% control of the build process. Putting an
additional abstraction _on top of that_ along with the opinions of Rails
would add additional complexity. For example, to implement code splitting you must
first understand the intricacies of webpack and then the specifics of webpacker.
Finally, we have legacy assets (CoffeeScript, SASS, images)
that haven't been migrated yet. The existing build process works fine and has
almost no active development so there's no motivation to change it nor
any desire to introduce risk by changing it.

## Migration

As with almost everything that involves these types of changes it had to be done
with no downtime and as little risk as possible.

The first step of minimizing risk is to put this change behind a feature toggle
to first enable for internal users, 1% of users, then ramping from there. But
how can a build process be put behind a dynamic toggle? Build both possible
versions. Then the only place the toggle's value is used is when determining
if the assets should be loaded from the Asset Pipeline or by looking it
up in the webpack manifest file. So at runtime, this toggle will default
to relying on `javascript_include_tag` (or `stylesheet_link_tag`) and when the
toggle is enabled relying on the newly defined `webpack_asset_url`.

However, we don't want to run webpack twice simply to get two files that
have identical contents but different names. In the previous example, the Asset
Pipeline manifest relied on a predictable name (eg: `bundle.js`) but with the
new setup webpack is now responsible for hashing (eg: `bundle.1234567890.js`).
Since webpack needs to do the hashing at build time we have to output the file
with the hash: `bundle.1234567890.js`. Now there needs to be an identical file but
named `bundle.js`. There are existing plugins that can help with copying like
the [`CopyPlugin`](https://github.com/webpack-contrib/copy-webpack-plugin) but
there were [issues](https://github.com/webpack-contrib/copy-webpack-plugin/issues/15)
with it running before the files were emitted and [other issues](https://github.com/gregnb/filemanager-webpack-plugin/issues/27)
with some other plugins when using a glob pattern (to find the hashed file). 
Since this was temporary and straightforward we created a simple custom 
`CopyHashedFiles` plugin to do this and avoid running webpack twice for nearly 
identical output.

```typescript
// copy-hashed-files.ts

import * as webpack from "webpack";
import * as fs from "fs";

/**
 * A (temporary) custom webpack plugin. This will wait until after the main
 * compilation step has output the JavaScript, CSS and manifest file. It will
 * then parse the manifest file to find the most recent hashed JS and CSS
 * bundles and copy them to non-hashed names for the Rails Asset Pipeline
 * to continue to use while transitioning away from the Rails Asset Pipeline.
 */

export class CopyHashedFiles {
  public apply(compiler: webpack.Compiler) {
    const afterEmit = () => {
      console.log(`[CopyHashedFiles] Reading webpack-manifest.json...`);
      const manifest = JSON.parse(
        fs.readFileSync(`${OUTPUT_DIRECTORY}/webpack-manifest.json`).toString()
      );

      const jsBundle = manifest["main.js"];
      console.log(`[CopyHashedFiles] Copying ${jsBundle} to bundle.js...`);
      fs.copyFileSync(
        `${OUTPUT_DIRECTORY}/${jsBundle}`,
        `${OUTPUT_DIRECTORY}/bundle.js`
      );

      const cssBundle = manifest["main.css"];
      console.log(`[CopyHashedFiles] Copying ${cssBundle} to bundle.css...`);
      fs.copyFileSync(
        `${OUTPUT_DIRECTORY}/${cssBundle}`,
        `${OUTPUT_DIRECTORY}/bundle.css`
      );

      console.log(`[CopyHashedFiles] Completed.`);
    };

    // https://webpack.js.org/api/compiler-hooks/#afteremit
    compiler.hooks.afterEmit.tap("afterEmit", afterEmit);
  }
}
```

This plugin relies on webpack's [compiler hooks](https://webpack.js.org/api/compiler-hooks/)
to execute this plugin after the output files have been emitted. Then, the
plugin and be imported and added to the webpack configuration.

```typescript{5,12}
// webpack.config.ts

import * as webpack from "webpack";
import * as ManifestPlugin from "webpack-manifest-plugin";
import { CopyHashedFiles } from "./copy-hashed-files";

const config: webpack.Configuration = {
  // Other webpack configuration options...
  plugins: [
    // Other plugins...
    new ManifestPlugin(),
    new CopyHashedFiles()
  ]
};

module.exports = config;
```

This webpack plugin was temporary and only necessary during the migration
from relying on the Asset Pipeline to only rely on webpack. Once the migration
was completed, this plugin can be entirely removed.

## Conclusion

With this approach, webpack now has complete control (hashing, code splitting,
source maps, etc.) and no longer has to rely on the Asset Pipeline.

Hopefully this overview was helpful in sparking some ideas if exploring how 
you may decouple a tightly integrated build process when using webpack.

Interested in learning more or sharing a different approach? Check out this
[episode on Rubber Ducking about decoupling webpack](https://rubberducking.fm/16),
or reach out on [Twitter](https://twitter.com/spencerskovy).
