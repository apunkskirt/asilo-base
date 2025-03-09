import { Box, IconButton, Card, CardMedia, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1586105251261-72a756497a11',
    title: 'Jardín Principal'
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
    title: 'Sala Común'
  },
  {
    url: 'https://images.unsplash.com/photo-1595527397340-8c917b452c04',
    title: 'Comedor'
  },
  {
    url: 'https://images.unsplash.com/photo-1595527397340-8c917b452c04',
    title: 'Capilla'
  },
  {
    url: 'https://images.unsplash.com/photo-1595527397340-8c917b452c04',
    title: 'Área de Actividades'
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
          <Card key={index} sx={{ minWidth: 280, maxWidth: 280, flexShrink: 0 }}>
            <CardMedia
              component="img"
              height="200"
              image={image.url}
              alt={image.title}
              sx={{ objectFit: 'cover' }}
            />
            <Typography variant="subtitle1" sx={{ p: 1, textAlign: 'center' }}>
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
