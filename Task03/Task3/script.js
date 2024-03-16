function changeColor() {
  var number = document.getElementById('number').value;
  var circles = document.querySelectorAll('.circle');

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    circle.classList.remove('redCircle', 'yellowCircle', 'greenCircle');
  }

  if (number === '1') {
    circles[0].classList.add('redCircle');
  } else if (number === '2') {
    circles[1].classList.toggle('yellowCircle');
  } else if (number === '3') {
    circles[2].classList.toggle('greenCircle');
  }
}
