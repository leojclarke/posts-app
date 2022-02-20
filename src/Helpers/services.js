function getData(url, setState) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setState(data));
}

export { getData };
