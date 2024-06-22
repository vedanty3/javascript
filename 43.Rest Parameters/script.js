function add(a, b, ...args) {
  let totalSum = a + b;
  //   console.log(Array.isArray(args)); true
  for (let num of args) {
    totalSum += num;
  }
  return totalSum;
}

const result = add(1, 2, 3, 4, 5);
console.log(result);

// their's a callee function in arguments array
// rest parameter must be the last parameter in the function

function findSum() {
  const newArray = Array.from(arguments);
  const totalSum = newArray.reduce((acc, num, indx, arr) => {
    return acc + num;
  }, 0);
  console.log(Array.isArray(arguments));
  console.log(Array.isArray(newArray));
  return totalSum;
}

const nums = [1, 2, 3, 4, 5];
const totalSum = findSum(...nums);

console.log(totalSum);
