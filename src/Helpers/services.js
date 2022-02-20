function getData(url, setState) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setState(data))
    .catch((error) => {
      console.log(error);
    });
}

function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

function getLocal(name) {
  return JSON.parse(localStorage.getItem(name));
}

function getPost(id, posts) {
  return posts.find((post) => post.id === id);
}

export { getData, setLocal, getLocal, getPost };
