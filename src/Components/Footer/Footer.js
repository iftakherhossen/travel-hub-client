import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box>
            <Box sx={{ mt: 3, py: 1 }}>
                <a href="https://www.facebook.com/travelhub/" className="text-black"><FacebookIcon sx={{ fontSize: 28 }} /></a>
                <a href="https://www.instagram.com/travelhub/" className="text-black"><InstagramIcon sx={{ fontSize: 28, mx: 1 }} /></a>
                <a href="https://twitter.com/travelhub" className="text-black"><TwitterIcon sx={{ fontSize: 28 }} /></a>
                <a href="mailto:info@travelhub.bd" className="text-black"><EmailIcon sx={{ fontSize: 28, mx: 1 }} /></a>
                <a href="tel:0123456789" className="text-black"><PhoneIcon sx={{ fontSize: 25 }} /></a>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Typography className="txt" variant="subtitle1" sx={{ color: '#6A6C6D' }}>© Travel Hub 2022, Iftakher Hossen, a Programming Hero initiative.</Typography>
        </Box>
    );
};

export default Footer;