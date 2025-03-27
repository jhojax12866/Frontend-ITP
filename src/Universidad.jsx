import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import NavBar from './NavBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import LanguageIcon from '@mui/icons-material/Language';
import Footer from './Footer';
import Mapa from './mapa';

const teamMembers = [
  { name: 'Full Name adrian', title: 'Job Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
  { name: 'Full Name jhojan', title: 'Job Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
  { name: 'Full Name ivan', title: 'Job Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
];



const UniversityPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };
  return (
    <>
    <center>
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box 
          sx={{ 
            height: { xs: '200px', md: '400px' }, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#5f5f5f', 
            color: '#fff', 
            marginBottom: '40px', 
            position: 'relative',
            width: '100%'
          }}
        >
          <Typography variant="h2" sx={{ zIndex: 1, fontWeight: 'bold' }}>
            Universidad
          </Typography>
          <Box
            component="img"
            src="https://conexionputumayo.com/wp-content/uploads/2022/03/itp-putumayo-universidad-1.png"
            alt="Image Placeholder"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.3,
            }}
          />
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  centerContent sx={{ marginBottom: '40px' }}>
        <Grid size={6}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
          Instituto Tecnológico del Putumayo
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. 
          Nulla metus a semper purus mauris dolor. Lorem viverra, molestie ligula sit quis nibh.
          Amet pellentesque sit pulvinar lorem mi, a euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate
          sed. Duis scelerisque vel orci rutrum id tincidunt vel rutrum.
        </Typography>
        </Grid>
        <Grid size={6}>
        <Box
            component="img"
            alt="Image Placeholder"
            src="https://buscacarrera.com.co/public/content/logos/estandar/instituto-tecnologico-del-putumayo_550x420.jpg"
            width="70%"
            height="auto"
            sx={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
          />
          </Grid>
          <Grid size={6}>
        <Box
            component="img"
            alt="Image Placeholder"
            src="https://buscacarrera.com.co/public/content/logos/estandar/instituto-tecnologico-del-putumayo_550x420.jpg"
            width="70%"
            height="auto"
            sx={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
          />
          </Grid>
        <Grid size={6}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
          What we did
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
        ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
        consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi
        massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec
        sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum
        urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque
        ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et,
        nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim
        posuere cursus diam.
        </Typography>
        </Grid>
        <Grid size={6}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
        The outcome
        </Typography> 
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
        ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
        consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi
        massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec
        sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum
        urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque
        ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et,  
        nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim 
        posuere cursus diam.    
        </Typography>
        </Grid>
        <Grid size={6}>
        <Box
            component="img"
            alt="Image Placeholder"
            src="https://buscacarrera.com.co/public/content/logos/estandar/instituto-tecnologico-del-putumayo_550x420.jpg"
            width="70%"
            height="auto"
            sx={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
          />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="sm" sx={{ mt: 5, textAlign: 'center' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" color="textSecondary">
          Tagline
        </Typography>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          Identidad Institucional
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>

      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0 }}>
          <ArrowBackIcon />
        </IconButton>

        <Card sx={{ maxWidth: 400, width: '100%', transition: 'transform 0.5s ease-in-out' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ width: 80, height: 80, mb: 2 }} />
            <Typography variant="h6" fontWeight="bold">
              {teamMembers[currentIndex].name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2 }}>
              {teamMembers[currentIndex].title}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              {teamMembers[currentIndex].description}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, pb: 2 }}>
            <IconButton aria-label="linkedin">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="x">
              <XIcon />
            </IconButton>
            <IconButton aria-label="internet">
              <LanguageIcon />
            </IconButton>
          </Box>
        </Card>

        <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0 }}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Container>
    <Mapa/>
    
    </center>
    <Footer />
    
    </>
  );
};

export default UniversityPage;
