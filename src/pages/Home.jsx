import { Container, Typography, Box, Button, Paper, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSlideshow from '../components/HeroSlideshow';
import HowToGetThere from '../components/HowToGetThere';
import ImageGallery from '../components/ImageGallery';
import ChurchIcon from '@mui/icons-material/Church';
import '../styles/animations.css';

const Home = () => {
  return (
    <>
      <Box 
        sx={{ 
          position: 'relative',
          marginTop: { xs: '56px', sm: '64px' },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <HeroSlideshow />
        <Box sx={{ 
          position: 'relative',
          zIndex: 1,
          color: 'white', 
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '90%'
        }}>
         <Typography variant="h2" component="h1" gutterBottom className="fade-in">
           <span style={{ fontFamily: 'Cinzel, serif', fontWeight: 'bold' }}>
             Bienvenidos a Casa de Reposo Santa María
           </span>
         </Typography>
         <Typography variant="h5" component="h2" gutterBottom
           className="fade-in-up" sx={{ animationDelay: '0.5s' }}>
           Un lugar donde el cuidado y la compasión se encuentran
         </Typography>
         <Box sx={{ 
           mt: 4,
           display: 'flex',
           flexDirection: { xs: 'column', sm: 'row' },
           gap: { xs: 2, sm: 0 },
           alignItems: 'center',
           justifyContent: 'center'
         }} className="fade-in-up" style={{ animationDelay: '1s' }}>
           <Button 
             component={Link} 
             to="/sobre-nosotros" 
             variant="contained" 
             size="large" 
             className="button-hover"
             sx={{
               minWidth: '220px',
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
               minWidth: '220px',
               color: 'white',
               fontWeight: 'bold',
               '&:hover': { backgroundColor: 'var(--catholic-purple)' },
               ml: { xs: 0, sm: 2 }
             }}
           >
             Hacer una donación
           </Button>
         </Box>
        </Box>
      </Box>

      {/* Residents Preview Section */}
      <Box sx={{ 
        my: 4, 
        px: 2,
        maxWidth: '100%',
        overflow: 'hidden'
      }}>
        <Typography variant="h4" component="h2" 
          sx={{ 
            mb: 4, 
            color: 'var(--primary-color)',
            textAlign: 'center',
            fontFamily: 'Cinzel, serif'
          }}>
          Nuestros Residentes
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {[
            { image: 'https://randomuser.me/api/portraits/women/76.jpg', name: 'María González', desc: 'Residente desde 2020' },
            { image: 'https://randomuser.me/api/portraits/men/82.jpg', name: 'José Martínez', desc: 'Residente desde 2019' }
          ].map((resident, index) => (
            <Paper key={index} sx={{
              p: 3,
              maxWidth: 300,
              textAlign: 'center',
              backgroundColor: 'var(--background-color)',
              borderRadius: '12px',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
              }
            }}>
              <Box component="img" src={resident.image} alt={resident.name}
                sx={{ 
                  width: 200, height: 200, borderRadius: '50%', mb: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': { filter: 'brightness(1.1)' }
                }} />
              <Typography variant="h6">{resident.name}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{resident.desc}</Typography>
            </Paper>
          ))}
        </Box>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button component={Link} to="/residentes" variant="contained"
            className="button-hover"
            sx={{
              backgroundColor: 'var(--primary-color)',
              minWidth: '220px',
              '&:hover': {
                backgroundColor: 'var(--catholic-purple)',
                transform: 'translateY(-2px)'
              }
            }}>
            Conoce a todos nuestros residentes
          </Button>
        </Box>
      </Box>

      {/* Daily Prayer Section */}
      <Paper sx={{
        my: 4,
        mx: 'auto',
        maxWidth: '600px',
        backgroundColor: 'var(--background-color)',
        border: '2px solid var(--catholic-gold)',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        p: 3,
        textAlign: 'center'
      }}>
        <Box display="flex" justifyContent="center">
          <ChurchIcon sx={{ fontSize: 40, color: 'var(--catholic-purple)', mb: 2 }} />
        </Box>
        <Typography variant="h5" gutterBottom sx={{ color: 'var(--primary-color)', textAlign: 'center' }}>
          Oración del Día
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic', textAlign: 'center' }}>
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
