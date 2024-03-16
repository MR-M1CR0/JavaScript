var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userPassword = document.getElementById('password');
var userGender = document.getElementsByName('gender');
var userSports = document.getElementsByName('sports');
var userCountry = document.getElementById('country');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');
var genderError = document.getElementById('genderError');
var sportsError = document.getElementById('sportsError');
var countryError = document.getElementById('countryError');
var submit = document.getElementById('submit');
var myInterval;

var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

submit.addEventListener('click', function (event) {
  event.preventDefault();

  nameError.textContent = validateField(userName, 'Please enter your name');
  emailError.textContent = validateEmail(userEmail.value);
  passwordError.textContent = validatePassword(userPassword.value);
  genderError.textContent = validateGender();
  countryError.textContent = validateField(
    userCountry,
    'Please select your country'
  );
  sportsError.textContent = validateSports();
});

function validateField(field, errorMessage) {
  return field.value === '' ? errorMessage : '';
}

function validateEmail(email) {
  return emailPattern.test(email) ? '' : 'Email is not valid';
}

function validatePassword(password) {
  return password.length < 8 ? 'Password must be at least 8 characters' : '';
}

function validateGender() {
  return userGender[0].checked || userGender[1].checked
    ? ''
    : 'Please select your gender';
}

function validateSports() {
  var checkedSports = [];
  for (var i = 0; i < userSports.length; i++) {
    var sport = userSports[i];
    if (sport.checked) {
      checkedSports.push(sport);
    }
  }
  return checkedSports.length >= 2 ? '' : 'Please select at least two sports';
}

function addFocusListeners() {
  var fields = [userName, userEmail, userPassword, userCountry];
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    field.addEventListener('focus', function () {
      document.getElementById(field.id + 'Error').textContent = '';
    });
  }

  for (var j = 0; j < userGender.length; j++) {
    var gender = userGender[j];
    gender.addEventListener('focus', function () {
      genderError.textContent = '';
    });
  }

  userSports[0].addEventListener('focus', function () {
    sportsError.textContent = '';
  });
}

addFocusListeners();
