---
date: 2018-12-08T19:13:05.729Z
title: "Migrating a design system to a dedicated repository"
description: "An overview of the benefits, general patterns, and tooling for maintaining a design system in its own repository."
featuredImage: "./images/featured-image.jpeg"
featuredImageCredit: "Photo by Ray Hennessy"
tags:
  - javascript
  - design-systems
  - semantic-release
  - react
  - typescript
---

Over two years ago, we started migrating the Handshake frontend tech stack from CoffeeScript and Knockout to TypeScript and React. One of the first things added was a directory named `common` with a component that was considered “common” and reusable across many features and contexts. The name stuck, and internally we often refer to our design system components as “common components.” Now that we’ve built out dozens of components and our team has grown, we needed to tackle some of the problems and limitations that are stopping us from effectively scaling our design system.

## 🌱 Growing Pains

This pattern has worked well and scaled with the team over the past few years. However recently, we’ve started to run into several “growing pains” and issues that were primarily symptoms of the design system components living within the same repository as the main application.

For example, we use [Storybook](https://storybook.js.org/) to document these components. During the upgrade to webpack v4, we ran into issues because Storybook wasn’t compatible with v4 yet so we had to wait until it was supported. Additionally, it’s challenging for non-engineers (eg: designers or product managers) to locally run and contribute to the design system without getting the entire main application running (which includes Elasticsearch, PostgreSQL, Rails, etc. 😱).

We also faced many limitations. We want to improve the automated accessibility testing, documentation and explore other tooling like CSS-in-JS or alternative testing utilities.

And lastly, it’s easy to “sneak” in a few changes to the design system components within larger feature work or create a component with a dependency on a very specific data model. When a component is coupled to a specific data model it drastically limits the reusability of the component in other contexts and applications. We need a _true_ separation of the design system components from the application data model and features.

## 💡 Solution

It might be obvious at this point, but our solution was to create a repository dedicated to our design system. This encompasses not only components, but also colors, typography, documentation, and testing.

Many of the benefits are solutions to the problems and limitations we are facing today.

- The repository has significantly fewer dependencies and takes a few minutes to get running locally, enabling designers and others to easily contribute to documentation or make changes to colors, components, etc.

- There is now a physical separation, which no longer requires enforcing an arbitrary divide or special case tooling, like our [code generators](https://medium.com/rubber-ducking/using-code-generators-to-share-and-document-best-practices-8b2d6a7b1dce) to do something different when generating a common component. Now, two distinct pull requests must be opened, one focused on the necessary design system changes and one focused on the related feature. Additionally, the data model is no longer available in the new repository which leads to more purely presentational components useful in many more contexts and applications.

- The design system can now be used in any other repository. This is particularly important as Handshake transitions from a monolithic application to domain-driven services.

- Lastly, we can improve tooling and explore alternatives that are focused around the design system. Examples include better accessibility testing, CSS-in-JS, [react-testing-library](https://github.com/kentcdodds/react-testing-library), [Docz](https://www.docz.site/), and more.

### ⚙️ Core Technologies

We didn’t make any big changes to our core tooling and setup to minimize change and make the transition as smooth as possible. The core tooling has also worked well for us so we didn’t have a reason to make any changes. TypeScript has been extremely beneficial when working with React, so our entire design system is written in TypeScript, even the webpack configuration. [CSS Modules](/writing-maintainable-styles-and-components-with-css-modules) has also worked well in the main application. For now, we’re going to stick with CSS Modules but in the future may explore CSS-in-JS primarily to make it easier to render components elsewhere (eg: documentation or tools like [Framer X](https://framer.com/features/components/)) without the complex CSS Module webpack loaders.

### 📝 Documentation

As previously mentioned, we were using [Storybook](https://storybook.js.org/) for our design system documentation. At the time we chose it, it was a great fit. It’s since added a lot of features and support for things we don’t need. Instead, [Docz](https://www.docz.site/) seems to be a better fit for our current needs. All of the documentation is written using [MDX](https://github.com/mdx-js/mdx) (essentially Markdown + JSX) which is perfect for component documentation. It also has a [`Playground`](https://www.docz.site/documentation/components-api#playground) component that renders an interactive editor for the component directly in the documentation and a [`PropsTable`](https://www.docz.site/documentation/components-api#propstable) component that can list all props and types for free using the TypeScript props interface.

After every commit to master, the documentation is built and automatically deployed to an internal domain so anyone across the company can reference and explore the design system documentation.

### 🔨 Testing

While transitioning the components we decided to switch to [Jest](https://jestjs.io/) and [react-testing-library](https://github.com/kentcdodds/react-testing-library). We were previously using [mocha](https://mochajs.org/) and [Enzyme](https://airbnb.io/enzyme/). There are two primary issues we’ve faced with Enzyme that motivated the switch. First, it can take a while before new React features are available. We wanted to use `React.memo` with a function component, but [cannot until support is added](https://github.com/airbnb/enzyme/pull/1914). Secondly, as explained by [Kent C. Dodds](https://twitter.com/kentcdodds) [in the introduction of react-testing-library](https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65) it can encourage bad testing practices, often reaching into the internals and implementation details of components.

### 💅 Code linting and formatting

We are using [Prettier](https://prettier.io/) to format all code, it’s an invaluable tool in the main application to ensure consistency and avoiding review comments related to code style. Additionally, we’re using [TSLint](https://palantir.github.io/tslint/), [stylelint](https://stylelint.io/) and [commitlint](https://marionebl.github.io/commitlint/#/) (more on the importance of this in the next section) to lint TypeScript, SCSS and git commits, respectively. Prettier ([using the `list-different` flag](https://prettier.io/docs/en/cli.html#list-different)), TSLint, stylelint and commitlint are run in CI on every commit to ensure code is always correctly formatted.

## 📦 Releasing and versioning

Up to this point, there weren’t any major changes to our workflow. However, we now needed a way to package and release the design system components, colors, typography, etc.

An initial thought was to treat the repository itself as the package. Yarn supports GitHub repositories, so we could easily add a dependency in `package.json` that points to the repository. But there were two main issues with this workflow. First, it would require building the distribution files and committing those to the repository. Every pull request would need to rebuild the distribution files and commit them, which would likely result in changing hundreds or thousands of lines. Second, the repository needs to be private. This works locally since all engineers already have access, but this is significantly more challenging for all of the other tools that our codebase touches today and in the future. CI would need access to run all of the tests. Then the container builder would also need access. It’s possible to work through this, but if we ever switched to a different platform or added more steps we’d need to set up permissions again which is typically non-trivial.

The next choice we explored was a private registry, like [npm](https://docs.npmjs.com/creating-and-publishing-private-packages) or [Gemfury](https://gemfury.com/help/private-yarn). Currently, we’re using Gemfury because it made the most sense for our size and also supports [RubyGems](https://gemfury.com/help/install-gems/) which we’ll likely need in the future. They all provide a similar experience and workflow, so the registry isn’t as important as _how_ the package is published. Which leads to the next step, how do we get the source code to the private registry?

### 🚀 semantic-release

It’s possible that after every commit merged to master an engineer runs the commands to bump the version (correctly, if we adhere to semantic versioning) and publish the package. This leaves a lot of room for error. What if CI fails on master but the broken package is still published? What if someone forgets? What if they increment the version incorrectly?

This sounds like a great problem to automate. Fortunately, there’s a tool that solves a lot of these problems: [semantic-release](https://github.com/semantic-release/semantic-release). After every commit to master, CI will run all tests, linting, etc. and if everything passes it will then automatically build the distribution files from source, semantically increment the package version based on the commit messages (enforced using commitlint mentioned earlier) and publish the package to Gemfury. The main application (and any other repositories in the future) can now add this dependency.

## 🤯 Challenges

It seems like everything is great, why not move the design system components earlier? Two reasons: stability and developer experience.

First, if the components are not stable and there is a lot of churn — from either an engineering or design perspective— it can be substantially easier to quickly iterate on the components in the context of features. Many of the core components (eg: buttons or cards) have been stable for a long time and handle almost every use case so our components are now relatively stable.

Second, there are now two repositories, two pull requests, two reviews, etc. The change to a component within the design system now blocks the core feature work, whereas before it _could_ all be done at once. With a smaller team of engineers and a smaller set of components, having the component within the same repository made it easier to move quickly while still easy to communicate any changes with the whole team. Now, with a larger team of engineers, it’s important we are intentional about distinguishing design system level changes from feature work and having those changes reviewed by engineers and designers who are thinking about the design system as a whole.

Although this true separation is beneficial, it’s still important to minimize the impact on engineers and development speed. Proposed changes in the design system can be easily tested locally in the main application using [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) (or [`npm link`](https://docs.npmjs.com/cli/link.html)). This allows linking the design system components in the main application, so it’s easy to test the proposed changes in the proper context.

## 🤔 Final Thoughts

When I originally set out to explore options and opinions on separating a design system to its own repository I wasn’t able to find a lot of resources. There are a lot of excellent examples of open source design systems, automation, and tooling, but no examples of private design system repositories… because they’re private! 😅

After this transition, these are the four things I would recommend keeping in mind when considering separating a design system:

- **Team size**: will adding another repository add additional overhead without a lot of the benefits (eg: reuse)?

- **Component stability**: are the components fairly stable? Would it be significantly easier to quickly iterate on the components within the context of features?

- **Use existing tooling**: for us, TypeScript and CSS Modules has worked well. Sticking with the same tooling makes it easier to transition components and requires less context switching between the two repositories. What tools are working well for you that you are already using?

- **Automate**: Nobody wants to deal with building and deploying documentation or risk it becoming stale so it’s entirely automated. Nobody wants to remember the exact commands to bump the package version, dig through the changes and determine what the next version should be or deal with inconsistencies when different people release the package. What parts of the process are error-prone or tedious?

Hopefully, these high-level thoughts are useful if you’re considering moving a design system to a dedicated repository. There are many pieces that can still be improved so if you have already separated a design system, please share your workflow, tooling, and setup!

_Listen to [Episode 7 of Rubber Ducking](http://www.rubberducking.fm/7) on Migrating a Design System to its own Repository for more discussion._
