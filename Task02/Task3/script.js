function fizzBuzz(userNumberInput) {
  if (userNumberInput % 3 === 0 && userNumberInput % 5 === 0) {
    return 'FizzBuzz';
  } else if (userNumberInput % 3 === 0) {
    return 'Fizz';
  } else if (userNumberInput % 5 === 0) {
    return 'Buzz';
  } else {
    return 'none';
  }
}

var userNumberInput = Number(prompt('Enter a number'));
document.write(fizzBuzz(userNumberInput));
