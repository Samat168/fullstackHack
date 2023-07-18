import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth } from "../../../context/AuthContextProvider";
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

  return (
    <Container>
      <Grid
        container
        justify={"center"}
        style={{ marginTop: 40, display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: "36%",
            height: "423px",
            border: "1px solid gray",
            overflowY: "auto",
            borderRadius: "14%",
          }}
        >
          {messages.map((message) => (
            <div
              key={message?.uid}
              style={{
                margin: 10,
                border:
                  currentUser === message?.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: currentUser === message?.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
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
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            rowsmax={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button onClick={sendMessage} variant={"outlined"}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
