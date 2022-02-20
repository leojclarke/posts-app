import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { getPost } from "../Helpers/services";
import React, { useEffect, useState } from "react";

export default function EditPost({ posts, editPost }) {
  const [titleInput, setTitleInput] = useState("");

  let params = useParams();
  let post = getPost(parseInt(params.postId), posts);

  useEffect(() => setTitleInput(post.title), [post.title]);

  return (
    <Container maxWidth="sm" sx={{ pt: "6rem" }}>
      <Typography variant="h4" gutterBottom>
        EDIT POST
      </Typography>
      <form onSubmit={(e) => console.log(e.target)}>
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
