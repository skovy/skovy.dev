---
to: content/blog/<%= name %>/index.md
---
---
date: <%= date %>
title: "<%= h.changeCase.title(name) %>"
description: "<%= description %>"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Samantha Lam"
tags:
<% tags.forEach(function(tag){ -%>
  - "<%= tag %>"
<% }) -%>
---

Content goes here! 🎉
