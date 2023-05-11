// Membuat variabel untuk menyimpan URL API
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Mendapatkan elemen-elemen HTML yang dibutuhkan
const postForm = document.getElementById("postForm");
const postList = document.getElementById("postList");

// Membuat fungsi untuk menampilkan daftar postingan
async function showPosts() {
  // Menghapus semua elemen dalam daftar postingan sebelumnya
  postList.innerHTML = "";

  // Mendapatkan daftar postingan dari API
  const response = await fetch(apiUrl);
  const posts = await response.json();

  // Menambahkan setiap postingan ke daftar postingan pada halaman
  posts.forEach((post) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <button class="edit" data-id="${post.id}">Edit</button>
      <button class="delete" data-id="${post.id}">Hapus</button>
    `;
    postList.appendChild(listItem);
  });

  // Menambahkan event listener ke tombol edit dan hapus
  const editButtons = document.querySelectorAll(".edit");
  const deleteButtons = document.querySelectorAll(".delete");

  editButtons.forEach((button) => {
    button.addEventListener("click", editPost);
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", deletePost);
  });
}

// Menambahkan event listener ke form untuk menambahkan postingan baru
postForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Mendapatkan nilai-nilai dari formulir
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  // Membuat objek postingan baru
  const newPost = {
    title,
    body,
  };

  // Mengirim permintaan POST untuk menambahkan postingan baru ke API
  await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  // Menampilkan daftar postingan yang terbaru
  showPosts();

  // Mengosongkan formulir
  postForm.reset();
});

// Fungsi untuk mengedit postingan
async function editPost(event) {
  const postId = event.target.getAttribute("data-id");

  // Mendapatkan data postingan dari API
  const response = await fetch(`${apiUrl}/${postId}`);
  const post = await response.json();

  // Mengisi formulir dengan data postingan yang sudah ada
  document.getElementById("title").value = post.title;
  document.getElementById("body").value = post.body;

  // Mengubah tombol "Tambah" menjadi tombol "Simpan"
  postForm.insertAdjacentHTML(
    "beforeend",
    `
    <button type="submit" id="saveButton" data-id="${post.id}">Simpan</button>
  `
  );

  // Menghapus event listener pada tombol "Tambah"
  postForm.removeEventListener("submit", addPost);

  // Menambahkan event listener ke tombol "Simpan"
  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", async () => {
    // Mendapatkan nilai-nilai dari formulir setelah diedit
    const updatedTitle = document.getElementById("title").value;
    const updatedBody = document.getElementById("body").value;

    // Membuat objek postingan yang sudah diubah
    const updatedPost = {
      title: updatedTitle,
      body: updatedBody,
    };

    // Mengirim permintaan PUT untuk memperbarui postingan ke API
    await fetch(`${apiUrl}/${postId}`, {
      method: "PUT",
      body: JSON.stringify(updatedPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    // Menampilkan daftar postingan yang terbaru
    showPosts();

    // Mengubah tombol "Simpan" menjadi tombol "Tambah" kembali
    saveButton.remove();
    postForm.addEventListener("submit", addPost);

    // Mengosongkan formulir
    postForm.reset();
  });
}

// Fungsi untuk menghapus postingan
async function deletePost(event) {
  const postId = event.target.getAttribute("data-id");

  // Konfirmasi dialog sebelum menghapus postingan
  if (confirm("Apakah Anda yakin ingin menghapus postingan ini?")) {
    // Mengirim permintaan DELETE untuk menghapus postingan dari API
    await fetch(`${apiUrl}/${postId}`, {
      method: "DELETE",
    });

    // Menampilkan daftar postingan yang terbaru
    showPosts();
  }
}

// Menampilkan daftar postingan saat halaman dimuat
showPosts();
