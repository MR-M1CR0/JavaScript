var playBtn = document.getElementById('play');
var stopBtn = document.getElementById('stop');
var beforeBtn = document.getElementById('before');
var afterBtn = document.getElementById('after');
var img = document.getElementsByTagName('img')[0];

var index = 0;

var images = [
  'Images/1.jpg',
  'Images/2.jpg',
  'Images/3.jpg',
  'Images/4.jpg',
  'Images/5.jpg',
  'Images/6.jpg',
];

afterBtn.addEventListener('click', function () {
  img.setAttribute('src', images[index]);
  index++;
  if (index === images.length) {
    index = 0;
  }
});

beforeBtn.addEventListener('click', function () {
  img.setAttribute('src', images[index]);
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
});

var myInterval;

playBtn.addEventListener('click', function () {
  myInterval = setInterval(function () {
    img.setAttribute('src', images[index]);
    index++;
    if (index === images.length) {
      index = 0;
    }
  }, 1000);
});

stopBtn.addEventListener('click', function () {
  clearInterval(myInterval);
});
