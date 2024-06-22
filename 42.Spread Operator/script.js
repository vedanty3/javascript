const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = [...nums1, ...nums2];

console.log(nums1, nums2, nums3);

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

const result = addThreeNumbers(...nums1);
console.log(result);

function argumentsToArray() {
  const convertedArray = [...arguments];
  return convertedArray;
}

const convertedArray = argumentsToArray(10, 20, 30, 40);
console.log(convertedArray);

const userDetails = {
  firstName: "Vedant",
  lastName: "Yetekar",
  age: 21,
};

const advancedUserDetails = {
  ...userDetails,
  city: "Bangalore",
};

console.log(advancedUserDetails);
