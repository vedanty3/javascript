let username = "vedantyetekar";
let age = 21;
let isHappy = true;
let userIntro = username + " is " + (isHappy ? "happy." : "not happy.");
let a = undefined;
let b;
let c = null;
const piValue = Math.PI;
// const name; needs to be initialized while declaration

userIntro = "parthyetekar";

console.log(userIntro);
console.log("a", typeof a);
console.log("b", typeof b);
console.log("c", typeof c);
console.log(piValue);

{
  const firstName = "Vedant";
}

{
  var lastName = "Yetekar";
}

{
  let favouriteColor = "Orange";
}

console.log(lastName);
// console.log(firstName);
// console.log(favouriteColor);

// Differences
// 1. let and const declarations are block scope and var declarations are function scope

// 2.
// console.log(n); Uncaught ReferenceError: Cannot access 'n' before initialization
// console.log(m); Uncaught ReferenceError: Cannot access 'm' before initialization
console.log(k); // undefined

const n = 15;
let m = 10;
var k = 5;

// variable name should not start with a digit
// should not contain any other special character than '$' or '_'
const first_name = "vedant";
const last_name = "yetekar";
const $age = 21;
const ved9 = "LeetCode ID";

console.log(first_name + " " + last_name + " is " + $age + " years old.");
