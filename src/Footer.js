import React from 'react';
import { Box, Container, Grid, Link, Typography,Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5',alignContent: 'left', py: 6, mt: 10 }}>
        <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent={'flex-center'}>
    <Grid size={3}>
    <Box sx={{ height: '100%', textAlign: 'left' }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
        Contacto Sede Mocoa
        </Typography>
        <Typography variant="body2" color="textSecondary">
        Sede Principal: "Aire Libre" Barrio Luis Carlos Galán
        </Typography>
        <Typography variant="body2" color="textSecondary">
        Teléfonos: +57 3138085287 - +57 3130310083
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        Atención al Público: Lunes a Viernes de 8 a.m. a 12 m. y de 2 p.m. a 6 p.m.
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        Notificaciones judiciales: notificacionesjudiciales@itp.edu.co
        </Typography>
    </Box>
    </Grid>
    <Grid size={3}>
    <Box sx={{ height: '100%',textAlign: 'left' }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
        Más
        </Typography>
        <Link href="#" underline="none" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
        Ubicación y contacto
        </Link>
        <Link href="#" underline="none" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
        Transparencia y acceso a la información pública
        </Link>
        <Link href="#" underline="none" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
        Sistemas de PQRSD
        </Link>
        <Link href="#" underline="none" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
        Intenciones de contratación
        </Link>
    </Box>
    </Grid>
    <Grid size={3}>
    <Box sx={{ height: '100%', textAlign: 'left' }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
        Más
        </Typography>
        <Link href="#" underline="none" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
        Gestión de Calidad
        </Link>
        <Link href="#" underline="none" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
        Bienestar
        </Link>
        <Link href="#" underline="none" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
        Biblioteca
        </Link>
        <Link href="#" underline="none" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
        Preguntas Frecuentes
        </Link>
    </Box>
    </Grid>
    <Grid item xs={12} md={2}>
  <Box sx={{ height: '100%', textAlign: 'left' }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      Síguenos
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <FacebookIcon fontSize="small" />
        <Link href="#" color="inherit" underline="none">
          <Typography variant="body2">Facebook</Typography>
        </Link>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <InstagramIcon fontSize="small" />
        <Link href="#" color="inherit" underline="none">
          <Typography variant="body2">Instagram</Typography>
        </Link>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TwitterIcon fontSize="small" />
        <Link href="#" color="inherit" underline="none">
          <Typography variant="body2">Twitter</Typography>
        </Link>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LinkedInIcon fontSize="small" />
        <Link href="#" color="inherit" underline="none">
          <Typography variant="body2">LinkedIn</Typography>
        </Link>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <YouTubeIcon fontSize="small" />
        <Link href="#" color="inherit" underline="none">
          <Typography variant="body2">YouTube</Typography>
        </Link>
      </Box>
    </Box>
  </Box>
</Grid>


    </Grid>
    <Divider sx={{ my: 4, borderColor: '#000', borderWidth: 1 }} />
    <Typography variant="body2" color="textSecondary" align="center">
    © 2025 Instituto Tecnológico del Putumayo. Todos los derechos reservados.
    </Typography>
    </Container>
    </Box>


  );
};

export default Footer;
