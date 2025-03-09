import { Container, Typography, Box, Button, Paper, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import HowToGetThere from '../components/HowToGetThere';
import ImageGallery from '../components/ImageGallery';
import ChurchIcon from '@mui/icons-material/Church';
import '../styles/animations.css';

const Home = () => {
  return (
    <>
      <Box 
        sx={{ 
          backgroundImage: 'url("/chapel-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(114, 47, 55, 0.6)' // Deep burgundy with transparency
          }
        }}
      >
        <Box sx={{ position: 'relative', color: 'white', textAlign: 'center' }}>
         <Typography variant="h2" component="h1" gutterBottom className="fade-in">
           Bienvenidos a Casa de Reposo Santa María
         </Typography>
         <Typography variant="h5" component="h2" gutterBottom color="text.secondary" 
           className="fade-in-up" sx={{ animationDelay: '0.5s' }}>
           Un lugar donde el cuidado y la compasión se encuentran
         </Typography>
         <Box sx={{ mt: 4 }} className="fade-in-up" style={{ animationDelay: '1s' }}>
           <Button 
             component={Link} 
             to="/sobre-nosotros" 
             variant="contained" 
             size="large" 
             className="button-hover"
             sx={{
               backgroundColor: 'var(--primary-color)',
               fontWeight: 'bold',
               '&:hover': {
                 backgroundColor: 'var(--catholic-purple)',
               }
             }}
           >
             Conócenos
           </Button>
           <Button 
             component={Link} 
             to="/donaciones" 
             variant="contained" 
             size="large"
             className="button-hover"
             sx={{
               backgroundColor: 'var(--primary-color)',
               color: 'white',
               fontWeight: 'bold',
               '&:hover': { backgroundColor: 'var(--catholic-purple)' },
               ml: 2
             }}
           >
             Hacer una donación
           </Button>
         </Box>
        </Box>
      </Box>

      {/* Daily Prayer Section */}
      <Paper sx={{ 
        my: 4,
        backgroundColor: 'var(--background-color)',
        border: '2px solid var(--catholic-gold)',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        p: 3 
      }}>
        <ChurchIcon sx={{ fontSize: 40, color: 'var(--catholic-purple)', mb: 2 }} />
        <Typography variant="h5" gutterBottom sx={{ color: 'var(--primary-color)' }}>
          Oración del Día
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          "Señor, haz de mí un instrumento de tu paz..."
        </Typography>
      </Paper>

      <ImageGallery />
      <Divider sx={{ my: 4 }} />
      
      <HowToGetThere />
    </>
  );
};

export default Home;
