const maths = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    if (b > a) {
      return b - a;
    }
    return a - b;
  },
};

console.log(maths.add(3, 4));
console.log(maths.subtract(3, 4));

// every method is a function but every function is not a method
