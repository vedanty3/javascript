function multiply(a, b = 1) {
  return a * b;
}

const multiplicationResult1 = multiply(5, 10);
const multiplicationResult2 = multiply(5, undefined);
const multiplicationResult3 = multiply(5, false);
const multiplicationResult4 = multiply(5, null);
const multiplicationResult5 = multiply(5, "hello");
const multiplicationResult6 = multiply(5, "");

console.log(multiplicationResult1);
console.log(multiplicationResult2);
console.log(multiplicationResult3);
console.log(multiplicationResult4);
console.log(multiplicationResult5);
console.log(multiplicationResult6);
