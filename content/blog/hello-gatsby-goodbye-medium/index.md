---
date: 2019-04-14T00:00:00.000Z
title: "Hello Gatsby, Goodbye Medium"
description: "Moving my personal content to skovy.dev with Gatsby."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Mantas Hesthaven"
tags:
  - gatsby
  - netlify
---

For the past two years or so I've semi-regularly wrote on Medium.
Most of the content relates to my experience and opinions on various frontend
tech or patterns: React, TypeScript, CSS Modules, Design Systems and the like.

I've found taking the time to write semi-regularly beneficial in a few key ways.

1. It requires that I intentionally take the time to write, something that's
   always touted as critical skill.
1. Most of my posts are inspired from questions I once had or repeatedly hear from
   others. This requires that I understand the question and the nuances in order to
   get to (_what I believe to be_) the answer and what the _important_
   details are versus details that only add fluff. By the end, I have a much better
   understanding and took the time to think slowly and critically rather than on the spot
   the next time I get asked. I can then provide a quick answer, but then easily
   follow-up with a link to the original post to provide a more in-depth answer.
1. It feels great being able to help others and can lead to cool
   opportunities like [discussing TypeScript on React Roundup](https://devchat.tv/react-round-up/rru-044-typescript-with-spencer-miskoviak/).

# Motivation

When I first started to write more regularly it could have been easy to spend
weeks making the "perfect" personal blog... with no content. It was more
important that I write and publish _something_. For me, Medium was the obvious
choice. Much of the content I was consuming was being published there and
it provided a great way to publish to an existing audience of people.

1. **Medium "owns" my content**. Every time I share a link, it's going to Medium. I
   could have also explored doing a redirect.
1. **More control over the experience**. Many of my posts contain code examples which are supported
   okay, but I often ended up using [carbon.now.sh](https://carbon.now.sh) to
   provide the visual treatment I was looking for, but it's no longer copy/paste-able 😞.
1. **Additional types of content**. I also have a few projects and podcasts episodes. Many
   times I write about specific projects, or discuss them on an episode or vice versa.
   I wanted to have all the content in one place to easily jump between potentially
   relevant information.
1. **Experiment and learn**. Specifically, I wanted to use and explore
   things like Gatsby, GraphQL and Netlify.
1. **Medium's Paywall**. I misunderstood Medium's curated content and of course selected the
   option to have it "recommended by curators" but did not realize it would then be behind Medium's paywall.
   (this has since been made much clearer, but left me a bit annoyed).
   This is a minor factor but made me realize I'm trading control for a larger audience.

# Technical Details

As mentioned above, one of the motivations was to experiment and learn some
tools that I have minimal (or no) experience with.

- **Built using [Gatsby](https://www.gatsbyjs.org/)**. The blog was generated and based off [`gatsby-starter-blog`](https://github.com/gatsbyjs/gatsby-starter-blog)
- **Deployed to [Netlify](https://www.netlify.com/)**. I spent a lot of time first getting something working before I started worrying about deploying it.
- **Styled with [styled-components](https://www.styled-components.com/)**.
    - [Cool Hue](https://webkul.github.io/coolhue/) was also pretty cool.
- **Additional content**. rss feed plugin

- typescript
- medium exporter
