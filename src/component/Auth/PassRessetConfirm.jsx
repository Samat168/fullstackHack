import React, { useEffect, useState } from "react";
import { useParams , } from "react-router";
import { useAuth } from "../../context/AuthContextProvider";
import { Button, Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const PassRessetConfirm = () => {
  const { tokens } = useParams();
  const { ressetPassConfirm,errorResset } = useAuth();
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function ressetPasswordConfirms() {
    const formData = new FormData();
    formData.append("password", password);
    formData.append("token", tokens);
    ressetPassConfirm(formData);
    navigate('/login')
  }
  useEffect(() => {
    console.log(tokens);
  }, []);
  return (
    <div style={ {marginTop: '10%',width:'320px',height:'400px', marginInline: 'auto', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'} }>
      <Typography sx={{ 
        fontSize: '28px',
        marginTop: '30%',
        marginBottom: '10px'
  }} >
        Найдите свою учетную запись
      </Typography>
      {errorResset? (<h3 style={{color: 'red'}}>Пароль не должен совпадать с Email</h3>) : (null)}
      <Input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="new Pass"
        sx={{
          marginTop: "50px",
        backgroundColor: "white",
        borderRadius: "5px",
        width: "320px",
        border: '1px solid black',
        padding: '15px',
        height: '50px',
        marginInline: 'auto',
        }}
      />
     
      <Button 
      variant="outlined"
      sx={{
            display: 'block',
            width: "120px",
            margin: "auto",
            marginTop: "10px",


          }}
           onClick={ressetPasswordConfirms}>Потвердить</Button>
      
    </div>
  );
};

export default PassRessetConfirm;
