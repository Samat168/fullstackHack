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

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { handleRegister, loading, error } = useAuth();

  function handleSave() {
    if (
      !email.trim() ||
      !password.trim() ||
      !password2.trim() ||
      !name.trim() ||
      !lastName.trim()
    ) {
      alert("Заполните поля!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("first_name", name);
    formData.append("last_name", lastName);
    formData.append("password", password);
    formData.append("password2", password2);
    handleRegister(formData);
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "collumn" }}>
      {error ? <h2>{error}</h2> : null}
      <TextField onChange={(e) => setName(e.target.value)} placeholder="name" />
      <TextField
        onChange={(e) => setLastName(e.target.value)}
        placeholder="last name"
      />
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <TextField
        onChange={(e) => setPassword2(e.target.value)}
        placeholder="confirm password"
      />
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Button onClick={handleSave}>REGISTER</Button>
      )}
    </Container>
  );
};

export default Register;
