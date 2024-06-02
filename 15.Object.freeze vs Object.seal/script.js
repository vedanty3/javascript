const userDetails = {
  firstName: "Vedant",
  lastName: "Yetekar",
  age: 21,
};

// seal - it is open for modification and not for extension
// Object.seal(userDetails);

// freeze - it can neither be modified nor be extended
Object.freeze(userDetails);

userDetails.isGraduate = true;
userDetails.firstName = "Parth";

console.log(userDetails);
console.log("age" in userDetails);
console.log("firstName" in userDetails);
console.log("isGraduate" in userDetails);
