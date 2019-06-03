---
date: 2019-05-29T11:00:00.000Z
title: "Measuring Frontend Performance (in modern browsers)"
description: "The supported browser APIs and polyfills for measuring frontend performance."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Mathew Schwartz"
tags:
  - frontend performance
  - time to interactive
  - first input delay
  - first paint
  - first contentful paint
---

Before a few months ago I had never dug into the details of "frontend
performance," what it means, or how to measure it. I've looked at server
response time and often assumed if that was "fast" the whole user experience
would be "fast." However, there's a lot more to the performance of an application
and the overall user experience. A whole world I knew nothing about. There are
experts that know way more than I do, but this is an overview of what I learned
after a few months of trying to understand and then implement frontend
performance metrics.

### What is frontend performance?

My simplest definition is **"the time it takes for an application to become
usable."** For me, this is challenging to wrap my head around because "usable"
can be interpreted in different ways by different people _(or maybe the same
person on different days)_.

You could argue, when looking at something like server response time there's
only one definition for "is it usable?". The overall response time. Before the
server responds, it's 0% usable. The user hasn't received the data yet. Once
the server has responded it's now 100% usable for the user. With that, improving the
server response time will improve the time it takes the server to
become usable.

When looking at frontend performance it becomes less straightforward. Rarely, it's
exactly 0% or 100% usable, but rather somewhere between during an application's
life cycle. There are a large number of variables
that can affect the usability: the actual feature code efficiency (eg:
[maybe using `concat` vs `push` in a large loop](https://dev.to/uilicious/javascript-array-push-is-945x-faster-than-array-concat-1oki)),
network latency, server response time, server response size, JavaScript and CSS
file size, which browser, available resources on the client, caching,
long-running tasks, loading states, etc.

### Why care about frontend performance?

In general, better performance means a better user experience.

Unfortunately, we usually can't stop here and need to go a step further to
prove that it's a worthwhile business investment. Fortunately, a better
experience will usually lead to an increase in some important business metric.

This may mean users will spend more time using your product (if you care about
that) or maybe it means they actually spend _less_ time using your product
because they can achieve their task quickly. Later on they might recommend it to
their friend since it was a fast and delightful experience.

It's hard to generalize what exactly improving performance will lead to, but
it can generally lead to an improvement of an important business metric.

If you're looking for more concrete examples there are
[several great examples curated by Google Web Fundamentals](https://developers.google.com/web/fundamentals/performance/why-performance-matters/#performance_is_about_improving_conversions)
outlining specific examples of how performance directly improved various
important metrics for specific sites.

_([Google Web Fundamentals](https://developers.google.com/web/fundamentals/)
was an invaluable resource when investigating and learning about frontend performance)_

# Measuring frontend performance

### Lighthouse

### Browser APIs & Polyfills

Interested in more? Check out [this recent episode on Rubber Ducking](https://rubberducking.fm/15)
about frontend performance, [Google Web Fundamentals](https://developers.google.com/web/fundamentals/),
or [reach out on Twitter](https://twitter.com/spencerskovy).
