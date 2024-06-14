// Execution Context: There are 2 phases in it.
// 1. Memory Creation Phase
// 2. Code Execution Phase

// Global Execution Context: It exists for the code written globally.
// Every function has its own execution context.

debugger;

console.log(username);
sayHi(); // when this function gets called here one execution context gets created for this function in code execution phase of previous execution context (in this case the global execution context)

var username = "__vedant4"; // global section (var declarations goes into global scope which is nothing but the window object)
const userAge = 21; // script section (let and const declarations goes into script section)

console.log(username, userAge);

// function also goes into global section, complete code gets copied for a function
function sayHi() {
  const a = 14;
  const b = 12;
  console.log("Hi!", username, a, b);
  addTwoNumber(4, 5);
}

function addTwoNumber(a, b) {
  return a + b;
}
