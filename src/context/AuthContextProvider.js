import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";
import { async } from "q";
import { Try } from "@mui/icons-material";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function handleRegister(formData) {
    setLoading(true);
    try {
      await axios.post(`${API}/accounts/register/`, formData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
      console.log(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }



  async function ressetPass(formData) {
    setLoading(true);
    try {
      await axios.post(`${API}/accounts/password_reset/`, formData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser("");
    navigate("/login");
  }
  console.log(currentUser);

  async function checkAuth() {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));

      const res = await axios.post(`${API}/accounts/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
      );
      const email = localStorage.getItem("email");
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
      logout();
    } finally {
      setLoading(false);
    }
  }

  const values = {
    ressetPass,
    handleRegister,
    handleLogin,
    currentUser,
    logout,
    checkAuth,
    loading,
    error,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
