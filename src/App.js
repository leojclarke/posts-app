import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getData } from "./Helpers/services";
import Posts from "./Pages/Posts";

function App() {
  const [posts, setPosts] = useState([]);

  let url = "https://jsonplaceholder.typicode.com/posts";

  getData(url, setPosts);

  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
      </Routes>
    </>
  );
}

export default App;
