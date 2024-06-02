// primitive types (value types)
// non primitive types (reference types)
// their is only one non primitive data type and that is an object.

function greet() {
  return "hi";
}

console.log(typeof greet);

const userDetails1 = {
  firstName: "Vedant",
  lastName: "Yetekar",
  age: 21,
  city: "Bangalore",
};

const userDetails2 = {
  firstName: "Vedant",
  lastName: "Yetekar",
  age: 21,
  city: "Bangalore",
};

console.log(userDetails1 === userDetails2); // false as both objects have different location in the memory

const s = "";
const t = "";

console.log(s === t); // true as for primitive data types address will be same

const param = "age";

console.log(userDetails1["firstName"]);
console.log(userDetails1.dateOfBirth);
console.log(userDetails1[param]);
userDetails1.firstName = "Parth";
console.log(userDetails1["firstName"]);
userDetails1["firstName"] = "Joseph";
console.log(userDetails1["firstName"]);

const dummy = {
  [param]: 21,
  address: {
    city: "Bengaluru",
    state: "Karnataka",
    area: "Bellandur",
    pinCode: 560103,
  },
};

console.log(dummy);
