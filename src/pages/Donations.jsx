import { Container, Typography, Grid, Card, CardContent, Button, TextField, Box } from '@mui/material';

const Donations = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 4, mt: { xs: 4, md: 2 } }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
        Donaciones
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
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
              <Typography variant="h5" gutterBottom>
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
