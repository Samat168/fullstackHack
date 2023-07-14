import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import axios from "axios";

const RegisterSuccess = () => {
  const { uid } = useParams();
  const navigate = useNavigate();

  async function registerSucces() {
    try {
      await axios.get(`http://34.134.83.129/api/v1/accounts/activate/${uid}/`);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/login");
    }
  }
  useEffect(() => {
    registerSucces();
  }, []);

  return (
    <div>
      <h1>Регистрация прошла Успешно а Теперь Ввойдите</h1>
    </div>
  );
};

export default RegisterSuccess;
