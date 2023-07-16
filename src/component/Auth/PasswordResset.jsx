import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContextProvider';
import { Button, Input, Typography } from '@mui/material';
import { theme } from '../../helpers/consts';
import { OutlinedFlag } from '@mui/icons-material';
import "./RessetPasswordStyle.css";

const PasswordResset = () => {
    const { ressetPass } = useAuth();
    const [email, setEmail] = useState('')
   
    function ressetPassword() {

      if(!email.trim('')){
        return
      }
       
        const formData = new FormData();
        formData.append("email", email);
        ressetPass(formData);
      }

    const err = () => {
      alert('заполните поле пж')
    }
  return (
    <div className='ress' style={{width:'320px', height: '500px', marginInline: 'auto', display: 'flex', justifyContent: 'space-between',flexDirection: 'column',
    }}>

      <Typography sx={{ 
        fontSize: '28px',
        marginTop: '30%',
        marginBottom: '10px'
  }} >
        Найдите свою учетную запись
      </Typography>
      <p>Чтобы изменить пароль, введите адрес электронной почты,  имя пользователя, связанные с вашей учетной записью.</p>
      <input 
      className='salam'
      placeholder='Email...'
      style={{
      marginTop: "50px",
      backgroundColor: "white",
      borderRadius: "5px",
      width: "320px",
      border: '1px solid black',
      padding: '15px',
      marginInline: 'auto',
    }} onChange={(e) => setEmail(e.target.value)} type="text" />
    {email?  ( <Button  
        variant={'contained'}
          sx={{
            width: "150px",
            margin: "auto",
            marginTop: "10px",
            marginRight: '0px',
            border: '1px solid black'
          }} onClick={ressetPassword}><a style={{textDecoration: 'none', color:'white'}} href="https://mail.google.com/">Далее</a></Button >):
           ( <Button  
          variant={'contained'}
            sx={{
              width: "150px",
              margin: "auto",
              marginTop: "10px",
              marginRight: '0px',
              border: '1px solid black'
            }} onClick={err}>Далее</Button >)}
       
    </div>
  )
}

export default PasswordResset