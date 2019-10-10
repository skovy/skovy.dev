---
date: 2019-10-09T00:11:00.000Z
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
I learned about [`jscodeshift`](https://github.com/facebook/jscodeshift), a
JavaScript codemod toolkit which is used to perform the React codemods.
It's a powerful tool when needing to make large sweeping changes that
can be done "mechanically" following a set of rules.

## The Problem

I didn't immediately have a use case for `jscodeshift`. However, in the
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
implicit string approach there were thousands of icons referenced this way.

One option was to globally search for references of this component, manually convert
`"coffee"` to `faCoffee`, add the import, deal with de-duplicating imports,
handling icons with the same name being imported from multiple icon packages, and
a number of other scenarios. This would likely take days and inevitably result 
in some error (maybe switching one icon for another).

Since this was a very repetitive problem with a well defined set of rules,
creating a custom transform with jscodeshift seemed like a great option.

## Getting Started

The bare minimum to get started is to define a transform. A transform is a file
where the default export is a function that accepts the file info, the jscodeshift
API, and any custom options.

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

```bash
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

```bash
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

```bash
# The transform file
transforms/implicit-icons-to-explicit-imports.ts

# The test file
transforms/__tests__/implicit-icons-to-explicit-imports.ts

# The input/output pairing to run the transform against
transforms/__testfixtures__/implicit-icons-to-explicit-imports/basic.input.tsx
transforms/__testfixtures__/implicit-icons-to-explicit-imports/basic.output.tsx
```

For more advanced testing examples, [see the tests for this transform](https://github.com/skovy/font-awesome-codemod/blob/master/transforms/__tests__/implicit-icons-to-explicit-imports.ts)
or the [React codemods](https://github.com/reactjs/react-codemod/tree/master/transforms/__tests__).

Now, as changes are made to the transform they can be easily tested to validate
the input and expected output.

## Filling in the transform

The first thing to be aware of when making a transform is that jscodeshift
is actually built on top of several other tools. This is an important detail
because it may be helpful to reference their documentation as well.

[`recast`](https://github.com/benjamn/recast) is used for transforming the code
from raw text into something that can be worked with programmatically. This
tree structure that represents the parsed code is commonly referred to as an 
[abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (AST).

This package itself depends on [`ast-types`](https://github.com/benjamn/ast-types)
to represent the individual nodes and types within this abstract syntax tree.

It's not necessary to look at either of these packages but it can be helpful
depending on the complexity of a transform.

To start, let's use the example from above. We know we have a component named
`FontAwesomeIcon` with a prop named `icon`.

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

> The component name and prop name are hard-coded in this example, but the
> [`font-awesome-codemod`](https://github.com/skovy/font-awesome-codemod) allows
> passing options to define these.

Unfortunately, jscodeshift doesn't have great documentation and requires a bit
of "source-diving" to find the functions you may need. It offers the
[`findJSXElements`](https://github.com/facebook/jscodeshift/blob/a268d0d1b96624427dddc2f1f4e65837b105031b/src/collections/JSXElement.js#L29-L38)
which will find all the JSXElements filtered by the name passed. This will
give us the correct component(s), but the `FontAwesomeIcon` component could have
a set of other props.

To narrow down to only the prop we care about, we can use the
[`find`](https://github.com/facebook/jscodeshift/blob/d63aa8486c2099a65b071e7c86e9dccdb8577d80/src/collections/Node.js#L25-L57)
function to find nodes of a specific type. The specific type of the node we're
looking for is a
[`JSXAttribute`](https://github.com/benjamn/ast-types/blob/0b6bc6dec16203076e3a0ffca0157c9215ec14f9/gen/namedTypes.ts#L527-L531).
This type is [defined in `ast-types`](https://github.com/benjamn/ast-types/blob/28c73fa503f070512a89e7cd1bc5ed97eacf173b/def/jsx.ts#L15-L23).

But how do you know it's `JSXAttribute` in the first place?
[astexplorer.net](https://astexplorer.net) is an invaluable resource to
understand the AST that represents a piece of code.

![Example of AST explorer](./images/ast-explorer-example.png)

This screenshot is an example of what the above code would look like if pasted
into the AST explorer. This is how we know to narrow down to only the 
`JSXAttribute` nodes.

Looking closer at the AST, we specifically want to filter to nodes that have
a name of `icon` and a value that's a string. Arrays (eg: `icon={["far", "user"]}`)
will be handled later. Variables (eg: `icon={someVar}`) will log an error since
these cannot be easily automatically updated.

Now, there's only have a set of `icon` props with a string value. The `icon` prop
doesn't need to change, only it's value. This can be furthur narrowed by finding
only nodes of type `StringLiteral`. Finally, replacing this string value with
an actual icon definition that will eventually be imported. This can be done
using the [`replaceWith`](https://github.com/facebook/jscodeshift/blob/d63aa8486c2099a65b071e7c86e9dccdb8577d80/src/collections/Node.js#L131-L145)
function. The function provided to `replaceWith` is executed for every node and the node is
replaced with the functions return value. This function creates a `JSXExpression`
node to replace the `StringLiteral`.

You might notice `const { node } = nodePath;`. This is necessary because each 
node is also wrapped in a [`NodePath`](https://github.com/benjamn/ast-types#nodepath). 
This isn't reflected in the AST explorer but an important thing to be aware of
when traversing the AST.

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

This will now convert a given input file with any `FontAwesomeIcon` components
and a string `icon` value to a JSX expression. However, this is now producing 
invalid code because `faMinusCircle` is not defined.

## Adding an import

To make this example complete, there needs to be an import for the newly
defined `faMinusCircle` icon. Let's expand on the existing sample.

```typescript{9,28-34}
import { Transform } from "jscodeshift";
import { camelCase } from "change-case";

const transform: Transform = (file, api, options) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  const FIRST_IMPORT = root.find(j.ImportDeclaration).at(0);

  root
    .findJSXElements("FontAwesomeIcon")
    .find(j.JSXAttribute, {
      name: {
        type: "JSXIdentifier",
        name: "icon"
      },
      value: {
        type: "StringLiteral"
      }
    })
    .find(j.StringLiteral)
    .replaceWith(nodePath => {
      const { node } = nodePath;

      const iconDefinition = camelCase(`fa-${node.value}`);

      FIRST_IMPORT.insertAfter(
        j.importDeclaration(
          [j.importSpecifier(j.identifier(iconDefinition))],
          j.stringLiteral("@fortawesome/free-solid-svg-icons"),
          "value"
        )
      );

      return j.jsxExpressionContainer(j.identifier(iconDefinition));
    });

  return root.toSource();
};

export default transform;
```

To start, `FIRST_IMPORT` is defined as a reference to the first import in the 
file. This isn't the most robust approach but it's sufficient for this example
(and most other cases). Now, there's a place to insert the import. A new
import node can be added with the 
[`insertAfter`](https://github.com/facebook/jscodeshift/blob/d63aa8486c2099a65b071e7c86e9dccdb8577d80/src/collections/Node.js#L161-L173) 
function.

The import is constructed to import the icon definition specifier that was 
generated from the `"@fortawesome/free-solid-svg-icons"` package. 

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
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = () => {
  return <FontAwesomeIcon icon={faMinusCircle} />;
};
```

All the basic scenarios for solid icons are now handled. However, there are 
other icon packages and these can be used with an array syntax. For example,
`icon={['far', 'circle']}` will use the regular circle icon (instead of solid).

## Handling arrays

To work through this case, let's use this example.

```typescript
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = () => {
  return (
    <div>
      <FontAwesomeIcon icon={["far", "envelope-open"]} />
      <FontAwesomeIcon icon={["fas", "envelope"]} />
      <FontAwesomeIcon icon={["fab", "twitter"]} />
    </div>
  );
};
```

In order to simplify the transform, this example won't contain the logic for
handling string icons and only handle array icons.

```typescript
import { Transform } from "jscodeshift";
import { camelCase } from "change-case";

const PACKAGES = {
  fab: "@fortawesome/free-brands-svg-icons",
  far: "@fortawesome/free-regular-svg-icons",
  fas: "@fortawesome/free-solid-svg-icons"
};

const transform: Transform = (file, api, options) => {
  // Alias the jscodeshift API for ease of use.
  const j = api.jscodeshift;

  // Convert the entire file source into a collection of nodes paths.
  const root = j(file.source);

  const FIRST_IMPORT = root.find(j.ImportDeclaration).at(0);

  root
    .findJSXElements("FontAwesomeIcon")
    .find(j.JSXAttribute, {
      name: {
        type: "JSXIdentifier",
        name: "icon"
      },
      value: {
        type: "JSXExpressionContainer",
        expression: {
          type: "ArrayExpression"
        }
      }
    })
    .find(j.ArrayExpression)
    .filter(nodePath => {
      const [iconType, iconName] = nodePath.node.elements;

      if (
        iconType.type !== "StringLiteral" ||
        iconName.type !== "StringLiteral"
      ) {
        console.error(`...`);

        return false;
      } else {
        return true;
      }
    })
    .replaceWith(nodePath => {
      const [iconType, iconName] = nodePath.node.elements;

      // This check has already been performed but it's necessary for TS to
      // properly narrow the types. This `return` code path should never be hit.
      if (
        iconType.type !== "StringLiteral" ||
        iconName.type !== "StringLiteral"
      ) {
        return;
      }

      const iconDefinition = camelCase(`fa-${iconName.value}`);

      FIRST_IMPORT.insertAfter(
        j.importDeclaration(
          [j.importSpecifier(j.identifier(iconDefinition))],
          j.stringLiteral(PACKAGES[iconType.value]),
          "value"
        )
      );

      const newNode = j.identifier(iconDefinition);

      return newNode;
    });

  return root.toSource();
};

export default transform;
```

The first difference is when finding the `icon` prop. Instead of looking for
a `StringLiteral`, we're now looking for an `ArrayExpression`. However, any
array can't be handled, only an array with two string values. For example,
if either the font or icon name were a variable that couldn't be handled.
Instead of silently skipping, an error can be logged to notify the user that
it was skipped.

Now, there's only icon props with an array value with two string literals. This
icon definition can be referenced in the same fashion as above, but now the
package name needs to be referenced dynamically since any font could be used.
This is achieved by looking up the import name for the given font in the
`PACKAGES` constant.

This setup should now handle the case of an `icon` prop with an array of two
string values.

**Input:**

```typescript
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = () => {
  return (
    <div>
      <FontAwesomeIcon icon={["far", "envelope-open"]} />
      <FontAwesomeIcon icon={["fas", "envelope"]} />
      <FontAwesomeIcon icon={["fab", "twitter"]} />
    </div>
  );
};
```

**Output:**

```typescript
import * as React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEnvelopeOpen} />
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  );
};
```

The transform can now handle most usages of the `FontAwesomeIcon` with either
the string or array reference for multiple font packages. However, this process
of working through the different cases could go on for a while. After 
understanding the underlying packages, documentation and tools like the AST
explorer most of these problems can be solved by rearranging these fundamental
pieces.

## Additional considerations

In some scenarios, the above examples and transform may be sufficient. However, 
I was surprised by the variety of usages and edge cases in a larger codebase.

First, it's likely the `FontAwesomeIcon` is wrapped by another component
and/or the `icon` prop is aliased or passed along from a parent to a child
component. To handle these cases, the jscodeshift transform accepts options
via the command line and those are passed as an object to the transform as the
third argument. To solve this case, `--componentName` and `--iconProp` can be
provided and replace the hard-coded usages in the above transforms.

One more slightly complex case for the component name are components that are
referenced via [dot notation](/using-component-dot-notation-with-typescript-to-create-a-set-of-components).
For example, `<Dot.Notation icon="user" />`. This requires a bit more complex
AST traversal but 
[can also be handled](https://github.com/skovy/font-awesome-codemod/blob/a7676bea53e1f0b30025373a7ae1398acc6b48fb/transforms/implicit-icons-to-explicit-imports.ts#L101-L105).

Another edge case is that Font Awesome offers both free and pro fonts. The
`PACKAGES` constant and the transform need to also 
[account for this](https://github.com/skovy/font-awesome-codemod/blob/a7676bea53e1f0b30025373a7ae1398acc6b48fb/transforms/implicit-icons-to-explicit-imports.ts#L29-L41). 
This was again done with a command line option, `--type`.

Finally, one of the more complex cases was handling the various scenarios for 
imports. 

1. If the same icon was imported from different packages, it had to be aliased
to avoid a naming collision (eg: `faUser as faUserFar`).
1. If multiple icons were imported from the same package, a single import should
be used for all icons. This requires first checking for an existing import
from a package before creating a new one.
1. If the same icon was imported from the same package, it should only be imported
once. This requires checking if the icon was already imported from the same package.

All of these can be solved and are fully handled by the full transform.
The completed source code for [this example is available here](https://github.com/skovy/font-awesome-codemod).

## Conclusion

Although this was a specific example for working with Font Awesome, the 
flexibility and capabilities of jscodeshift make it a great tool to keep in mind
for the next time you may need to do a large refactoring.
It's particularly useful making well-defined, "mechanical" changes in a large
codebase. Codemods not only allow you to keep your sanity, but also reduce the risk
of small mistakes.
