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

## React

### React.lazy and React.Suspense

## webpack

### Optimizing Split Chunks

### Tree Shaking
