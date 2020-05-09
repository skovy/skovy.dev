---
date: 2019-05-18T00:11:00.000Z
title: "Techniques for effectively using Object Factories for Testing"
description: "A few patterns for effectively using object factories for testing."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Andrik Langfield"
tags:
  - object factory
  - testing
  - typescript
  - best practices
---

Almost a year ago, I started looking for a package to create object factories for testing that
worked well with TypeScript. I wasn't able to find one that was close enough to what I had
in mind for type-safety and an API. I went down the path of creating a new package that
provided type-safety but still had an API that felt natural. The result was
[`cooky-cutter`](https://github.com/skovy/cooky-cutter), which
[was shared at that time](https://skovy.dev/object-factories-for-testing-in-typescript/).

After spending some time working with `cooky-cutter` and writing more tests using it, I began to notice a
few patterns that I found helpful to write effective tests that rely on any object factory package.

_(The following examples will be using `cooky-cutter` but the concepts can be applied to any object factories)_

## Fail loud when factory definitions do not match the data they mock

It's important to keep factory definitions in sync with the actual data they
are representing. This keep tests running with realistic data and avoids false
positives and false negatives. For example, let's say we have a user entity
defined by this `interface` and we `define` a factory for it.

```typescript
interface User {
  id: number;
  name: string;
}
```

```typescript
const user = define<User>({
  id: 1,
  name: "Cooky Cutter",
});
```

Later on, we decide to split the `name` into `firstName` and `lastName` so we
update the actual data source and the interface to match:

```typescript{3-4}
interface User {
  id: number;
  firstName: string;
  lastName: string;
}
```

And say somewhere in the frontend application there is logic that displays the
user's name (`<div>{user.name}</div>`) but in the midst of this complex data
model change the factory was forgotten and the test's still pass because
the user factory has a `name` property defined but at runtime it won't be
displayed.

It's possible this would be caught when manually testing, during a code review
or during some other process, but it would be nice if this would fail loudly.
This was one of the bigger pains I sought to solve with `cooky-cutter`. Since
it requires a type definition (`User` in this example) if the defined factory
does not match the type it will error. This example would actually produce a
TypeScript error with
`cooky-cutter`: **"Object literal may only specify known properties, and 'name' does not exist"**.

Other packages/frameworks/languages might have other options, but try to find an
approach that works for you, maybe there are tests that could be included as part
of the CI or linting steps to catch mismatches between the actual data model and
what the factories produce.

## Avoid "sharing" mocked data

One of the more challenging things I've had to debug is when the ordering of
tests "matters". This usually points to a bug somewhere, either in the
tests themselves, or worse, the application logic. 😱

Let's create another interface that defines a possible food recipe and a
corresponding factory to create an example cookie recipe with a few of the necessary
ingredients.

```typescript
interface Recipe {
  name: string;
  ingredients: string[];
}
```

```typescript
const recipe = define<Recipe>({
  name: "Cookies",
  ingredients: ["sugar", "eggs", "flour"],
});
```

Cool, now anytime we need a recipe object in a test case, we can invoke `recipe`
to get an object that matches the `Recipe` interface. Let's write two simple
test cases as an example:

```typescript
test("allows adding butter", () => {
  const cookies = recipe();
  cookies.ingredients.push("butter");
  expect(cookies.ingredients).toHaveLength(4);
});

test("allows adding chocolate chips", () => {
  const cookies = recipe();
  cookies.ingredients.push("chocolate chips");
  expect(cookies.ingredients).toHaveLength(4);
});
```

The first test will pass, but the second will fail with an error something like
**"expected length 4 but received length 5"**. Huh? The factory creates a cookie
recipe with `["sugar", "eggs", "flour"]` and we add `"chocolate chips"`.
3 + 1 = 5? 🤨

The problem is that the cookies recipe factory "hard-codes" the array for the
ingredients and that array will be used for **all** instances of that factory.
The first test adds `"butter"` so now the ingredients contains
`["sugar", "eggs", "flour", "butter"]`. The second test adds `"chocolate chips"`
so now the ingredients contains `["sugar", "eggs", "flour", "butter", "chocolate chips"]`.

As of `cooky-cutter@1.3.0` this will now warn (by default) saying **"'ingredients' contains a hard-coded array"**.
There is also a [configuration option](https://skovy.github.io/cooky-cutter/#/configure?id=configuration-options)
`errorOnHardCodedValues` to throw an error rather than only warn to avoid any of these cases slipping into tests.

There are a few options to resolve this issue. We could consider overriding the ingredients every time the factory
is invoked with something like `recipe({ ingredients: ["butter"] })` which will
assign a new array each time. We could consider adding logic in `beforeEach`/`afterEach`
to reset or restore this value. The more reliable solution would be to use an
[attribute function](https://skovy.github.io/cooky-cutter/#/define?id=attribute-functions)
and redefine the attribute for ingredients.

```typescript{3}
const recipe = define<Recipe>({
  name: "Cookies",
  ingredients: () => ["sugar", "eggs", "flour"],
});
```

Now, every time the the factory is invoked a new array will be returned and the
tests above will pass as expected. All of this also applies to hard-coded objects.

## Randomize unique identifiers

A potential subtle bug was pointed out above. Another one that can be really
tricky is logic that depends on an `id` property (or some other unique identifier).

Let's define two new interfaces and factories, a user and a post. A post "belongs to" a user
and is associated via the `userId` property.

```typescript
interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
}
```

```typescript
const user = define<User>({
  id: sequence,
  name: (i: number) => `Cooky Cutter #${i}`,
});

const post = define<Post>({
  id: sequence,
  userId: sequence,
  title: "A Great Post",
});
```

_Note: with `cooky-cutter` assigning an attribute to `sequence` will increment the value on each factory invocation starting at 1 ([see the docs for more details](https://skovy.github.io/cooky-cutter/#/helpers?id=sequence))._

Nice, now let's write a simple test case to find the user for the given post
and assert it's the user we expected.

```typescript
test("displays the user's name for the post", () => {
  const users = [user(), user(), user()];
  const firstPost = post();

  // Logic that would probably live in the actual application
  const firstPostUser = users.filter(user => user.id === firstPost.id)[0];

  expect(firstPostUser.name).toBe(`Cooky Cutter #1`);
});
```

It passes! 🎉 Let's add another test above it.

```typescript{1-3}
test("displays the post title", () => {
  expect(post().title).toBe("A Great Post");
});

test("displays the user's name for the post", () => {
  const users = [user(), user(), user()];
  const firstPost = post();

  // Logic that would probably live in the actual application
  const firstPostUser = users.filter(user => user.id === firstPost.id)[0];

  expect(firstPostUser.name).toBe(`Cooky Cutter #1`);
});
```

Now the _original_ test fails with something like **"expected: 'Cooky Cutter #1'
but received: 'Cooky Cutter #2'**. 🤔

So now it looks like the test is getting the second user in the array of users.
But the original test wasn't changed, we only added a _new_ test. 
Looking more closely at the `filter` call, we're filtering on
the statement `user.id === firstPost.id` when we should actually be filtering on
`user.id === firstPost.userId`. After adding another test the `firstPost.id` 
changed from `1` to `2` since the values are sequential for each invocation.

The test on it's own was a false positive (passing when it should fail) and the
second time was a true negative (failing when it should fail). But to get it to
fail when it should we had to add _another_ test. Luckily, we did in this
scenario but that doesn't always happen. How do we avoid subtle bugs like this?

One approach is to randomize unique identifiers.
Fortunately, cooky-cutter also includes a [`random`](https://skovy.github.io/cooky-cutter/#/helpers?id=random) helper.
Let's replace all of the occurrences of `sequence` with this helper.

```typescript{2,7-8}
const user = define<User>({
  id: random,
  name: (i: number) => `Cooky Cutter #${i}`,
});

const post = define<Post>({
  id: random,
  userId: random,
  title: "A Great Post",
});
```

Now the `id` and `userId` fields are randomized and our tests won't just happen
to pass because both `id` attributes happened to match up. The original test
case on it's own would now error with something like **cannot read property 'name' of undefined**
because there is not a user that matches the randomized `userId`. The test
now needs to be updated to make this pass, but the point of this example was to
show the potential for false positives by _not_ randomizing unique identifiers.
This example was fairly harmless but imagine the `user.id === firstPost.id` logic
living somewhere deep in an application that is hard to debug or the
downstream effects are almost imperceivable and it takes months or years to find.

## Hard-code the important data

At a first pass, this might sound like it's contradicting the point above to
avoid sharing data between tests, but it's not exactly the same. It's generally
not a good idea to hard-code values in the
factory definitions (especially objects and arrays) but it's usually a good idea to hard-code values in _specific_
test cases. 

Let's continue with the previous example and fix it so the `userId`
is properly set on the `firstPost` and it passes. ✅

```typescript{3}
test("displays the user's name for the post", () => {
  const users = [user(), user(), user()];
  const firstPost = post({ userId: users[0].id });

  const firstPostUser = users.filter(user => user.id === firstPost.userId)[0];

  expect(firstPostUser.name).toBe(`Cooky Cutter #1`);
});
```

Now, as in the example above let's add another test example before it.

```typescript{1-3}
test("displays the post title", () => {
  expect(user().name).toBe(`Cooky Cutter #1`);
});

test("displays the user's name for the post", () => {
  const users = [user(), user(), user()];
  const firstPost = post({ userId: users[0].id });

  const firstPostUser = users.filter(user => user.id === firstPost.userId)[0];

  expect(firstPostUser.name).toBe(`Cooky Cutter #1`);
});
```

Now the _original_ test fails with something like **"expected: 'Cooky Cutter #1'
but received: 'Cooky Cutter #2'** ... not again! 🤔

However, this time the problem isn't with the sequential unique identifiers, but
has to do with the way a unique name is created each time. The original (bottom)
test example is now a false negative (failing when it shouldn't). The `filter`
logic is correct and the correct user is selected but the assertion is now
incorrect because the `user` factory was now invoked once before and the name
is "incremented" each invocation.

Let's hard-code a unique name that affects _only_ this test.

```typescript{6}
test("displays the users name", () => {
  expect(user().name).toBe(`Cooky Cutter #1`);
});

test("displays the user's name for the post", () => {
  const users = [user({ name: `Cool Cooky Cutter` }), user(), user()];
  const firstPost = post({ userId: users[0].id });

  const firstPostUser = users.filter(user => user.id === firstPost.userId)[0];

  expect(firstPostUser.name).toBe(`Cool Cooky Cutter`);
});
```

It passes! 🎉 As an added bonus, if someone wanted to change the factory definition
itself our test still correctly passes.

```typescript{3}
const user = define<User>({
  id: random,
  name: (i: number) => `Something Else #${i}`,
});
```

The default data in a factory is to be used
to simulate real data when you _don't care what it actually is_. If you _do care_
what the data is (eg: making an assertion against it, or testing logic) it should
be explicitly defined in the test case _even when it's identical to the default_.
This removes any weird ordering issues like we saw above, it allows easily
changing that default value at anytime without breaking a single test (likely a false negative)
and makes it easy to debug and understand the test by looking only at the test
file without having to open the factory definition that may live in another file.

## Conclusion

All of the examples may feel simple or contrived, but I've personally experienced
each of these at least once, and spent more time than I want to admit debugging 
some of the scenarios or refactoring because of a single change in the factory definition.
Hopefully the next time your relying on object factories you'll keep these in
mind to avoid some of these scenarios I learned the hard way!
