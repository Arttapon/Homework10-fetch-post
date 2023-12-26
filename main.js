
// .then( resp => {
//     console.log(resp)
//     return resp.json
// }).then( data => {
//     console.log(data)
//     console.log(typeof data)
//     console.log(data[0])
//     console.log(data[0].name)
// })

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//     const userList = document.querySelector('.user-list');
//     data.forEach(user => {
//       const li = document.createElement('li');
//       li.textContent = `${user.name} ${user.email}`;
//       userList.appendChild(li);
//     });
//   })
//   .catch(error => console.error('Error fetching users:', error));



  // let li = makeElement('li', '', '', ...)

  // main.js
document.addEventListener('DOMContentLoaded', () => {
  const userListContainer = document.querySelector('.user-list');
  const postInfoContainer = document.querySelector('.post-info');
  
  // Fetch user data from the API
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
          // Display user names
          users.forEach(user => {
              const userName = document.createElement('p');
              userName.textContent = user.name;
              userName.addEventListener('click', () => {
                  displayUserPosts(user.id);
              });
              userListContainer.appendChild(userName);
          });
      })
      .catch(error => console.error('Error fetching users:', error));

  // Function to display posts of a specific user
  function displayUserPosts(userId) {
      // Clear previous posts
      postInfoContainer.innerHTML = '';

      // Fetch posts of the selected user
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then(response => response.json())
          .then(posts => {
              // Display posts
              posts.forEach(post => {
                  const postElement = document.createElement('div');
                  postElement.classList.add('post');
                  postElement.innerHTML = `
                      <h3>${post.title}</h3>
                      <p>${post.body}</p>
                  `;
                  postInfoContainer.appendChild(postElement);
              });
          })
          .catch(error => console.error('Error fetching posts:', error));
  }
});

