import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <Box sx={{ mt: 6 }}>
            <Typography variant="h4" sx={{textAlign: 'center'}}>Popular Destinations</Typography>
            <Grid container sx={{ mt: 4 }}>
                {
                    data.map(places => <Destination
                        key={places._id}
                        places={places}
                    />)
                }
            </Grid>
        </Box>

    );
};

export default Destinations;