---
date: 2018-02-26T02:13:05.504Z
title: "Scaling data selection on the client"
description: "What is a selector? How do they help 'scale' querying data on the client?"
featuredImage: "./images/featured-image.jpeg"
featuredImageCredit: "Photo by Ander Burdain"
tags:
  - react
  - redux
---

## What is a Selector?

A selector is a helper function that accepts the state (and maybe a few parameters), and returns a specific slice or combination of the overall state. For example, say we had a list of animals and the type of each animal. Our state might look something like this:

```javascript
const state = {
    animals: [
        { name: "Alligator", typeId: 1 },
        { name: "Shark", typeId: 3 },
        { name: "Platypus", typeId: 2 },
        { name: "Anglerfish", typeId: 3 },
        { name: "Crocodile", typeId: 1 }
    ],
    types: [
        { id: 1, name: "Reptiles" },
        { id: 2, name: "Mammals" },
        { id: 3, name: "Fish" }
    ]
}
```

Now, we want to display this list, but filtered to a single type of animal. Let’s say we want only the reptiles. A simple selector for this would look like the following:

```javascript
function getReptiles(state) {
    // Find the Reptile type object (assuming we don't know the id)
    const reptiles = state.types.find(({ name }) => name === "Reptiles"); 

    // Find all animals that are the Reptile type
    const animals = state.animals.filter(({ typeId }) => typeId === reptiles.id);

    // Return an array of only Reptiles 🦎
    return animals;
}
```

That’s it, a selector is just a function. However, by moving this logic into a separate function it has several advantages over putting it directly in the component or UI that needs this data. For example, today a popular solution is putting this logic into the [`mapStateToProps`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#arguments) function in a traditional React Redux application.

## Why Selectors?

### Separation of concerns

Putting all of the logic directly in the `mapStateToProps` makes it difficult to visually parse and skim a file. The data selection logic and the presentational logic are typically crammed in the same file. This is great for small, simple components. However, as the complexity of both increases this can become unwieldy to understand at a glance.

When I visit this component in the future — to refactor, fix a bug or copy a portion of it — I usually care about only one of two things. What is the data this component needs? Or, how is the data being presented and used? When we want to modify how the reptiles are selected from the store, we can focus on the specific selector. When we want to modify how the reptiles are displayed we can modify the component. Additionally, by separating selectors it makes them very easy to test. The selector can be passed any state as input and assert the expected output without worrying about how it is presented.

### Reuse

What happens when we want to display reptiles, but on a different page or in a different component? Or, what happens when we want to create another component that displays the *number* of reptiles? We presumably want the same logic, but calling `length` on the results?

Without selectors, we would probably copy the same logic components. If the shape of the state changes down the road we have to update it in each place we use this logic. Or if a bug crops up, it has to be fixed multiple time. We also have to write additional tests to cover the logic in each place.

With selectors, the same selector can be reused over and over and even composed within another selector. For example, to get the count of reptiles we may create a selector that looks something like this:

```javascript
function getReptileCount(state) {
    return getReptiles(state).length
}
```

### Memoization

If the state gets extremely large or the data selection logic is computationally expensive, it’s possible there could be performance implications. This might be on a highly interactive page or page with a lot of data. In either case, each time the state changes the selector needs to be recomputed. Moreover, if the selector is used in multiple places, it needs to be recomputed multiple times *each* time the state changes. In the majority of these cases, since the selector is only working on a small slice of the overall state, it’s unlikely that tiny slice of state has changed. In this case, can we avoid the recompute?

Yes! We could implement this, but this is where an external package, [reselect](https://github.com/reactjs/reselect) comes into play. With reselect, out two examples would look like the following:

```javascript
import { createSelector } from "reselect";

const getReptiles = createSelector(
  state => state.types.find(({ name }) => name === "Reptiles").id,
  state => state.animals,
  (id, animals) => animals.filter(({ typeId }) => typeId === id)
);

const getReptileCount = createSelector(
  getReptiles,
  reptiles => reptiles.length
);
```

By default, reselect will not recompute unless the arguments to the result function (the last argument to `createSelector`) have changed since the previous computation. For example, for the first selector, if the `id` for the reptile type or the `animals` array changes, then the selector will recompute the list of filtered animals. One thing to note with this, the default equality check is a shallow instance equality. This can be an issue if the state is being directly mutated.

### General selectors on a normalized state

You may have noticed in this example, we were only selecting reptiles. Presumably, we’d also want a selector for only “Mammals” and only “Fish.” One approach is to copy `getReptiles` and do a find and replace “Reptiles” with “Mammal” or “Fish.” But this is fragile if the logic for selecting a type of animal changes, it needs to be changed three times. And many of the same duplication problems highlighted earlier.

Since we have [a normalized state](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape), basically meaning we flattened nested associations, we can create a generic selector for this. It would look something like this:

```javascript
import { createSelector } from "reselect";

const getAnimalsByType = createSelector(
  (state, props) => state.types.find(({ name }) => name === props.name).id,
  state => state.animals,
  (id, animals) => animals.filter(({ typeId }) => typeId === id)
);
```

And would be used like the following:

```javascript
getAnimalsByType(state, { name: "Reptiles" });
getAnimalsByType(state, { name: "Mammals" });
getAnimalsByType(state, { name: "Fish" });
```

**Note**: this specific example would “break” memoization. The default cache size is one, so it would recompute every time the animal type name changes. In this scenario, we would likely want to use a `makeMapStateToProps` function with a `makeGetAnimalsByType` to [retain the memoization](https://redux.js.org/recipes/computing-derived-data#sharing-selectors-across-multiple-components).

### Bonus: Types

Types are the last thing to highlight, but not specific to selectors. It’s always nice to have type safety, especially on larger applications where selectors are predominantly useful. Reselect supports TypeScript, but the ordering of the generics aren’t immediately obvious at a first glance. For our `getReptiles` selector, the types would be the following (assuming the types have already been defined):

```typescript
import { createSelector } from "reselect";

const getReptiles = createSelector<State, Reptile[], number, Animal[]>(
  state => state.types.find(({ name }) => name === "Reptiles").id,
  state => state.animals,
  (id, animals) => animals.filter(({ typeId }) => typeId === id)
);

const getReptileCount = createSelector<State, number, Reptile[]>(
  getReptiles,
  reptiles => reptiles.length
);
```

The `createSelector` function accepts generics in the following order: input, output, first input selector output, second input selector output, etc. For the first selector, the input is of type `State` which is a type that matches our state originally defined above. The output is an array of reptiles, `Reptile[]`. The first input selector output is the reptile type id, or a `number`. The second input selector output is an array of animals, `Animal[]`. We don’t have to define any additional types for the result function, since the arguments match the output of the previous selector functions and the return value is the output.

## Final Thoughts

The first time I saw a selector, I was skeptical. It looked like an unnecessary abstraction that was only there to add complexity. After using them for some time, I now realize how beneficial they are when working on a large Redux application. When used correctly, they add a layer of comfort and efficiency. It always feels great when I can reuse a selector, knowing it’s already well tested and avoiding expensive duplicate computations.