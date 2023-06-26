import React, { useState } from "react";
import styles from "./User.module.scss";
import userPhoto from "../../assets/img/avatar.png";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItem,
  Typography,
} from "@mui/material";

const User = ({ user, unfollow, follow }) => {
  const handleFollow = () => follow(user.id);
  const handleUnfollow = () => unfollow(user.id);

  return (
    <ListItem sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Avatar
          alt={user.name}
          src={user.photos.small}
          variant="square"
          component={Link}
          key={user.id}
          to={`/profile/` + user.id}
          sx={{
            width: { xs: 200, sm: 260  },
            height: { xs: 200, sm: 260 },
          }}
        />
        <Button
          variant="outlined"
          onClick={user.followed ? handleUnfollow : handleFollow}
          sx={{ my: 1, width: { xs: "200px", sm:"260px" } }}
        >
          {user.followed ? "Unfollow" : "Follow"}
        </Button>
      </Box>
      <Box
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          alignSelf: {xs:"center", md:"start"},
          m:{sm:2}
        }}
      >
        <Typography>{user.name}</Typography>
        <Typography variant="body2">{user.status}</Typography>
      </Box>
    </ListItem>
  );
};

export default User;
