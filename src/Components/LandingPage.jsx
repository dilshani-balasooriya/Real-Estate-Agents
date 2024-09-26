import React from 'react';

import { Box, Typography, Grid, Button, TextField, Card, CardContent, CardMedia } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment'; 
import HouseIcon from '@mui/icons-material/House';
import VillaIcon from '@mui/icons-material/Houseboat'; 
import WorkIcon from '@mui/icons-material/Work'; 
import BackgroundImage from '../Images/banner.png'; 
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png'; 
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.png';
import Agents from './Agents';
import Package from './Package';



const featuredProperties = [
  { id: 1, type: 'Family House', description: '122 Properties', icon: <HouseIcon sx={{ fontSize: 40, color: '#FF5722' }} /> },
  { id: 2, type: 'House & Villa', description: '155 Properties', icon: <VillaIcon sx={{ fontSize: 40, color: '#4CAF50' }} /> },
  { id: 3, type: 'Apartment', description: '300 Apartments', icon: <ApartmentIcon sx={{ fontSize: 40, color: '#2196F3' }} /> },
  { id: 4, type: 'Office & Studio', description: '300 Properties', icon: <WorkIcon sx={{ fontSize: 40, color: '#FFC107' }} /> },
  { id: 5, type: 'Villa & Condo', description: '80 Properties', icon: <VillaIcon sx={{ fontSize: 40, color: '#673AB7' }} /> },
];

const recentProperties = [
    {
      id: 1,
      title: 'For Rent',
      agent: 'Red Carpet Real Estate',
      address: '210 Zirak Road, Canada',
      price: '$3,700 /sqft',
      type: 'Apartment',
      image: img1, 
    },
    {
      id: 2,
      title: 'For Sale',
      agent: 'Fairmount Properties',
      address: '5698 Zirak Road, NewYork',
      price: '$9,750 /sqft',
      type: 'Condos',
      image: img2, 
    },
    {
      id: 3,
      title: 'For Rent',
      agent: 'The Real Estate Corner',
      address: '5624 Mooker Market, USA',
      price: '$5,860 /sqft',
      type: 'Offices',
      image: img3, 
    },
    {
      id: 4,
      title: 'For Sale',
      agent: 'Herringbone Realty',
      address: '5621 Liverpool, London',
      price: '$7,540 /sqft',
      type: 'Homes & Villas',
      image: img4, 
    },
    {
      id: 5,
      title: 'For Rent',
      agent: 'Brick Lane Realty',
      address: '210 Montreal Road, Canada',
      price: '$4,850 /sqft',
      type: 'Commercial',
      image: img5, 
    },
    {
      id: 6,
      title: 'For Sale',
      agent: 'Banyon Tree Realty',
      address: '210 Zirak Road, Canada',
      price: '$2,742 /sqft',
      type: 'Apartment',
      image: img6, 
    },
];

function LandingPage() {
  return (
    <div>
      <Box
        sx={{
          height: '600px',
          backgroundImage: `url(${BackgroundImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          paddingTop: '40px', 
        }}
      >
        <Typography variant="h2" component="h1" sx={{ mb: 1 }}>
          Search Your New Home
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mb: 4 }}>
          Find new & featured property located in your local city.
        </Typography>

        {/* Box for Input Fields */}
        <Box
          sx={{
            width: '80%',
            maxWidth: '600px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                variant='outlined'
                label="Property Type"
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                variant='outlined'
                label="Location"
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                variant='outlined'
                label="Price"
                type='number'
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant='contained'
                sx={{ backgroundColor: 'green', color: 'white' }}
                fullWidth
              >
                Filter Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Featured Properties Section */}
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

      
      {/* Recent Properties Section */}
<Box sx={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
  <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
    Recent Properties Listed
  </Typography>
  <Typography variant="body1" sx={{ mb: 4, fontStyle: 'italic', color: '#666' }}>
    Discover Your Dream Home: Where New Beginnings Await!
  </Typography>
  <Grid container spacing={4} justifyContent='center'>
    {recentProperties.map((property) => (
      <Grid item xs={12} sm={6} md={4} key={property.id}>
        <Card
          sx={{
            maxWidth: 405,
            borderRadius: '8px',
            overflow: 'hidden', 
            boxShadow: 3,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={property.image}
            alt={property.title}
            sx={{ objectFit: 'cover' }} 
          />
          <CardContent sx={{ padding: '16px' }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: '600', color: '#333' }}>
              {property.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {property.agent}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {property.address}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: '700', color: '#FF5722' }}>
              {property.price}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>
<Package/>
 <Agents/>
      
    </div>
  );
}

export default LandingPage;
