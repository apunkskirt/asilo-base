import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{
      paddingTop: { xs: 10, sm: 12 },
      minHeight: '100vh',
      backgroundColor: 'var(--background-color)'
    }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our Catholic community! We are a group of faithful individuals dedicated to serving God and our local community.
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to spread the love and teachings of Jesus Christ, and to provide a welcoming and supportive environment for all who seek to grow in their faith.
      </Typography>
      <Typography variant="body1" paragraph>
        We offer a variety of programs and activities, including weekly Mass, Bible study groups, youth programs, and community outreach initiatives. We also host special events and retreats throughout the year to help deepen our spiritual connection and fellowship.
      </Typography>
      <Typography variant="body1" paragraph>
        Whether you are a lifelong Catholic or just exploring your faith, we invite you to join us on this journey. Together, we can make a positive impact in the world and grow closer to God.
      </Typography>
    </Container>
  );
};

export default AboutUs;
