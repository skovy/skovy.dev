---
date: 2020-02-20T08:00:00.000Z
title: "Principles: Design System"
description: "General principles for building and maintaining a design system."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by ______"
tags:
  - design system
  - principles
  - rules
---

Design Systems. Today, it's almost impossible to work on an application without
hearing this phrase. But it's often used as if everyone intuitively understands
what we man when uttering "Design Systems." On the surface, it does seem like
a fairly straightforward concept; systemize your design patterns.

On the contrary, I've found design systems to be unexpectedly complex and
nuanced. This doesn't mean the end result is necessarily complex. But the road
to achieve, and maybe more so maintain an effective design system can be
challenging. There are countless variables that can define what an effective
design system is, such as the audience, application, company, or brand it's
intended to serve. Despite these differences, they're usually on the surface
(eg: colors, processes, spacing, communication style) and at the core there
are a shared set of principles that can guide any design system.

Before diving in, please note these are principles that I have experienced.
This is a snapshot of my current thinking and understanding that will
inevitably evolve going forward. I would greatly appreciate concrete feedback
if you find an incomplete or missing principle.

1. **There is only _one_ design system**:
   this may seem intuitive but when focused on the day-to-day tasks of working on
   an application it can be easy to lose sight of this. What if I'm building
   multiple apps or have multiple "types" of users _(eg: consumers, enterprises,
   administrators)_? Some level of customization is acceptable to tailor the
   experience but that's likely done in the last mile _(eg: props, themes)_.
   There is still a single core. It's important to define what the core of your
   system is. Maybe it's the entire system if there a single type of user and
   application. Maybe there are fundamental building blocks that are always used.
   1. **Be cautious of the "hard fork", "re-write", or the like**: it may be
      tempting to [fork](git link here plz) or start from scratch after a redesign.
      However, there are now two systems. Do changes to button functionality need
      to be made in both forks? Is one being deprecated? Is it feasible to swiftly
      replace all existing usages to return to a single system? Having more than
      a single system can lead to unintentional inconsistencies. This not only
      results in a confusing experience for users, but also a confusing experience
      for designers and engineers who need to use, maintain, and evolve the system.
      It's probably best to evolve the current system so any given point there is
      always a single system.
1. **Ownership is evenly split between engineering and design**: this can be
   manifested in a number of ways and does not imply a specific team organization.
   For example, this may be a single individual whose skill set is a nice balance
   between engineering and design (eg: UX engineer), or it may be a team of
   engineers and designers each focused on their strengths. The important thing
   is to have a healthy balance with collaboration and effective communication
   with neither being the autocratic ruler of the system. However, each has
   more ownership over certain aspects.
    1. **Design has final say on styling (UI) and functionality (UX)**:
    1. **Engineering has final say on implementation details**:
    1. **Product**: ??? - if done well, the system should be fairly invisible,
    mocks they see should match the system. something broken here indicates
    something is broken in the engineering and design process (eg: one side has too much say,
    they're not communicating clearly and components are being used in mocks that 
    differ from what exists). Product should be aware of the system an understand
    it's purpose and the importance of maintaing and prioriziatin the work but
    that should be the extent of their involvement.
