import { Container, Typography, Grid, Card, CardContent, Button, TextField, Box } from '@mui/material';

const Volunteer = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
        Voluntariado
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                ¿Por qué ser voluntario?
              </Typography>
              <Typography variant="body1" paragraph>
                Los voluntarios son una parte esencial de nuestra comunidad.
                Tu tiempo y dedicación pueden hacer una gran diferencia en la vida de nuestros residentes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Únete como voluntario
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField fullWidth label="Nombre" margin="normal" />
                <TextField fullWidth label="Email" margin="normal" />
                <TextField fullWidth label="Teléfono" margin="normal" />
                <TextField
                  fullWidth
                  label="¿Por qué quieres ser voluntario?"
                  multiline
                  rows={4}
                  margin="normal"
                />
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Enviar solicitud
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Volunteer;
