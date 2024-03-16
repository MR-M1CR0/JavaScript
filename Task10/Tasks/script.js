const arr = ['Ahmed', 'Mohamed', 'Mahmoud', 'Ali', 'Abdallah'];
// arr[Symbol.iterator] = getValue;
// function getValue() {
//   let step = 0;
//   return {
//     next: function () {
//       if (step == arr.length) {
//         return {
//           value: undefined,
//           done: true,
//         };
//       } else {
//         step++;
//         return {
//           value: arr[step - 1],
//           done: false,
//         };
//       }
//     },
//   };
// }
// for (let i of arr) {
//   console.log(i);
// }

arr[Symbol.iterator] = getValue2;
function* getValue2() {
  let index = 0;
  while (index < arr.length) yield arr[index++];
}
for (let i of arr) {
  console.log(i);
}

const product = {
  name: 'product1',
  price: 10,
  quantity: 100,
};

const handler = {
  get: function (target, prop) {
    return target[prop];
  },
  set: function (target, prop, value) {
    if (prop === 'name' && typeof value !== 'string') {
      throw new Error('Name must be a string');
    } else if (prop === 'price' && (typeof value !== 'number' || value < 0)) {
      throw new Error('Price must be a positive number');
    } else if (prop === 'quantity' && typeof value !== 'number') {
      throw new Error('Quantity must be a number');
    } else {
      target[prop] = value;
    }
    return true;
  },
};

const myProxy = new Proxy(product, handler);
console.log(myProxy);

import showDetails from './modules.js';

showDetails({ name: 'product2', price: 20, quantity: 200 });
