const nums = [];
nums.push(10);
nums.push(20);
nums.push(30);
nums.push(40);

console.log(nums);

nums.pop(); // removes from the back

console.log(nums);

nums.shift(); // removes from the front (takes more time than pop function)

console.log(nums);

nums.unshift(-100);

console.log(nums);

const nums1 = [1, "Raj", 3, 4, 5];
const nums2 = [6, 7, 8, 9, "Vedant"];

const concatenatedNums = nums1.concat(nums2); // returns new array, doesn't modify previous one.

console.log(concatenatedNums);

console.log(nums1.indexOf("Raj"));
console.log(nums1.indexOf("RAJ"));
console.log(typeof nums2.includes("Vedant"));
nums.reverse();

console.log(nums);

const unsortedArray = [10, 9, 7, 6, 8, 5, 4, 3, 2, 1];
unsortedArray.sort((a, b) => b - a); // descending order
console.log(unsortedArray);

unsortedArray.sort((a, b) => a - b); // ascending order
console.log(unsortedArray);

const userNames = ["Vedant", "Parth", "Raj", "Jay", "Ram", "Hanuman"];
console.log(userNames);
userNames.sort();
console.log(userNames);

const animals = ["Dog", "Cat", "Rabbit", "Cow", "Lion", "Leopard"];

console.log(animals.slice(1, 5)); // [x, y)
console.log(animals);

const remainingAnimals = animals.splice(1, 4); // [x, y]
console.log(animals);
console.log(remainingAnimals);

console.log(animals.slice(2));

const wildAnimals = ["Dog", "Cat", "Rabbit", "Cow", "Lion", "Leopard"];
wildAnimals.splice(3, 2, "Deer", "Goat");
console.log(wildAnimals);
