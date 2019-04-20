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

For the past two years or so I've semi-regularly written and published content on Medium.
Most of the content relates to my experience and thoughts on various frontend
technology and patterns: React, TypeScript, CSS Modules, Design Systems and the like.
I've found taking the time to write fairly rewarding.

1. Many of my posts are inspired from questions I once had or hear from
   others. This requires that I research existing content or tools to gain a
   better understanding and some of the nuances in order to get to the important
   details. By the end, I usually have a much better understanding by taking the 
   time to think slowly and more critically. If asked a related question in
   the future I can provide a quicker answer, but easily follow-up with
   the more detailed post to provide a more in-depth answer.
1. It feels great being able to help and (_hopefully_) provide value to others.
1. It requires that I intentionally take the time to write; something usually touted as a key skill.
1. It can lead to cool opportunities like
   [discussing TypeScript on the React Roundup](https://devchat.tv/react-round-up/rru-044-typescript-with-spencer-miskoviak/) podcast.

# Motivation

When I first started to write regularly it would have been easy to spend
weeks making the "perfect" personal blog... with no content. It was more
important that I write and publish _something_. For me, Medium was the obvious
choice. Much of the content I was consuming was being published there and
it provided a great way to publish to an existing audience of people. However,
I now think it makes more sense to make a personal blog. The following are some of my
thoughts and motivations around this decision.

- **Medium "owns" my content**. Every time I share a link, it's going to Medium.
  Alternatively, I could have also explored doing a redirect to at least "own"
  the link and point it anywhere in the future.
- **More control over the experience**. For example, many of my posts contain code examples.
  I often end up using [carbon.now.sh](https://carbon.now.sh) to provide the visual treatment
  I'm looking for, but it's no longer copy/paste-able. 😞
- **Additional types of content**. I also have a few projects and podcast episodes. Many
  times I write about specific projects, or discuss them on an episode or vice versa.
  I wanted to have all the content in one place to easily jump between potentially
  related information.
- **Experiment and learn**. Specifically, I wanted to use and explore
  things like Gatsby, GraphQL and Netlify.
- **Medium's Paywall**. I misunderstood Medium's curated content and of course selected the
  option to have it "recommended by curators." What I did not realize at the time was that it would then be behind Medium's paywall
  (this has since been made much clearer, but left me a bit annoyed).
  This is a minor factor but made me realize I'm trading control and the experience
  while reading the content for ease of distribution.

# Technical Details

As mentioned above, one of the motivations was to experiment and learn
tools that I have minimal (or no) experience with. I'm definitely overlooking some
of the tools and resources I relied on, but these were the highlights.

- **Built with [Gatsby](https://www.gatsbyjs.org/)**.
  The blog was generated and based off [`gatsby-starter-blog`](https://github.com/gatsbyjs/gatsby-starter-blog).
- **Deployed to [Netlify](https://www.netlify.com/)**.
  I spent most of time getting something working before I started worrying about deploying it.
  I was also trying to avoid dealing with deploying it, adding the
  necessary configuration and probably having to tweak it a few times. But with Netlify,
  I connected the GitHub repository and it _just worked_. 🤯
- **Styled with [styled-components](https://www.styled-components.com/)**.
- **Including additional content**. One of the motivations was to include additional content.
  I could have explicitly defined all this content but anytime something changes I didn't want to manually update it.
  Luckily with Gatsby, there are many great plugins that allow you to leverage GraphQL and unify disperate data sources.
  My content is written in Markdown, but queried with GraphQL, my projects are queried from GitHub's GraphQL API using the
  [`gatsby-source-graphql`](https://www.gatsbyjs.org/packages/gatsby-source-graphql/) plugin and the podcasts are
  pulled from an RSS feed but still queried using GraphQL via the
  [`gatsby-source-rss-feed`](https://www.gatsbyjs.org/packages/gatsby-source-rss-feed/) plugin.
- **TypeScript**. I enjoy working with TypeScript so opted-in to use it. Gatsby support isn't _perfect_ but it works.
  I also used [`graphql-codegen`](https://github.com/dotansimha/graphql-code-generator) to generate type
  definitions for the schema (including the GitHub and RSS feed schema 🙌)
- **[mediumexporter](https://github.com/xdamman/mediumexporter)**.
  This package was useful as a first pass to grab my existing content from
  Medium and convert it to markdown with frontmatter. It required some additional
  cleanup but still saved me a lot of time.

# Conclusion

There are still a fair number of improvements I'd like to make such as better code 
formatting. But these tools offered an amazing development 
experience and look forward to working with them more.

Since I will no longer be publishing on Medium, if you'd like to know when
I publish new content you can sign up below to receive new posts by email 
(and nothing else). 👇