import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getData, getLocal, setLocal } from "./Helpers/services";
import Posts from "./Pages/Posts";

function App() {
  const [posts, setPosts] = useState(getLocal("posts") || []);

  let url = "https://jsonplaceholder.typicode.com/posts";
  getData(url, setPosts);

  useEffect(() => setLocal("posts", posts), [posts]);

  const handlePostDelete = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Posts posts={posts} deletePost={handlePostDelete} />}
        />
      </Routes>
    </>
  );
}

export default App;
