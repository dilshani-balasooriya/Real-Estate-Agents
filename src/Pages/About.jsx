import React from 'react';
import { Box, Typography, Button, Grid, CardMedia } from '@mui/material';
import backgroundImage from '../Images/about.jpg'; 
import storyImage from '../Images/about2.jpg'; 

function About() {
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
            About Us - Who We Are?
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mb: 4, maxWidth: '700px', mx: 'auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
            We help you find new & featured properties located in your local city. Our goal is to make your search effortless and rewarding.
          </Typography>
        </Box>
      </Box>

      {/* Agency Story Section */}
      <Box sx={{ py: 8, px: 4, backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 6 } }}>
              <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Our Agency Story
              </Typography>
              <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 500 }}>
                Check out our company story and work process
              </Typography>
              <Typography sx={{ mb: 4, fontSize: '1rem', lineHeight: '1.8', color: 'text.secondary' }}>
                Founded with a passion for real estate, we aim to simplify the process of finding your dream property.
                With years of experience, our dedicated team connects you with the best opportunities. We believe in building lasting
                relationships with our clients through transparency, innovation, and a personalized approach.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'green',
                  color: 'white',
                  padding: '10px 20px',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#005500',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Image Section */}
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image={storyImage}
              alt="Our Agency Story"
              sx={{
                borderRadius: '10px',
                height: '100%',
                width: '100%',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>

      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </>
  );
}

export default About;
