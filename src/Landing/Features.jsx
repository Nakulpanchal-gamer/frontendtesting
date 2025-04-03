import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const features = [
  { title: 'Smart Irrigation', description: 'Optimize water usage with precision.' },
  { title: 'Soil Monitoring', description: 'Analyze soil health for better yields.' },
  { title: 'Crop Analytics', description: 'Track growth and predict harvest times.' },
];

const CardStyled = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
  },
  borderRadius: '15px',
  padding: '20px',
  textAlign: 'center',
}));

const Features = () => (
  <Container sx={{ padding: '60px 20px' }}>
    <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ fontWeight: 700 }}>
      Our Features
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={12} md={4} key={index}>
          <CardStyled>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {feature.description}
              </Typography>
            </CardContent>
          </CardStyled>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Features;
