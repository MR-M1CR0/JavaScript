function findSecondLowestAndGreatest() {
  var inputNumbers = document.getElementById('numbers').value.split(',');

  var convertedNumbers = [];
  for (var i = 0; i < inputNumbers.length; i++) {
    convertedNumbers.push(Number(inputNumbers[i]));
  }

  var sortedNumbers = convertedNumbers.sort(function (a, b) {
    return a - b;
  });

  var secondLowest = sortedNumbers[1];
  var secondGreatest = sortedNumbers[sortedNumbers.length - 2];

  var resultElement = document.getElementById('result');
  resultElement.textContent =
    'Second Lowest: ' + secondLowest + ', Second Greatest: ' + secondGreatest;
}
