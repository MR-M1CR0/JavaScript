function addNumbers() {
  if (arguments.length === 0) {
    throw new Error('No numbers provided');
  }

  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') {
      throw new Error('Invalid input. Only numbers are allowed.');
    }
    sum += arguments[i];
  }

  return sum;
}

console.log(addNumbers(1, 2, 3));
// console.log(addNumbers('1', '2', '3'));
console.log(addNumbers());
