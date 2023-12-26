document.addEventListener('DOMContentLoaded', () => {
    const userList = document.querySelector('.user-list');
    const postInfo = document.querySelector('.post-info');

    // Fetch users from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} - ${user.email}`;
                li.addEventListener('click', () => displayUserPosts(user.id));
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching users:', error));

    function displayUserPosts(userId) {
        // Clear existing post info
        postInfo.innerHTML = '';

        // Fetch posts by the selected user
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    `;
                    postInfo.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }
});
