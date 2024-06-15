// "use strict";
// Lexical Scope

// debugger;

function parent() {
  const parentName = "Tony";
  const dummy = "nothing";

  function child() {
    const childName = "Sony";
    console.log(`My father's name is ${parentName}`);

    function grandChild() {
      const grandChildName = "Rony";
      console.log(`My father's name is ${childName}`);

      if (true) {
        var num1 = 100000; // global scope
        let num2 = -200000; // block scope
        const num3 = 300000; // block scope
        num4 = -99999;
        console.log(num2, num3);
      }

      console.log(num1);
    }

    grandChild();
  }

  child();
}

parent();

console.log(dummy);

// Block scope
// let and const are block scope
if (true) {
  var dummy = -390;
}

console.log(num4);
