import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const HowItWorks = () => (
  <Container sx={{ padding: '60px 20px', backgroundColor: '#E8F5E9' }}>
    <Typography variant="h4" gutterBottom align="center" color="primary">
      How It Works
    </Typography>
    <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '20px' }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <ExploreIcon color="primary" fontSize="large" />
          <Typography variant="body1">
            CropX collects data from the field using IoT sensors and satellite imagery.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <DataUsageIcon color="secondary" fontSize="large" />
          <Typography variant="body1">
            Analyze data in real-time to optimize crop management decisions.
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Box sx={{ marginTop: '30px' }}>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/example_video_id"
        title="How CropX Works"
        style={{ border: 'none', borderRadius: '10px' }}
      />
    </Box>
  </Container>
);

export default HowItWorks;
