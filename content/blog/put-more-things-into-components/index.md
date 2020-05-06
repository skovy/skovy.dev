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
components. It not only allows consistency across the codebase and product,
but allows easily reading and understanding a component tree because of the
declarative nature. But what about the code and logic that isn't in those
components? This logic is often scattered across the codebase in React
lifecycle methods or in `render` before returning the component tree. Why
isn't more of this code encapsulated in components?

I believe **we often overlook these non-visual components**. Things like
layout, tracking, experimentation, or data-fetching logic can be duplicated
across hundreds of components in lifecyle methods. This fit perfectly into
the component paradigm.

Let's look at a few examples.

## Layout

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

```typescript
<Flex alignItems="center" justifyContent="space-between">
  <div style={{ background: "red" }}>Red Content</div>
  <div style={{ background: "blue", height: 100 }}>Blue Content</div>
</Flex>
```

## Tracking

```typescript
export const track = (event: object) => console.log(event);

const TrackExample = () => {
  React.useEffect(() => {
    track({ name: "track-example", type: "impression" });
  }, []);

  const handleClick = () => {
    track({ name: "track-example", type: "click" });
  };

  return <button onClick={handleClick}>Plz Track Me</button>;
};
```

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

```typescript
<Track.Impression name="track-example">
  <Track.Click name="track-example">
    <button>Plz Track Me</button>
  </Track.Click>
</Track.Impression>
```

hooks:

- still requires a new component if you want fine detail over which section is impressed
- click tracking doesn't make sense has a hook so i'd rather have consistent APIs

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

## Conclusion
