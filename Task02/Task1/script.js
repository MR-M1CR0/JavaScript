// 3.1
function calculateValues() {
  var userInputs = [];
  for (var i = 0; i < 3; i++) {
    userInputs.push(parseFloat(prompt('Enter number')));
  }
  var sum = 0,
    multiply = 1,
    divide = 1;
  for (var i = 0; i < userInputs.length; i++) {
    sum += userInputs[i];
    multiply *= userInputs[i];
    if (i === 0) {
      divide = userInputs[i];
    } else {
      divide /= userInputs[i];
    }
  }

  document.querySelector('.sumPlace').innerHTML = sum;
  document.querySelector('.multiplyPlace').innerHTML = multiply;
  document.querySelector('.dividePlace').innerHTML = divide;
}

calculateValues();

// 3.2
function getUserInputs() {
  var userInputsArr = [];
  for (var i = 0; i < 5; i++) {
    userInputsArr.push(parseInt(prompt('Enter number')));
  }
  return userInputsArr;
}

function displayValues(elementSelector, values) {
  document.querySelector(elementSelector).innerHTML = values;
}

function sortAscending(arr) {
  return arr.slice().sort(function (a, b) {
    return a - b;
  });
}

function sortDescending(arr) {
  return arr.slice().sort(function (a, b) {
    return b - a;
  });
}

var userInputs = getUserInputs();
displayValues('.valuesPlace', userInputs);

var ascendingOrder = sortAscending(userInputs);
displayValues('.ascendingPlace', ascendingOrder);

var descendingOrder = sortDescending(userInputs);
displayValues('.descendingPlace', descendingOrder);
