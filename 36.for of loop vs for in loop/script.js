const nums = [1, 2, 3, 4, 5];

const userDetails = {
  firstName: "Vedant",
  lastName: "Yetekar",
  age: 21,
  nums,
};

for (let i = 0; i < nums.length; ++i) {
  console.log(i);
}

for (let num of nums) {
  console.log(num);
}

console.time("for in start");

for (let key in userDetails) {
  console.log(key, userDetails[key]);
}

console.timeEnd("for in start");

console.time("for of start");

for (let key of Object.keys(userDetails)) {
  console.log(key, userDetails[key]);
}

console.timeEnd("for of start");

console.log(Object.values(userDetails));
console.log(Object.keys(userDetails));
console.log(Object.entries(userDetails));

const userDetailsValues = Object.values(userDetails);
