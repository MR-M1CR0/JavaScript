// 1
let varOne = 1;
let varTwo = 2;

console.log(`varOne: ${varOne}`);
console.log(`varTwo: ${varTwo}`);

[varOne, varTwo] = [varTwo, varOne];

console.log(`varOne: ${varOne}`);
console.log(`varTwo: ${varTwo}`);

// 2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const minAndMaxValues = function (...rest) {
  return [Math.min(...rest), Math.max(...rest)];
};
const [min, max] = minAndMaxValues(...arr);
console.log(`min: ${min}\nmax: ${max}`);

// 3
const arr2 = ['apple', 'strawberry', 'banana', 'orange', 'mango'];
//a
const isString = arr2.every((item) => typeof item === 'string');
console.log(isString);
//b
const startsWitha = arr2.some((item) => item.startsWith('a'));
console.log(startsWitha);
//c
const arr3 = arr2.filter(
  (item) => item.startsWith('b') || item.startsWith('s')
);
console.log(arr3);
//d
const arr4 = arr2.map((item) => `I Like ${item}`);
console.log(arr4);
//e
arr4.forEach((item) => console.log(item));

const fruits = ['apple', 'banana', 'orange', 'apple', 'banana'];
const count = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(count);
// Output: { apple: 2, banana: 2, orange: 1 }
