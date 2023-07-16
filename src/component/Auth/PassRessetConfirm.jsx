import React, { useEffect, useState } from "react";
import { useParams , } from "react-router";
import { useAuth } from "../../context/AuthContextProvider";
import { Button, Input } from "@mui/material";

const PassRessetConfirm = () => {
  const { tokens } = useParams();
  const { ressetPassConfirm } = useAuth();
  const [password, setPassword] = useState("");

  function ressetPasswordConfirms() {
    const formData = new FormData();
    formData.append("password", password);
    formData.append("token", tokens);
    ressetPassConfirm(formData);
  }
  useEffect(() => {
    console.log(tokens);
  }, []);
  return (
    <div style={{width:'320px', marginInline: 'auto', display: 'flex', justifyContent: 'space-between',} }>
      <h3></h3>
      <Input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="new Pass"
        sx={{
          marginTop: "5px",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "320px",

          marginInline: 'auto',
        }}
      />
     
      <Button sx={{
            // backgroundColor: "white",
            width: "110px",
            margin: "auto",
            marginTop: "10px",
          }}
           onClick={ressetPasswordConfirms}>do</Button>
      
    </div>
  );
};

export default PassRessetConfirm;
