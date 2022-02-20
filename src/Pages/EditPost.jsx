import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { getPost } from "../Helpers/services";
import React, { useEffect, useState } from "react";

export default function EditPost({ posts, editPost }) {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  let params = useParams();
  let post = getPost(parseInt(params.postId), posts);

  let postIdx = posts.indexOf(post);

  useEffect(() => setTitleInput(post.title), [post.title]);
  useEffect(() => setBodyInput(post.body), [post.body]);

  const handlePostEditSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const editedPost = {
      id: post.id,
      userId: post.userId,
      title: form.title.value,
      body: form.body.value,
    };
    const editedPosts = [...posts];
    editedPosts[postIdx] = editedPost;
    editPost(editedPosts);
  };

  return (
    <Container maxWidth="sm" sx={{ pt: "6rem" }}>
      <Typography variant="h4" gutterBottom>
        EDIT POST
      </Typography>
      <form onSubmit={(e) => handlePostEditSubmit(e)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField
            fullWidth
            placeholder="title"
            label="title"
            name="title"
            variant="outlined"
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
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
            value={bodyInput}
            onChange={(e) => setBodyInput(e.target.value)}
          />
          <Button variant="contained" type="submit">
            SAVE POST
          </Button>
        </Box>
      </form>
    </Container>
  );
}
