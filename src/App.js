import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./Pages/Posts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
