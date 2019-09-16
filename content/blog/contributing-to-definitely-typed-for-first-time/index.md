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
TypeScript. This means that the source can be used to output type definitions that
are included in the package and typically very accurate.

However, there are also many packages that do not ship with type definitions,
such as [`react`](https://www.npmjs.com/package/react). It's not a reasonable
or expectation for all packages to define type definitions.
It adds a lot of overhead for maintainers to deal with TypeScript specific issues,
requires effectively re-writing definitions for the entire public API, and
understand the intricacies of all the TypeScript features. So how do these
packages provide type definitions for the community?

TypeScript has a great community around providing type definitions for packages
that do not ship with typings. All of these definitions live in the
[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
repository on GitHub and are published to npm under the `@types` scope
(eg: `@types/react`) to install alongside the corresponding packages. All of
these definitions are created and maintained by the community.

## Where to start?

The first step is to find a package. Either an existing package with incorrect
typings or a package with no typings defined. This is going to focus on a
package with missing definitions (updating definitions will be a
few less steps since they already exist).

When adding a new package without type definitions, this error is common. It
prompts to install the corresponding `@types` package.

```
Could not find a declaration file for module '[package]'. [package] implicitly has an 'any' type.
  Try `npm install @types/[package]` if it exists or add a new declaration (.d.ts) file containing `declare module '[package]';`
```

So you try `npm install @types/[package]` but get another error.

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
tool can be used to generate the scaffolding.

> Since this is a scoped package, it has a naming exception as outlined in
> the [README](https://github.com/DefinitelyTyped/DefinitelyTyped#what-about-scoped-packages).
> The types package should be named `loadable__webpack-plugin`

```
npx dts-gen --dt --name loadable__webpack-plugin --template module
```

This will output the following four files:

**`types/loadable__webpack-plugin/index.d.ts`**

```typescript
// Type definitions for @loadable/webpack-plugin 5.7
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
```

**`types/loadable__webpack-plugin/loadable__webpack-plugin-tests.ts`**

_(no content)_

**`types/loadable__webpack-plugin/tsconfig.json`**

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

**`types/loadable__webpack-plugin/tslint.json`**

```json
{ "extends": "dtslint/dt.json" }
```

Since the API already exists, it's usually easiest to copy examples from the
documentation in the test file and use a test driven approach to create the types.

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