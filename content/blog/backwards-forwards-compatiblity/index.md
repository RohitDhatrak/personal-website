---
title: Why JavaScript will always need tools for Transpiling and Polyfilling
date: "2021-09-14T22:12:03.284Z"
image: babel-js-cover.png
---

To understand why we'll always need these tools we first need to understand Backwards and Forwards compatibility.

## Backwards compatibility

Backwards compatibility means that once something becomes valid JavaScript there won't be any changes to the language in the future that cause it to become invalid JavaScript.

This assurance is not a small thing and shouldn't be taken for granted. It has a huge impact on decisions involving changing or adding something to the language.

Once something becomes valid JS it can't be taken out because it might break some code running in production.

However, there are a few exceptions to this. TC39 can change something if it improves the language and the impact is going to be very small.

This makes choosing JavaScript a safe bet because you are confident your code won't just stop working due to changes in the language.

## Forwards Compatibility

Forwards compatibility means new syntax would be able to run in an old JavaScript engine.

Javascript is not forwards compatible because it's simply impractical.

On a side note, HTML and CSS are forwards compatible but not backwards compatible.

If we take some old HTML or CSS it might not run or produce the same results.

On the other hand, if we run modern-day HTML or CSS in an old browser it will just skip over the parts it doesn't recognize, while the rest would be processed accordingly.

So if we can't run new code on an old engine should we always stick to the older syntax based on the oldest JS engine we need to support?

This is where the tools come in.

## Transpiling

A [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) will convert the new syntax to an equivalent older syntax compatible with the oldest version of the JS engine we need to support.

The most commonly used transpiler is [Babel](https://babeljs.io/)

For example, if we use an [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) in our code we might run into compatibility issues with some old browsers

```jsx
const adventurer = {
  cat: "Dinah",
}
const dogName = adventurer?.dog
```

So babel will transpile it to an equivalent older syntax that will produce the same results.

```jsx
const adventurer = {
  cat: "Dinah",
}
const dogName = adventurer === null ? void 0 : adventurer.dog
```

## Polyfilling

[Polyfilling](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) is useful when the issue is related to a missing API rather than some new syntax.

What if we want to support an old version of a browser where Array.map() method is not defined.

![](https://tenor.com/view/thanos-marvel-fine-ill-do-it-myself-gif-11912873.gif)

We'll have to provide our own implementation that will act as if it was already defined in the environment.

```jsx
if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this))
    }
    return newArray
  }
}
```

The if statement will check if the map() method is defined on the Array [prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes). If not then our custom implementation will kick in.

Transpilers like Babel will automatically detect which polyfills are needed in our code but sometimes we might have to do it ourselves.

When we need to manually define polyfills use a robust and well-tested polyfill from an official library. The above example is just for illustration purposes.

## Conclusion

Since JavaScript is not forwards compatible there will always be a gap between the latest code we can write and the oldest JS engine we need to support.

As developers, we should focus on writing clean and newer syntax that communicates the ideas effectively and let the tools take care of the compatibility.

Shoutout to the [YDKJS](https://github.com/getify/You-Dont-Know-JS) book series by Kyle Simpson that enabled this blog post.
