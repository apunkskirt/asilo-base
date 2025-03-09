import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
        Sobre Nosotros
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Nuestra Misión
              </Typography>
              <Typography variant="body1" paragraph>
                Proporcionar un ambiente acogedor y seguro donde nuestros residentes reciban
                el mejor cuidado posible, manteniendo su dignidad y calidad de vida.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Nuestra Historia
              </Typography>
              <Typography variant="body1" paragraph>
                Desde nuestra fundación, nos hemos dedicado a proporcionar cuidados
                de alta calidad y un ambiente familiar para nuestros residentes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
