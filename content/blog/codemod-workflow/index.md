---
date: 2020-11-30T10:00:00.000Z
title: "Codemod Workflow"
description: "A walkthrough of my workflow for creating custom codemods with jscodeshift"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Jens Johnsson"
tags:
  - "codemod"
  - "jscodeshift"
  - "ast"
---

Since originally writing about
[creating custom transforms with jscodeshift](/jscodeshift-custom-transform)
I've had the opportunity to write a dozen or so more custom codemods.
In the process, I've settled into a standard workflow when approaching
new problems that a custom codemod can solve. On the surface, codemods
can seem daunting, particularly dealing with the abstract syntax tree.
But with the right tools, they can become much easier.

## Workflow

### Auditing versus Transforming

The first question I ask is whether I'm trying to audit code, or
if I'm trying to transform code. A code audit is for understanding
the current state of the code without making changes. This is useful
to understand things like how many times a function, component, or 
option is used. On the other hand, a code transform is for making changes
to existing code. This is useful for things like renaming a function,
component, or option.

For example, say there is a function. If you'd like to know how
many times that function is used, or which arguments are passed
this is an audit. If you'd like to rename the function, or
change the order of arguments, this is a transform.

For code audits, I reach for [`@babel/parser`](https://babeljs.io/docs/en/babel-parser)
and [`@babel/traverse`](https://babeljs.io/docs/en/babel-traverse).
This approach requires combining a few packages, but is more flexible
when keeping track of things _across_ files.

For code transforms, I reach for [`jscodeshift`](https://github.com/facebook/jscodeshift).
This approach is nice because it's an all-in-one tool and
doesn't require pulling in any additional packages but means
is specialized only for transforming code and not as good for
other tasks like code audits.

### Understanding the Abstract Syntax Tree

With either approach, the first step is to understand the code
you're working with. Both tools convert a string of code into
an abstract syntax tree (AST). This is a fancy name for creating
a tree data structure with each node in the tree representing a
specific piece of the code. 

For example, the following code:

```js
const a = 1, b = 2;
```

Produces a structure roughly like this:

![Example Abstract Syntax Tree](./images/basic-ast.png)

- [astexplorer.net](https://astexplorer.net)
- [`@types/jscodeshift`](https://www.npmjs.com/package/@types/jscodeshift)

### Writing the code



## Examples

Now that the steps have been outlined, what does this look like in practice?

### Code Audit

Let's start with a code audit.

### Code Transform