import React from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import HowItWorks from './HowItWorks';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WhyChoose from './WhyChoose';
import Testimonials from './Testimonials';
import LatestUpdates from './LatestUpdates';
import theme from '../theme';

const LandingPage = () => (
  <div>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <HeroSection />
      <Features />
      <WhyChoose />
      <Testimonials />
      <HowItWorks />
      <LatestUpdates />
      <Footer />
    </ThemeProvider>
  </div>
);

export default LandingPage;
