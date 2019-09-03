---
date: 2019-09-02T08:00:00.000Z
title: "Code splitting with webpack and TypeScript"
description: "An overview of code splitting with webpack, in a TypeScript and React app"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Brendon Thompson"
tags:
  - webpack
  - typescript
  - react
  - code splitting
  - dynamic import
---

Code splitting is an approach to break apart a single large file into many
smaller files. A common pattern is to do this at the route or page level because
a user generally only needs the code for the current page, and not the other
50 or so pages.

As with most things, code splitting has its tradeoffs. It requires a tool that
supports it, a specific configuration and can add additional complexities that
might be overkill for a small application. However, at a certain point it can
become critical. Shipping a single large bundle has a number of downsides that
can result in poorer performance.

One of the biggest downsides is the cost to download a single large file.
It consumes additional bandwidth which can take longer to download and cost
users with limited bandwidth by forcing them to download more than they need.
After downloading, the browser also has to parse and compile all that code which
adds a non-trivial amount of time. If it's a very large file, the main thread
will likely be blocked as a single, long task so _other_ important tasks will
have to wait. Assuming this file is being cached, the entire file will have to
be invalidated anytime a single change is made so users will have to re-download
everything.

These problems are what code splitting can help solve (along with some other
benefits). Only the code for the current page or feature needs to be downloaded
so less bandwidth is used and less time spent. Since it's less code, that means
the parsing and compilation is also faster. Even if the code splitting results
in downloading multiple files this can happen in parallel (too many could also
be bad). If one feature's code is changed, only that code split chunk needs to
be invalidated rather than all the code. Lastly, this results in smaller tasks
on the main thread that could be interleaved with other important work if
necessary.

Code splitting is well supported in most builds tools like
[webpack](https://webpack.js.org/guides/code-splitting/),
[Parcel](https://parceljs.org/code_splitting.html), or
[rollup](https://rollupjs.org/guide/en/#code-splitting) but also some frameworks
have this built-in, such as [Gatsby](https://www.gatsbyjs.org/docs/how-code-splitting-works/)
or [Next.js](https://nextjs.org/learn/excel/lazy-loading-modules).

The remainder of this post is going to focus on using webpack as the build tool
with a TypeScript and React application.
