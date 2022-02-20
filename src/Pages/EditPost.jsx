import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { findPostByIndex, getPost } from "../Helpers/services";
import React, { useEffect, useState } from "react";

export default function EditPost({ posts, editPost }) {
  const [titleInput, setTitleInput] = useState("");

  const navigate = useNavigate();

  let params = useParams();
  let post = getPost(parseInt(params.postId), posts);

  useEffect(() => setTitleInput(post.title), [post.title]);

  const handlePostEditSubmit = (e) => {
    e.preventDefault();
    const postIdx = findPostByIndex(params.postId, posts);
    const post = e.target;
    const editedPost = {
      ...posts[postIdx],
      title: post.title.value,
      body: post.text.value,
    };
    const newPosts = [
      ...posts.slice(0, postIdx),
      editedPost,
      ...posts.slice(postIdx + 1),
    ];
    editPost(newPosts);
    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ pt: "6rem" }}>
      <Typography variant="h4" gutterBottom>
        EDIT POST
      </Typography>
      <form onSubmit={(e) => handlePostEditSubmit}>
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
            value={post.body}
          />
          <Button variant="contained" type="submit">
            SAVE POST
          </Button>
        </Box>
      </form>
    </Container>
  );
}
