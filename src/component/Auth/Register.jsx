import React, { useState } from "react";
import Logo from "../../assets/SellSwap-removebg-preview.png";
import back from '../../assets/reg.png'

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
  const [avatar, setAvatar] = useState(null);
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
    // formData.append("avatar", avatar);
    formData.append("email", email);
    formData.append("first_name", name);
    formData.append("last_name", lastName);
    formData.append("password", password);
    formData.append("password2", password2);
    handleRegister(formData);
  }

  return (
    <div style={{width: '100%' ,height: '800px',paddingTop:'140px', background: `url(${back})`}}>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: '470px',
        width: "320px",
        padding: "auto",
        margin: 'auto',
        boxShadow: '10px 10px 35px  #434040' ,
        paddingTop: "40px",
        borderRadius: '10px'
      }}
    >
      {error ? <h2>{error}</h2> : null}

      <Typography
        component="h1"
        variant="h5"
        sx={{
          color: "white",
          marginLeft:'15px',
          marginBottom: "15px",
          fontSize: "40px",
        }}
      >
        registration
      </Typography>
      <div
        style={{
          display: "flex",
          width: "300px",
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
          width: "300px",

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
          width: "300px",

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
          width: "300px",

          marginInline: "auto",
          marginBottom: "10px",
        }}
      />
      {/* <TextField
        type="file"
        onChange={(e) => setAvatar(e.target.files[0])}
        placeholder="avatar"
        sx={{
          marginTop: "5px",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "300px",

          marginInline: "auto",
          marginBottom: "10px",
        }}
      /> */}
      {loading ? (
        <Box sx={{ display: "flex", marginInline: "auto" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Button
          onClick={handleSave}
          variant="outlined"
          sx={{
            // backgroundColor: "white",
            width: "110px",
            margin: "auto",
            marginTop: "10px",
            color:'white' ,
            border: "1px solid white"
          }}
        >
          REGISTER
        </Button>
      )}
    </Box>
    </div>
    
  );
};

export default Register;
