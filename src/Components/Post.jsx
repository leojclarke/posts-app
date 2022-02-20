import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Post({ post, deletePost }) {
  const { id, title, body } = post;

  return (
    <Card sx={{ p: 3, mb: 4 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
        <Button size="small">Edit</Button>
        <Button size="small" onClick={() => deletePost(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
