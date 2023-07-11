import React, { useState } from "react";
import { Box, Button, CircularProgress, Container, Input } from "@mui/material";
import { useAuth } from "../../context/AuthContextProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading } = useAuth();

  function handleSave() {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    formData.append("password", password);

    handleLogin(formData);
  }

  return (
    <Container>
      <Input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Button onClick={handleSave}>Login</Button>
      )}
    </Container>
  );
};

export default Login;