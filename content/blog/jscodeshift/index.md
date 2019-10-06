---
date: 2019-10-06T00:11:00.000Z
title: "Creating a custom transform with jscodeshift"
description: "Using a custom jscodeshift transform to update Font Awesome imports to enable tree shaking."
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
[deprecated lifecyle methods](https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#renaming-unsafe-lifecycle-methods)
to run the [`rename-unsafe-lifecycles`](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)
codemod. This will prefix all the unsafe lifecyle methods with the appropriate
`UNSAFE_` prefix.

However, it [took](https://github.com/reactjs/react-codemod/pull/228)
[some](https://github.com/reactjs/react-codemod/pull/234)
[effort](https://github.com/reactjs/react-codemod/pull/236) to get the
[`react-codemod`](https://github.com/reactjs/react-codemod)
to work properly in a TypeScript React app. In the process of investigating,
I came across [`jscodeshift`](https://github.com/facebook/jscodeshift), a
JavaScript codemod toolkit which is used to implement the React codemods.
It's a shockingly powerful tool when needing to make large sweeping changes that
can be done mechanically following a set of rules.

## The Problem

I didn't immediately have a use case for using `jscodeshift`. However, in the
process of trying to reduce overall bundle size [I ran into a problem](/tree-shaking-font-awesome/)
where every Font Awesome icon was being included in the bundle.

However, to fix this, all the "implicit" references to icons had to be made
"explicit" so webpack could properly tree shake the unused icons. That meant
that all the code that referenced string icons needed to be replaced with
an import from Font Awesome.

```typescript
// Before: implicit usage

<FontAwesomeIcon icon="coffee" />
```

```typescript
// After: explicit usage

import { faCoffee } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faCoffee} />;
```

Depending on the exact number of icons being used, **this can result in a 90%+
reduction** in the amount of code from Font Awesome.
