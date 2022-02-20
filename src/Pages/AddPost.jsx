import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost({ posts, addPost }) {
  const navigate = useNavigate();

  const handleAddNewPost = (e) => {
    e.preventDefault();
    const post = e.target;
    const newPosts = [
      {
        id: Math.random() * Math.pow(10, 5),
        userId: Math.floor(Math.random() * 11),
        title: post.title.value,
        body: post.body.value,
      },
      ...posts,
    ];
    addPost(newPosts);
    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ pt: "6rem" }}>
      <Typography variant="h4" gutterBottom>
        ADD POST
      </Typography>
      <form onSubmit={(e) => handleAddNewPost(e)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField
            fullWidth
            placeholder="title"
            label="title"
            name="title"
            variant="outlined"
            type="text"
          />
          <TextField
            fullWidth
            placeholder="body"
            label="body"
            name="body"
            variant="outlined"
            type="text"
            multiline
            maxRows="3"
            minRows="3"
          />
          <Button variant="contained" type="submit">
            ADD POST
          </Button>
        </Box>
      </form>
    </Container>
  );
}
