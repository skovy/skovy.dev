---
date: 2020-06-22T09:00:00.000Z
title: "Typescript Explained In Javascript: Conditional Types"
description: "Exploring TypeScript's Conditional Types with JavaScript"
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by John Barkiple"
series:
  name: "TypeScript explained in JavaScript"
  order: 4
tags:
  - "typescript"
  - "conditional types"
---

Throughout the course of writing software, it's likely you'll eventually have
a need to conditionally return different values from a function depending
on it's input. Or, maybe a second parameter that depends on the value of the
first parameter.

This concept is easy to handle with JavaScript at runtime, but is not as trivial
to strictly type at compile time.

## JavaScript

Let's start with a JavaScript function that accepts an array and allows filtering,
or omitting any values of a specific type.

```javascript
const omitByType = (array, type) => {
  return array.filter(value => typeof value !== type);
};

console.log(omitByType(["a", 10, "b", false, "c"], "boolean"));
// ["a", 10, "b", "c"]
console.log(omitByType(["a", 10, "b", false, "c"], "number"));
// ["a", "b", false, "c"]
console.log(omitByType(["a", 10, "b", false, "c"], "string"));
// [10, false]
console.log(omitByType(["a", 10, "b", false, "c"], "object"));
// ["a", 10, "b", false, "c"]
```

Each invocation uses the same input, but changes the second argument. In each
case, values of that type are filtered out.

- The first case no longer contains `false` because it's a `boolean`.
- The second no longer contains `10` because it's a `number`.
- The third case no longer contains `"a"`, `"b"`, or `"c"` since they're all a `string`.
- The last case returns the same values since none of them are an `object`.

Should this last example be allowed? In this case it's an unnecessary operation.
This isn't straightforward to fix at runtime, but could this be solved instead
at compile time with strict typings? How would this constraint be reflected in
the type system?

## TypeScript

This is a simple function, but requires fairly complex typings so let's start
with more basic typings and build from there.

```typescript
const omitByType = (array: any[], type: string): any[] => {
  return array.filter(value => typeof value !== type);
};
```

These typings are an incremental improvement since they at least require the
first parameter to be an array and the second parameter to be a `string`. This
eliminates entirely invalid parameters, but is not strict enough to catch
a `type` that is not contained within the `array`.

```typescript
// Now invalid...
omitByType("invalid", "object");
omitByType([], Object);

// Still valid...
omitByType([1], "object");
```

So how do we make this last example invalid? The challenge is that the `type`
parameter is dependent (conditional) on the type of the `array` contents. This
requires conditional types. To start, we know we need access to the type
of the `array` parameter which can be achieved with a generic.

```typescript
const omitByType = <InputArray extends any[], Type extends string>(
  array: InputArray,
  type: Type
): any[] => {
  return array.filter(value => typeof value !== type);
};
```

> If you're not familiar with the `extends` keyword, I recommend first reading
> a previous post in this series that
> [covers it in more depth](/typescript-explained-in-javascript-extends).

This updated definition is equivalent to the original, but now the type
`InputArray` can be referenced in other parts of the function deceleration.
`Type` still allows any string, so let's constrain it based on the type of
`InputArray`.

```typescript
const omitByType = <InputArray extends any[], Type extends InputArray[number]>(
  array: InputArray,
  type: Type
): any[] => {
  return array.filter(value => typeof value !== type);
};
```

Now, the `Type` generic parameter must extend a type of the array contents.
`InputArray[number]` returns a type (likely a union) that represents all of the
values in the array. However, this isn't quite correct yet, let's look at an
example:

```typescript
// Argument of type '"number"' is not assignable to parameter of type 'number'.
omitByType([1], "number");
```

The problem is that `Type` is now inferred as the type `number`, not the string
`"number"`. How do we convert the type `number` to the string `"number"`?
This is our first use for a conditional type. To start, let's only handle
the `number` type.

```typescript
type TypeToString<Type> = Type extends number ? "number" : "unknown";

type ExampleOne = TypeToString<number>; // "number"
type ExampleTwo = TypeToString<string>; // "unknown"
```

The `TypeToString` type is a conditional type. There are two main aspects to
focus on:

1. This is another use case for the `extends` keyword. It behaves in a similar
   way as it's other uses to constrain types. In this case, I like to think of
   it as a boolean condition, does `Type` extend `number`?
1. It uses the same syntax as JavaScript's [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).
   The condition `Type extends number` will either be true or false.
   If it's true, it will evaluate to `"number"`, otherwise it will evaluate to
   `"unknown"`.

This syntax is the basis for all conditional types. The mental model
of an `if` statement in JavaScript can help reason through complex conditional
types. This isn't a direct comparison, but this could be roughly compared to
something like the following function in JavaScript.

```javascript
const typeToString = type => {
  if (typeof type === "number") {
    return "number";
  } else {
    return "unknown";
  }
};
```

Or, using the more comparable ternary operator syntax:

```javascript
const typeToString = type => (typeof type === "number" ? "number" : "unknown");
```

Now that we have the basics of conditional types we can complete the typings.
First, `TypeToString` only handles `number` but we want to handle more types.

```typescript
type TypeToString<Type> = Type extends string
  ? "string"
  : Type extends number
  ? "number"
  : Type extends boolean
  ? "boolean"
  : Type extends undefined
  ? "undefined"
  : Type extends Function
  ? "function"
  : "object";
```

This is fairly verbose, but this would be the equivalent of nesting five `if`
statements, or a large `if...else if...else` statement.

The function can now be updated to use this helper.

```typescript
const omitByType = <
  InputArray extends any[],
  Type extends TypeToString<InputArray[number]>
>(
  array: InputArray,
  type: Type
): any[] => {
  return array.filter(value => typeof value !== type);
};
```

This no longers allows a `type` that doesn't exist in the `array`!

```typescript
// Argument of type '"object"' is not assignable to parameter of type '"number"'.
omitByType([1], "object");
```

To recap so far:

- `InputArray` is a generic that represents the type of `array`. It also has a
  constraint that it must be an array enforced with `extends any[]`.
- `Type` is also a generic that represents the type of `type`. However, it
  has a more complex constraint. First, `InputArray[number]` will return a type
  that represents all of the array's values. If the `array` was `[1]` then the
  type would be `string`, if `[1, "a", true]` then the type would be
  `number | string | boolean`. However, we need these types as string literals so
  we pass this type to the `TypeToString` which uses conditional types to convert
  that value to `"string"` or `"number" | "string" | "boolean"`, respectively.

So trying to pass `"object"` will not be allowed (unless the `array` contained
something like `[1, {}]`).

The parameters are now strictly typed, but the return value is still `any[]`.
Let's improve this. We could use `InputArray` which would be more strict, but
it would still contain the type of values that get filtered. So how can the
return value return the same contents excluding the values of the type removed?

First, we need a way to exclude a type from another type. For example, if given
a union `string | number` how can `number` be excluded, or `string`? This again
can be achieved with conditional types.

```typescript
type Diff<Types, TypesToExclude> = Types extends TypesToExclude ? never : Types;
type Example1 = Diff<string | number | boolean, string>; // number | boolean
type Example2 = Diff<string | number | boolean, number | string>; // boolean
type Example3 = Diff<string | number | boolean, object | boolean>; // string | number
```

Fortunately, the type `Diff` doesn't need to be defined because TypeScript
[predefines several conditional types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#predefined-conditional-types). One of those is `Exclude` which is identical
to the `Diff` implementation above.

Now that we can exclude one type from another, the type of the array contents
is the first type argument and the type being excluded is the second type
argument. However, the `Type` generic is now a string (eg: `"number"`) so it
needs to be converted back to a type. For this, let's define yet another
conditional type `StringToType` that is the inverse of `TypeToString`.
With that, we have all the pieces we need for a complete example.

```typescript
type TypeToString<Type> = Type extends string
  ? "string"
  : Type extends number
  ? "number"
  : Type extends boolean
  ? "boolean"
  : Type extends undefined
  ? "undefined"
  : Type extends Function
  ? "function"
  : "object";

type StringToType<Str> = Str extends "string"
  ? string
  : Str extends "number"
  ? number
  : Str extends "boolean"
  ? boolean
  : Str extends "undefined"
  ? undefined
  : Str extends "function"
  ? Function
  : object;

const omitByType = <
  InputArray extends any[],
  Type extends TypeToString<InputArray[number]>
>(
  array: InputArray,
  type: Type
): Array<Exclude<InputArray[number], StringToType<Type>>> => {
  return array.filter(value => typeof value !== type);
};
```

To recap the return value:

- First, we are getting the type of the array contents using `InputArray[number]`
  which will return a type, usually a union if the array contains mixed values
  (eg: `string | number`).
- Then, we are converting the `Type` which is a string literal back to a type
  (eg: `"string"` -> `string`).
- Then, these two arguments are passed to `Exclude` to remove the values of the
  type that is being filtered out. Finally, that type is then redefined as the
  contents of an `Array`.

## Definition

Conditional types were [introduced in TypeScript 2.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html).

> A conditional type selects one of two possible types based on a condition
> expressed as a type relationship test: `T extends U ? X : Y`. - [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)

## Conclusion

Conditional types can be daunting because they are often combined in complex
ways. When taking a step back, the syntax for conditional types is already
a familiar concept in JavaScript.

This example covered one use case, but when combined with other concepts, such 
as [mapped types](/typescript-explained-in-javascript-mapped-types)
it can unlock even more possibilities.
