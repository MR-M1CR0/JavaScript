function findLetterPositions(string, letter) {
  var positions = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      positions.push(i);
    }
  }

  return positions;
}

var userStringInput = prompt('Enter a string');
var userLetterInput = prompt('Enter a letter');

var letterArray = findLetterPositions(userStringInput, userLetterInput);

document.write(letterArray);
