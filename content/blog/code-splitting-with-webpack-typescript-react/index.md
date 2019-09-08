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

### Tree Shaking

### Performance Budgets

### Preloading