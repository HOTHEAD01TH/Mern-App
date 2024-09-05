import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #6a11cb, #2575fc)' }}>
      <Toolbar>
        {/* Logo on the Left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>MyLogo</Link> 
        </Typography>

        {/* Navigation Links on the Right */}
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/aboutus">About</Button>
          <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
          <Button color="inherit" component={Link} to="/signin">Sign In</Button>
          {/* <Button color="inherit" component={Link} to="/profile">Profile</Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
