const colors = [
  "red",
  "blue",
  "yellow",
  "pink",
  "purple",
  "white",
  "violet",
  "maroon",
  "crimson",
  "green",
];

const userDetails = {
  firstName: "Vedant",
  lastName: "Yetekar",
  age: 21,
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};

// const c1 = colors[0];
// const c2 = colors[1];
// const c3 = colors[2];

// const [c1, c2, c3, ...remainingColors] = colors;

// console.log(c1, c2, c3);
// console.log(remainingColors);

// const [, , c3] = colors;
// console.log(c3);

const {
  firstName: fName,
  lastName: lName,
  age,
  address: { city, state },
} = userDetails;

console.log(fName, lName, age, city, state);

const { 3: c3 } = colors;
console.log(c3);

function greet({ firstName, lastName, ...remainingDetails }) {
  // console.log(remainingDetails);
  console.log(`Hi, ${firstName} ${lastName}. How are you doing?`);
  return;
}

greet(userDetails);

function printColors1([c1, c2, ...remainingColors]) {
  // console.log(remainingColors);
  console.log(c1, c2);
  return;
}

function printColors2({ 0: c1, 1: c2, ...remainingColors }) {
  // console.log(remainingColors);
  console.log(c1, c2);
  return;
}

printColors1(colors);
printColors2(colors);
