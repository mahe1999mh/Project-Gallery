import React, { useState } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookIcon from "@mui/icons-material/Book";
import LoginIcon from "@mui/icons-material/Login";
import NotFoundIcon from "@mui/icons-material/Error";

import { Link } from "react-router-dom";


const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, route: "/admin/dashboard" },
    { text: "User", icon: <PersonIcon />, route: "/admin/users" },
    {
      text: "Product",
      icon: <ShoppingCartIcon />,
      route: "/admin/products",
    },
    { text: "Blog", icon: <BookIcon />, route: "/admin/blog" },
    { text: "Login", icon: <LoginIcon />, route: "/login" },
    { text: "Not Found", icon: <NotFoundIcon />, route: "/404" },
  ];

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Project-Gallery
          </Typography>

        </Toolbar>

      </AppBar>

      <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item, index) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={item.route}
              key={index}
            >
              <ListItem
                button
                key={index}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />

        {/* Additional items or sections in the sidebar */}
      </Drawer>

      {/* Main content area */}
      <div
        style={{
          marginLeft: open ? 230 : 0,
          padding: "20px",
          transition: "margin-left 0.3s",
        }}
      >
        {/* <p>This is your main content area.</p> */}
      </div>
    </div>
  );
};

export default Sidebar;
