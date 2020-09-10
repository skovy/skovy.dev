---
date: 2020-09-09T17:00:00.000Z
title: 'Controlling a component''s rendered element with an "as" prop'
description: "Decoupling a component's visual and functional implementation from it's semantic meaning"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Jean-Philippe Delberghe"
tags:
  - "design systems"
  - "react"
  - "typescript"
---

When working on reusable components, such as those in a design system, it
can be common for component to contain what seems like a single functionality,
such a Button. It's functionality is generally to perform an action. However,
if that action opens a modal, it should be a `button` element whereas if that
action navigates to a new page it should be an `a` (anchor) element.

There are a number of ways this could be handled. In this example, it could be
inferred if the `href` prop is present. Or, there could be a boolean prop
such as `isAnchor` or `isButton` to opt-in and default to the other element.
Either of these could work with this example, but what about another component
that may need to support three or more element types? Or, what if there isn't
a prop such as `href` that can imply the element type?

## The `as` prop

As you can see with only this one example, it's hard to expand any of these
patterns more generally. This is where the `as` prop pattern can help solve
all of these issues, and provide a general solution for most components.

Continuing with this Button example, how would this look using the `as` prop?

```typescript
interface ButtonProps {
  as: "a" | "button";
}

const Button: React.FC<ButtonProps> = ({ as: Tag, children }) => (
  <Tag>{children}</Tag>
);

// Example usage:
//  <Button as="button">Click me!</Button>
//  <Button as="a">Click me!</Button>
```

Here, a `Button` component is defined with two props: `as` and `children`.
The `children` prop controls the Button text to display. The `as` prop controls
the rendered element, or HTML tag. Now, there is a single component to capture
an action, but the underlying element can be controlled depending on the use
case.

There are several problems with this example. For example, it doesn't accept
the proper `onClick` or `href` attributes for `button` and `a` elements.

It may also seem tedious to make the `as` prop required and it could be tempting
to assign a default value for the `as` prop and make it optional.

```typescript
interface ButtonProps {
  as?: "a" | "button";
}

const Button: React.FC<ButtonProps> = ({ as: Tag = "button", children }) => (
  <Tag>{children}</Tag>
);

// Example usage:
//  <Button">Click me!</Button>
//  <Button" as="a">Click me!</Button>
```

This can work for simple cases, but we'll cover why it can be preferable to make
it required, even if it can be somewhat redundant.

## Advantages and Disadvantages

### Disadvantages

- Decouples visuals/functionality from semantics
- Requires explicitly thinking about an element, therefore increasing the chances
  of choosing the correct element and leading to a more semantic/accessible app

### Disadvantages

- Another prop, potentially redundant

## Discriminated Props with TypeScript

## Conclusion

It took me a while to come around to the `as` prop pattern, but in hindsight
it now seems like an obvious choice. My initial concern was that it exposed
implementation details that should be only the component's concern. Once
I started to think about it as a pattern to decouple the defined visual 
appearance and functionality from the semantic markup it became much easier to
reason about.