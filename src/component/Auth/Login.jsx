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
import { useNavigate } from "react-router";
import { hover } from "@testing-library/user-event/dist/hover";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading, } = useAuth();
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

  }

  return (
  <div style={{width: '100%' ,height: '700px',paddingTop:'140px', background: `url(${back})`, }}>
<div
      style={{
        display: "flex",
        flexDirection: "column",
        height: '450px',
        width: "320px",
        padding: "auto",
        margin: 'auto',
        boxShadow: '10px 10px 35px  #434040' ,
        paddingTop: "70px",
        borderRadius: '10px'
       
        
      }}
    >
      {/* <img
            src={Logo}
            alt=""
            style={{ width: "200px", marginInline: "auto",  }}
          ></img> */}
      <Typography component="h1" variant="h5" sx={{ color: "white",paddingLeft: '1rem', marginBottom:'10%', fontSize: '40px',}}>
          Login
          </Typography>

      <TextField
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "300px",
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
          width: "300px",

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
          Login
        </Button>

          )}
          <Button
          onClick={() => navigate('/passresset')}
          variant="outlined"
          sx={{
            // backgroundColor: "white",
            width: "40%",
            margin: "auto",
            marginTop: "10px",
            color:'white' ,
            border: "1px solid white"
          }}>forgot?</Button>
            </div>
      </div>
  </div>
    
  );
};

export default Login;
