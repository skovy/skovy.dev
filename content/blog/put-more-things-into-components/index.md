---
date: 2020-05-06T10:00:00.000Z
title: "Put more things into Components"
description: "Capture more logic and concepts into components."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Frank Mckenna"
tags:
  - react
  - components
---

One of the great features of React is the encapsulation and reusability of
components. It not only allows consistency across a codebase and product, but 
also allows easily reading and understanding a component tree because of it's 
declarative nature without needing to understand all of the implementation details.

What about the code and logic that isn't encapsulated in those components? This 
logic is often scattered and duplicated across the codebase in component's render 
methods, lifecycle methods or state. Why isn't more of this code encapsulated in 
components?

The most commonly overlooked examples are non-visual things like data-fetching, 
tracking, experimentation, or layout logic that can be duplicated across hundreds 
of components. However, the needs for these can fit perfectly into the 
component paradigm and it offers a handful of advantages.

Let's look at a few simplified examples.

## Layout

Common patterns such as buttons and avatars are components that are often added 
early on in many projects, maybe as part of a design system. However, there
are plenty of equally important non-visual _(in the sense they don't render anything visual
themselves)_ aspects particularly around layout and spacing that are often ignored.

For example, grids, spacing, or stacking that help position other visual
elements like buttons and avatars. One common need is to vertically align two
elements, or push two elements to opposite sides of their container. Both of
these problems can be easily solved with CSS flex attributes. However, these
needs are so common that something like the following code with a few tweaks 
may be in dozens of components.

```typescript
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }}
>
  <div style={{ background: "red" }}>Red Content</div>
  <div style={{ background: "blue", height: 100 }}>Blue Content</div>
</div>
```

Whether you're using CSS-in-JS, vanilla CSS, or CSS Modules it this can lead to
a lof one-off elements and styles. Additionally, to understand what's happening 
it requires mentally parsing all of the CSS attributes or even follow a class to 
another file to see the what CSS attributes are applied to understand what's
happening. What if this pattern of providing a basic flex layout was 
encapsulated as part of a component?

```typescript
import * as React from "react";

type Props = Pick<React.CSSProperties, "alignItems" | "justifyContent">;

export const Flex: React.FC<Props> = ({
  children,
  alignItems,
  justifyContent
}) => (
  <div style={{ alignItems, justifyContent, display: "flex" }}>{children}</div>
);
```

This component achieves the same thing, but now it gives a name to the concept: `Flex`.
These styles are all in one component and this CSS can be reused across all of 
these components reducing the overall size of your CSS bundle (assuming the
one-off CSS above was duplicated in varying forms across the codebase). 
Lastly, now when reading the component tree, it's immediately clear all this
component is doing is providing some flex layout.

```typescript
<Flex alignItems="center" justifyContent="space-between">
  <div style={{ background: "red" }}>Red Content</div>
  <div style={{ background: "blue", height: 100 }}>Blue Content</div>
</Flex>
```

This is a simplified example, but the idea can apply to any layout related
concepts: grids, spacing, etc. For example, how often is there a need to apply
margin between two component? Is this achieved with one-off CSS, or is it 
encapsulated in components?

## Tracking

Another common pattern is the need to implement some type of tracking to
understand how people are using an application. The two popular ones are
impression and click tracking to understand what someone is seeing and what
they are interacting with.

Assuming `track` is actually sending this information somewhere, a simple
implementation may look like the following.

```typescript
export const track = (event: object) => console.log(event);

const TrackExample = () => {
  React.useEffect(() => {
    // It's probably preferable to use something like react-visibility-sensor
    // to only track impressions for things someone could have actually seen.
    track({ name: "track-example", type: "impression" });
  }, []);

  const handleClick = () => {
    track({ name: "track-example", type: "click" });
  };

  return <button onClick={handleClick}>Plz Track Me</button>;
};
```

When this component mounts an impression will be tracked, and when someone
clicks the button that will also be tracked. This approach may require adding
this `useEffect` and `handleClick` in dozens of components.

What if you want to swap out `track` for another method or change it's API? Now
all of these components need to be updated. Or, what if you originally wrote
these all as components within `componentDidMount`? If you want to use a hook
all these components would need to be refactored. What if you want to track
the impression at a more specific component in the tree? That would require a
new component to isolate that part of the tree with it's own `useEffect` hook.

Instead, what if all this logic around `track` and mounting was only written
once as reusable components?

```typescript
import * as React from "react";
import { track } from "..";

type Props = { name: string };

const Click: React.FC<Props> = ({ name, children }) => {
  const handleClick = () => {
    track({ name, type: "click" });
  };

  return <span onClick={handleClick}>{children}</span>;
};

const Impression: React.FC<Props> = ({ name, children }) => {
  React.useEffect(() => {
    track({ name, type: "impression" });
  }, [name]);

  return <>{children}</>;
};

export const Track = {
  Impression,
  Click
};
```

Now, all of the above problems are solved. These components can be added to
any part of the tree. Your entire app could be a single huge component and still
have fine grain control over impression tracking. Now, it doesn't matter if
`Track.Impression` is using `componentDidMount` or `useEffect`. And if it did
matter, there's only one place it needs to be updated. Finally, if the `track`
method needs to be swapped out, it only needs to be done in one place.

```typescript
<Track.Impression name="track-example">
  <Track.Click name="track-example">
    <button>Plz Track Me</button>
  </Track.Click>
</Track.Impression>
```

Since the impression tracking is really only a hook, you make consider using
a custom `useImpressionTracking` instead. However, this still has the problem
of needing to create a new component anytime you need to track an impression
at a specific point in the tree. Additionally, click tracking doesn't make
as much sense as a hook so I'd prefer to keep consistent APIs between the two
(components).

This can also easily extend and apply to experimentation or feature toggling.
It can also reuse these tracking components within since you likely want to
impression tracking anytime and experiment is (or isn't) rendered.

## Data-Fetching

```typescript
const FetchExample = () => {
  const [state, setState] = React.useState<
    | {
        status: "loading" | "error";
      }
    | {
        status: "loaded";
        response: object;
      }
  >({
    status: "loading"
  });

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/4`)
      .then(response => response.json())
      .then(response => {
        setState({ status: "loaded", response });
      })
      .catch(() => {
        setState({ status: "error" });
      });
  }, []);

  switch (state.status) {
    case "error":
      return <div>An error occurred.</div>;
    case "loading":
      return <div>Loading...</div>;
    default:
      return <div>{JSON.stringify(state.response)}</div>;
  }
};
```

```typescript
import * as React from "react";

type State =
  | {
      status: "loading" | "error";
    }
  | { status: "loaded"; response: object };

interface Props {
  url: string;
  children: (state: State) => React.ReactElement<any, any> | null;
}

export const Fetch: React.FC<Props> = ({ url, children }) => {
  const [state, setState] = React.useState<State>({
    status: "loading"
  });

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setState({ status: "loaded", response });
      })
      .catch(() => {
        setState({ status: "error" });
      });

    return () => {
      // also handle cancelling the request if the url changes...
    };
  }, [url]);

  return children(state);
};
```

```typescript
<Fetch url="https://jsonplaceholder.typicode.com/posts/4">
  {state => {
    switch (state.status) {
      case "error":
        return <div>An error occurred.</div>;
      case "loading":
        return <div>Loading...</div>;
      default:
        return <div>{JSON.stringify(state.response)}</div>;
    }
  }}
</Fetch>
```

Again, you may consider creating a `useFetch` hook instead. It's achieving
the same goal as putting more logic into components.

There are plenty of existing packages that already use an API like this such
as `react-apollo`'s `Query` component and `useQuery` hook.

## Conclusion

Let's look at this all put together before and after.
