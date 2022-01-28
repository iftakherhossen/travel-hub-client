import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://travel-hub-iftakher.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <Box sx={{ mt: 6 }}>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Blogs by Our Travellers</Typography>
            <Grid container sx={{ mt: 4 }}>
                {
                    data.map(blog => <Blog
                        key={blog._id}
                        blog={blog}
                    />)
                }
            </Grid>
        </Box>
    );
};

export default Blogs;