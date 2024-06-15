debugger;

const x = 5;
var a = 100;

function add() {
  const y = 10;
  console.log(x + y);
}

add();

// console.log(y);

// Local Scope (every function has its own local scope)
// Script Scope (let and const declarations)
// Global Scope/Window Object (var declarations)
