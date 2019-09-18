---
date: 2019-09-15T09:00:00.000Z
title: "Contributing to DefinitelyTyped for the first time"
description: "A guide to add missing type definitions to the DefinitelyTyped repository"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Aaron Burden"
tags:
  - typescript
  - definitely typed
  - first time contributing
  - missing @types
---

Some packages in the JavaScript ecosystem, such as
[`apollo-client`](https://www.npmjs.com/package/apollo-client) are written in
TypeScript. This means that the source can be used to automatically generate and
output type definitions that are included as part of the package. Some other 
packages, such as [`reselect`](https://www.npmjs.com/package/reselect), define 
their own type definitions even though they are not written in TypeScript.

However, there are also many packages that are not written in TypeScript or do 
not ship with type definitions, such as [`react`](https://www.npmjs.com/package/react). 
It's not a reasonable expectation for all packages to define type definitions.
It adds a lot of overhead for maintainers. There are the TypeScript specific issues to triage,
the effort to effectively translate the entire public API to type definitions, 
and the overhead of learning the intricacies of all the TypeScript features. 
So how do the type definitions for these packages get defined?

Luckily, TypeScript has a great community around providing type definitions for packages
that do not ship with typings. All of these definitions live in the
[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
repository on GitHub and are published to npm under the `@types` scope
(eg: `@types/react`) to install alongside the corresponding packages. All of
these definitions are created and maintained by the community. It relies on
TypeScript users of the various packages to create and maintain the type
definitions.

## How can I contribute?

The first step is to find a package. Either an existing package with incorrect
typings or a package with no typings defined. This is going to focus on a
package with missing definitions (updating existing definitions is a few less
steps since the necessary files exist).

How to find a package without type definitions? The best way is to stumble across
a package when working with it. It's commonly new or less popular packages that 
do not have corresponding type definitions. When adding a new package without 
type definitions, the following TypeScript error is thrown. 

```
Could not find a declaration file for module '[package]'. [package] implicitly has an 'any' type.
  Try `npm install @types/[package]` if it exists or add a new declaration (.d.ts) file containing `declare module '[package]';`
```

It prompts to install the corresponding `@types` package. So you try 
`npm install @types/[package]` but get another error.

```
> npm install @types/[package]
npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/@types%2f[package] - Not found
```

When seeing this error, it's an opportunity to contribute type definitions!

> [TypeSearch](https://microsoft.github.io/TypeSearch/) is also a great
> resource for searching through typings provided by DefinitelyTyped.

## Getting started

To get started, head to the [DefinitelyType repository](https://github.com/DefinitelyTyped/DefinitelyTyped)
and [create a fork](https://help.github.com/en/articles/fork-a-repo).

Clone the fork locally and setup the project.

```
git clone git@github.com:username/DefinitelyTyped.git
cd DefinitelyTyped
npm install
```

## Creating type definitions

Recently, I was working with [`loadable-components`](https://github.com/smooth-code/loadable-components)
and specifically the [`@loadable/webpack-plugin`](https://www.npmjs.com/package/@loadable/webpack-plugin).

At the time of writing, it did not have typings so the remainder will use this
package as a specific example. To get started, the [`dts-gen`](https://github.com/microsoft/dts-gen)
tool can be used to generate the scaffolding for the type definitions.

> Since this is a scoped package, it has a naming exception as outlined in
> the [README](https://github.com/DefinitelyTyped/DefinitelyTyped#what-about-scoped-packages).
> The types package will be named `loadable__webpack-plugin` since @types itself
> is a scoped package.

```
npx dts-gen --dt --name loadable__webpack-plugin --template module
```

This will output the following four files:

1. **`types/loadable__webpack-plugin/index.d.ts`**

```typescript
// Type definitions for @loadable/webpack-plugin 5.7
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
```

2. **`types/loadable__webpack-plugin/loadable__webpack-plugin-tests.ts`**

_(no content)_

3. **`types/loadable__webpack-plugin/tsconfig.json`**

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "lib": ["es6"],
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictFunctionTypes": true,
    "strictNullChecks": true,
    "baseUrl": "../",
    "typeRoots": ["../"],
    "types": [],
    "noEmit": true,
    "forceConsistentCasingInFileNames": true
  },
  "files": ["index.d.ts", "loadable__webpack-plugin-tests.ts"]
}
```

4. **`types/loadable__webpack-plugin/tslint.json`**

```json
{ "extends": "dtslint/dt.json" }
```

This is all the setup needed to get started. Now to start filling it in.
Generally, the `tsconfig.json` and `tslint.json` shouldn't be modified (unless
there's some exception). The main focus is on `index.d.ts` and the associated
test file. As mentioned earlier, this example is a scoped package so there is
an exception that requires modifying the `tsconfig.json` to properly test
this package.

```json{4-6}
{
  "compilerOptions": {
    // other config options...
    "paths": {
      "@loadable/webpack-plugin": ["loadable__webpack-plugin"]
    }
  }
}
```

Since the API already exists, it's usually easiest to copy examples from the
documentation in the test file and use a test driven approach to create the types.
For example, copying [examples from the documentation](https://www.smooth-code.com/open-source/loadable-components/docs/api-loadable-webpack-plugin/) and then verifying by 
[looking directly at the source](https://github.com/smooth-code/loadable-components/blob/master/packages/webpack-plugin/src/index.js)
is usually a good approach to building up test cases.

```typescript
import LoadablePlugin from "@loadable/webpack-plugin";
import { Configuration } from "webpack";

let config: Configuration = {
  plugins: [new LoadablePlugin()]
};

config = {
  plugins: [
    new LoadablePlugin({
      filename: "stats.json",
      writeToDisk: true,
      outputAsset: false
    })
  ]
};

config = {
  plugins: [new LoadablePlugin({ writeToDisk: { filename: "stats.json" } })]
};
```

```typescript
import * as webpack from "webpack";

interface PluginOptions {
  /**
   * The stats filename.
   *
   * @default loadable-stats.json
   */
  filename?: string;

  /**
   * Always write stats file to disk.
   *
   * @default false
   */
  writeToDisk?: boolean | { filename: string };

  /**
   * @default true
   */
  outputAsset?: boolean;
}

declare class LoadablePlugin extends webpack.Plugin {
  constructor(options?: PluginOptions);
}

export default LoadablePlugin;
```

`npm run lint loadable__webpack-plugin`

```
gco -b add-types
git add .
gcmsg "Add types for the @loadable/webpack-plugin package"
```

https://github.com/DefinitelyTyped/DefinitelyTyped/pull/38397