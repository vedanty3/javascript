// debugger;

const a = 10;

function outer() {
  const b = 200;
  const c = -34;

  function inner() {
    console.log(a + b);
  }

  return inner;
}

const innerFn = outer();

innerFn();
