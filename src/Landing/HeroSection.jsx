import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HeroSection = () => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, #4CAF50, #81C784)',
      color: '#fff',
      padding: '80px 20px',
      textAlign: 'center',
    }}
  >
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to CropX
      </Typography>
      <Typography variant="h5" paragraph>
        Empowering farmers with data-driven insights for sustainable agriculture.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{
          '&:hover': {
            backgroundColor: '#66BB6A',
          },
        }}
      >
        Get Started
      </Button>
    </Container>
  </Box>
);

export default HeroSection;
