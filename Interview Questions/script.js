// example 1
var x = 20;

function foo() {
  console.log(x);
  var x = 10;
}

foo();

//example 2
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// example 3
for (let i = 1; i <= 3; ++i) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// example 4
for (var i = 1; i <= 3; ++i) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// example 5
let i = 1;
for (; i <= 3; ++i) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// example 6
for (var i = 1; i <= 3; ++i) {
  function logger(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  logger(i);
}
