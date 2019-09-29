---
date: 2019-09-29T09:00:00.000Z
title: "Check for missing dependencies with yarn and webpack"
description: "A plugin to check if there are missing or incorrect packages installed with yarn as a webpack plugin"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Steven Wright"
tags:
  - webpack plugin
  - yarn check
  - yarn install
  - typescript errors
---

When working in a codebase with a large number of contributors it's likely
npm packages will be getting added or upgraded over time. The next time
someone else on the team pulls those changes they may forget to run
`yarn install`. They start up webpack _(assuming that's the build tool of choice)_
or maybe never restarted it when switching between git branches. This might
result in a webpack build error with something like the following.

```
ERROR in ./src/index.ts
Module not found: Error: Can't resolve 'lodash'.
 @ ./src/index.ts
```

However, this is probably one of the easier ones to understand that a package
is probably missing. If using TypeScript others might look like one of the
following.

```
./src/index.ts
      TS2554: Expected 1-2 arguments, but got 3.
```

```
TS7016: Could not find a declaration file for module 'lodash'.
'node_modules/lodash/lodash.js' implicitly has an 'any' type.
```

These are only a small sample of many possible errors that are all the result
of either missing or incorrect verions (due to breaking changes). If you don't
spend a lot of time in the JavaScript ecosystem or aren't making any related
frontend changes then things should just work without cryptic error messages.

## A webpack plugin to verify packages

The intent of the [`yarn-check-webpack-plugin`](https://github.com/skovy/yarn-check-webpack-plugin)
is to help solve this issue. It can be added to the webpack configuration as a
plugin to run during each build and will print warnings with a prompt to
run the proper command to install missing packages.

There was the [`npm-install-webpack-plugin`](https://github.com/webpack-contrib/npm-install-webpack-plugin)
that could automatically install dependencies with `npm` but it 
[doesn't support webpack 4](https://github.com/webpack-contrib/npm-install-webpack-plugin/issues/122).

This approach is [similar to how webpacker](https://github.com/rails/webpacker/blob/8845f37bb038ad0adff813326a7d6a034b9b9a81/lib/webpacker/railtie.rb#L16-L51)
handles outdated packages.

## Conclusion

Have you ran into cryptic errors with webpack that are fixed with a `yarn install`?
Give the [`yarn-check-webpack-plugin`](https://github.com/skovy/yarn-check-webpack-plugin)
a shot and [let me know if you have any feedback](https://github.com/skovy/yarn-check-webpack-plugin/issues/new)!
