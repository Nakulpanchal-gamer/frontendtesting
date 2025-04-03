import React from 'react';
import { Container, Typography, Box, Link, Grid, TextField, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.9), rgba(27, 94, 12, 0.9))',
      color: '#FFF',
      padding: '40px 20px',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.4)',
    }}
  >
    <Container>
      <Grid container spacing={4}>
        {/* Company Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#FFD700' }}>
            CropX
          </Typography>
          <Typography variant="body2" paragraph sx={{ color: '#FAFAFA' }}>
            Empowering farmers with smart agricultural solutions for sustainable farming.
          </Typography>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            {[
              { icon: <Facebook fontSize="large" />, link: '#' },
              { icon: <Twitter fontSize="large" />, link: '#' },
              { icon: <Instagram fontSize="large" />, link: '#' },
              { icon: <LinkedIn fontSize="large" />, link: '#' },
            ].map((social, index) => (
              <Link
                href={social.link}
                key={index}
                sx={{
                  color: '#FFD700',
                  transition: 'transform 0.3s, color 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    color: '#FF5722',
                  },
                }}
              >
                {social.icon}
              </Link>
            ))}
          </Box>
        </Grid>
        

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#FFD700' }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['About Us', 'Careers', 'Blog', 'Contact'].map((link, index) => (
              <Link
                href="#"
                key={index}
                sx={{
                  color: '#FAFAFA',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease, text-shadow 0.3s ease',
                  '&:hover': {
                    color: '#FFD700',
                    textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700',
                  },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#FFD700' }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body2" paragraph sx={{ color: '#FAFAFA' }}>
            Stay updated with the latest insights and news from CropX.
          </Typography>
          <Box component="form" sx={{ display: 'flex', gap: '10px' }}>
            <TextField
              label="Your Email"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                backgroundColor: '#FFF',
                borderRadius: '5px',
                '& input': { color: '#000' },
              }}
            />
            <Button variant="contained" color="primary" size="large">
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ background: '#1B5E20', color: '#FFF', padding: '20px' }}>
  <Typography variant="h6">Contact Us</Typography>
  <Typography variant="body2">Email: support@cropx.com</Typography>
  <Typography variant="body2">Phone: +1 234 567 890</Typography>
  <TextField label="Your Message" variant="outlined" fullWidth sx={{ marginTop: '10px' }} />
  <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
    Send Message
  </Button>
</Box>


      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #FFD700', paddingTop: '10px' }}>
        <Typography variant="body2" sx={{ color: '#FAFAFA' }}>
          © 2025 CropX. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
