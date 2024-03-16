var btn = document.getElementById('btn');
var userData; // Define userData variable in the global scope

// Add the showDetails function to the global scope
function showDetails(userId) {
  // Open a new window
  var userDetailsWindow = window.open('', '_assign', 'width=400,height=300');

  // Add CSS styles to the new window
  userDetailsWindow.document.write(`
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
    }
    
    h2 {
      color: #333;
      text-align: center;
    }
    
    table {
      border-collapse: collapse;
      margin-top: 20px;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
    
    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    th {
      background-color: #f5f5f5;
      font-weight: bold;
    }
  </style>
  <h2>User Details</h2>
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
    <tr>
      <td>Loading...</td>
      <td>Loading...</td>
      <td>Loading...</td>
    </tr>
  </table>
`);

  // Make a new XMLHttpRequest with the specific id number
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/' + userId);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var user = JSON.parse(xhr.response);
        // Update the user details in the new window
        userDetailsWindow.document.querySelector(
          'td:nth-child(1)'
        ).textContent = user.id;
        userDetailsWindow.document.querySelector(
          'td:nth-child(2)'
        ).textContent = user.name;
        userDetailsWindow.document.querySelector(
          'td:nth-child(3)'
        ).textContent = user.email;
      } else {
        console.error('Error: ' + xhr.status);
      }
    }
  };
}

btn.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        userData = JSON.parse(xhr.response); // Assign the parsed userData to the global variable
        var tbody = document.getElementById('tbody');
        tbody.innerHTML = ''; // Clear existing rows

        for (var i = 0; i < userData.length; i++) {
          var tr = document.createElement('tr');
          var td1 = document.createElement('td');
          var td2 = document.createElement('td');
          var td3 = document.createElement('td');
          var td4 = document.createElement('td');
          td1.innerHTML = userData[i].id;
          td2.innerHTML = userData[i].name;
          td3.innerHTML = userData[i].email;
          td4.innerHTML =
            '<button onclick="showDetails(' +
            userData[i].id +
            ')">Show Details</button>';
          tr.append(td1, td2, td3, td4);
          tbody.append(tr);
        }
      } else {
        console.error('Error: ' + xhr.status);
      }
    }
  };
});
