---
date: 2018-10-27T14:00:23.477Z
title: "Using React Hooks with TypeScript"
description: "useTypeScript();"
featuredImage: "./images/featured-image.jpeg"
images:
  - featuredImage.jpeg
  - 1*AW_LtNFduiWDKBnylV3TAw.png
  - 1*gI555Ycakb29HXdE4qUunQ.gif
tags:
  - react
  - hooks
  - typescript
  - react-hook
---

The next version of React (`16.7.0-alpha.0`) was recently released with added support for [React Hooks](https://reactjs.org/docs/hooks-intro.html). Hooks bring many of the features that were only available with class components to function components and can help solve other problems, like “[wrapper hell](https://reactjs.org/docs/hooks-intro.html#its-hard-to-reuse-stateful-logic-between-components).”

*Edit 2019/03/09: React Hooks were released in `16.8.0`. See the [release blog post](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html) for more details.*

![Photo by rawpixel on Unsplash.](1*4GcU5UagmpeePp2-EZiSGQ.jpeg)*Photo by rawpixel on Unsplash.*

There is already great documentation coverage for Hooks, and I would recommend [reading the React Hooks documentation](https://reactjs.org/docs/hooks-intro.html) if you have not yet. The remainder of this article will cover the necessary steps to create a basic React TypeScript app to experiment with the new Hooks API, in a type-safe way!

*All of the following code is available in [this repository](https://github.com/skovy/react-hooks-typescript-example).*

*Edit 2018/11/10: The steps below were updated since `create-react-app` v2.1 was released with TypeScript support and `@types/react` v16.7.0 was released with hook type support.*

### 💡 Getting Started

The easiest way to create a React app is to use the appropriately named [*create-react-app](https://facebook.github.io/create-react-app/) *project. It allows creating React apps in one command without the hassle (like webpack or TypeScript configs).

It’ no longer necessary to use the `[react-scripts-ts`](https://github.com/wmonk/create-react-app) script to create a TypeScript React app. The most recent release of `create-react-app` (v2.1) supports TypeScript out of the box!

```
create-react-app react-hooks-typescript-example --typescript
```


This command will set up and install all of the necessary configs and packages. By default, it will install the latest stable version of React. However, Hooks are only available in the `next` version of React (`16.7.0-alpha.0`), so it’s necessary to upgrade the `react` and `react-dom` packages.

```
yarn upgrade react@next react-dom@next
```


The [typings have now been updated](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30057) to support React Hooks so we no longer need to define custom typings! The most recent versions of `@types/react` (v16.7.x) have the necessary types for hooks and will be installed properly when running `create-react-app`.

Now we can create a simple function component as provided by the React Hook documentation.

![An example counter component using the [State Hook](https://reactjs.org/docs/hooks-state.html). 🎣](1*AW_LtNFduiWDKBnylV3TAw.png)*An example counter component using the [State Hook](https://reactjs.org/docs/hooks-state.html). 🎣*

This component will render a button. Every time the button is clicked it will increment and display the count. Once the`Counter` component is added to the main `App` component we can run `yarn start` to see the example in the browser.

![Demo of the counter comoponent using a React Hook. [View the live demo](http://react-hooks-typescript.now.sh).](1*gI555Ycakb29HXdE4qUunQ.gif)*Demo of the counter comoponent using a React Hook. [View the live demo](http://react-hooks-typescript.now.sh).*

### 📚 Conclusion

This is a basic example of getting started with React Hooks in a TypeScript app but provides the environment and typings to experiment with Hooks. Check out [this repository](https://github.com/skovy/react-hooks-typescript-example) for all of the above code with many more examples. React Hooks are yet another tool in your React tackle box! 🎣