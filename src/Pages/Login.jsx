import { Avatar, Button, Container, TextField } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        gap: 4,
      }}
    >
      <Avatar>M</Avatar>
      <form>
        <TextField
          fullWidth
          placeholder="username"
          label="username"
          name="username"
          variant="outlined"
          type="text"
        />
        <TextField
          fullWidth
          placeholder="password"
          label="password"
          name="password"
          variant="outlined"
          type="password"
        />
        <Button variant="contained" type="submit">
          LOGIN
        </Button>
      </form>
    </Container>
  );
}
