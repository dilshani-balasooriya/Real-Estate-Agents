import React from 'react'
import { Box, Typography, Button, Grid, CardMedia, Card,CardContent } from '@mui/material';
import backgroundImage from '../Images/about.jpg'; 
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png'; 
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.png';


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

function Blogs() {
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
        Blog Grid - Our Blogs
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mb: 4, maxWidth: '700px', mx: 'auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
           Make your search effortless and rewarding.
        </Typography>
      </Box>
    </Box>
    <Box sx={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
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
</>
  )
}

export default Blogs