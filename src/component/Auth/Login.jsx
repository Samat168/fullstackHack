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
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading,checkuserid } = useAuth();
  const navigate = useNavigate()
  function handleSave() {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    formData.append("password", password);

    handleLogin(formData, email);
    checkuserid()
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: '700px',
        paddingTop: "7%",
        width: "100%",
        padding: "auto",
      
        background:
          "url(https://images.wallpaperscraft.ru/image/single/tekstura_fon_tekst_50473_1920x1080.jpg)",
      }}
    >
      {/* <img
            src={Logo}
            alt=""
            style={{ width: "200px", marginInline: "auto",  }}
          ></img> */}
      <Typography component="h1" variant="h5" sx={{ color: "white", marginLeft:'38%', marginBottom:'2%', fontSize: '40px' }}>
          Login
          </Typography>

      <TextField
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "320px",
          padding: "auto",
          marginInline: 'auto',
          marginBottom: '10px'
        }}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        placeholder="password"
        sx={{
          marginTop: "5px",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "320px",

          marginInline: 'auto',
        }}
      />
      <div style={{width:'320px', marginInline: 'auto', display: 'flex', justifyContent: 'space-between'}}>
      {loading ? (
        <Box sx={{ display: "flex",margin: "auto",
        marginTop: "10px", }}>
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
          Login
        </Button>

          )}
          <Button
          onClick={() => navigate('/passresset')}
          variant="Outline"
          sx={{
            // backgroundColor: "white",
            width: "50%",
            margin: "auto",
            marginTop: "10px",
          }}>forgot?</Button>
            </div>
      </Box>
  );
};

export default Login;
