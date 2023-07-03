import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import pages from "../pages/pages";
import Grid from "@mui/material/Grid"; // Grid version 1

const Navbar = () => {

  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = ( index) => {
    setSelectedIndex(index);
  };

  const navWidth = 150;

  return (
    <Grid
      item
      sx={{
        display: { xs: "none", sm: "flex" },
        backgroundColor: "grey.400",
        width: navWidth,
      }}
    >
      <List
        component="nav"
        disablePadding
        sx={{ flexGrow: "1", }}
      >
        {pages.map((page, index) => (
          <>
            <ListItem
              to={page.url}
              key={page.title}
              disablePadding
              component={NavLink}
              selected={selectedIndex === index}
              divider
              sx={{ color: "primary.dark" }}
            >
              <ListItemButton>
                <ListItemText
                  primary={page.title}
                  onClick={() => handleListItemClick(index)}
                />
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </Grid>
  );
};

export default Navbar;
