---
date: 2019-10-06T00:11:00.000Z
title: "Creating a custom transform for jscodeshift"
description: "Using a jscodeshift transform to update automatically Font Awesome imports to enable tree shaking."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Sam Loyd"
tags:
  - jscodeshift
  - abstract syntax tree
  - codemod
  - font awesome
  - tree shaking
---

In recent React versions, there is a warning when using
[deprecated lifecycle methods](https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#renaming-unsafe-lifecycle-methods)
to run the [`rename-unsafe-lifecycles`](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)
codemod. This will prefix all the unsafe lifecycle methods with the appropriate
`UNSAFE_` prefix. For example, `componentWillMount` &#8594; `UNSAFE_componentWillMount`.

However, it [took](https://github.com/reactjs/react-codemod/pull/228)
[some](https://github.com/reactjs/react-codemod/pull/234)
[effort](https://github.com/reactjs/react-codemod/pull/236) to get the
[`react-codemod`](https://github.com/reactjs/react-codemod)
to work properly in a TypeScript React app. In the process of investigating,
I came across [`jscodeshift`](https://github.com/facebook/jscodeshift), a
JavaScript codemod toolkit which is used to perform the React codemods.
It's a powerful tool when needing to make large sweeping changes that
can be done mechanically following a set of rules.

## The Problem

I didn't immediately have a use case for using `jscodeshift`. However, in the
process of trying to reduce overall bundle size in an application, I ran into a
problem where every Font Awesome icon was being included in the bundle.

This was a result of importing the entire icon library for each icon set.

```typescript
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
```

The full problem and its implications can be read in
[the previous post about tree shaking Font Awesome](/tree-shaking-font-awesome/).

However, to fix this, all the "implicit" references to icons had to be made
"explicit" so webpack could properly tree shake the unused icons. That meant
that all the code that referenced string icons needed to be replaced with
an explicit import from Font Awesome.

```typescript
// Before
<FontAwesomeIcon icon="coffee" />
```

```typescript
// After
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faCoffee} />;
```

Depending on the exact number of icons being used, **this can result in a 90%+
reduction** in the amount of code from Font Awesome. After months of using the
implicit string approach there were thousands icons referenced this way.

One option was to global search references of this component, manually convert
`"coffee"` to `faCoffee`, add the import, deal with de-duplicating imports, and
handling icons with the same name being imported from multiple icon packages.
This would likely take days and inevitably result in some error (likely switching
and icon for another).

Since this was a very repetitive problem with a well defined set of rules,
creating a custom transform for jscodeshift seemed like a great option.

## Getting Started

The bare minimum to get started is to define a transform. A transform is a file
where the default export is a function that accepts the file info, the jscodeshift
API, and finally any custom options.

The transforms [can be written in TypeScript](https://github.com/facebook/jscodeshift/pull/287) which can be helpful to ensure proper usage of the jscodeshift API when first starting.

```typescript
// transforms/implicit-icons-to-explicit-imports.ts
import { Transform } from "jscodeshift";

const transform: Transform = (file, api, options) => {
  return null;
};

export default transform;
```

Now, to run and test this, the development dependencies can be added.

```sh
yarn add -D jscodeshift @types/jscodeshift
```

Then, a test file to run the transform against.

```typescript
// transforms/__testfixtures__/implicit-icons-to-explicit-imports/basic.input.tsx
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = () => {
  return <FontAwesomeIcon icon="minus-circle" />;
};
```

Finally, the transform can be ran.

```sh
yarn jscodeshift -t transforms/implicit-icons-to-explicit-imports.ts transforms/__testfixtures__/implicit-icons-to-explicit-imports/array.input.tsx --dry --print
```

The [`--dry`](https://github.com/facebook/jscodeshift#usage-cli) and
[`--print`](https://github.com/facebook/jscodeshift#usage-cli) options will run
the transform without overwriting the file and print the would-be-result to
the console instead. The command will run successfully, but it won't print
anything because the transform doesn't perform any transformations.

Before diving into the transform, it will become tedious to continue running
this command (or others) repeatedly. The jscodeshift package ships with a
useful test utility: [`defineTest`](https://github.com/facebook/jscodeshift#definetest).
This can be used with a test runner like [`jest`](https://jestjs.io/) to validate
input against the expected output for a transform.

```typescript
// transforms/__tests__/implicit-icons-to-explicit-imports.ts
import { defineTest } from "jscodeshift/dist/testUtils";

describe("implicit-icons-to-explicit-imports", () => {
  defineTest(
    __dirname,
    "implicit-icons-to-explicit-imports",
    null,
    `implicit-icons-to-explicit-imports/basic`,
    { parser: "tsx" }
  );
});
```

> This last option (`{ parser: "tsx" }`) depends on
> [an open pull request](https://github.com/facebook/jscodeshift/pull/332)
> to add support for running against TypeScript files.

The `defineTest` helpers requires a [specific directory structure](https://github.com/facebook/jscodeshift#unit-testing)
so it can find the correct files.

```sh
# The transform file
transforms/implicit-icons-to-explicit-imports.ts

# The test file
transforms/__tests__/implicit-icons-to-explicit-imports.ts

# The input/output pairing to run the transform against
transforms/__testfixtures__/implicit-icons-to-explicit-imports/basic.input.tsx
transforms/__testfixtures__/implicit-icons-to-explicit-imports/basic.output.tsx
```

Now, as changes are made to the transform they can be easily tested to validate
the input and expected output.

For more advanced testing examples, [see the tests for this transform](https://github.com/skovy/font-awesome-codemod/blob/master/transforms/__tests__/implicit-icons-to-explicit-imports.ts)
or the [React codemods](https://github.com/reactjs/react-codemod/tree/master/transforms/__tests__).

## Creating the transform

```typescript
import { Transform } from "jscodeshift";
import { camelCase } from "change-case";

const transform: Transform = (file, api, options) => {
  // Alias the jscodeshift API for ease of use.
  const j = api.jscodeshift;

  // Convert the entire file source into a collection of nodes paths.
  const root = j(file.source);

  root
    // Find all JSX elements with the name FontAwesomeIcon...
    .findJSXElements("FontAwesomeIcon")
    // with an `icon` prop with a string value...
    .find(j.JSXAttribute, {
      name: {
        type: "JSXIdentifier",
        name: "icon"
      },
      value: {
        type: "StringLiteral"
      }
    })
    // narrowed down to that string value (eg: `user`)...
    .find(j.StringLiteral)
    // and replace the existing node...
    .replaceWith(nodePath => {
      const { node } = nodePath;

      // eg: "minus-circle" -> "faMinusCircle"
      const iconDefinition = camelCase(`fa-${node.value}`);

      // with a new JSX expression with the icon definition.
      return j.jsxExpressionContainer(j.identifier(iconDefinition));
    });

  return root.toSource();
};

export default transform;
```

This will now convert a given input with a string `icon` value to a JSX expression.

**Input:**

```typescript
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = () => {
  return <FontAwesomeIcon icon="minus-circle" />;
};
```

**Output:**

```typescript
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = () => {
  return <FontAwesomeIcon icon={faMinusCircle} />;
};
```

However, this is now producing invalid code because `faMinusCircle` is not defined.

## Conclusion

The completed source code for [this example is available here](https://github.com/skovy/font-awesome-codemod).
