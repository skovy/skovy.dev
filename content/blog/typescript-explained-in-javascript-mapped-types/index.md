---
date: 2020-06-06T08:00:00.000Z
title: "Typescript Explained In Javascript: Mapped Types"
description: "Exploring TypeScript's Mapped Types with JavaScript"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Kelsey Knight"
series:
  name: 'TypeScript explained in JavaScript'
  order: 3
tags:
  - "typescript"
  - "mapped types"
---

This is the 3<sup>rd</sup> post in the series "TypeScript explained in JavaScript."
The previous two posts covered the `keyof` operator and `extends` keyword. This
is the first post to begin building on top of these concepts to explore more
complex typings.

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
function will call the `double` function for every item and pass in the value
from the `list`. The value returned will be the new value in the final `doubled`
array. This works well for arrays, but how is something like this achieved
with objects? There are a few ways.

```javascript
const list = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
};

const evens = {};
for (const key in list) {
  if (list[key] % 2 === 0) {
    evens[key] = true;
  } else {
    evens[key] = false;
  }
}
```

This first approach uses a
[`for...in` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
to iterate through all the enumerable properties of the list object. It builds a new
object `evens` with the same keys as `list` but each value is now a boolean
indicating whether or not it is even. The resulting `evens` object will look
like the following.

```json
{ "one": false, "two": true, "three": false, "four": true }
```

Another approach is to use the `Object.keys` method discussed in the [first
post exploring `keyof`](/typescript-explained-in-javascript-keyof/). This
will return an array of the keys which can then be iterated through using
the [Array `forEach` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
It works very similar to the `map` function above, but it doesn't return anything.

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

Now that we know how mapping and iterating over arrays and objects looks in
JavaScript, what could this look like with some types?

## TypeScript

To start, let's create an interface to describe the shape of the `list` object.

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
```

Now, taking the last JavaScript snippet directly from above results in two issues.
Both are: `Element implicitly has an 'any' type because expression of type 'string' can't be used to index type ...`.

The first is a result of using `Object.keys`. It returns `string[]` but the
`list` only allows four specific strings: `one`, `two`, `three`, `four`. The easiest fix
is to cast the result. Another option is to [define a method that uses
`Object.keys` but with stricter typings](https://stackoverflow.com/a/52856805/2690790).
For now, let's cast it to be an array of only the keys contained within the list.

```typescript
const keys = Object.keys(list) as Array<keyof List>;

keys.forEach(key => {
  if (list[key] % 2 === 0) {
    evens[key] = true;
  } else {
    evens[key] = false;
  }
});
```

The other issue is with `evens`. It's initialized as `{}` which means it's
inferred typed is an empty object with no keys. How do we type this to say it
has the same keys as the `list`, but `boolean` values instead of `number`?

This is where mapped types come in. The first step in JavaScript was to use
`Object.keys` to get an array of keys.
As [covered in the first post](/typescript-explained-in-javascript-keyof/)
`keyof` is roughly the equivalent operator in the type system. So we now
have a union of the keys with `keyof List`. The next step in JavaScript was to
iterate through these values. Unlike JavaScript, there's only one way to do this
with types and it's most similar to the `for...in` syntax.

```typescript
type Evens = { [Key in keyof List]: boolean };
```

The outer curly braces are saying this is an object. Within the square brackets
is the equivalent to `Object.keys(list).forEach(...)`. It's saying that for each
key (`Key`) in (`in`) the union of keys (`keyof List`) it's value is a boolean
(`boolean`).

There is one more issue though. To start, `evens` is empty. One way to work
around this is to say all the keys are optional. This can be achieved by marking
every field as optional with a question mark.

```typescript
type Evens = { [Key in keyof List]?: boolean };
```

Expanded out, this is now equivalent to the following.

```typescript
type Evens = {
  one?: boolean;
  two?: boolean;
  three?: boolean;
  four?: boolean;
};
```

Now the type can be used and all type issues are solved!

```typescript
const evens: Evens = {};
```

This simple example could also as easily be done by hand without the use of
mapped types. However, the benefits of mapped types become more apparent when working with large or complex typings.
Additionally, it keeps the derived type in-sync so if `five` is added to `List`,
`Evens` will also immediately include it. Finally, in combination with generics,
they can be reused. For example, what if there were many of these lists?

```typescript
interface ListTwo {
  five: number;
  six: number;
  seven: number;
}
```

The same logic could be duplicated, but since it needs to be reused many times
a type that accepts an "argument" (generic) that is the list can be used.

```typescript
type Boolify<Input> = { [Key in keyof Input]?: boolean };

type Evens = Boolify<List>;
type EvensTwo = Boolify<ListTwo>;
```

This can be broken down even further. What if it accepted any keys and their value?

```typescript
type Record<Keys extends string | number | symbol, Value> = {
  [Key in Keys]: Value;
};

type Evens = Record<keyof List, boolean>;
type EvensTwo = Record<keyof ListTwo, boolean>;
```

Now `Record` can be used for any keys and given value.

```typescript
type Example = Record<"a" | "b" | "c", number>;
// Results in:
// {
//   a: number;
//   b: number;
//   c: number;
// }
```

TypeScript actually already defines `Record` along with many other
[utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
such as `Partial` for making all the properties optional.

Mapped types are fairly flexible, so there are a number of ways the types could
be written. For example, with `Record` and `Partial` it could look like the following.

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

const keys = Object.keys(list) as Array<keyof List>;
type Evens = Partial<Record<keyof List, boolean>>;

const evens: Evens = {};
keys.forEach(key => {
  if (list[key] % 2 === 0) {
    evens[key] = true;
  } else {
    evens[key] = false;
  }
});
```

## Definition

The [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)
also provides a more formal and succinct definition.

> In a mapped type, the new type transforms each property in the old type in the same way.

The mapped type syntax has three parts:

1. The type variable `Key`, which gets bound to each property in turn.
1. The string union `keyof List`, which contains the names of properties to iterate over (`"one"`, `"two"`, `"three"`, `"four"`).
1. The resulting type of the property (`boolean`).

## Conclusion

In summary, mapped types behave in a conceptually similar way to mapping
over an array or using a `for..in` statement in JavaScript. They are an
invaluable tool in the typing tool belt. They help derive complex types from
other complex types, avoid duplication, and guarantee types will stay in-sync.
