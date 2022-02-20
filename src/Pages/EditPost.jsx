import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../Helpers/services";

export default function EditPost({ posts, editPost }) {
  let params = useParams();
  console.log({ params });
  let post = getPost(parseInt(params.postId), posts);

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
            value={post.title}
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
