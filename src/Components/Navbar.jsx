import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Badge, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import HouseIcon from '@mui/icons-material/House';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (page) => {
    navigate(page.toLowerCase()); 
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <HouseIcon />
          <Typography variant="h5" component="div" sx={{ ml: 1 }}>
            Rent <span style={{ color: 'green' }}>Up</span>
          </Typography>
        </Box>

       
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1, gap: 3 }}>
          {['Home', 'About', 'Services', 'Blog', 'Pricing', 'Contact'].map((link) => (
            <Typography
              key={link}
              sx={{
                color: 'black',
                cursor: 'pointer',
                '&:hover': { color: 'green' },
              }}
              onClick={() => handleNavigation(link)} // Navigate on click
            >
              {link}
            </Typography>
          ))}
        </Box>

 
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <Badge
              badgeContent={2}
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: 'green',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  fontSize: '14px',
                  top: '10px',
                  right: '36px',
                },
              }}
              overlap="circular"
            >
              <ShoppingCartIcon sx={{ color: 'black' }} />
            </Badge>
          </IconButton>
          <Button variant="outlined" startIcon={<LoginIcon />} sx={{ backgroundColor: 'green', color: 'white', ml: 1 }}>
            Sign In
          </Button>

          {/* Menu Icon for mobile view */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenuClick}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Menu for mobile view */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {['Home', 'About', 'Services', 'Blog', 'Pricing', 'Contact'].map((link) => (
          <MenuItem key={link} onClick={() => handleNavigation(link)}>
            {link}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
