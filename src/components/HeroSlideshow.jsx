import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1519974719765-e6559eac2575',
  'https://images.unsplash.com/photo-1554374814-6f1baaa46062',
  'https://images.unsplash.com/photo-1566908829550-e6551b00979b',
  'https://images.unsplash.com/photo-1574056165959-12f14e98ad49',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952'
];

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
    >
      {images.map((img, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
    </Box>
  );
};

export default HeroSlideshow;
