function setMarbleImage(index) {
  if (index !== 0) {
    images[index - 1].setAttribute('src', 'marbels/marble1.jpg');
  }
  images[index].setAttribute('src', 'marbels/marble3.jpg');
}

function startInterval() {
  myInterval = setInterval(function () {
    c = c % 5;
    setMarbleImage(c);
    c++;
  }, 1000);
}

function stopInterval() {
  clearInterval(myInterval);
}

function handleMouseEnter() {
  stopInterval();
}

function handleMouseLeave() {
  startInterval();
}

var images = document.getElementsByTagName('img');
var c = 0;
var myInterval;

startInterval();

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseenter', handleMouseEnter);
  images[i].addEventListener('mouseleave', handleMouseLeave);
}
