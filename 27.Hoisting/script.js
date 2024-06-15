console.log(username); // undefined
greet();
// sayHi();

var username = "__vedant4";

// function definition
// function declaration
function greet() {
  console.log("Hello World!");
}

// function definition
// function expression
var sayHi = function () {
  console.log("Hi!");
};

// class Student {}
// const Jay = new Student();

// console.log(typeof Student, typeof Jay);

// Anonymous functions (IFFE)
(function () {
  console.log("Hi from IFFE!");
})();
