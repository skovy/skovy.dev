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
can be done mechanically.
