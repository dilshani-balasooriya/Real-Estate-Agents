import React from 'react'
import { Box, Typography, Button, Grid, CardMedia } from '@mui/material';
import backgroundImage from '../Images/about.jpg';
import Package from '../Components/Package';

function Pricing() {
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
       No Extra Fees. Friendly Support
       </Typography>
       <Typography variant="h6" component="h2" sx={{ mb: 4, maxWidth: '700px', mx: 'auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
       30 days money back guarantee
       </Typography>
     </Box>
   </Box>
   <Package/>
</>
  )
}

export default Pricing