function convertInputToUpperCase() {
  var inputMessage = document.getElementById('message').value.split(' ');

  for (var i = 0; i < inputMessage.length; i++) {
    inputMessage[i] =
      inputMessage[i].charAt(0).toUpperCase() + inputMessage[i].slice(1);
  }

  var messageUpperCase = inputMessage.join(' ');

  var resultElement = document.getElementById('result');
  resultElement.textContent = 'Output: ' + messageUpperCase;
}
