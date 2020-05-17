---
date: 2020-05-12T10:00:00.000Z
title: "Typescript explained in Javascript: extends"
description: "Exploring different aspects of TypeScript using JavaScript."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Oliver Dumoulin"
tags:
  - typescript
  - extends
---

This is the 2<sup>nd</sup> post in the series "TypeScript explained in
JavaScript." The first post
[covered the `keyof` operator](/typescript-explained-in-javascript-keyof/).
In that post, the `extends` keyword was used to demonstrate one of the uses
for the `keyof` operator. This post will cover the `extends` of keyword.

## JavaScript

JavaScript itself supports the
[`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
keyword with classes since ES6. It's used to create a subclass or
child class of another class.

For example, let's say we create a simple `Book` class to represent the idea of
a book.

```javascript
class Book {
  constructor(title) {
    this.title = title;
  }
}
```

This `Book` class accepts a book's title when it's instantiated. For example,
we can instantiate a class for "The Phoenix Project."

```javascript
const book = new Book("The Phoenix Project");
```

Now, say we want to not only represent a book, but also the concept of an audio
book. You could say an audio book is an _extension_ of a book. It still has a
title, but it also has a total duration. The length of time it takes to listen
to the entire audio book.

```javascript
class AudioBook extends Book {
  constructor(title, duration) {
    super(title);
    this.duration = duration;
  }

  describe() {
    return `"${this.title}" is ${this.duration} minutes`;
  }
}
```

This `AudioBook` class not only accepts a book's title, but also the total
duration. To demonstrate a bit more functionality, the `describe` method was
added to quickly describe the book. For example, we can instantiate a class for
the audio book "Educated: A Memoir" and denote that it is 12 hours and 11 minutes
long _(or 731 minutes)_.

```javascript
const book = new AudioBook("Educated: A Memoir", 731);
console.log(book.describe()); // "Educated: A Memoir" is 731 minutes
```

We may also consider creating an `EBook` class to represent digital books that
could be read on tablets.

## TypeScript

How does this apply to TypeScript?

### Classes

Since TypeScript is a superset of JavaScript, it also supports usage of the
`extends` keyword with class decelerations. So the above code is also valid
TypeScript (minus a few missing types). However, TypeScript leverages this
concept of "extending" one thing to another in the type system. Notably,
interfaces and generics.

### Interfaces

Let's start with interfaces. If we were to create an interface for the `Book`
class from above to implement it would look like the following:

```typescript
interface Book {
  title: string;
}
```

Similarly, if we wanted to declare an interface for the `AudioBook` class, it
would look like the following:

```typescript
interface AudioBook extends Book {
  duration: number;
  describe(): string;
}
```

However, this interface is _extending_ another interface. This behaves
conceptually the same way as extending a class in JavaScript. The `AudioBook`
interface is effectively equivalent to the following:

```typescript
interface AudioBook {
  title: string;
  duration: number;
  describe(): string;
}
```

### Generics and Constraints

One of the other uses for the `extends` keyword in TypeScript as a constraint
for generics (this is concept also maps directly to conditional types which
will be an upcoming post in this series).

For example, let's say we want to define a `printTitle` function that expects
any type of `Book` (this could also be an `AudioBook` or `EBook`).

```typescript
function printTitle(book: any) {
  console.log(book.title);
}

const book = new Book("The Phoenix Project");
printTitle(book); // The Phoenix Project

const audioBook = new AudioBook("Educated: A Memoir", 731);
printTitle(audioBook); // Educated: A Memoir

printTitle("The Phoenix Project"); // undefined
```

This works mostly as expected. However, the type for `book` is declared as `any`.
This isn't ideal, because the last example is not a valid book. It's passing
in a string directly which doesn't have a `title` property, so it prints
`undefined`. Ideally, this type of issue is caught at compile time, not run
time. Since this is a "generic" function in the sense that it can accept any
kind of book, let's define a generic.

```typescript
function printTitle<Input>(book: Input) {
  console.log(book.title);
}
```

Unfortunately, this isn't valid and we'll see the TypeScript compiler error with:
`Property 'title' does not exist on type 'Input'`. So how do we say that the
generic `Input` type has a `title` property but still allow anything with
additional properties?

We can apply a constraint, or say the `Input` type _must_ extend the `Book`
interface:

```typescript
function printTitle<Input extends Book>(book: Input) {
  console.log(book.title);
}

const book = new Book("The Phoenix Project");
printTitle(book); // The Phoenix Project

const audioBook = new AudioBook("Educated: A Memoir", 731);
printTitle(audioBook); // Educated: A Memoir

printTitle("The Phoenix Project");
// Argument of type '"The Phoenix Project"' is not assignable to parameter of type 'Book'
```

This is exactly what we want. The `printTitle` function accepts anything with a
`title` attribute, and now results in a compile time error for invalid usages.

One important thing to note here is that TypeScript relies on types being
[structurally equivalent](https://www.typescriptlang.org/docs/handbook/type-compatibility.html).

This means that the input to `printTitle` doesn't have to literally `extend Book`,
but rather have the same structure has the `Book` interface. So the following
object literal with a `title` property will also be valid:

```typescript
printTitle({ title: "The Phoenix Project" });
```

## Technical Definition

The `extends` keyword has a single behavior (extending things), but it useful in
several contexts:

- Extending class definitions
- Extending interfaces
- Imposing constraints

As we've seen, it can be used to
[extend interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html#extending-interfaces),
and provide type constraints. There are additional interesting use cases,
such as an [interface extending a class](https://www.typescriptlang.org/docs/handbook/interfaces.html#interfaces-extending-classes).

Given the fact that the `extends` keyword is overloaded, I prefer to think of
it's definition in the sense of it's behavior.

## Conclusion

In summary, TypeScript's `extends` is equivalent to JavaScript's `extends` when
working with classes. However, TypeScript's `extends` is overloaded with
additional functionality that is particularly useful when working with types.
This post illustrated a few of those use cases. Similar to the `keyof` operator,
I would consider `extends` to be a fundamental building block for some of the
more complex and powerful features of TypeScript, specifically conditional
types that will be covered in a future post.
