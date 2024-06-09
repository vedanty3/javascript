// const username1 = "Vedant";
// let username2 = username1;
// username2 = username2 + " Yetekar";

const fruits = ["Orange", "Mango", "Apple"];
// const myFruits = fruits;
const myFruits = [...fruits];
// const myFruits = [].concat(fruits);
// const myFruits = fruits.slice();

console.log(fruits, myFruits);

// reflect in both fruits and myFruits

// Object.assign(myFruits, fruits);
myFruits.push("Grapes");

console.log(myFruits, fruits);

const user1 = {
  firstName: "Vedant",
  lastName: "Yetekar",
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};

// Way 1
// const user2 = user1;

// Way 2
// const user2 = {};
// Object.assign(user2, user1);

// Way 3
// const user2 = { ...user1, firstName: "Parth" };
// user2.firstName = "Parth";

// Deep Copy
const user2 = JSON.parse(JSON.stringify(user1));
user2.address.city = "Bombay";

console.log(user1, user2);
