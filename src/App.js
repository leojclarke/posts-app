import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import { getData, getLocal, setLocal } from "./Helpers/services";
import AddPost from "./Pages/AddPost";
import EditPost from "./Pages/EditPost";
import Login from "./Pages/Login";
import Posts from "./Pages/Posts";

function App() {
  const [posts, setPosts] = useState(getLocal("posts") || []);
  const [users, setUsers] = useState(getLocal("users") || []);
  const [comments, setComments] = useState(getLocal("comments") || []);

  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const commentsUrl = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    getData(postsUrl, setPosts);
    getData(usersUrl, setUsers);
    getData(commentsUrl, setComments);
  }, []);

  useEffect(() => setLocal("posts", posts), [posts]);
  useEffect(() => setLocal("users", users), [users]);
  useEffect(() => setLocal("comments", comments), [comments]);

  const navigate = useNavigate();

  const handlePostDelete = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  const handlePostAdd = (newPosts) => {
    setPosts(newPosts);
  };

  const handlePostEdit = (editedPosts) => {
    setPosts(editedPosts);
    navigate("/");
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Posts posts={posts} deletePost={handlePostDelete} />}
        />
        <Route path="login" element={<Login users={users} />} />
        <Route
          path="add"
          element={<AddPost posts={posts} addPost={handlePostAdd} />}
        />
        <Route
          path="/edit/:postId"
          element={<EditPost posts={posts} editPost={handlePostEdit} />}
        />
      </Routes>
    </>
  );
}

export default App;
