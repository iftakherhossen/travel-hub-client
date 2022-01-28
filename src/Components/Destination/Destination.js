import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Destination = ({ places }) => {
    const { name, img, description, price, features } = places;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 1 }} className="imgBox">
                <img src={img} alt="Destination" style={{ width: '100%' }} />
                <Box sx={{ px: 2 }}>
                    <Box className="overlay">
                        <Typography sx={{ fontWeight: 'bold', mt: 1, fontSize: 28 }}>{name}</Typography>
                        <Typography sx={{ fontSize: 16 }}>{description}</Typography>
                        <Typography variant="h6">Full Package <b>${price}</b></Typography>
                        <Typography sx={{ fontSize: 17, mt: 1 }}><b>Benefits :</b> &nbsp;
                        {
                            features.map((f) => (
                                <>{f}, </>
                            ))
                        }</Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default Destination;