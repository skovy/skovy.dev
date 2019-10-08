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
