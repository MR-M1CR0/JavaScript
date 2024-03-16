var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  var newWindow = window.open('', 'Message Window', 'width=420,height=150');
  var message =
    '<p>Your Message Will Be Displayed Character By Character :) Few Seconds and this Windows will Terminate...</p>';

  var index = 0;
  function printChar() {
    newWindow.document.write(message[index]);
    index++;
    if (index < message.length) {
      setTimeout(printChar, 100);
    } else {
      setTimeout(function () {
        newWindow.close();
      }, 500);
    }
  }

  printChar();
});
