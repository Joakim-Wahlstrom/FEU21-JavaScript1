// console.log(window.location.search)
// const params = new URLSearchParams(window.location.search)
// const id = params.get('id')

const id = new URLSearchParams(window.location.search).get('id');
console.log(id)

const output = document.querySelector('#output');

const getPost = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/' + id

  const res = await fetch(url);
  const post = await res.json();

    let template = `
    <div class="card p-2 mb-3 text-center">
      <h2>${post.title}</h2>
      <p>${post.body}...</p>
    </div>
    `
    output.innerHTML += template

}

getPost()