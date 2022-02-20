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

function findPostByIndex(id, posts) {
  const postIndex = posts.map((post) => post.id).indexOf(id);
  return postIndex;
}

export { getData, setLocal, getLocal, getPost, findPostByIndex };
