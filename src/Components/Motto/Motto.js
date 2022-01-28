import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Motto = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={4}>
                <Box className="motto">
                    <img
                        src="https://preview.colorlib.com/theme/travello/images/beach.svg"
                        alt="Motto"
                        style={{ width: "20%", marginRight: "1.2rem"}}
                    />
                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Top Destinations</Typography>
                        <Typography sx={{ color: '#47484D' }}>Top destinations from around the world!</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box className="motto">
                    <img
                        src="https://preview.colorlib.com/theme/travello/images/wallet.svg"
                        alt="Motto"
                        style={{ width: "20%", marginRight: "1.2rem" }}
                    />
                    <Box>
                        <Typography sx={{fontWeight: 600, fontSize: 20}}>The Best Prices</Typography>
                        <Typography sx={{ color: '#47484D'}}>Affordable price and less then others!</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box className="motto">
                    <img
                        src="https://preview.colorlib.com/theme/travello/images/suitcase.svg"
                        alt="Motto"
                        style={{ width: "20%", marginRight: "1.2rem"}}
                    />
                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Amazing Services</Typography>
                        <Typography sx={{ color: '#47484D' }}>Amazing and free 24/7 service!</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Motto;