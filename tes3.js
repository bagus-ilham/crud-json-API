let post = ""

const postForm = document.getElementById("postForm");
const postList = document.getElementById("postList");
const apiUrl = "https://jsonplaceholder.typicode.com/users"


// Read
async function showPosts(){
  const response = await fetch(apiUrl)
  const posts = await response.json()

  posts.forEach(function(post) {
    let listItem = ""
    listItem = `<tr>
    <td> Nama  : ${post.name} </td>
    <td> Email : ${post.email} </td>
    <td> <button class="hapus" data-id${post.id}>hapus</button>
    <button class="edit" data-id${post.id}>edit</button>
    </td>
    </tr>`;
    post += listItem
  })
  postList.innerHTML = post
}

const editButtons = document.querySelectorAll(".edit")
const deleteButtons = document.querySelectorAll(".hapus")

editButtons.forEach((button) => {
    button.addEventListener ("click", editPost())
})
deleteButtons.forEach((button) => {
    button.addEventListener ("click", deletePost())
})

function editPost()
function editPost()