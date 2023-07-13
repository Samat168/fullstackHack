import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Input,
  TextField,
} from "@mui/material";
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

    handleLogin(formData, email);
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "10%",
        width: "100%",
        padding: "auto",
        background:
          "url(https://images.wallpaperscraft.ru/image/single/tekstura_fon_tekst_50473_1920x1080.jpg)",
      }}
    >
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "50%",
          padding: "auto",
          marginLeft: "30%",
        }}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        sx={{
          marginTop: "5px",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "50%",

          marginLeft: "30%",
        }}
      />

      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Button
          onClick={handleSave}
          sx={{
            backgroundColor: "white",
            width: "10%",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          Login
        </Button>
      )}
    </Container>
  );
};

export default Login;
