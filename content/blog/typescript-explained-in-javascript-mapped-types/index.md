---
date: 2020-05-20T09:00:00.000Z
title: "Typescript Explained In Javascript: Mapped Types"
description: "Exploring TypeScript's Mapped Types with JavaScript"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Kelsey Knight"
tags:
  - "typescript"
  - "mapped types"
---

This is the 3rd post in the series "TypeScript explained in JavaScript." The
previous two posts covered the `keyof` operator and `extends` keyword. This
is the first post to begin building on top of these concepts to begin
exploring more complex types.

## JavaScript

Before talking about what mapped types actually are, let's start with the
concept of "mapping" in JavaScript. Hearing this, you might
think of [JavaScript's Array `map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function.

```javascript
const list = [1, 2, 3, 4];
const double = value => value * 2;
const doubled = list.map(double);
console.log(doubled); // [ 2, 4, 6, 8 ]
```

Here, we were able to take a list of numbers and double every value. The `map`
function will call the `double` function for every item and pass in the value.
This works really well for arrays, but how is something like this achieved with
objects? There are a few ways.

```javascript
const list = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
};

const evens = {};
for (let key in list) {
  if (list[key] % 2 === 0) {
    evens[key] = true;
  } else {
    evens[key] = false;
  }
}

console.log(evens);
```

```json
{ "one": false, "two": true, "three": false, "four": true }
```

```javascript
const evens = {};
Object.keys(list).forEach(key => {
  if (list[key] % 2 === 0) {
    evens[key] = true;
  } else {
    evens[key] = false;
  }
});
```

## TypeScript

```typescript
interface List {
  one: number;
  two: number;
  three: number;
  four: number;
}

const list: List = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
};

type Evens = { [Key in keyof List]?: boolean };

const evens: Evens = {};
const keys = Object.keys(list) as (keyof List)[];

keys.forEach(key => {
  if (list[key] % 2 === 0) {
    evens[key] = true;
  } else {
    evens[key] = false;
  }
});

console.log(evens);
```

## Definition

## Conclusion
