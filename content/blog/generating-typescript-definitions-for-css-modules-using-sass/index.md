---
date: 2019-02-10T20:06:52.859Z
lastUpdated: 2020-11-07T08:00:00.000Z
title: "Generating TypeScript definitions for CSS Modules using SASS"
description: "Tooling and approaches for integrating CSS Modules, SASS, and TypeScript to add additional type-safety when importing the styles."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by ariel sion"
tags:
  - react
  - css modules
  - typescript
  - sass
---

CSS Modules can be [a great tool for maintaining styles](/writing-maintainable-styles-and-components-with-css-modules)
in a large codebase. It works much like vanilla CSS with the primary difference
being all class names are local by default. This works well in modern
component-based architectures where a single style module can live alongside the
component that relies on those styles.

Since a CSS Module is vanilla CSS by default, it doesn't introduce a steep
learning curve. But in a large codebase, it's not desirable to repeatedly define
specific values (such as color hexes), especially if using a
[design system](/design-system-principles). There are
[approaches specific to CSS Modules for adding support for variables](https://github.com/css-modules/css-modules/blob/master/docs/values-variables.md),
but SASS is a reliable technology to add support not only for variables but many
other useful features.

Beyond styling an application, TypeScript can be a great tool for maintaining a
large codebase in general. Providing type definitions for functions or components
can [make the APIs more discoverable](/using-component-dot-notation-with-typescript-to-create-a-set-of-components)
to newcomers or help prevent improper usage.

CSS Modules and TypeScript can each be used on their own. What about
integrating CSS Modules, SASS and TypeScript to add type-safety around the usage
of the styles?

## Tooling

There are many tools that exist in the world of CSS Modules and TypeScript.
Before reaching for additional tooling, it's worth evaluating
what's possible with only TypeScript.

The easiest way is to not integrate the two together. By using `require` instead
of `import` the styles object will be typed as `any` offering no type-safety.
This is ideal for moving quickly but doesn't leverage TypeScript at all.

```typescript
const styles = require("./styles.css");
```

Adding full type-safety requires defining `.d.ts` (type definition) files for
the corresponding styles. This can be done by manually creating these files and
defining all of the corresponding class names. It's tedious, duplicates work,
and is error prone which defeats the purpose of type-safety. This is
where additional tooling can bring an advantage.

Instead of defining every individual class name, there is an intermediate solution
that provides some type-safety. This is done by defining a module definition
that applies to all style imports. It won't catch invalid class names or provide
the typeahead but it is an improvement over `any`.

For example, a file named `css-modules.d.ts` would achieve this with the
following definition:

```typescript
declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
```

It prevents invalid usages such as `styles.customClass.somethingElse` since
`customClass` is a `string` but it doesn't validate if `customClass` actually
exists.

What about adding full type-safety with additional tooling?

### `typings-for-css-modules-loader`

[typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader),
is a drop-in replacement for `css-loader` (necessary for CSS Modules) to
automatically generate the type definitions for your CSS Modules in webpack.
This means it can be used with any CSS preprocessor such as SASS.

This [post is a good overview](https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10) to generate type definitions
using both CSS Modules and TypeScript with webpack.

This specific package has since been deprecated, but there are now several
maintained forks and alternatives available:

- [TeamSupercell/typings-for-css-modules-loader](https://github.com/TeamSupercell/typings-for-css-modules-loader)
- [dropbox/typed-css-modules-webpack-plugin](https://github.com/dropbox/typed-css-modules-webpack-plugin)
- [Megaputer/dts-css-modules-loader](https://github.com/Megaputer/dts-css-modules-loader)

What if you're not using webpack?

### `typed-css-modules`

[typed-css-modules](https://github.com/Quramy/typed-css-modules) is a command-line interface (CLI) for generating type definitions for CSS Modules. After installing the package, it can be run outside of webpack. This is useful if you're not using webpack, experimenting with adding type definitions to see what it would look like, or want to run it in one-off situations.

But what if you're using SASS?

### `typed-scss-modules`

The [typed-scss-modules](https://github.com/skovy/typed-scss-modules) package is
heavily inspired by `typed-css-modules`. It's a CLI that generates type
definitions focused on supporting CSS Modules written using SASS.

![Example of writing a SASS CSS Module while generating the corresponding type definitions.](./images/typed-scss-modules-output.gif)
<span class="image-caption">
Example of writing a SASS CSS Module while generating the corresponding type definitions.
</span>

#### Getting started

Install the package as a development dependency since the type definitions should only need to be generated in development:

```
yarn add -D typed-scss-modules
```

Now, the types can be generated by providing the directory (_or glob pattern_):

```
yarn tsm src/
```

#### Listing differences

This option is inspired by Prettier's [list-different](https://prettier.io/docs/en/cli.html#list-different) option which is particularly useful in Continuous Integration to ensure all proposed code changes adhere to the proper formatting. Similarly, in this case, if a type definition doesn't match what would be automatically generated, the command will fail and list the files that are invalid.

```
yarn tsm src/ --listDifferent
```

Listing the differences is only one of many options. See [the `README` for a full list](https://github.com/skovy/typed-scss-modules#readme) of options for changing the naming convention, the type definition format, handling aliases, included search paths and other options.

## 📚 Summary

There is a spectrum for how CSS Modules can be integrated with TypeScript, ranging
from not at all, to perfect type-safety. Depending on the specific use case,
existing codebase, and other technologies being used there are many tools that
can be used that fit the different needs.

<div class="notice">
Check out the <a href="http://www.rubberducking.fm">Rubber Ducking podcast</a> for
more content on topics like this, React, TypeScript, JavaScript, or Design
Systems.
</div>
