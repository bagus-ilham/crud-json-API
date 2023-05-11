let Post = ''

const postForm = document.getElementById("postForm");
const postList = document.getElementById("postList");

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((posts) => {
        // console.log(posts, 'ni post');
      postList.innerHTML = "";

      posts.forEach((post) => {
        // console.log(post,' post di loop');
        let listItem = document.createElement("li");
        listItem = `<tr>
        <td> Nama  : ${post.name} </td>
        <td> Email : ${post.email} </td>
        <td> <button onclick="object.hapus()">hapus</button>
        <button onclick="object.update()">edit</button>
        </td>
        </tr>`;
        console.log(listItem, 'ni listem');
        Post += listItem;
    //   console.log(postList, 'ni list item');
      });
      // console.log(Post, 'kslks');
      postList.innerHTML = Post
    });
}

getPosts();

function addPost(event) {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const bodyInpput = document.getElementById("body");
let oi = ''
  const newPost = {
    name: titleInput.value,
    email: bodyInpput.value,
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(response => {console.log(response, 'ni res'); response.json()} )
    .then(() => {
      titleInput.value = "";
      bodyInpput.value = "";
      // console.log(oi, "cok")
      getPosts();
    });
}

postForm.addEventListener("submit", addPost);
