import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChurchIcon from '@mui/icons-material/Church';
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Residentes', path: '/residentes' },
    { text: 'Donaciones', path: '/donaciones' },
    { text: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { text: 'Voluntariado', path: '/voluntariado' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Typography variant="h6" sx={{ my: 2, color: 'var(--primary-color)' }}>
        Casa de Reposo Santa María
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
   <Box>
    <AppBar position="fixed" sx={{
      backgroundColor: scrolled ? 'rgba(114, 47, 55, 0.95)' : 'var(--primary-color)',
      color: 'white',
      boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)',
      width: '100%',
      zIndex: 1000,
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease-in-out',
      '& .MuiButton-root': {
        color: 'white',
        margin: '0 8px',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          textDecoration: 'underline',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <ChurchIcon sx={{ mr: 1, color: 'var(--catholic-gold)' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Cinzel, serif'
          }}>
            Casa de Reposo Santa María
          </Box>
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button component={Link} to="/" color="inherit">Inicio</Button>
          <Button component={Link} to="/residentes" color="inherit">Residentes</Button>
          <Button component={Link} to="/donaciones" color="inherit">Donaciones</Button>
          <Button component={Link} to="/sobre-nosotros" color="inherit">Sobre Nosotros</Button>
          <Button component={Link} to="/voluntariado" color="inherit">Voluntariado</Button>
        </Box>
      </Toolbar>
    </AppBar>

    <Box component="nav">
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
      >
        {drawer}
      </Drawer>
    </Box>
   </Box>
  );
};

export default Header;
