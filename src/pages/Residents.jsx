import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Residents = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
        Nuestros Residentes
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Privacidad y Dignidad
              </Typography>
              <Typography variant="body1">
                Por respeto a la privacidad de nuestros residentes, no mostramos sus fotografías o información personal.
                Cada uno de nuestros residentes recibe atención personalizada y cuidados específicos según sus necesidades.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Residents;
