import React from 'react';
import { Box, Typography, Button, Grid, TextField } from '@mui/material';
import backgroundImage from '../Images/services.jpg'; 

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: '400px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          paddingTop: '40px',
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '80%', textAlign: 'center', animation: 'fadeIn 1s' }}>
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700, letterSpacing: '0.05em' }}>
            Get Help & Friendly Support
          </Typography>
        </Box>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ py: 6, px: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
              Contact Us
            </Typography>

            {/* Contact Form */}
            <form>
              <Grid container spacing={3}>
                {/* Name Field */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label="Your Name"
                    variant="outlined"
                    color="primary"
                  />
                </Grid>

                {/* Email Field */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label="Your Email"
                    variant="outlined"
                    color="primary"
                    type="email"
                  />
                </Grid>

                {/* Message Field */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Your Message"
                    variant="outlined"
                    color="primary"
                    multiline
                    rows={6}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12} textAlign="center">
                  <Button variant="contained" color="primary" size="large" sx={{ px: 5 }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Contact;
