import { Container, Typography } from "@mui/material";
import React from "react";
import Post from "../Components/Post";

export default function Posts({ posts, deletePost }) {
  return (
    <>
      <Container maxWidth="sm" sx={{ pt: "6rem" }}>
        <Typography variant="h4" gutterBottom>
          POSTS
        </Typography>

        {posts.map((post) => {
          return <Post key={post.id} post={post} deletePost={deletePost} />;
        })}
      </Container>
    </>
  );
}
