// Constructor function
function Student(name, age) {
  this.name = name;
  this.age = age;
}

// Factory function
// function createStudent(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }
// Create a new Student object using the factory function
//   var student = createStudent(name, age);

var addBtn = document.querySelector('#btn');

addBtn.addEventListener('click', function () {
  var name = document.querySelector('#name').value;
  var age = document.querySelector('#age').value;
  var error = document.querySelector('#error');

  if (name.length < 3 || Number(age) < 18) {
    error.textContent = 'Please enter valid data';
    return;
  }

  // Create a new Student object using the constructor function
  var student = new Student(name, age);

  var tbody = document.querySelector('#tbody');

  var newRow = document.createElement('tr');
  var idCell = document.createElement('td');
  var nameCell = document.createElement('td');
  var ageCell = document.createElement('td');
  var removeCell = document.createElement('td');
  var removeButton = document.createElement('button');
  idCell.textContent = tbody.childElementCount + 1;
  nameCell.textContent = student.name;
  ageCell.textContent = student.age;
  removeButton.textContent = 'Remove User';

  removeCell.appendChild(removeButton);

  newRow.appendChild(idCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(ageCell);
  newRow.appendChild(removeCell);

  tbody.appendChild(newRow);

  // Add event listener to the remove button
  removeButton.addEventListener('click', function () {
    // Remove the row from the table
    newRow.remove();
  });
});

// function getArr() {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     (function (i) {
//       arr.push(function () {
//         console.log(i);
//       });
//     })(i);
//   }

//   return arr;
// }

// var result = getArr();

// result[0]();
// result[1]();
// result[2]();
