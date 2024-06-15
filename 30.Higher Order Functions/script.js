function dummy() {}

function getUserDetails() {
  return { firstName: "Vedant", lastName: "Yetekar", age: 21 };
}

function greet(getUserDetails) {
  console.dir(getUserDetails);
  const { firstName, lastName } = getUserDetails();
  console.log(`Hi, How are you ${firstName} ${lastName}?`);
}

greet(getUserDetails);

// typeof function is an object
dummy.value = -9911;
console.log(dummy.value);

const dummyTwin = dummy;

dummyTwin.value = -110;

console.log(dummy.value);

console.dir(dummy);

// the function which is passed as a parameter to another function is called as a callback function
greet(function () {
  return { firstName: "Parth", lastName: "Yetekar" };
});
