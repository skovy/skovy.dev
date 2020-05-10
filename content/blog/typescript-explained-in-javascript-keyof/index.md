---
date: 2020-05-10T10:00:00.000Z
title: "TypeScript explained in JavaScript: keyof"
description: "Exploring different aspects of TypeScript using JavaScript."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Samantha Lam"
tags:
  - typescript
  - keyof
---

This is the first post in a series to explore powerful but potentially confusing
aspects of TypeScript using more familiar patterns in JavaScript to provide
analogies. This series will assume you have some familiarity with Javascript but
only the basics of TypeScript. If you've gone through
[TypeScript Tooling in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)
and were able to understand most of it, you should be in the perfect place!

This series will start with `keyof` since it will be a necessary building block
for other typings.

## JavaScript

Let's start with some JavaScript:

```javascript
const user = {
  firstName: "Type",
  lastName: "Script"
};

const properties = Object.keys(user);

console.log(properties); // [ "firstName", "lastName" ]
```

Here we are defining a `user` object and giving that user a first and last
name. We are then using the
[`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
method available since ES5. This returns an array of the objects properties (or keys).
In this example that is `["firstName", "lastName"]`.

How could this be used in practice? Let's say you have a helper method that
accepts an object and property name and will return the value for the given
object and key. However, you only want to allow valid keys that exist for
the given object. To handle this, it may look something like the following:

```javascript
const getProperty = (obj, key) => {
  const keys = Object.keys(obj);

  if (keys.indexOf(key) === -1) {
    throw new Error(`Unexpected key "${key}" does not exist in keys: ${keys}`);
  }

  return obj[key];
};

console.log(getProperty(user, "firstName"));
// "Type"

console.log(getProperty(user, "lastName"));
// "Script"

console.log(getProperty(user, "middleName"));
// Unexpected key "middleName"" does not exist in keys: firstName,lastName
```

This `getProperty` helper only accepts a `key` argument that exists in the passed
`obj`. However, this is a _runtime_ check, meaning this error isn't seen until
the code actually runs. Could we move this earlier, to _compile_ time before
even running the code?

## TypeScript

This is where the `keyof` operator comes in. It conceptually behaves identical
to the `Object.keys` method, but is a type instead of a literal value. Let's
define an interface for the `user` object.

```typescript
interface User {
  firstName: string;
  lastName: string;
}

const user: User = {
  firstName: "Type",
  lastName: "Script"
};
```

So translating the JavaScript `Object.keys(user)` to TypeScript would now be
`keyof User`.

```typescript
type Keys = keyof User; // "firstName" | "lastName"
```

This returns the union type of all the properties in the `User` interface.
The pipe operator (`|`) can be thought of as "or", so this says that the type
`Keys` will be `firstName` or `lastName`. This is exactly what we want to enforce
at compile time. So building off this, the `getProperty` method can be updated:

```typescript
const getProperty = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) =>
  obj[key];
```

This `getProperty` method now has two generic types: `Obj` and `Key`. However,
this definition is constraining `Key` by saying it _must_ extend the value
of `keyof Obj`. In the case of passing `user` to this method, `keyof Obj` is
`firstName` or `lastName`. This means `Key` _must_ be `firstName` or `lastName`.
A later post will cover `extends` in more depth.

Now using it provides the same error, but now at compile time! This means you
can get this feedback directly in your editor, one of the great values of TypeScript.

```typescript
console.log(getProperty(user, "firstName"));
// "Type"

console.log(getProperty(user, "lastName"));
// "Script"

console.log(getProperty(user, "middleName"));
// Argument of type '"middleName"' is not assignable to parameter of type '"firstName" | "lastName"'
```

## Technical Definition

The `keyof` operator (also known as the _index type query operator_) was originally introduced in
[TypeScript 2.1](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html).
The precise definition from the TypeScript documentation:

> For any type `T`, `keyof T` is the union of known, public property names of `T`

## Conclusion

The `keyof` operator is one of the building blocks for more complex typings
such as conditional types or mapped types that will be covered in later posts.
