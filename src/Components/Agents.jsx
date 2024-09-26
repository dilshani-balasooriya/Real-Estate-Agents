import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import { Card, CardContent, Typography, Box, Grid, Button, Rating, Avatar } from '@mui/material';
import agent1 from '../Images/agent1.jpg';
import agent3 from '../Images/agent3.jpg';
import agent4 from '../Images/agent4.jpg';
import agent5 from '../Images/agent5.jpg';
import agent6 from '../Images/agent6.jpg';

const agentsData = [
  {
    id: 1,
    name: 'John Doe',
    contact: '+1234567890',
    image: agent1,
    rating: 4,
    listings: 12,
    address: '123 Main St, City, Country',
  },
  {
    id: 3,
    name: 'Emma Johnson',
    contact: '+0987654322',
    image: agent3,
    rating: 3,
    listings: 8,
    address: '789 Oak St, City, Country',
  },
  {
    id: 4,
    name: 'Emily Davis',
    contact: '+0987654323',
    image: agent4,
    rating: 4,
    listings: 15,
    address: '321 Pine St, City, Country',
  },
  {
    id: 5,
    name: 'Michel Brown',
    contact: '+0987654324',
    image: agent5,
    rating: 4,
    listings: 22,
    address: '654 Maple St, City, Country',
  },
  {
    id: 6,
    name: 'Alex Williams',
    contact: '+0987654325',
    image: agent6,
    rating: 5,
    listings: 30,
    address: '987 Willow St, City, Country',
  },
];

function Agents() {
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 4 }, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Our Featured Agents
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Success in real estate comes down to two factors: being a great agent and having great agents.
      </Typography>

      <Grid container spacing={3}>
        {agentsData.map((agent) => (
          <Grid item xs={12} sm={6} md={4} key={agent.id}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <Box display="flex" justifyContent="center" mt={2}>
                <Avatar
                  alt={`${agent.name}'s profile`}
                  src={agent.image}
                  sx={{
                    width: { xs: 100, sm: 120, md: 150 },
                    height: { xs: 100, sm: 120, md: 150 },
                    border: '4px solid #1976d2',
                  }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  {agent.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={1} align="center">
                  Address: {agent.address}
                </Typography>
                <Box display="flex" justifyContent="space-between" mb={2} flexWrap="wrap">
                  <Button variant="outlined" color="primary" fullWidth sx={{ mb: 1 }}>
                    Listings: {agent.listings}
                  </Button>
                  <Box display="flex" justifyContent="center" gap={1} flexGrow={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<PhoneIcon />}
                      onClick={() => alert(`Calling ${agent.name}`)}
                      sx={{ flexGrow: 1 }}
                    >
                      Call
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<MessageIcon />}
                      onClick={() => alert(`Message ${agent.name}`)}
                      sx={{ flexGrow: 1 }}
                    >
                      Message
                    </Button>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Rating name="read-only" value={agent.rating} readOnly />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Agents;
