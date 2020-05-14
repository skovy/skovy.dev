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

This is the 2<sup>nd</sup> post in this series. The
[first post covered the `keyof` operator](/typescript-explained-in-javascript-keyof/).

In that post, the `extends` keyword was used to demonstrate one of the uses
for the `keyof` operator.

There are roughly two ways to think about the `extends` keyword. As the name
suggests, one thing it helps with is as a way of _extending_ something.

## JavaScript

JavaScript itself supports the
[`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
keyword for using with classes since ES6. It's used to create a subclass or
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

```javascript
const book = new AudioBook("Educated: A Memoir", 731);
console.log(book.describe()); // "Educated: A Memoir" is 731 minutes
```

## TypeScript

```typescript
interface Book {
  title: string;
}

interface AudioBook extends Book {
  duration: number;
}
```

```typescript
function printTitle<B extends Book>(book: B) {
  console.log(book.title);
}

const book = new Book("The Phoenix Project");
printTitle(book); // The Phoenix Project

const audioBook = new AudioBook("Educated: A Memoir", 731);
printTitle(audioBook); // Educated: A Memoir
```

## Technical Definition

The `extends` keyword has a single behavior, but it useful in many contexts.
As we've seen, it can be used to
[extend interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html#extending-interfaces),
and provide type constraints. There are additional interesting use cases,
such as an [interface extending a class](https://www.typescriptlang.org/docs/handbook/interfaces.html#interfaces-extending-classes).

Given the fact that the `extends` keyword is overloaded, I prefer to think of
it's definition in the sense of it's behavior.

> `extends`

## Conclusion

In summary, TypeScript's `extends` is equivalent to JavaScript's `extends` when
working with classes. However, TypeScript's `extends` is overloaded with
additional functionality that is particularly useful when working with types.
This post illustrated a few of those use cases. Similar to the `keyof` operator,
I would consider `extends` to be a fundamental building block for some of the
more complex and powerful features of TypeScript, specifically conditional
types that will be covered in a future post.
