import React, { useState } from 'react';
import { Drawer, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

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
          <Typography variant="h6" noWrap>
            Your App Name
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>

        <Divider />

        {/* Additional items or sections in the sidebar */}
      </Drawer>

      {/* Main content area */}
      <div style={{ marginLeft: open ? 340 : 0, width:'20%', padding: '20px', transition: 'margin-left 0.3s' }}>
        {/* Your main content goes here */}
        <Typography variant="h4">Welcome to Your App</Typography>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;
