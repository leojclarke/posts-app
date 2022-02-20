import { Container } from "@mui/material";
import React from "react";
import Post from "../Components/Post";

export default function Posts({ posts, deletePost }) {
  return (
    <>
      <Container sx={{ maxWidth: "350px" }}>
        {posts.map((post) => {
          return <Post key={post.id} post={post} deletePost={deletePost} />;
        })}
      </Container>
    </>
  );
}
