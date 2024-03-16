var count = 0;
var circles = document.querySelectorAll('.circle');
var myInterval = setInterval(function () {
  count++;
  if (count < 4) {
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i];
      circle.classList.remove('redCircle', 'yellowCircle', 'greenCircle');
    }

    if (count === 1) {
      circles[0].classList.add('redCircle');
    } else if (count === 2) {
      circles[1].classList.add('yellowCircle');
    } else if (count === 3) {
      circles[2].classList.add('greenCircle');
    }
  } else {
    count = 0;
  }
}, 1000);
