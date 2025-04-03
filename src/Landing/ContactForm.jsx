import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactForm = () => (
  <Container sx={{ padding: '60px 20px' }}>
    <Typography variant="h4" gutterBottom align="center" color="primary">
      Contact Us
    </Typography>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <TextField label="Name" variant="outlined" fullWidth required />
      <TextField label="Email" variant="outlined" type="email" fullWidth required />
      <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
      <Button variant="contained" color="primary" type="submit">
        Send Message
      </Button>
    </Box>
  </Container>
);

export default ContactForm;
