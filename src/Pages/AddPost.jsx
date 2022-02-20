import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function AddPost({ posts, addPost }) {
  const handleAddNewPost = (e) => {
    e.preventDefault();

    const newPosts = [
      ...posts,
      {
        id: Math.random() * Math.pow(10, 5),
        userId: Math.floor(Math.random() * 11),
        title: e.target.title,
        body: e.target.body,
      },
    ];
    addPost(newPosts);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        gap: 2,
      }}
    >
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
