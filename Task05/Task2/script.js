var myDate = new Date();
myDate.setDate(myDate.getDate() + 5);
var counter = 0;
var userName = document.getElementById('name');
var age = document.getElementById('age');
var male = document.getElementById('male');
var female = document.getElementById('female');
var genderOptions = document.getElementsByName('gender');

var color = document.getElementById('color');
function submit() {
  saveCookie('name', userName.value);
  saveCookie('age', age.value);
  var genderSelected;
  for (var i = 0; i < genderOptions.length; i++) {
    if (genderOptions[i].checked) {
      genderSelected = genderOptions[i].value;
      break;
    }
  }
  if (genderSelected === 'male') {
    saveCookie('gender', 'male');
  } else {
    saveCookie('gender', 'female');
  }
  saveCookie('color', color.value);
  saveCookie('counter', counter);
  if (hasCookie('age')) {
    deleteCookie('age', age.value);
  } else {
    console.log('The cookie does not exist.');
  }
  window.location.href = 'showinfo.html';
}

function saveCookie(key, value) {
  document.cookie = key + '=' + value + ';expires=' + myDate;
}
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
function deleteCookie(key, value) {
  myDate.setDate(myDate.getDate() - 1000);
  document.cookie = key + '=' + value + ';expires=' + myDate;
}
function hasCookie(cookieName) {
  var allCookies = document.cookie;
  var cookiesArray = allCookies.split(';');
  for (var i = 0; i < cookiesArray.length; i++) {
    var cookie = cookiesArray[i].trim();
    if (cookie.indexOf(cookieName + '=') === 0) {
      return true;
    }
  }
  return false;
}
