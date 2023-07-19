import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../helpers/consts";
import { async } from "q";
import { Api, Try } from "@mui/icons-material";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { getTokens } from "../helpers/functions";
import jwtDecode from "jwt-decode";
// import jwt from 'jsonwebtoken';
export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  favorites: [],
  users: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_USER_FAVORITES":
      return { ...state, favorites: action.payload };
    case "GET_USER":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserID] = useState(0);
  const [errorResset,setErrorResset] = useState(false)
  const { uid } = useParams();

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
      console.log(res.data.access)
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      decodeToken(res.data.access)
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const decodeToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken.user_id); 
      setUserID(decodedToken.user_id);
      userFavorites(decodedToken.user_id);
      return decodedToken;
    } catch (error) {
      console.error('Ошибка расшифровки токена:', error);
      return null;
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
  async function ressetPassConfirm(formData) {
    setLoading(true);
    try {
      await axios.post(`${API}/accounts/password_reset/confirm/`, formData);
    } catch (error) {
      console.log(error);
      setErrorResset(true)
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
      localStorage.setItem("tokens", JSON.stringify(res.data));
      const email = localStorage.getItem("email");
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
      logout();
    } finally {
      setLoading(false);
    }
  }

  
  async function getUser() {
    try {
      const res = await axios(`${API}/accounts/`);
      res.data.map((user) => {
        if (user.email === currentUser) {
          dispatch({ type: "GET_USER", payload: user });
          console.log(state.users);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function userFavorites(id) {
    try {
      const res = await axios(`${API}/accounts/${id}/favorites/`);
      dispatch({ type: "GET_USER_FAVORITES", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function changeUser(id, formData) {
  
    try {
      await axios.patch(`${API}/accounts/${id}/`, formData, getTokens());
      getUser();
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  }

  firebase.initializeApp({
    apiKey: "AIzaSyCiidF07xZKf4NqjhrXf8ZRKvG3kxslPHs",
    authDomain: "chat-online-5705a.firebaseapp.com",
    projectId: "chat-online-5705a",
    storageBucket: "chat-online-5705a.appspot.com",
    messagingSenderId: "324868954488",
    appId: "1:324868954488:web:0dd4f25ce650f977fd908d",
  });

  const firestore = firebase.firestore();

  const values = {
    changeUser,
    getUser,
    decodeToken,
    userId,
    users: state.users,
    favorites: state.favorites,
    userFavorites,
    ressetPassConfirm,
    ressetPass,
    handleRegister,
    handleLogin,
    currentUser,
    logout,
    checkAuth,
    loading,
    error,
    firebase,
    firestore,
    errorResset,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
