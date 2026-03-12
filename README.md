# GitHub Issues Tracker

This is my Assignment-05 project. In this project I created a simple GitHub Issues Tracker using HTML, CSS and JavaScript.
Users can login with demo credentials, see all issues, filter them by status (All, Open, Closed), search issues and view issue details in a modal.

Demo Credentials
Username: admin
Password: admin123

1️⃣ What is the difference between var, let, and const?

In JavaScript we use var, let, and const to declare variables.

var is the older way of declaring variables. It is function scoped and sometimes it can cause problems because it can be redeclared.

let is the newer way. It is block scoped and safer compared to var.

const is used when we don't want the value to change. Once we assign a value to const, it normally should not be changed.

Because of these reasons, most modern JavaScript code uses let and const instead of var.

2️⃣ What is the spread operator (...)?

The spread operator (...) is used to expand or copy values from an array or object.

It is very useful when we want to copy arrays or combine multiple arrays.

Example:

```javascript
const arr1 = [1,2,3]
const arr2 = [...arr1,4,5]
```

Here the values from arr1 are spread into arr2.

3️⃣ What is the difference between map(), filter(), and forEach()?

These are array methods used to work with arrays.

map() is used to create a new array by modifying each element.

filter() is used to create a new array but only with elements that match a condition.

forEach() is used to loop through the array, but it does not return a new array.

So the main difference is that map and filter return a new array, but forEach does not.

4️⃣ What is an arrow function?

An arrow function is a shorter way to write functions in JavaScript.

Example:

```javascript
const add = (a,b) => {
 return a + b
}
```

It makes the code shorter and easier to read. Arrow functions are commonly used in modern JavaScript.

5️⃣ What are template literals?

Template literals are a way to write strings using backticks (` `) instead of quotes.

They allow us to insert variables directly inside a string using ${ }.

Example:

```javascript
const name = "Shadman"
console.log(`Hello ${name}`)
```

This will print: Hello Shadman.

Template literals are very useful when we want to create dynamic strings.
