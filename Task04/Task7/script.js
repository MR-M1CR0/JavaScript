var stopBtn = document.getElementById('stop');
var newWindow = window.open('', '', 'width=25, height=25');
var x = 0; // initial position of the window
var y = 0;
var directionX = 1; // direction of horizontal movement (1 for right, -1 for left)
var directionY = 1; // direction of vertical movement (1 for down, -1 for up)
var maxWidth = window.innerWidth; // maximum width of the window
var maxHeight = window.innerHeight; // maximum height of the window
// var maxWidth = screen.availWidth;
// var maxHeight = screen.availHeight;

var intervalId = setInterval(function () {
  newWindow.moveTo(x, y); // move the window to the current position
  newWindow.resizeTo(
    Math.min(25 + directionX * 10, maxWidth - x),
    Math.min(25 + directionY * 10, maxHeight - y)
  );

  x += directionX * 10;
  y += directionY * 10; // increment or decrement the coordinates based on the direction

  if (x >= maxWidth || x <= 0 || y >= maxHeight || y <= 0) {
    // check if the window reaches any edge
    directionX *= -1; // reverse the direction of horizontal movement
    directionY *= -1; // reverse the direction of vertical movement
  }
}, 25);

stopBtn.addEventListener('click', function () {
  clearInterval(intervalId); // stop the interval when the stop button is clicked
  newWindow.focus(); // bring the window to the front
});
