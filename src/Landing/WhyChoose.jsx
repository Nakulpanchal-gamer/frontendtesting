import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const benefits = [
  { title: 'Precision Agriculture', description: 'Accurate data for better crop management.' },
  { title: 'Sustainability', description: 'Eco-friendly solutions to save resources.' },
  { title: 'Smart Automation', description: 'Automated systems to reduce labor costs.' },
];

const WhyChoose = () => (
  <Container sx={{ padding: '60px 20px' }}>
    <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
      Why Choose CropX?
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {benefits.map((benefit, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px', background: '#E8F5E9' }}>
            <CheckCircle sx={{ fontSize: 50, color: '#4CAF50' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
              {benefit.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              {benefit.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default WhyChoose;
