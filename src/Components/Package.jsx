import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const packagesData = [
  {
    name: 'Basic',
    price: '$29',
    features: [
      '99.5% Uptime Guarantee',
      '120GB CDN Bandwidth',
      '5GB Cloud Storage',
      'Personal Help Support',
      'Enterprise SLA',
    ],
    buttonText: 'Start Basic',
  },
  {
    name: 'Standard',
    price: '$49',
    features: [
      '99.5% Uptime Guarantee',
      '150GB CDN Bandwidth',
      '10GB Cloud Storage',
      'Personal Help Support',
      'Enterprise SLA',
    ],
    buttonText: 'Start Standard',
    highlight: true, 
  },
  {
    name: 'Platinum',
    price: '$79',
    features: [
      '100% Uptime Guarantee',
      '200GB CDN Bandwidth',
      '20GB Cloud Storage',
      'Personal Help Support',
      'Enterprise SLA',
    ],
    buttonText: 'Start Platinum',
  },
];

export default function Package() {
  return (
    <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#f7f7f7' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Select Your Package
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Choose the plan that works best for you and let us handle the rest.
      </Typography><br></br>

      <Grid container spacing={4} justifyContent="center">
        {packagesData.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: pkg.highlight ? '#e0f7fa' : 'white', 
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {pkg.name}
                </Typography><br></br>
                <Typography variant="h4" gutterBottom>
                  {pkg.price}
                </Typography><br></br>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  per user, per month
                </Typography><br></br>

                {pkg.features.map((feature, idx) => (
                  <Typography variant="body1" key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CheckCircleIcon sx={{ color: 'green', mr: 1 }} />
                    {feature}
                  </Typography>
                ))}

                <Button
                  variant="contained"
                  color={pkg.highlight ? 'primary' : 'secondary'}
                  sx={{ mt: 3 }}
                >
                  {pkg.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

