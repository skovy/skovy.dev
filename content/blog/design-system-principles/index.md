---
date: 2020-02-20T08:00:00.000Z
title: "Design System Principles"
description: "General principles for building and maintaining a design system."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Hans-Peter Gauster"
tags:
  - design system
  - principles
  - rules
---

Design Systems. Today, it's almost impossible to work on an application without
hearing this phrase. But it's often used as if everyone intuitively understands
what we mean when uttering "Design System." On the surface, it does seem like
a fairly straightforward concept; simply systemize your design patterns.

On the contrary, I've found working with design systems to be unexpectedly
complex and nuanced. This doesn't mean the end result is necessarily complex,
but the path to create and maintain an effective design system can be
challenging. There are countless variables that need to be taken into account to
define what an effective design system is, such as the audience, application,
company, or brand it's intended to serve. Despite these differences, they're
often peripheral. At the core there are a shared set of principles that can
guide any design system.

# Principles

When working on or with a design system it can be easy to lose sight of the
"big picture." There are hundreds of tiny decisions: how should the colors be
defined and structured? who do I need to talk to to make this change? what props
should be used?

It's critical all of these day-to-day decisions are made using a shared set of
principles so the system evolves in a predictable way. These are principles that
are distilled from my experience and are a snapshot of my current understanding
of what leads to a successful design system.

1. **There is only _one_ design system**: this may seem intuitive but when
   focused on the day-to-day tasks of working on
   an application it can be easy to lose sight of this. What if I'm building
   multiple apps or have multiple "types" of users _(eg: consumers, enterprises,
   administrators)_? Some level of customization is acceptable to tailor the
   experience but that's likely done in the last mile _(eg: props, themes)_.
   There is still a single core. It's important to define what the core of your
   system is. Maybe it's the entire system if there is a single type of user and
   application. Maybe it's only a set of fundamental building blocks. Regardless,
   at the core there is only a single system.
   1. **Be cautious of the "hard fork", "re-write", or the like**: it may be
      tempting to fork or start from scratch after a recent redesign. However,
      that means there are now two systems. Do changes to button functionality need
      to be made in both forks? Is one being deprecated? Is it feasible to swiftly
      replace all existing usages to return to a single system? Having more than
      a single system can lead to unintentional inconsistencies. This not only
      results in a confusing experience for users, but also a confusing experience
      for designers and engineers who need to use, maintain, and evolve the system.
      It's best to evolve the current system so any given point there is
      always a single system. This ensures consistency for users and eliminates
      confusion for designers and engineers during any type of transition.
1. **Ownership is evenly split between design and engineering**: this can
   manifest itself in a number of ways and doesn't imply a specific team organization.
   For example, this may be a single individual whose skill set is a nice balance
   between engineering and design (eg: UX engineer), or it may be a team of
   engineers and designers each focused on their strengths. The important thing
   is to have a healthy balance with collaboration and effective communication.
   While neither is the autocratic ruler of the system, each has ownership over
   certain aspects to streamline development and avoid decision paralysis.
   Ideally, this is a very collaborative process.
   1. **Design has final say on styling (UI) and functionality (UX)**: design has
      final say on anything related to styling or functionality for the system.
      Related, this means design is also responsible for defining all of the
      "atoms" in the system: colors, spacings, typographies, etc. Often these
      are manifested as variables within a system that are combined to create
      specific components.
   1. **Engineering has final say on implementation details**: engineering has
      final say when it comes to the implementation details. For example,
      whether to use vanilla CSS or CSS-in-JS. Related, this means engineering
      is responsible for the final "public" API. With React, this is the props
      and components. Even though design may define a single UI component,
      engineering can define it's actual API as multiple components (eg: tables,
      dropdowns) as long as it meets the style and functional specifications.
   1. **Product should be informed**: this one may be controversial. One of
      the challenges I've in the past was wanting product to be more involved. If done
      well, the design system should be invisible to everyone except design and
      engineering since they're the ones working with it day-to-day. Everyone
      else should only see positive symptoms of the system: more consistency,
      more velocity when developing, more accurate documentation, etc. This
      includes product. Product should be aware of the system, understand it's
      purpose, and the importance of investing time to maintain and evolve the
      system. Beyond that, they shouldn't need to care about the atoms, if it's
      CSS-in-JS, or what the API is. When product starts to become more involved
      in system related decisions I believe this indicates some part of the
      system is broken. It might mean communication has stalled, mocks don't
      match the actual system, there isn't a clear process for evolving the
      system, or any other number of issues.
1. **The design system is built in isolation**: this can have a lot of meanings
   and depends on the circumstances. Concrete examples of this may mean the system
   is built in a separate repository or it's in a separate directory/package if
   working in a monorepo. The intent is to establish clear, physical boundaries.
   1. **Invest in design system specific tooling**: part of the advantage of
      isolating the system is that tooling can be optimized for the system.
      For example, releases can be automated or documentation can automatically
      deploy when changed.
   1. **Open source it**: or get as close as possible. The point isn't that it
      is open source, but rather the journey to open sourcing it can help
      encourage good practices. Would you put business critical (or sensitive)
      logic in something open source? Would you open source something without
      proper test coverage? Would you open source something without proper
      documentation? Hopefully all of the answers are no. It's probably unlikely
      others will actually use it but it encourages good practices. There is
      clear separation between the system and business logic. If done well, it
      can also benefit your design and engineering credibility in the community.
1. **Be specific and intentional about the public API**: there should be a finite
   number of combinations of props and components. If there are an infinite number
   of combinations or [impossible states](https://kentcdodds.com/blog/make-impossible-states-impossible)
   it leads to confusing APIs and likely unexpected bugs.
   1. **This means no `className`**: What's the total number of unique values?
      It's the number of all possible unique CSS classes, which may as well be
      infinite. Trying to build and maintain a component to handle an infinite
      number of styles is impossible. It _will_ eventually break. One common
      response is "but the system is too constraining." Yes, it is.
      That's the point. When a new use case is presented, the system should
      evolve to handle the new case but constraint against anything else. It
      shouldn't be one-offed by overriding styles with a `className`. Violating
      this principle leads to inconsistency and maintenance nightmares. For
      example, say you need to adjust the text color for a component but it also
      accepts a custom class name. Now, you need to audit every single usage and
      see if it's overriding the background color and verify the new text color
      is still accessible on the random background colors. Now imagine this is a
      button component. For a while, it's possible to manually check every
      single usage. In a large app this could take weeks, all for a single line
      of code to adjust text color. The short term benefit of adding a
      `className` prop "to move quickly" doesn't warrant the long term
      maintenance cost.
   1. **Be explicit with attributes**: this also applies to any other attributes.
      Think critically when adding a new prop whether or not it could result in the
      component having infinite combinations. For example, instead of accepting
      any arbitrary values, maybe [inverting control](https://kentcdodds.com/blog/inversion-of-control)
      provides the flexibility you need but keeps the internals simple and bounded
      by offloading to the consumer.
1. **Have a well defined process for adding new components**: this again depends
   on the circumstances but it's important to clearly define so engineers and
   designers know how to introduce components and evolve the system. The
   following principles can be used as a starting point as an approach for
   evolving a system. These principles can help keep the system "clean." Meaning
   only truly reusable, robust, and flexible components exist. This helps avoid
   littering the system with components that are used in only one place or 
   developed with one specific feature in mind.
   1. **Avoid adding new components directly to the system**: it's very hard
      _(often impossible)_ to predict every possible usage of a component with a
      sample size of one. This makes it hard to optimize the API for flexibility,
      understandability, and maintainability without knowing the end state (all
      the possible usages). Remember,
      [AHA (Avoid Hasty Abstractions)](https://kentcdodds.com/blog/aha-programming).
   1. **Develop components in feature specific context**: keep the scope as
      narrow as possible. Even though "we know this component will eventually be
      used a lot", priorities shift, designs change, and the product fluctuates.
      Once the component has been used in at least three unique features then it
      can be considered eligible to get "promoted" to the system (but doesn't have
      to be). This can help improve confidence that the API and implementation will
      properly handle multiple use cases.
   1. **The wrong abstraction is worse than no abstraction**: this isn't unique
      to design systems but is worth repeating. Are they _really_ the same
      component?

# Conclusion

These are principles that are distilled from my experience. Inevitably, these
will evolve with principles becoming more detailed, getting added, or being 
removed. 

Do you have additional supporting evidence or counter examples?
[I would love to hear your thoughts](https://twitter.com/spencerskovy) on these
principles or others you feel are missing.

_Credit to [Principle by Ray Dalio](https://www.goodreads.com/book/show/34536488-principles)
for inspiration on the writing style and formatting._
