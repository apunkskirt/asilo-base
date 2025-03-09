import { Box, Fab, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingButtons = () => {
  return (
    <Box>
      <Fab
        component="a"
        href="https://wa.me/+51999999999"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          left: 20,
          width: {
            xs: '64px',
            md: '72px'
          },
          height: {
            xs: '64px',
            md: '72px'
          },
          bottom: 20,
          backgroundColor: '#25D366',
          '&:hover': {
            backgroundColor: '#128C7E',
            transform: 'scale(1.1)',
          },
          zIndex: 1000,
        }}
      >
        <WhatsAppIcon />
      </Fab>

      <Fab
        component="a"
        href="/donaciones"
        variant="extended"
        sx={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          padding: {
            xs: '12px 20px',
            md: '16px 32px'
          },
          fontSize: {
            xs: '1rem',
            md: '1.2rem'
          },
          backgroundColor: 'var(--primary-color)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'var(--catholic-purple)',
            transform: 'scale(1.1)',
          },
          zIndex: 1000,
        }}
      >
        <Typography sx={{ px: 1 }}>
          Tú puedes ayudar donando acá
        </Typography>
      </Fab>
    </Box>
  );
};

export default FloatingButtons;
