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

// example 7
{
  let a = 1;
  let b = 2;

  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);

// example 8
{
  let a = 1;
  let b = 2;
  var c = 3;

  console.log(a);
  console.log(b);
}

console.log(c);
console.log(a);
console.log(b);

// example 9
function foo() {
  let a = 1;
  let b = 2;
  var c = 3;

  console.log(a);
  console.log(b);
}

foo();

console.log(c);
console.log(a);
console.log(b);

// example 10
function foo() {
  let a = 1;
  let b = 2;
  // became global
  c = 3;

  console.log(a);
  console.log(b);
}

foo();

console.log(c);
console.log(a);
console.log(b);

// example 11
function foo() {
  let a = 1;
  let b = 2;
  // type="module" enabled the strict mode
  c = 3;

  console.log(a);
  console.log(b);
}

foo();

console.log(c);
console.log(a);
console.log(b);

// example 11
// 0*8^3 + 1*8^2 + 2*8^1 + 3*8^0 = 0 + 64 + 16 + 3 = 83
console.log(0o123);

// example 12
var x = 20;

function fooo() {
  console.log(x);
  var x = 10;
}

fooo();

// example 13
var x = 20;

function fooo() {
  console.log(x);
}

fooo();

// example 14
console.log(typeof foo);
foo();

var foo = 20;

function foo() {
  console.log("calling foo");
}

foo();
console.log(typeof foo);

// example 15
function counter() {
  let count = 0;

  return () => {
    return ++count;
  };
}

let incrementCounter = counter();
console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());

// example 16
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");

// example 17
for (var i = 1; i <= 3; ++i) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// example 18
for (let i = 1; i <= 3; ++i) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// example 19
let i = 1;
for (; i <= 3; ++i) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// example 20
for (var i = 1; i <= 3; ++i) {
  function foo(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  foo(i);
}

// example 20
// end Promise timeout
setTimeout(() => {
  console.log("timeout");
}, 0);

function getPromise() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("resolve");
    } else {
      reject("rejected");
    }
  });
}

getPromise().then((res) => console.log(res));
console.log("end");
