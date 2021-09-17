---
title: Why JavaScript will always need Transpilers and Polyfills
date: "2021-09-17T22:12:03.284Z"
image: babel-js-cover.png
---

To understand why we’ll always need transpilers and polyfills let's take a look at Backwards and Forwards compatibility in JavaScript.

## Backwards compatibility

Backwards compatibility means that once something is added to the language there won’t be any changes in the future that cause it to become invalid.

Think about this for a second. This assurance is no small thing, right?

We certainly shouldn’t take it for granted. This has a huge impact on decisions involving adding something to the language. Because once it is added we can't remove it just like that.

![https://c.tenor.com/4xYdJ6ySbfUAAAAd/tata-bye-bye-rahul-gandhi-funny-meme.gif](https://c.tenor.com/4xYdJ6ySbfUAAAAd/tata-bye-bye-rahul-gandhi-funny-meme.gif)

We are not going to wake up one day and find our code has just stopped running. Because of this assurance we, JavaScript developers can sleep peacefully and it makes choosing JavaScript a safe bet.

But there are some exceptions to this.🙃 JavaScript has a few backwards-incompatible changes. However, the JavaScript committee is very careful in doing so.

They study the code on the web by gathering data from the browsers to get an estimate of the impact. They make the change only if the impact is going to be minimal and if the browsers are willing to take the brunt from the change.

## Forwards Compatibility

Forwards compatibility means new syntax would be able to run in an old JavaScript engine. That is if we take some code that was added to the language in 2019 it should be able to run in a JavaScript engine from 2015, 2010 or any previous years.

JavaScript is **not** forwards compatible.

On the contrary HTML and CSS are forwards compatible but not backwards compatible.

If we take some old HTML or CSS from 2005 it might not run or produce the same results. On the other hand, if we run modern-day HTML or CSS in an old browser it will just skip over the parts it doesn’t recognize, while the rest would be processed accordingly.

This is possible because HTML and CSS are declarative and it is easier to skip over the stuff that is not recognizable. However, just imagine if the JavaScript engine starts to skip stuff that it doesn't recognize we'll get errors and bugs left and right in our code!

![https://y.yarn.co/66980f5e-23c0-4765-9c38-677cbf2d6126_text.gif](https://y.yarn.co/66980f5e-23c0-4765-9c38-677cbf2d6126_text.gif)

We'll have to support some older versions of the browser because everyone doesn't have the latest version. So if we can’t run new code on an old engine should we always stick to an older syntax based on the oldest engine we need to support?

This is where the tools come in.

## Transpilers

A [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) will convert a new syntax to an older syntax.

The most commonly used transpiler is [Babel](https://babeljs.io/).

For example, consider the following snippet of code.

```jsx
if (something) {
  let x = 3
  console.log(x)
} else {
  let x = 4
  console.log(x)
}
```

If we run this in an older version of a browser where `let` is not defined we'll run into issues. So babel will transpile it to an **equivalent** older syntax.

```jsx
var x$0, x$1
if (something) {
  x$0 = 3
  console.log(x$0)
} else {
  x$1 = 4
  console.log(x$1)
}
```

We can write newer forms of syntax without worrying about compatibility issues in old browsers.

## Polyfills

[Polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) (aka shims) are useful when the issue is related to a missing API rather than some new syntax. Let us understand what we mean by this.

Let's assume we want to support an older version of a browser where Array.map() method is not defined.

So to use the method we’ll have to provide our own implementation that will act as if it was already defined.

![https://c.tenor.com/kEJ7XCJ_HakAAAAd/thanos-ill-do-it.gif](https://c.tenor.com/kEJ7XCJ_HakAAAAd/thanos-ill-do-it.gif)

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

The if statement will check if the map() method is defined. If not then our custom implementation will kick in.

Transpilers like Babel will automatically detect which polyfills are needed in our code but sometimes we might have to do it ourselves.

The above example is just for illustration purposes. When you need to manually define polyfills use a robust and well-tested polyfill from an official library like [es-shims](https://github.com/es-shims).

## Conclusion

Since JavaScript is not forwards compatible there will always be a gap between the latest code we can write and the oldest JS engine we need to support.

As developers, we should focus on writing clean and newer syntax that communicates the ideas effectively and let the tools take care of the compatibility.

Shoutout to the [YDKJS](https://github.com/getify/You-Dont-Know-JS) book series by [Kyle Simpson](https://www.linkedin.com/in/getify/) that enabled this blog post.
