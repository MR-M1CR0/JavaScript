// 1.1
var userInputMessage = prompt('Enter a message:');

for (var i = 1; i < 7; i++) {
  document.writeln('<h' + i + '>' + userInputMessage + i + '</h' + i + '>');
}

// 1.2
var userInputNum;
var sum = 0;
while (userInputNum != 0 && sum < 100) {
  userInputNum = Number(prompt('Enter a Number:'));
  sum += userInputNum;
}
document.write('Sum = ' + sum);
