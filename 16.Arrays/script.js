const nums = [1, 2, 3, 4, 5, 200];

console.log(typeof nums);
console.log(nums);

const arr = new Array();

for (let i = 0; i < 5; ++i) {
  arr.push(Math.round(Math.random() * 100) + 1);
}

console.log(arr);
console.log(arr.length);

const mixedArray = [
  "Vedant",
  21,
  undefined,
  null,
  { firstName: "Vedant", lastName: "Yetekar", age: 21 },
  [],
];

console.log(mixedArray);
console.log(mixedArray[7]);
mixedArray[7] = "Ram";
console.log(mixedArray);
console.log(mixedArray.length);

mixedArray.push("como es tas");

console.log(mixedArray);

mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();

console.log(mixedArray);
console.log(mixedArray.length);

const array = [];
array.firstName = "Vedant Yetekar";

console.log(array);
console.log(array.length);
array.push("Hola! como es tas?");
console.log(array);
console.log(array.length);
