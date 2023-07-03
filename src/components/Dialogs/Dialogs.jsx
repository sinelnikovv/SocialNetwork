import { Avatar, Box, Divider, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

const Message = ({ message }) => {
  return (
    <Box>
      <Box sx={{ m: 1, mt:2, display: "flex", alignItems: "start"}}>
        <Avatar
          alt={message.userName}
          src={message.photo}
          variant="square"
          component={Link}
          key={message.userId}
          to={`/profile/` + message.userId}
          sx={{
            width: { xs: 80, sm: 100},
            height: { xs: 80, sm: 100 },
            mr:2
          }}
        />
        <Typography>{message.message}</Typography>
      </Box>
      <Divider />
    </Box>
  );
};

const Dialogs = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef(null);
  useEffect(() => {
    ws.addEventListener("message", (e) => {
      let newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    });
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [messages]);

  const sendMessageHandler = () => {
    if (!newMessage) {
      return;
    }
    ws.send(newMessage);
    setNewMessage("");
  };

  return (
    <Box sx={{ m: 2, display: "flex", flexDirection: "column", flexGrow:"1" }}>
      <Box sx={{ height: "400px", overflowY: "auto", flexGrow: 1 }}>
        {messages.map((m) => (
          <Message message={m} />
        ))}
        <Box ref={scrollRef} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button sx={{ m: 1 }} onClick={sendMessageHandler} variant="outlined">
          Send message
        </Button>
      </Box>
    </Box>
  );
};
export default Dialogs;
