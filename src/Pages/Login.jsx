import { Avatar, Button, Container, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ users }) {
  const navigate = useNavigate();

  const formStyles = {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
    width: "100%",
  };

  function handleLogin(e) {
    e.preventDefault();
    const login = e.target;
    const user = login.username.value;

    users.filter((u) =>
      u.username === user ? navigate("/") : console.log("WRONG USER")
    );
  }

  return (
    <Container maxWidth="sm" sx={{ pt: "6rem" }}>
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
        <form
          onSubmit={(e) => handleLogin(e)}
          autoComplete="false"
          style={formStyles}
        >
          <TextField
            fullWidth
            placeholder="username"
            label="username"
            name="username"
            variant="outlined"
            type="text"
            error={false}
          />
          <TextField
            fullWidth
            placeholder="password"
            label="password"
            name="password"
            variant="outlined"
            type="password"
            error={false}
          />
          <Button variant="contained" type="submit">
            LOGIN
          </Button>
        </form>
      </Container>
    </Container>
  );
}
