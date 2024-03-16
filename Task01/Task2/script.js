// //2.1

var userInputString = prompt('Enter a string');

var charECount = 0;
for (var i = 0; i < userInputString.length; i++) {
  if (userInputString[i] == 'e') {
    charECount++;
  }
}

document.writeln("The number of e's in the string is: " + charECount);

//2.2
var userInputPalindromeString = prompt('Enter a palindrome string');
var caseSensitive = confirm('Include case sensitive?');

if (caseSensitive) {
  if (
    userInputPalindromeString ==
    userInputPalindromeString.split('').reverse().join('')
  ) {
    document.writeln('The string is a palindrome');
  } else {
    document.writeln('The string is not a palindrome');
  }
} else {
  if (
    userInputPalindromeString.toLowerCase() ==
    userInputPalindromeString.toLowerCase().split('').reverse().join('')
  ) {
    document.writeln('The string is a palindrome');
  } else {
    document.writeln('The string is not a palindrome');
  }
}

// //2.3
// var userName;
// do {
//   userName = prompt('Enter your name');
// } while (isNaN(userName) == false);

// var userPhoneNumber;
// do {
//   userPhoneNumber = prompt('Enter your phone number');
// } while (userPhoneNumber.length != 8 || isNaN(userPhoneNumber));

// // var userMobileNumber;
// // do {
// //   userMobileNumber = prompt('Enter your mobile number');
// // } while (
// //   isNaN(userMobileNumber) ||
// //   userMobileNumber.length !== 11 ||
// //   !userMobileNumber.startsWith('010') ||
// //   !userMobileNumber.startsWith('011') ||
// //   !userMobileNumber.startsWith('012')
// // );

// var userMobileNumber;
// do {
//   userMobileNumber = prompt('Enter your mobile number');
// } while (!/^(010|011|012)\d{8}$/.test(userMobileNumber));

// var userEmail;
// do {
//   userEmail = prompt('Enter your email');
// } while (!/^[a-zA-Z]{3}@[0-9]{3}\.[a-zA-Z]{3}$/.test(userEmail));

// var colorChoice = prompt('Enter your favorite color? (red, blue, green)');
// switch (colorChoice) {
//   case 'red':
//     var paragraphs = document.getElementsByClassName('desing');
//     for (var i = 0; i < paragraphs.length; i++) {
//       paragraphs[i].style.color = 'red';
//     }
//     var element1 = document.getElementsByClassName('name')[0];
//     element1.innerHTML = userName;
//     var element2 = document.getElementsByClassName('telnumber')[0];
//     element2.innerHTML = userPhoneNumber;
//     var element3 = document.getElementsByClassName('mobnumber')[0];
//     element3.innerHTML = userMobileNumber;
//     var element4 = document.getElementsByClassName('email')[0];
//     element4.innerHTML = userEmail;
//     var element5 = document.getElementsByClassName('date')[0];
//     element5.innerHTML = new Date().toLocaleString('en-US', {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric',
//     });

//     element1.style.color = 'black';
//     element2.style.color = 'black';
//     element3.style.color = 'black';
//     element4.style.color = 'black';
//     element5.style.color = 'black';

//     break;
//   case 'blue':
//     var paragraphs = document.getElementsByClassName('desing');
//     for (var i = 0; i < paragraphs.length; i++) {
//       paragraphs[i].style.color = 'blue';
//     }
//     var element1 = document.getElementsByClassName('name')[0];
//     element1.innerHTML = userName;
//     var element2 = document.getElementsByClassName('telnumber')[0];
//     element2.innerHTML = userPhoneNumber;
//     var element3 = document.getElementsByClassName('mobnumber')[0];
//     element3.innerHTML = userMobileNumber;
//     var element4 = document.getElementsByClassName('email')[0];
//     element4.innerHTML = userEmail;
//     var element5 = document.getElementsByClassName('date')[0];
//     element5.innerHTML = new Date().toLocaleString('en-US', {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric',
//     });

//     element1.style.color = 'black';
//     element2.style.color = 'black';
//     element3.style.color = 'black';
//     element4.style.color = 'black';
//     element5.style.color = 'black';
//     break;
//   case 'green':
//     var paragraphs = document.getElementsByClassName('desing');
//     for (var i = 0; i < paragraphs.length; i++) {
//       paragraphs[i].style.color = 'green';
//     }
//     var element1 = document.getElementsByClassName('name')[0];
//     element1.innerHTML = userName;
//     var element2 = document.getElementsByClassName('telnumber')[0];
//     element2.innerHTML = userPhoneNumber;
//     var element3 = document.getElementsByClassName('mobnumber')[0];
//     element3.innerHTML = userMobileNumber;
//     var element4 = document.getElementsByClassName('email')[0];
//     element4.innerHTML = userEmail;
//     var element5 = document.getElementsByClassName('date')[0];
//     element5.innerHTML = new Date().toLocaleString('en-US', {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric',
//     });

//     element1.style.color = 'black';
//     element2.style.color = 'black';
//     element3.style.color = 'black';
//     element4.style.color = 'black';
//     element5.style.color = 'black';
// }

function getUserInput(promptMessage, validation) {
  var userInput;
  do {
    userInput = prompt(promptMessage);
  } while (!validation(userInput));
  return userInput;
}

function isValidPhoneNumber(phoneNumber) {
  return phoneNumber.length === 8 && !isNaN(phoneNumber);
}

function isValidMobileNumber(mobileNumber) {
  return /^(010|011|012)\d{8}$/.test(mobileNumber);
}

function isValidEmail(email) {
  return /^[a-zA-Z]{3}@[0-9]{3}\.[a-zA-Z]{3}$/.test(email);
}

var userName = getUserInput('Enter your name', function (input) {
  return isNaN(input);
});

var userPhoneNumber = getUserInput(
  'Enter your phone number',
  isValidPhoneNumber
);
var userMobileNumber = getUserInput(
  'Enter your mobile number',
  isValidMobileNumber
);
var userEmail = getUserInput('Enter your email', isValidEmail);

var colorChoice = prompt('Enter your favorite color? (red, blue, green)');
var paragraphs = document.getElementsByClassName('desing');
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = colorChoice;
}

var elements = {
  name: userName,
  telnumber: userPhoneNumber,
  mobnumber: userMobileNumber,
  email: userEmail,
  date: new Date().toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }),
};

for (var key in elements) {
  if (elements.hasOwnProperty(key)) {
    var element = document.getElementsByClassName(key)[0];
    element.innerHTML = elements[key];
    element.style.color = 'black';
  }
}

