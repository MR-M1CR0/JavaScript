var success = document.querySelector('.success');
var error = document.querySelector('.error');
var result = document.querySelector('#result');

success.addEventListener('click', function () {
  result.setAttribute('src', './images/alert1.png');
});

error.addEventListener('click', function () {
  result.setAttribute('src', './images/alert2.png');
});
