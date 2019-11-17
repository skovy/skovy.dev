---
date: 2019-11-17T00:11:00.000Z
title: "React Concurrent Mode with TypeScript"
description: "Getting started with React Concurrent Mode and Suspense with TypeScript."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Gwen Ong on Unsplash"
tags:
  - react concurrent mode
  - react suspense
  - typescript
  - type definitions
---

An experimental release of React Concurrent Mode was
[recently shared at React Conf](https://youtu.be/uXEEL9mrkAQ) with new documentation
that [introduces Concurrent Mode](https://reactjs.org/docs/concurrent-mode-intro.html)
along with additional details on using suspense to fetch data and other UI patterns.

Personally, when experimenting with new things I enjoy having the guardrails of TypeScript's static type-safety. Since Concurrent Mode is still experimental,
the third-party [`@types/react`](https://www.npmjs.com/package/@types/react)
don't support the new APIs (as of writing) out-of-the-box on a fresh install.

The remainder of this post assumes you've watched or read the above links and
you're now looking to start experimenting with React Concurrent Mode but with
the type-safety of TypeScript!

## Getting Started

The easiest way to get started with a React TypeScript app is to use
[`create-react-app`](https://create-react-app.dev/docs/adding-typescript/).

```bash
# Create a new React TypeScript app
npx create-react-app react-concurrent-mode-typescript-example --typescript

# Check out the new project
cd react-concurrent-mode-typescript-example
```

This will still create an app in "Legacy Mode". There are a few changes and
additions to opt-in to Concurrent Mode. These next steps and code are based
off this post on
["How to Enable React Concurrent Mode"](https://kentcdodds.com/blog/how-to-enable-react-concurrent-mode).

```bash
# By default, create-react-app will use the latest stable release
yarn upgrade react@experimental react-dom@experimental
```

Now the proper packages are installed with the experimental features but they
need to be enabled. To enable concurrent mode, the setup with `react-dom` needs
to be changed to use the new `createRoot` method.

```tsx
// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
```

However, you'll notice after doing this there is now a type error:
`Property 'createRoot' does not exist`. This is because the types for the
experimental features are not enabled by default. There are number of approaches,
one option is to import the experimental types.

```tsx{2,8}
// src/index.tsx
import {} from "react-dom/experimental";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);
```

This should now fix this type error. However, there is now a new type error:
`Type 'null' is not assignable to type`. This is because `getElementById` returns
an `HTMLElement` or `null` and the `createRoot` method expects only an
`HTMLElement` (not `null`). This was fixed in this example by casting the value
to `HTMLElement`.

Another option is to instead add a reference in the already existing type
definition file.

```typescript{3-4}
// src/react-app-env.d.ts
/// <reference types="react-scripts" />
/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />
```

All the other options to opt-in to the experimental types are documented in the
[`experimental.d.ts`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/cdf01cf33d2db0f25558413ce3ba98b472c4dd07/types/react/experimental.d.ts) file.

## Conclusion

Now, concurrent mode is enabled with the proper type definitions. The new
components and APIs such as `ReactDOM.createRoot` or `React.SuspenseList` should
be properly type-checked. You can avoid easy typos and instead focus on the
important parts!

All of this code is available on GitHub if you'd like to explore it yourself
in the [skovy/react-concurrent-mode-typescript-example](https://github.com/skovy/react-concurrent-mode-typescript-example)
repository.

If you'd like to see more examples working with concurrent mode features
[check out the examples for the `react-suspense-img`](https://react-suspense-img.netlify.com/) package.
