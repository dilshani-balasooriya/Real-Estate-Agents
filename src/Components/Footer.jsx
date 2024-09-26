import React from 'react';
import { Box, Typography, Grid, TextField, Button, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1b1b1b', padding: '40px 20px', color: '#fff', mt: 4 }}>
      <Grid container spacing={4}>
        {/* Subscription Form */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{ color: '#f5f5f5' }}>
            Do You Need Help With Anything?
          </Typography>
          <Typography variant="body2" sx={{ color: '#ccc', marginBottom: '20px' }}>
            Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month.
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              size="small"
              sx={{
                marginBottom: '10px',
                backgroundColor: '#fff',
                borderRadius: '4px',
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                backgroundColor: 'blue',
                borderRadius: '50px',
                padding: '10px 0',
                '&:hover': {
                  backgroundColor: '#ff79a1',
                },
              }}
            >
              Subscribe
            </Button>
          </form>
        </Grid>

        {/* Layouts Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ color: '#f5f5f5' }}>
            Layouts
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Home Page
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              About Page
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Service Page
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Property Page
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Contact Page
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Single Blog
            </Link>
          </Box>
        </Grid>

        {/* Sections Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ color: '#f5f5f5' }}>
            All Sections
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Headers
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Features
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Attractive
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Testimonials
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Videos
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Footers
            </Link>
          </Box>
        </Grid>

        {/* Company Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ color: '#f5f5f5' }}>
            Company
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              About
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Blog
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Pricing
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Affiliate
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Login
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#ccc', mb: 1, '&:hover': { color: '#ff4081' } }}>
              Changelog
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" sx={{ color: '#ccc' }}>
          All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
