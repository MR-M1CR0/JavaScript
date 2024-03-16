var data = document.getElementById('data');
function saveCookie(key, value) {
  document.cookie = key + '=' + value;
}
var counterTemp = getCookie('counter');
counterTemp++;
saveCookie('counter', counterTemp);
var src;
var gender = getCookie('gender');

if (gender == 'male') {
  src = 'images/1.jpg';
} else {
  src = 'images/2.jpg';
}

data.innerHTML = `
<img display="inline" src="${src}">
<p style="margin-top: 150px;">Welcome <span style="color:${getCookie(
  'color'
)}">${getCookie('name')}</span>, You have Visited ${getCookie(
  'counter'
)} Times.</p>
`;

function getCookie(key) {
  var name = key + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
}
