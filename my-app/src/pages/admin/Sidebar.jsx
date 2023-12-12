import React, { useState } from 'react';
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
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookIcon from '@mui/icons-material/Book';
import LoginIcon from '@mui/icons-material/Login';
import NotFoundIcon from '@mui/icons-material/Error';
import CreatePostForm from './CreateProjectForm/CreateProjectForm';
import CreateProjectForm from './CreateProjectForm/CreateProjectForm';

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
    { text: 'Dashboard', icon: <DashboardIcon />, route: '/' },
    { text: 'User', icon: <PersonIcon />, route: '/user' },
    { text: 'Product', icon: <ShoppingCartIcon />, route: '/products' },
    { text: 'Blog', icon: <BookIcon />, route: '/blog' },
    { text: 'Login', icon: <LoginIcon />, route: '/login' },
    { text: 'Not Found', icon: <NotFoundIcon />, route: '/404' },
  ];

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" noWrap>
            Your App Name
          </Typography>
        </Toolbar>
      </AppBar>

      {/* <Drawer anchor="left" open> */}
      
     
        <Divider />

        {/* Additional items or sections in the sidebar */}
      {/* </Drawer> */}

      {/* Main content area */}
      <div style={{marginTop: "70px"}}>
        {/* Your main content goes here */}
        <Typography variant="h4">Welcome to Your App</Typography>
        <div style={{display: "flex"}}>
          <List style={{ width: "200px" }}>
            <ListItem style={{
              backgroundColor: "#daecf3", margin: "15px 0px", borderRadius: "10px", display: "flex"
            }}><Avatar alt='jhon'>J</Avatar ><Typography variant='subtitle2' >Jhon Deo</Typography></ListItem>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <CreateProjectForm/>
        </div>

        <p>This is your main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;
