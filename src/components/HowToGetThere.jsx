import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import DirectionsIcon from '@mui/icons-material/Directions';

const HowToGetThere = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" 
        sx={{ 
          mb: 4, 
          color: 'var(--primary-color)',
          textAlign: 'center',
          fontFamily: 'Cinzel, serif' 
        }}>
        Cómo Llegar
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '400px' }}>
            <iframe
              title="Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=YOUR_MAPS_EMBED_CODE"
              allowFullScreen
            />
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <DirectionsIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Dirección
              </Typography>
              <Typography>
                [Your Address Here]
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowToGetThere;
