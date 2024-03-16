function askQuestion(question) {
  return confirm(question);
}

function showAlert(message) {
  alert(message);
}

function processUserInput() {
  var userInput = askQuestion('Do you fly?');

  if (userInput) {
    userInput = askQuestion('Are You Wild?');
    if (userInput) {
      showAlert('Eagle');
    } else {
      showAlert('Parrot');
    }
  } else {
    userInput = askQuestion('Do you live under sea?');
    if (userInput) {
      userInput = askQuestion('Are You Wild?');
      if (userInput) {
        showAlert('Shark');
      } else {
        showAlert('Dolphin');
      }
    } else {
      userInput = askQuestion('Are You Wild?');
      if (userInput) {
        showAlert('Lion');
      } else {
        showAlert('Cat');
      }
    }
  }
}

processUserInput();
