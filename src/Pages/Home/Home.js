import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Blogs from '../../Components/Blogs/Blogs';
import Destinations from '../../Components/Destinations/Destinations';
import Footer from '../../Components/Footer/Footer';
import Motto from '../../Components/Motto/Motto';
import Navigation from '../../Components/Navigation/Navigation';
import Popular from '../../Components/Popular/Popular';
import Sliders from '../../Components/Sliders/Sliders';

const Home = () => {
    return (
        <Box>
            <Navigation />
            <Sliders />
            <Container>
                <Motto />
                <Destinations />
                <Blogs />
            </Container>
            <Box sx={{ mt: 5, p: 2, textAlign: 'center' }}>
                <Popular />
                <Footer />
            </Box>

        </Box>
    );
};

export default Home;