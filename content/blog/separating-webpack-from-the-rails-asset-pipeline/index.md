---
date: 2019-07-01T08:00:00.000Z
title: "Separating webpack from the Rails Asset Pipeline"
description: "An approach for decoupling a webpack build process from the Rails Asset Pipeline"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Rodion Kutsaev"
tags:
  - webpack
  - rails asset pipeline
  - build process
---

The out of the box default when generating a new Rails app was CoffeeScript
years ago. This CoffeeScript was then transpiled by the
[Rails Asset Pipeline](https://guides.rubyonrails.org/asset_pipeline.html) to
vanilla JavaScript for use in the browser. This worked great at the time,
especially when creating a server-rendered app and adhering to the Rails
conventions. The world of JavaScript moves fast and today we have tooling and
technology like webpack, TypeScript, React, CSS Modules and more. These tools
were either in their infancy or didn't exist at all.

How do you get these to work within a Rails app?

## Transitioning to a new frontend stack

In 2016, we started to "modernize" our frontend stack at Handshake to enable
us to build the product experience we wanted as well as scale with our growing
team. At the time, the defacto build tool was webpack. However, the application
was entirely server rendered with additional functionality sprinkled on with
CoffeeScript processed by the Asset Pipeline. It was already set up to
handle minification, fingerprinting (hashing), CDN deployment, etc. It wasn't
ideal to spend the time re-thinking this entire process for use with webpack.
There was a lot to figure out: will these technologies work for us? what are
the foundations and patterns we want to establish? what _is_ a good build
process with this setup?

At the time, the easiest possible deployment strategy was taken. The webpack
build output was put through the Asset Pipeline. This didn't require any
monekypatching of the Asset Pipeline ([webpacker](https://github.com/rails/webpacker)
also wasn't an option at the time).

### Hooking into the Asset Pipeline

The first step is to run webpack and get the output as single JavaScript and
CSS bundle. For example, a `bundle.js` and `bundle.css` file are output to a
`dist` directory. This directory is presumably ignored from source control since it's usually
undesirable to check-in built assets. Rails then needs to be informed to search
this directory for assets when requiring files into the Asset Pipeline.

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
Rails configuration code to get it up and running. There are numerous downsides
to this approach. At the time it was the correct choice to start building
product features as quickly as possible rather than over-engineer the build
process.

## Running into problems

This setup lasted a long time. Over time, as the codebase grew using the new
technology, the team grew and product needs changed the disadvantages of this
setup started to become bigger problems. For us, there were three main pain
points.

First, source maps weren't an option since the assets are first processed by
webpack. The [`devtool`](https://webpack.js.org/configuration/devtool/)
option for webpack provides the optionality to generate
source maps but the output is again processed by the Asset Pipeline so the
webpack generated source maps are then invalid. This was particularly painful
debugging minified source in production. Hopefully there was a unique function
or variable name that could at least point in the right direction.

Second, this process does have some build time cost (specifically as a code base
grows). These build steps _must_ be synchronous because webpack must do all it's
processing and have completed before the Asset Pipeline can begin. Furthermore,
the Asset Pipeline is loading and processing these assets. Both of these
add a non-negligible amount of time to the build process.

Lastly, this approach drastically limits functionality of webpack. For example,
if we wanted to implement code splitting or process images through webpack
it would be nearly impossible without introducing a lot of complexity.

## Solution

As mentioned earlier, the main advantages of hooking into the Asset Pipeline
was the existing build process. So to decouple the webpack build we need to
effectively emulate all of the important steps that it handled. Namely: compiling,
minimizing, fingerprinting (hashing), deploying to the CDN and then asset lookup
at runtime in production. Fortunately, webpack is great at compiling (which it
was already doing), minimizing and hashing files. The only pieces not quite
handled were deploying to the CDN and finding these files at runtime.

By convention, Rails has the `public` directory to store the static assets
and the subdirectory `public/assets` to contain the output from the Rails
asset pipeline. With this setup, anything in this `public` directory can
be deployed to a CDN. As long as the webpack output ends up here, it'll
also end up on the CDN.

The last piece is the dynamic file lookup since webpack is now responsible for
the file hashing. The file name will change every deploy (assuming the contents
have changed). The Asset Pipeline has to do something almost identical.
[Sprockets](https://github.com/rails/sprockets) (the tool used by the Asset Pipeline)
outputs the file [`.sprockets-manifest-[hash].json`](https://guides.rubyonrails.org/asset_pipeline.html#precompiling-assets)
that is a lookup hash mapping the original file name to the compiled file name (including the unique
hash).

### Creating a webpack manifest file

With webpack, this can be easily accomplished using the [`ManifestPlugin`](https://github.com/danethurber/webpack-manifest-plugin).

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

It depends on the exact configuration, entry points, file naming etc. but the file
generated by this plugin will look something like the following.

```json
{
  "dist/main.js": "dist/bundle.1234567890.js",
  "dist/main.css": "dist/bundle.0987654321.css"
}
```

### Finding the built asset at runtime

This solution was originally inspired by the solution in the post
[Squeezing Webpack into backend frameworks](https://infinum.co/the-capsized-eight/squeezing-webpack-into-backend-frameworks)
but was then adapted.

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
should never be changing in a production environment. An approach [similair to
sprokects](https://github.com/rails/sprockets-rails/blob/49bf8022c8d3e1d7348b3fe2e0931b2e448f1f58/lib/sprockets/railtie.rb#L214)
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
approach fails early and won't boot if the manifest file doesn't exist for any reason.
Now we can simplify the `webpack_asset_url` helper to rely on this file
loaded on boot.

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
the Rails server and the webpack process can be ran separately and presumably
the webpack process will output new files as you make changes. It's probably
not desirable to fail the boot in an environment where you can compile assets
on the fly. Rails has on option for [live compilation](https://guides.rubyonrails.org/asset_pipeline.html#live-compilation)
and can be enabled by setting the proper configuraiton option.

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
    nil # The file doesn't exist, but can we lazy-compile?
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

Another option could be to use webpacker. However, we want to move to a single
page application powered by an API. Using something like webpacker could make
that transition more challenging (if not technically, culturally) by keeping
our webpack build process directly integrated in Rails. Yes, this setup requires
some Rails code but the only contract is the manifest file. Rails is no longer
responsible for hashing the file names or the CDN deployment.

Another one of the motivations of this change was to leverage more complex
features of webpack and give it 100% control of the build process. Putting an
additional abstraction _on top of that_ along with the opinions of Rails does
not seem like an ideal setup. For example, to implement code splitting you must
first understand the intricacies of webpack and then the specifics of webpacker.
Finally, we have a fair amount of legacy assets (CoffeeScript, SASS, images)
that haven't been migrated yet. The existing build process works fine and has
almost no active development so there's no motivation to change it nor
introducing risk by attempting to change it.

## Migration

As with almost everything that involves these types of changes it had to be done
with no downtime and as little risk as possible.

The first step of minimizing risk is putting this change behind a feature toggle
to first enable for internal users, 1% of users, then ramping from there. But
how can a build process be put behind a dynamic toggle? Build both possible
versions. Then the only place the toggle's value is used is when determining
if the assets should be loaded from the Rails Asset Pipeline or by looking it
up in the webpack manifest file. So at runtime, this toggle will default
to relying on `javascript_include_tag` (or `stylesheet_link_tag`) and when the
toggle is enabled relying on the newly defined `webpack_asset_url`.

However, we don't want to run webpack twice simply to get two files that
has identical contents but different names. In the previous example, the Asset
Pipeline manifest relied on a predictable name (eg: `bundle.js`) but with the
new setup webpack is now responsible for hashing (eg: `bundle.1234567890.js`).
Since webpack needs to do the hashing at build time we have to output the file
with the hash: `bundle.1234567890.js`. But now we need an identical file but
named `bundle.js`. There are existing plugins that can help with copying like
the [`CopyPlugin`](https://github.com/webpack-contrib/copy-webpack-plugin) but
there were [issues](https://github.com/webpack-contrib/copy-webpack-plugin/issues/15)
with it running before the files were emitted and [other issues](https://github.com/gregnb/filemanager-webpack-plugin/issues/27)
with some other plugins. Since this was temporary and straightforward we
created a quick custom `CopyHashedFiles` plugin to do this and avoid running
webpack again.

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



## Conclusion

If you're working in a server-rendered world (Rails or some other backend)
with webpack hopefully this overview was helpful in sparking some ideas
how you decouple a tightly integrated build process.
