import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContextProvider';

const PasswordResset = () => {
    const { ressetPass } = useAuth();
    const [email, setEmail] = useState('')

    function ressetPassword() {
       
        const formData = new FormData();
        formData.append("email", email);
        ressetPass(formData);
      }
  return (
    <div><input onChange={(e) => setEmail(e.target.value)} type="text" />
        <button onClick={ressetPassword}>check email</button>
    </div>
  )
}

export default PasswordResset