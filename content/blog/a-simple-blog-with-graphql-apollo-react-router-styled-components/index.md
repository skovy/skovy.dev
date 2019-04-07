---
date: 2017-11-12T22:25:49.627Z
title: "A Simple Blog with GraphQL, Apollo, React Router & styled-components."
description: "This was a project to expand my knowledge of the React & GraphQL ecosystems and less of me weighing these technologies against others. I’ve written a fair share of React code and wanted to explore some of the other trending technologies in the ecosystem today."
featuredImage: "./images/featured-image.jpeg"
featuredImageCredit: "Photo from Unsplash"
tags:
  - graphql
  - apollo-client
  - styled-components
  - react-router
---

## Why explore theses technologies in the first place?

I wanted to learn and try the “shiny new things!” ✨ These are the four core technologies I explored, what they are, and why they caught my interest in the first place. Most of these caught my interest because they offer a solution to problems I’ve faced in a project in some way, shape, or form.

### GraphQL

A query language for an API that is rapidly gaining popularity as it solves several pain points that I’ve personally seen, particularly on the client that consumes an API. A [GraphQL](http://graphql.org/) implementation has a single endpoint — commonly `/graphql` — where the schema is defined and the clients invokes queries and mutations. This allows having components define precisely the data they need, avoid large component dependency trees and easily drop components in anywhere without worrying about the data it relies on. There are other beneficial features that come along with this, such as great documentation with [GraphiQL](https://github.com/graphql/graphiql), or easily caching and re-using this data on the client. For more of the details, [check out the documentation](http://graphql.org/learn/).

This solves some of the issues I’ve had with larger projects: lacking API documentation, *n*-endpoints with a classic REST API, and not easily fetching the exact amount of data needed (commonly *too much* or *too little* data). I wanted to see how it actually felt compared to the typical REST API; both developing the queries and mutations, and consuming a GraphQL API on the client.

### React Apollo

[Apollo](https://www.apollographql.com/) has several GraphQL client implementations ranging from iOS to React. Since I was planning to use React, I chose the [React Apollo](https://www.apollographql.com/docs/react/) package. Apollo Version 2 was released when I was mid-project so I stuck with Version 1 for the remainder of this project. Along with a few other packages, it abstracts the GraphQL API after basic configuration and leaves you to writing only the queries, mutations, and wiring up the components. React Apollo has basic query caching by default and internally uses Redux (at least in Version 1, this this dependency was dropped in [Version 2](https://dev-blog.apollodata.com/apollo-client-2-0-5c8d0affcec7)).

As mentioned with GraphQL, I wanted see how it felt consuming a GraphQL API on the client. I chose React Apollo because it’s significantly easier to get started and does much of the heavy lifting out-of-the-box. I also considered [Relay](https://facebook.github.io/relay/) but found it signifigantly more complex than what I needed for this simple project and exploration.

### React Router

Given away by the name, [React Router](https://github.com/ReactTraining/react-router) provides client routing for React. Most other projects I’ve touched have been server routed and haven’t involved much client routing. React Router opens the doors to some interesting techniques, such as code splitting, prefetching and data reuse between different pages.

Exploring React Router was less about solving a pain I’ve experienced, and more about experimenting with some of the new techniques that aren’t as easy with server rendered applications.

### styled-components

The majority of my experience styling React components can mostly be put into the following three buckets:

1. Quick n’ dirty using the [`style`](https://reactjs.org/docs/dom-elements.html#style) attribute and passing an object

1. Adding a CSS framework like [bootstrap](http://getbootstrap.com/) or [materialize](http://materializecss.com/) and using the [`className`](https://reactjs.org/docs/dom-elements.html#classname) attribute on components

1. Using [CSS modules](https://github.com/css-modules/css-modules) with the help of a few webpack loaders

Like any technology decision, each approach has advantages and tradeoffs. The three spectrums I care about for styling are customizability, maintainability and cost. The `style` attribute and `className` attribute have zero setup cost since their first-class React attributes. However, they can become a maintenance nightmare, especially on large projects. CSS modules have a higher setup cost since it requires webpack, setting up loaders, and likely bundling all styles for production builds differently than development. Beyond that, CSS modules are drastically more modular (hence the name) which lends to maintainability, reuse, customization and clarity where styles are being used rather than a monolith stylesheet like third-party CSS frameworks.

I heard some buzz around [styled-components](https://www.styled-components.com/) and started following the project for some time and decided to give it a try. From my basic understanding, it seemed to be a nice middle ground between using the `style` attribute and using CSS modules. Particularly, I wanted to try the concept of not using an external stylesheet file and switching between various files but still have the power CSS modules offer.

## How to explore these technologies?

Well, the only way to learn any new web technology… build a blog! Yet, I’m still writing this on Medium.

Probably like most people, I find the best way for me to pick up the basics of a new framework, language, or technology is to build something and run into problems and read through the documentation or Stack Overflow to find the solutions. I’ll dig a bit more into the API, Client and what I learned about these technologies along the way.

### The API

**Ruby on Rails & GraphQL**

I choose Ruby on Rails because I’m familiar with Rails and didn’t set out to learn a new backend language nor framework, so there’s almost zero overhead. Plus, there’s a `[graphql-ruby`](http://graphql-ruby.org/) gem that implements the [GraphQL spec](http://facebook.github.io/graphql/October2016/). I built out a simple blog API for posts, comments and users. I wanted to focus on the client so I spent a minimum amount of time getting this working so skipped some critical things for now, such as authentication. It’s a simple API with GraphiQL to easily play around with the API in the browser without needing a client.

*You can check out the source and specific implementation details for the GraphQL API in [this Github Repo](https://github.com/Skovy/graphql-blog-api).*

### The Client

**React, TypeScript, React Apollo, React Router & styled-components**

Similar to choosing Rails, I stuck with React & Typescript as I have experience working with these technologies. Beyond that, I have minimal experience with React Apollo, React Router, and styled-components. These were the technologies that I wanted to spend the most time on. I went all in on getting a feel of styled-components and styled everything with this package. All routing is client side with React Router. The entire client is served from a minimal [express](https://expressjs.com/) server and consumes the single `/graphql` endpoint exposed above (except for the additional `/graphiql` endpoint in development for debugging). Lastly, all data was queried and mutated through the Apollo packages.

*You can check out the source and specific implementation details for the GraphQL client in [this Github Repo](https://github.com/Skovy/graphql-blog-client).*

## So, how did it go?

Great! It’s always fun playing around with new technologies. Even if you don’t use it again, there’s always at least one principle that is applicable to other technologies or frameworks.

### GraphQL

Although this was a tiny experimental project, I’m a fan of GraphQL and it solved many of the pains on both the server and client. I enjoyed defining the entire schema once on the server as opposed to custom schemas for each REST endpoint, which often results in duplication. Additionally, with a package like Apollo, it made consuming the API a breeze. I definitely did not push the “boundaries” of GraphQL, but I think exploring more nuanced implementation details like authentication and permissions would be obvious next steps for me, considering GraphQL doesn’t lay out a defined way to handle this. Using this particular gem and implementation, I think GraphQL would work well for both small and large projects, with my only reservation being some of the undefined nuances of things like authorization and field level permissions

### React Apollo

As mentioned above, having an abstraction on the client to declaratively fetch and mutate data enhanced the client development experience. Also, having simplistic client caching built-in by default was great. Again, I definitely did not push the boundaries or hit any edge cases with Apollo in this tiny project. I think further exploration would begin to uncover those. With the reasonable defaults and minimal configuration I was able to get started right away. I mostly stuck to simple queries, mutations and optimistic responses. The next features I plan to explore are prefetching data, query splitting, and cleaning up duplication with fragments.

### React Router

It was pleasant moving routing to the client and off the server. It integrated well and easily fit with all of the other packages. I used only the most simplistic implementation since there are only a few pages. I’m looking forward to exploring some more of the advanced capabilities, specifically code splitting.

### styled-components

I can’t say I loved styled-components off the bat. They were extremely easy to drop-in, but much like the `style` attribute, almost felt too easy. I could see in a large project without strict structure and style guidelines “spaghetti styling” easily happening. I did like the ability to easily interpolate JavaScript variables or conditionals directly in the styles and have the definitions in a single file to avoid switching between the component definitions and the associated styles. However, I find this simplistic separation of files can actually lend to cleaner and more reusable styles. This very well could be my lack of knowledge or structuring when using styled-components. For smaller projects, I think I would actually use styled-components since there is no setup cost and is significantly cleaner and more reusable than the `style` attribute. However, in larger projects, I would personally still lean in favor of CSS modules.

## Conclusion

I can see why all of these technologies are gaining popularity. They solve pains I’ve had working on various projects and look forward to exploring the more advanced features of each technology. If you haven’t heard or used any of these packages, check out the respective Github repositories to see some very simplistic examples. And finally, [*see a demo of the final product here*](https://graphqlblog.herokuapp.com/)! (it may take a while to load the first time, it’s a hobby Heroku app)