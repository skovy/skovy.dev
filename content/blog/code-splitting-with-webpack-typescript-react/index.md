---
date: 2019-09-02T08:00:00.000Z
title: "Code splitting with webpack and TypeScript"
description: "An overview of code splitting with webpack, in a TypeScript and React app"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Brendon Thompson"
tags:
  - webpack
  - typescript
  - react
  - code splitting
  - dynamic import
---

Code splitting is an approach to break apart a single large file into many
smaller files. A common pattern is to do this at the route or page level because
a user generally only needs the code for the current page, and not the other
50 or so pages.

As with most things, code splitting has its tradeoffs. It requires a tool that
supports it, a specific configuration and can add additional complexities that
might be overkill for a small application. However, at a certain point it can
become critical. Shipping a single large bundle has a number of downsides that
can result in poorer performance.

One of the biggest downsides is the cost to download a single large file.
It consumes additional bandwidth which can take longer to download and cost
users with limited bandwidth by forcing them to download more than they need.
After downloading, the browser also has to parse and compile all that code which
adds a non-trivial amount of time. If it's a very large file, the main thread
will likely be blocked as a single, long task so _other_ important tasks will
have to wait. Assuming this file is being cached, the entire file will have to
be invalidated anytime a single change is made so users will have to re-download
everything.

These problems are what code splitting can help solve (along with some other
benefits). Only the code for the current page or feature needs to be downloaded
so less bandwidth is used and less time spent. Since it's less code, that means
the parsing and compilation is also faster. Even if the code splitting results
in downloading multiple files this can happen in parallel (too many could also
be bad). If one feature's code is changed, only that code split chunk needs to
be invalidated rather than all the code. Lastly, this results in smaller tasks
on the main thread that could be interleaved with other important work if
necessary.

Code splitting is well supported in most builds tools like
[webpack](https://webpack.js.org/guides/code-splitting/),
[Parcel](https://parceljs.org/code_splitting.html), or
[rollup](https://rollupjs.org/guide/en/#code-splitting) but also some frameworks
have this built-in, such as [Gatsby](https://www.gatsbyjs.org/docs/how-code-splitting-works/)
or [Next.js](https://nextjs.org/learn/excel/lazy-loading-modules).

The remainder of this post is going to focus on using webpack as the build tool
with a TypeScript and React application.

## TypeScript

Since webpack is responsible for most the work it doesn't take long to get
code splitting working with TypeScript. However, there are a handful of
potentially subtle "gotcha's" when working with TypeScript to be aware of.

### ESNext modules

The first step is to properly configure the [`module`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) setting.
For code splitting to work with webpack, it _must_ be set to `esnext`. [Dynamic
imports](https://tc39.es/proposal-dynamic-import/) were introduced in
[TypeScript 2.4](https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#dynamic-import-expressions).
This allows imports to be executed dynamically to lazy load modules. However,
for code splitting to work with webpack these dynamic imports must be left as is
and not transpiled. Setting the `module` to `esnext` will output the dynamic
imports as is and preserve them for webpack to handle to perform chunking and
code splitting.

```json
// tsconfig.json
{
  "compilerOptions": {
    "module": "esnext"
    // other configuration ...
  }
}
```

Without this setting, the build will likely still work, but it will be a
_single large bundle_ rather than many smaller chunks.

### Magic comments

Another feature webpack supports are [magic comments](https://webpack.js.org/api/module-methods/#magic-comments)
to help control the output and behavior of code split modules. As the name
suggests, this relies on using actual comments (eg: `/* webpackChunkName: "my-chunk-name" */`).

TypeScript has a compiler option [`removeComments`](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
This will remove all comments except copy-right header comments. Fortunately,
this setting defaults to `false` but ensure it's not _enabled_. Otherwise,
the magic comments will be removed and webpack won't ever see them and won't
do anything.

```json
// tsconfig.json
{
  "compilerOptions": {
    // since this is the default, it can also be omitted
    "removeComments": false
    // other configuration ...
  }
}
```

### TypeScript webpack configuration

If you're webpack configuration _is not_ written in TypeScript this section can
be skipped. However, when working with TypeScript and webpack chances are you
at least considered [writing your webpack configuration in TypeScript](https://webpack.js.org/configuration/configuration-languages/#typescript).

It does introduce some additional complexity (hence the need for this section)
but the benefit of type-safety when working with webpack outweighs this cost in
my opinion. It's easy to typo a configuration setting, or nest it in the wrong
configuration object. Fortunately, using TypeScript can help alleviate this
entire class of issues and reduce the amount of time digging into unexpected
webpack.

If you were not using `esnext` modules before this and relying on the same
`tsconfig.json` for both source code and the webpack configuration a new
`tsconfig.json` will be necessary specifically for your webpack configuration.
`ts-node` is sued to run webpack configurations written in TypeScript and
[it doesn't support `esnext` modules](https://github.com/TypeStrong/ts-node/issues/510).
Therefore, another setting like `commonjs` is necessary. This can be done by
creating another file such as `tsconfig.webpack.json` and then prefixing any
or your `webpack` commands with [`TS_NODE_PROJECT=tsconfig.webpack.json`](https://github.com/TypeStrong/ts-node#cli-and-programmatic-options).
It may look something like the following.

```json
// tsconfig.webpack.json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "esModuleInterop": true
  }
}
```

```bash
TS_NODE_PROJECT=tsconfig.webpack.json yarn webpack
TS_NODE_PROJECT=tsconfig.webpack.json npm run webpack
```

Without this, `ts-node` will continue to default to `tsconfig.json` and will
likely throw `SyntaxError: Unexpected identifier`.

These are the main three gotcha's I have experienced when working with TypeScript
and webpack. Aware of other ones? [Let me know on Twitter](https://twitter.com/spencerskovy)!

## React

Now that TypeScript is configured to allow code splitting, the application
code needs to be updated to use dynamic imports.

### React.lazy and React.Suspense

React [`v16.6.0`](https://reactjs.org/blog/2018/10/23/react-v-16-6.html) introduced
`React.lazy` and `React.Suspense`.

For example, let's assume you have a simple static (no code splitting) app that
looks like the following.

```typescript
import PageA from "./PageA";
import PageB from "./PageB";

const App = () => (
  <div>
    <PageA />
    <PageB />
  </div>
);
```

The first step is to update the imports to be dynamic and wrapped with `React.lazy`.
`React.lazy` expects a function as the argument that returns a dynamic import that
will returns a promise that resolves to a module where the component is the `default`
export.

```typescript{1-2}
const PageA = React.lazy(() => import("./PageA"));
const PageB = React.lazy(() => import("./PageB"));

const App = () => (
  <div>
    <PageA />
    <PageB />
  </div>
);
```

Finally, as these modules are resolving (loading) we need a way to suspend
rendering (since they haven't been loaded) and possibly show a loading state
if appropriate.

```typescript{6,9}
const PageA = React.lazy(() => import("./PageA"));
const PageB = React.lazy(() => import("./PageB"));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <PageA />
      <PageB />
    </Suspense>
  </div>
);
```

> Unfortunately, if you're doing server rendering `React.Suspense` will not work.

### Non-default exports

`React.lazy` only works with `default` exports. There are a number of options.
First, the component being imported can be updated to be the default export.

```diff
// PageA.js
-export { PageA };
+export default PageA;
```

Second, as [suggested in the docs](https://reactjs.org/docs/code-splitting.html#named-exports),
an intermediate module could be created to re-export the component as a default.

```typescript
// SomeComponents.js
export { PageA };
export { OtherComponent };
```

```typescript
// PageA.js
export { PageA as default } from "./SomeComponents";
```

Or lastly, the dynamic import can be modified to assign the default.

```typescript
const PageA = React.lazy(() =>
  import("./PageA").then(importedModule => ({
    default: importedModule.PageA
  }))
);
```

For more details on code splitting with React, see the
[React doc's on Code Splitting](https://reactjs.org/docs/code-splitting.html).

## webpack

With webpack 4, code splitting should be enabled by default without any extra
work! This is great because it makes it easy to get started. However, these
default settings will likely need to be tweaked or optimized for each app.

### Dynamic Imports

To "enable" code splitting the only thing required is a dynamic import. As already
mentioned both in the TypeScript configuration changes and in the React setup
the use of dynamic imports is the key to code splitting. A basic example is shown
in the [webpack code splitting guide](https://webpack.js.org/guides/code-splitting/)
to lazily load `lodash`.

```javascript
function getComponent() {
  // Lazily load the "lodash" package and name
  // the code split chunk "lodash" using the
  // webpackChunkName magic comment.
  return (
    import(/* webpackChunkName: "lodash" */ "lodash")
      // Rename the default import to "_"
      // (done by convention, not necessary)
      .then(({ default: _ }) => {
        // Create a new HTML element
        const element = document.createElement("div");
        element.innerHTML = _.join(["Hello", "webpack"], " ");
        return element;
      })
      .catch(error => "An error occurred")
  );
}

// Lazily load the "component". Once the promise to
// load the module  has resolved, append the
// element to the body.
getComponent().then(component => {
  document.body.appendChild(component);
});
```

When webpack finds a dynamic import it will assume that code should be code split
and lazy loaded. Technically, you could stop here and officially have
code splitting. However, there's likely a reasonable amount of optimization that
can still be done.

### "Dynamic" Dynamic Imports

The webpack documentation refers to this as
["Dynamic expressions in import()"](https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import).
I've found the term "dynamic dynamic imports" to paint a better picture of what
this means in my head but both terms are referring to the same thing. The idea
behind this is to dynamically generate a dynamic import. This is useful when
working with a number of modules that follow a strict convention. For example,
as again demonstrated in the webpack documentation a basic example may be
a directory of JSON files for different locales that need to be loaded
using a dynamic import dynamically based on the current user.

```javascript
// Determine what language the current user needs
const language = detectVisitorLanguage();

// Lazily load that language out of the set of all possible languages
import(`./locale/${language}.json`).then(module => {
  // Do something with the translations...
});
```

To parse this, webpack will effectively convert this statement to regex so
`./locale/${language}.json` will become something like `^\.\/locale\/.*\.json$`.

This will match files such as `./locale/english.json` and `./locale/spanish.json`
and will create chunks for these files. But with great power comes great
responsibility. If this dynamic expression is too broad it may build files that
will never be imported. Make sure to use as specific of a dynamic import as
possible and minimize the number of files that could match otherwise build
performance could suffer.

### Optimizing Split Chunks

The `optimization.splitChunks` configuration options provides control over how
webpack will produce chunks. By default, webpack uses a [set of heuristics](https://webpack.js.org/plugins/split-chunks-plugin/#defaults)
when determining how to produce chunks to roughly find a balance between chunk
size versus the number of chunks.

With chunks that are too large, we start to run into similar problems as having
a single large bundle. The time to download the larger files, the time to parse,
the lack of cache-ability, etc. However, with too many chunks, we can start to
run into limits on the number of requests a browser can make and the corresponding
overhead. However, if using HTTP/2 this is not an issue in which case
`AggressiveSplittingPlugin` can optimize for this.

Although webpack has reasonable default, it may be useful to explicitly split
out certain portions of your code. For example, say there's a set of shared
common components that are used throughout an application. It may be desirable
to force these into their own chunk. As with most things, make sure to test in
your own application and profile the impacts on webpack build performance,
the output files ([webpack bundle analzyer](https://www.npmjs.com/package/webpack-bundle-analyzer) is a great tool for this)
and browser performance using a tool like [Lighthouse](https://developers.google.com/web/tools/lighthouse/).

```typescript
const config = {
  // other configuration ...

  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: "common-components",
          test: /[\\/]components[\\/]common[\\/]/,
          enforce: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
};
```

> Keep in mind that the defaults for `splitChunks` differs in production versus
> development mode so if profiling make sure to run in production mode.

### Tree Shaking

Although tree shaking (or dead code elimination) isn't directly tied to code
splitting it can begin to make problems more obvious. It's easy for large modules
to get lost in a single bundle. When working with many chunks, it becomes easier
to see what the biggest chunks are and then begin to start diagnosing the root
cause of large modules.

For more details and a specific example of tree shaking, read [Tree Shaking Font Awesome](/tree-shaking-font-awesome/).

### Performance Budgets

Now that you've done all this work to code split an application and minimize the
amount of code a user needs to download make sure to protect against regressions!

Although it's not bullet proof, performance budgets can be a great way to at
least catch large regressions and intentionally decide if a slightly larger
entry point or chunk size is acceptable.

Again, webpack has [reasonable defaults](https://webpack.js.org/configuration/performance/).

By default the `performance.hints` will be set to `"warning"`. However, if you
want to _prevent_ large regressions it's desirable to set this to `"error"` to
fail the webpack build. In development, due to the lack of minification and
differing split chunks defaults it may be preferabble to disable these warnings
altogether by setting it to `false`.

The `maxEntrypointSize` represents all assets that will be loaded during the
initial load time for a specific entry. Here it's set to an arbitrary 200 Kilobytes.

The `maxAssetSize` is any file emitted by webpack, here it's set to an arbitrary 100 Kilobytes.

And finally, the `assetFilter` allows controlling which files this applies to.
In this example, it's not applied to any files ending with `.css` or `.map`.

```typescript
const KILOBYTES = 1024;

const config = {
  // other configuration ...

  performance: {
    hints: process.env.NODE_ENV === "production" ? "error" : false,
    maxEntrypointSize: 200 * KILOBYTES,
    maxAssetSize: 100 * KILOBYTES,
    assetFilter: fileName =>
      !fileName.endsWith(".css") && !fileName.endsWith(".map")
  }
};
```

### Preloading

One final consideration is preloading chunks that a given page will need.
This is not required, but can help with browser performance by fetching known
assets as early possible. There are a number of approaches to achieve this.

First, using the [preload/prefetch magic comments](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)
`/* webpackPrefetch: true */` (probably needed  for some future navigation) or 
`/* webpackPreload: true */` (resource needed during  the current navigation).

However, this doesn't work well with "dynamic" dynamic imports or possibly working
with both a server-rendered and client-rendered application. For this, a chunk
group manifest file can be generated at build time to know which chunks are
necessary for a given page and dynamically inject `link` tags. For an example
of how a plugin like this might look, check out 
[Gatsby's webpack stats extractor](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/gatsby-webpack-stats-extractor.js).

Finally, as mentioned earlier, exploring [HTTP/2 Server Push](https://developers.google.com/web/fundamentals/performance/http2/#server_push).

## Conclusion

Hopefully this overview is helpful in getting started with code splitting a 
TypeScript, React and webpack-built application. Although webpack is complex,
it fortunately ships with reasonable defaults for code splitting, performance
budgets and other settings. Support for code splitting is only improving with
recent features shipping in React with `React.lazy` and `React.Suspense`.