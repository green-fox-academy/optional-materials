# Javascript Interview Questions

- What is a “closure” in JavaScript? Provide an example
- How to empty an array in JavaScript?
- How do you check if an object is an array or not?
- What is a potential pitfall with using `typeof bar === "object"` to determine if bar is an object? How can this pitfall be avoided?
- What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
- What is the significance, and what are the benefits, of including `'use strict'` at the beginning of a JavaScript source file?
- What is `NaN`? What is its type? How can you reliably test if a value is equal to `NaN`?
- Discuss possible ways to write a function `isInteger(x)` that determines if x is an integer.
- What is the difference between the function declarations below?
```javascript
var foo = function(){ 
    // Some code
};
```
```javascript
 function bar(){ 
    // Some code
};
```
- What is the difference between a method and a function in javascript?

## Harder Questions
- Difference between `undefined` and `not defined` in JavaScript
- What is the drawback of creating true private in JavaScript?
- What is `undefined x 1` in JavaScript
- what is function hoisting in JavaScript?
- What will be the output of the following code?
- What is the `instanceof` operator in JavaScript?
- Difference between `Function`, `Method` and `Constructor` calls in JavaScript.
- What is JavaScript Self-Invoking anonymous function or Self-Executing anonymous function.
- Describe Singleton Pattern In JavaScript?
- What are the way by which we can create object in JavaScript ?
- Write a function called deepClone which takes an object and creates a object copy of it.
- Best way to detect `undefined` object property in JavaScript.
- Write a function called `Clone` which takes an object and creates a object copy of it but not copy deep property of object. 
- Best way to detect `undefined` object property in JavaScript.
- How to check whether a key exist in a JavaScript object or not.
- What is best way to detect an arrays object on JavaScript ?
- Best way to detect reference values of any type in JavaScript ?
- Describe Object-Based inheritance in JavaScript.
- Describe Type-Based inheritance in JavaScript.
- How we can prevent modification of object in JavaScript ?.
- Write a log function which will add prefix `(your message)` to every message you log using console.log ? 
-  Write a function which will test string as a literal and as an object ?
-  What is typical use case for anonymous function in JavaScript ?
-  How to set a default parameter value ?
- Write code for merge two JavaScript Object dynamically.
- What is non-enumerable property in JavaScript and how can create ?
- What is Function binding ?

## What gets printed out?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

```javascript
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```

```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

## Further Questions with Answers
- [123 Essential Javascript Questions](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Question)
