import { Box, Container, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      bgcolor: 'var(--footer-color)',
      color: 'white', 
      borderTop: '3px solid var(--gold-accent)',
      py: 6 
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2">
              Teléfono: (123) 456-7890<br />
              Email: contacto@casadereposo.com<br />
              Dirección: Calle Principal 123, Ciudad
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Link href="/donaciones" color="inherit">Donaciones</Link><br />
            <Link href="/voluntariado" color="inherit">Voluntariado</Link><br />
            <Link href="/sobre-nosotros" color="inherit">Sobre Nosotros</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box sx={{ mt: 2 }}>
              <FacebookIcon sx={{ mr: 2 }} />
              <TwitterIcon sx={{ mr: 2 }} />
              <InstagramIcon />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
