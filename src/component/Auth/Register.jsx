import React, { useState } from "react";
import Logo from "../../assets/SellSwap-removebg-preview.png";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../context/AuthContextProvider";
import { useNavigate, useNavigation } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "700px",
        paddingTop: "5%",
        width: "100%",
        padding: "auto",

        background:
          "url(https://images.wallpaperscraft.ru/image/single/tekstura_fon_tekst_50473_1920x1080.jpg)",
      }}
    >
      {error ? <h2>{error}</h2> : null}

      <Typography
        component="h1"
        variant="h5"
        sx={{
          color: "white",
          marginInline: "auto",
          marginBottom: "2%",
          fontSize: "40px",
        }}
      >
        Registration
      </Typography>
      <div
        style={{
          display: "flex",
          width: "330px",
          marginInline: "auto",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <TextField
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          sx={{
            marginTop: "5px",
            backgroundColor: "white",
            borderRadius: "10px",
            width: "47%",

            marginInline: "auto",
          }}
        />
        <TextField
          onChange={(e) => setLastName(e.target.value)}
          placeholder="last name"
          sx={{
            marginTop: "5px",
            backgroundColor: "white",
            borderRadius: "10px",
            width: "47%",

            marginInline: "auto",
          }}
        />
      </div>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        sx={{
          marginTop: "5px",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "320px",

          marginInline: "auto",
          marginBottom: "10px",
        }}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        sx={{
          marginTop: "5px",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "320px",

          marginInline: "auto",
          marginBottom: "10px",
        }}
      />
      <TextField
        onChange={(e) => setPassword2(e.target.value)}
        placeholder="confirm password"
        sx={{
          marginTop: "5px",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "320px",

          marginInline: "auto",
          marginBottom: "10px",
        }}
      />
      {loading ? (
        <Box sx={{ display: "flex", marginInline: "auto" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{
            // backgroundColor: "white",
            width: "110px",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          REGISTER
        </Button>
      )}
    </Box>
  );
};

export default Register;
