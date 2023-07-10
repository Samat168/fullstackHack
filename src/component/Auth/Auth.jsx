import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { Navigate, useNavigate } from "react-router-dom";
import { colors } from "@mui/material";
import { useAuth } from "../../context/AuthContextProvider";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Auth() {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPasword,
    setHasAccount,

    handleSignUp,
    handleLogin,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        background:
          " url(	https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg)",
        margin: 0,
        paddingTop: 8,
      }}
    >
      <Container component="main" maxWidth="xs" sx={{}}>
        <CssBaseline />
        <Box
          sx={{
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            // background:
            //   " url(	https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg)",
            width: "100%",
            borderRadius: "20px",
          }}
        >
          <img
            src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
            alt=""
            style={{ width: "200px", marginLeft: "30%", marginBottom: "7%" }}
          ></img>
          <Typography component="h1" variant="h5" sx={{ color: "white" }}>
            {hasAccount ? "Login Form" : "Register Form"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={emailError}
            />
            <TextField
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPasword(e.target.value)}
              helperText={passwordError}
            />

            {hasAccount ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background:
                    "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
                }}
                onClick={() => {
                  handleLogin();
                }}
              >
                LOGIN
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background:
                    "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
                }}
                onClick={() => {
                  handleSignUp();
                }}
              >
                REGISTER
              </Button>
            )}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {hasAccount ? (
                  <Link
                    onClick={() => setHasAccount(!hasAccount)}
                    href="#"
                    variant="body2"
                  >
                    {"Don't have an account? Register Now!"}
                  </Link>
                ) : (
                  <Link
                    onClick={() => setHasAccount(!hasAccount)}
                    href="#"
                    variant="body2"
                  >
                    {"Already have an account? Login!"}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Box>
  );
}
