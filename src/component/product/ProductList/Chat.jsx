import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth } from "../../../context/AuthContextProvider";
import { AccountCircle, Send } from "@mui/icons-material";
const Chat = () => {
  const { currentUser, firestore, firebase, checkuserid, users } = useAuth();
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: currentUser,
      displayName: currentUser,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (!messages) {
    return <div>Loading...</div>;
  }
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <p style={{ textAlign: "center" }}>Чат коммьюнити</p>
      <Grid
        container
        justify={"center"}
        style={{ marginTop: 40, display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: "73%",
            height: "423px",
            border: "1px solid gray",
            overflowY: "auto",
            borderRadius: "2%",
            "@media (maxWidth: 1100px)": {
              width: "43%",
            },
            "@media (maxWidth: 950px)": {
              width: "65%",
            },
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                margin: 10,
                border:
                  currentUser === message?.uid
                    ? "2px solid green"
                    : "2px solid red",
                marginLeft: currentUser === message?.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
                "@media (max-width: 1100px)": {
                  width: "43%",
                },
              }}
            >
              <Grid container>
                <Avatar src={users.avatar} />
                <div>{message?.displayName}</div>
              </Grid>
              <div>{message?.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{
            width: "59%",
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "20px",

            "@media (max-width: 950px)": {
              width: "62%",
            },
          }}
        >
          <TextField
            fullWidth
            rowsmax={2}
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton onClick={sendMessage}>
                  <Send />
                </IconButton>
              ),
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
