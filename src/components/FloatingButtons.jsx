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
            xs: '8px 12px',
            sm: '10px 16px',
            md: '12px 24px'
          },
          fontSize: {
            xs: '0.75rem',
            sm: '0.85rem',
            md: '1rem'
          },
          backgroundColor: 'var(--primary-color)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'var(--catholic-purple)',
            transform: 'scale(1.1)',
          },
          zIndex: 1000,
          width: {
            xs: '160px',
            sm: '200px',
            md: '240px'
          },
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        <Typography sx={{ px: 1, textOverflow: 'ellipsis' }}>
          AYUDA DONANDO ACÁ
        </Typography>
      </Fab>
    </Box>
  );
};

export default FloatingButtons;
