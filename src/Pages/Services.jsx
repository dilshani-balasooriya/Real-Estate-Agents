import React from 'react'
import { Box, Typography, Button, Grid, CardMedia } from '@mui/material';
import backgroundImage from '../Images/services.jpg'; 
import ApartmentIcon from '@mui/icons-material/Apartment'; 
import HouseIcon from '@mui/icons-material/House';
import VillaIcon from '@mui/icons-material/Houseboat'; 
import WorkIcon from '@mui/icons-material/Work'; 


const featuredProperties = [
  { id: 1, type: 'Family House', description: '122 Properties', icon: <HouseIcon sx={{ fontSize: 40, color: '#FF5722' }} /> },
  { id: 2, type: 'House & Villa', description: '155 Properties', icon: <VillaIcon sx={{ fontSize: 40, color: '#4CAF50' }} /> },
  { id: 3, type: 'Apartment', description: '300 Apartments', icon: <ApartmentIcon sx={{ fontSize: 40, color: '#2196F3' }} /> },
  { id: 4, type: 'Office & Studio', description: '300 Properties', icon: <WorkIcon sx={{ fontSize: 40, color: '#FFC107' }} /> },
  { id: 5, type: 'Villa & Condo', description: '80 Properties', icon: <VillaIcon sx={{ fontSize: 40, color: '#673AB7' }} /> },
];


function Services() {
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
          Services -All Services
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mb: 4, maxWidth: '700px', mx: 'auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Find new & featured properties located in your local city. 
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Featured Property Types
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {featuredProperties.map((property) => (
            <Grid item xs={12} sm={6} md={3} key={property.id}>
              <Box
                sx={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  boxShadow: 2,
                }}
              >
                {property.icon} 
                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                  {property.type}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {property.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>


      
    
   
</>
  )
}

export default Services