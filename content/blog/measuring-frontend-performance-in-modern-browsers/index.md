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

Up until a few months ago, I never dug into "frontend performance" and what
it means, much less understood it. I've looked at server response time and if that
looked "fast" I operated under the assumption that the whole user experience
would be "fast." However, there's a lot more to the performance of an application
and the overall user experience. A whole world I knew nothing about. There are
experts that know way more than I do, but this is what I learned after a few
months of trying to understand and then implement frontend performance metrics.

### What is frontend performance?

My unofficial definition is: the time it takes for a web application to load and
become interactive for users. There are an almost infinite number of variables
that can affect the performance: the actual feature code efficiency 
(eg: [maybe using `concat` vs `push` in a large loop](https://dev.to/uilicious/javascript-array-push-is-945x-faster-than-array-concat-1oki), network
latency, server response time, server response size, script and style file size,
browser, available resources on the client, caching, etc.

### Why care about frontend performance?

In general, better performance means a better user experience and a better user
experience means users enjoy your product more which can lead
to an increase in important business metrics. This may mean they will spend more
time using you product (if you care about that) or maybe it means they actually 
spend _less_ time using your product but they will recommend it to their friend 
since it was a fast and delightful experience. 

There are several great examples curated by Google Web Fundamentals outlining
specific examples of how 
[performance directly improved various important metrics for specific sites](https://developers.google.com/web/fundamentals/performance/why-performance-matters/#performance_is_about_improving_conversions).
I'll reference [Google Web Fundamentals](https://developers.google.com/web/fundamentals/) 
several times because it was an invaluable resource learning about frontend
performance.

### Lighthouse

### Browser APIs & Polyfills

### Datadog / Collection Service

Check out a recent episode on Rubber Ducking on this topic.