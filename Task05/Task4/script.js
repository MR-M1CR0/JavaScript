var reverseParams = function () {
  var reversedParams = [];
  for (var i = arguments.length - 1; i >= 0; i--) {
    reversedParams.push(arguments[i]);
  }
  return reversedParams;
};

var reverseParamsWithReverse = function () {
  var argsArray = Array.from(arguments);

  var reversedParams = argsArray.reverse();

  return reversedParams;
};

console.log(reverseParams(1, 2, 3, 4, 5));
console.log(reverseParamsWithReverse(10, 20, 30, 40, 50));
