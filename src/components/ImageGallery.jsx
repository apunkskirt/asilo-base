import { Box, IconButton, Card, CardMedia, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/animations.css';

const galleryImages = [
  {
    url: 'https://picsum.photos/800/500?random=1',
    title: 'Jardín Principal'
  },
  {
    url: 'https://picsum.photos/800/500?random=2',
    title: 'Sala Común'
  },
  {
    url: 'https://picsum.photos/800/500?random=3',
    title: 'Comedor'
  },
  {
    url: 'https://picsum.photos/800/500?random=4',
    title: 'Capilla'
  },
  {
    url: 'https://picsum.photos/800/500?random=5',
    title: 'Área de Actividades'
  },
  {
    url: 'https://picsum.photos/800/500?random=6',
    title: 'Sala de Lectura'
  },
  {
    url: 'https://picsum.photos/800/500?random=7',
    title: 'Área de Descanso'
  },
  {
    url: 'https://picsum.photos/800/500?random=8',
    title: 'Jardín Trasero'
  }
];

const ImageGallery = () => {
  const scrollContainer = (direction) => {
    const container = document.getElementById('gallery-container');
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <Box sx={{ position: 'relative', my: 4 }}>
      <Typography variant="h4" component="h2" 
        sx={{ 
          mb: 3, 
          color: 'var(--primary-color)',
          textAlign: 'center',
          fontFamily: 'Cinzel, serif'
        }}>
        Nuestras Instalaciones
      </Typography>
      
      <IconButton 
        onClick={() => scrollContainer('left')}
        sx={{ 
          position: 'absolute', 
          left: 0, 
          top: '50%', 
          zIndex: 2,
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box
        id="gallery-container"
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          px: 6,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollBehavior: 'smooth'
        }}
      >
        {galleryImages.map((image, index) => (
          <Card key={index} sx={{ 
            minWidth: {
              xs: 280,
              md: 320
            },
            maxWidth: {
              xs: 280,
              md: 320
            },
            flexShrink: 0,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              '& img': {
                filter: 'brightness(1.1)',
                transition: 'all 0.3s ease-in-out'
              }
            }
          }}>
            <CardMedia
              component="img"
              height="200"
              image={image.url}
              alt={image.title}
              sx={{ objectFit: 'cover' }}
            />
            <Typography variant="subtitle1" sx={{ 
              p: {
                xs: 1,
                md: 2
              },
              fontSize: { xs: '1rem', md: '1.2rem' },
              textAlign: 'center' 
            }}>
              {image.title}
            </Typography>
          </Card>
        ))}
      </Box>

      <IconButton 
        onClick={() => scrollContainer('right')}
        sx={{ 
          position: 'absolute', 
          right: 0, 
          top: '50%', 
          zIndex: 2,
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImageGallery;
