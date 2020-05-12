---
date: 2020-04-04T10:00:00.000Z
title: "Named Parameters in JavaScript"
description: "A quick look at how to use named parameters and the benefits."
featuredImage: "./images/featured-image.jpg"
featuredImageCredit: "Photo by Allie Smith on Unsplash"
tags:
  - javascript
  - named parameters
  - named arguments
---

Have you ever read code such as `perform(true)` or `perform(false)` and
wondered: "what does `true` or `false` mean in this context?" If so, the answer
was likely found by opening the function definition for `perform` and reading
the parameter's name.

Or, have you ever read code like `perform(null, null, true)` and wondered: "why
are all of these `null` values being passed?" If so, the answer was possibly
that the 3<sup>rd</sup> argument needed to be set so the only way to get there
was by passing placeholders.

Wouldn't it be great if there was a way to both avoid opening the function
definition to know the significance of a parameter's value and avoid passing
a bunch of `null` (or `false`, `undefined`, `{}` etc) values only to get to the
n<sup>th</sup> argument?

Ruby supports this functionality with what it calls keyword arguments:

```ruby
def perform(one: nil, two: nil, skip_something: false)
  # ...
end
```

With this example, this function can now be invoked as
`perform(skip_something: true)`. This solves both problems! The first two
parameters aren't necessary and the boolean value now has a name associated to
provide more context on what `true` is in this context.

But how can this be achieved with JavaScript? Fortunately, something very
similar can be done leveraging
[object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring). The above example converted to
its equivalent in JavaScript would look something like the following:

```javascript
function perform({ one = null, two = null, skipSomething = false } = {}) {
  // ...
}
```

The same invocation from above would then be `perform({ skipSomething: true })`.

One thing to note is that the entire object has a default value of `{}`. This allows
invoking `perform()` without any arguments. Without the default value of `{}`
invoking `perform()` would throw `Cannot read property 'one' of undefined` since
it would be trying to destructure `undefined`.

However, one thing Ruby supports is _required_ named parameters. This can
be achieved by removing the default value. For example, to make `two` required
in the above example it would look like the following:

```ruby
def perform(one: nil, two:, skip_something: false)
  # ...
end
```

Calling `perform` without `two` will now error with `missing keyword: two`. What
if the same thing was done with the JavaScript example?

```javascript
function perform({ one = null, two, skipSomething = false } = {}) {
  // ...
}
```

Rather than throwing an error, `two` will now default to `undefined`. Fortunately,
there is still a way to emulate Ruby's behavior with a little extra work:

```javascript
function required(name) {
  throw new Error(`missing required parameter: ${name}`);
}

function perform({
  one = null,
  two = required("two"),
  skipSomething = false
} = {}) {
  // ...
}
```

Now, if `two` is not provided this will now error with
`missing required parameter: two`.

However, if it's truly required it may make sense to use a positional parameter
instead:

```javascript
function perform(two, { one = null, skipSomething = false } = {}) {
  // ...
}
```

# Conclusion

Named parameters provide a handful of benefits:

- Providing a name along with the parameter's value
- Avoiding unnecessary "empty" values to reach the n<sup>th</sup> position
- Adding a new parameter doesn't change the position of others

Like anything, named parameters are useful in moderation. Two examples of
useful scenarios include:

- Functions that accept configurations or options with a lot of optional parameters
- Functions that change often because it doesn't require changing every
  call site, only the ones that use the specific parameter.

The next time you run into one of the earlier stated problems or one of these 
scenarios, consider reaching for named parameters.
