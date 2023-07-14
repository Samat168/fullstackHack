import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useAuth } from '../../context/AuthContextProvider';
import { Button, Input } from '@mui/material';

const PassRessetConfirm = () => {
    const { tokens } = useParams();
    const { ressetPassConfirm } = useAuth();
    const [password, setPassword] = useState('')

   
    function ressetPasswordConfirms() {
       
        const formData = new FormData();
        formData.append("password", password);
        formData.append("token", tokens);
        ressetPassConfirm(formData);
      }
    useEffect(() => {console.log(tokens)},[])
  return (
    <div>
        <Input onChange={(e) => setPassword(e.target.value) } placeholder='new Pass' sx={{backgroundColor: 'white'}}/>
        <Button onClick={ressetPasswordConfirms}>do</Button>
    </div>
  )
}

export default PassRessetConfirm