const btn = document.querySelector('button');
const users = document.querySelector('.users');
const postDiv = document.querySelector('.post');

btn.addEventListener('click', function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response
      .json()
      .then((data) => {
        data.forEach((user) => {
          users.innerHTML += `<button onclick="PostById(${user.id})">${user.name}</button>`;
        });
      })
      .catch(function (errorMsg) {
        console.log(errorMsg);
      });
  });
  btn.removeEventListener('click', fetchData);
});

function PostById(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(
    (response) => {
      return response
        .json()
        .then((data) => {
          postDiv.innerHTML = '';
          data.forEach((post) => {
            element = document.createElement('div');
            element.innerHTML = `<h2>${post.id} ${post.title}</h2><p>${post.body}</p>`;
            postDiv.appendChild(element);
          });
        })
        .catch(function (errorMsg) {
          console.log(console.log(errorMsg));
        });
    }
  );
}

// /////////////////////////////////////////////////////////////////
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    data.forEach((user) => {
      users.innerHTML += `<button onclick="PostById(${user.id})">${user.name}</button>`;
    });
    btn.removeEventListener('click', fetchData);
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener('click', fetchData);

async function PostById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const data = await response.json();
    postDiv.innerHTML = '';
    data.forEach((post) => {
      element = document.createElement('div');
      element.innerHTML = `<h2>${post.id} ${post.title}</h2><p>${post.body}</p>`;
      postDiv.appendChild(element);
    });
  } catch (error) {
    console.log(error);
  }
}
