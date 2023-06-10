import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useGetProfileQuery,
  useLogoutMutation,
  useMeQuery,
} from "../../api/apiSlice";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import pages from "../pages/pages";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const { me } = useMeQuery(undefined, {
    selectFromResult: ({ data }) => ({
      me: data.data,
    }),
  });

  const profile = useGetProfileQuery(me.id);

  const [logout] = useLogoutMutation();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  
  const settings = [{ title: "Logout", handler: logout }];  


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { window } = props; 

  const container =
    window !== undefined ? () => window().document.body : undefined;  

  const drawerWidth = 240;
  const drawer = (
    <List sx={{ py: 3, backgroundColor: "grey.200", flexGrow: "1" }}>
      {pages.map((page, index) => (
        <>
          <ListItem
            to={page.url}
            key={page.title}
            disablePadding
            component={NavLink}
            selected={selectedIndex === index}
            divider
            sx={{color:"primary.dark"}}    
          >
            <ListItemButton>
              <ListItemText
                primary={page.title}
                onClick={(event) => handleListItemClick(event, index)}
              />
            </ListItemButton>
          </ListItem>          
        </>
      ))}
    </List>
  );  

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color="grey">
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <CameraOutlinedIcon
                fontSize="large"
                color="primary"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                color="primary"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                  flexGrow: 1,
                }}
              >
                SocialNetwork
              </Typography>

              <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="Navigation pages"
              >
               
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </Box>

              <CameraOutlinedIcon
                color="primary"
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                color="primary"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",

                  textDecoration: "none",
                }}
              >
                SN
              </Typography>

              <Box sx={{ flexGrow: 0, display: "flex" }}>
                {profile.data ? (
                  <Avatar
                    alt={me.login ? me.login : "My name"}
                    src={profile.data.photos.small}
                  />
                ) : (
                  <CircularProgress size={30} color={`primary`} />
                )}
                <IconButton
                  color="primary"
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <ExpandMoreIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (                    

                    <MenuItem key={setting.title} onClick={setting.handler}>
                      <Typography textAlign="center">
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};
export default Header;

