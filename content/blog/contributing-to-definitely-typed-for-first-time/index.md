---
date: 2019-09-28T09:00:00.000Z
title: "Contributing to DefinitelyTyped for the first time"
description: "A guide to add missing type definitions to the DefinitelyTyped repository"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Aaron Burden"
tags:
  - typescript
  - definitely typed
  - "@types"
  - first time contributing
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
It adds a lot of overhead for maintainers; there are the TypeScript-specific issues to triage,
the effort to effectively translate the entire public API to type definitions,
and the overhead of learning the intricacies of all the TypeScript language features.
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

The first step is to find a package, either an existing package with incorrect
typings or a package with no typings defined. This post is going to focus on a
package with missing definitions (because updating existing definitions is a
few less steps since the necessary files exist).

### How to find a package without type definitions?

The best way is to stumble across a package when working with it. It's commonly
new or less popular packages that do not have corresponding type definitions.
When adding a new package without type definitions, the following TypeScript
error is thrown.

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

## Generating the scaffolding

Recently, I was working with [`loadable-components`](https://github.com/smooth-code/loadable-components)
and specifically the [`@loadable/webpack-plugin`](https://www.npmjs.com/package/@loadable/webpack-plugin)
package.

At the time of writing, it did not have typings so the remainder of this post will use this
package as a specific example. To get started, the [`dts-gen`](https://github.com/microsoft/dts-gen)
tool can be used to generate the scaffolding for the type definitions.

```
npx dts-gen --dt --name loadable__webpack-plugin --template module
```

> Since this is a scoped package, it has a naming exception as outlined in
> the [README](https://github.com/DefinitelyTyped/DefinitelyTyped#what-about-scoped-packages).
> The types package will be named `loadable__webpack-plugin` since `@types` itself
> is a scoped package.

This will output the following four files:

1. **`types/loadable__webpack-plugin/index.d.ts`**

This is where the type definitions will be defined.

```typescript
// Type definitions for @loadable/webpack-plugin 5.7
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
```

2. **`types/loadable__webpack-plugin/loadable__webpack-plugin-tests.ts`**

This is where the type definitions will be tested. It won't _run_ the code but
type-checks it to verify the defined definitions work as expected with real
use cases.

_(empty file)_

3. **`types/loadable__webpack-plugin/tsconfig.json`**

The TypeScript configuration for these type definitions. Usually, the default
configuration produced by `dts-gen` rarely needs to be changed.

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

Similar to above, the TSLint configuration output by `dts-gen` used to lint
the type definitions rarely needs to be changed.

```json
{ "extends": "dtslint/dt.json" }
```

## Defining the type definitions

This is all the setup needed to get started. Now to start filling it in.
Generally, the `tsconfig.json` and `tslint.json` shouldn't be modified (unless
there's some exception). The main focus is on `index.d.ts` and the associated
test file.

However, as mentioned earlier, since this example is a scoped package
it is an example of one of these exceptions. It requires modifying the
`tsconfig.json` to properly test this package since the naming doesn't match
the actual package name exactly.

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

Since the package and public API already exists, it's usually easiest to copy examples from the
documentation into the test file and use a test driven (type driven?) approach to create the types.
For example, copying [examples from the documentation](https://www.smooth-code.com/open-source/loadable-components/docs/api-loadable-webpack-plugin/) and then verifying by
[looking directly at the source](https://github.com/smooth-code/loadable-components/blob/cafca143bc90722775628c61629be47fb4b04cd5/packages/webpack-plugin/src/index.js)
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

With this specific example, since it's expected to be used as a
[webpack plugin](https://webpack.js.org/concepts/plugins/) it can be a good idea
to not only test this package's API but to also test it in the proper context
as a webpack plugin. Without this, it could be easy to forget the
`extends webpack.Plugin` which is important since the `plugins` property is
typed as `Plugin[]` and would throw a type error if it doesn't implement the
proper interface.

Now that there are some basic test cases, time to fill in the actual type
definitions! The following is what the types could look like for this package
based on the documentation and reading the source.

```typescript
// Type definitions for @loadable/webpack-plugin 5.7
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

## Opening a pull request

The tests and types look good, let's verify there are no linting issues.

```
npm run lint loadable__webpack-plugin
```

Additionally, verify there are no test issues.

```
npm run test
```

If either of these fail, those issues will need to be fixed.

Finally, if it all looks good, create a new branch, commit the changes
and push to your fork. Open a pull request to the
[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
repository and verify all the checks pass.

```
git checkout -b add-loadable-webpack-plugin-types
git add .
git commit -m "Add types for the @loadable/webpack-plugin package"
```

For this example,
**[here is the resulting pull request for reference](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/38397)!**

You may notice the first commit actually failed with the error:
`loadable__webpack-plugin depends on webpack but has a lower required TypeScript version`.
This is because the definitions depend on `webpack` to extend the `Plugin` type.
It defines it's minimum TypeScript version as `2.3` with a comment.

This can be [fixed by adding the same minimum TypeScript version](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/38397/commits/138abec16eb157adebb76bc98d4e2c1d8594d690)
to the definitions for this package.

```typescript{3}
// ... (truncated)
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as webpack from "webpack";
// ... (truncated)
```

## Conclusion

The TypeScript ecosystem depends on the community to create and maintain type
definitions. The next time you run into missing or incorrect types hopefully
you're now ready to open a pull request to add new types or a fix for an
existing package!

This didn't touch on every possible scenario or issue so [refer to the README](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md)
for more details if you have questions or let me know on Twitter.
