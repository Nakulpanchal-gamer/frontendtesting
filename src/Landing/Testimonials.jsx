import React from 'react';
import { Container, Typography, Grid, Box, Avatar } from '@mui/material';

const testimonials = [
  { name: 'John Doe', feedback: 'CropX has revolutionized the way we manage our crops. Highly recommended!', avatar: 'https://i.pravatar.cc/100' },
  { name: 'Jane Smith', feedback: 'An amazing tool that saves both time and resources.', avatar: 'https://i.pravatar.cc/101' },
  { name: 'Alex Johnson', feedback: 'Thanks to CropX, our farm productivity has skyrocketed.', avatar: 'https://i.pravatar.cc/102' },
];

const Testimonials = () => (
  <Container sx={{ padding: '60px 20px', backgroundColor: '#F1F8E9' }}>
    <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
      What Our Users Say
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Box sx={{ textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: 3 }}>
            <Avatar src={testimonial.avatar} sx={{ width: 80, height: 80, margin: '0 auto' }} />
            <Typography variant="body1" sx={{ fontStyle: 'italic', margin: '10px 0' }}>
              "{testimonial.feedback}"
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              - {testimonial.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Testimonials;
