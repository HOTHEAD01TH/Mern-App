import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/aboutus">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <ListItemText primary="Sign Up" />
        </ListItem>
        <ListItem button component={Link} to="/signin">
          <ListItemText primary="Sign In" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(90deg, #ccffcc 0%, #add8e6 70%)' // Light green to light blue gradient
      }}
    >
      <Toolbar>
        {/* Logo on the Left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>MyLogo</Link>
        </Typography>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Navigation Links on Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
          <Button sx={{ color: 'white' }} component={Link} to="/">Home</Button>
          <Button sx={{ color: 'white' }} component={Link} to="/aboutus">About</Button>
          <Button sx={{ color: 'white' }} component={Link} to="/signup">Sign Up</Button>
          <Button sx={{ color: 'white' }} component={Link} to="/signin">Sign In</Button>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor='left'
        open={open}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;
