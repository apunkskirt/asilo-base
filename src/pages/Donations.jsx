import { Container, Typography, Grid, Card, CardContent, Button, TextField, Box } from '@mui/material';
import '../styles/catholic-animations.css';

const Donations = () => {
  return (
    <Container maxWidth="lg" sx={{ 
      pt: { xs: 10, sm: 12 },
      '& .MuiCard-root': {
        className: 'stained-glass-card gothic-border',
        animation: 'crossFade 0.8s ease-out'
      }
    }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ 
        my: 4,
        fontFamily: 'Cinzel, serif',
        color: 'var(--primary-color)',
        '&::after': {
          content: '"✟"',
          marginLeft: '8px'
        }
      }}>
        Donaciones
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{
                fontFamily: 'Cinzel, serif',
                color: 'var(--primary-color)',
                '&::after': {
                  content: '"✟"',
                  marginLeft: '8px'
                }
              }}>
                ¿Por qué donar?
              </Typography>
              <Typography variant="body1" paragraph>
                Sus donaciones nos ayudan a proporcionar mejor atención y calidad de vida a nuestros residentes.
                Cada contribución marca la diferencia.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{
                fontFamily: 'Cinzel, serif',
                color: 'var(--primary-color)',
                '&::after': {
                  content: '"✟"',
                  marginLeft: '8px'
                }
              }}>
                Hacer una donación
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField fullWidth label="Nombre" margin="normal" />
                <TextField fullWidth label="Email" margin="normal" />
                <TextField fullWidth label="Monto" type="number" margin="normal" />
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Donar
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Donations;
