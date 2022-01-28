import { Grid, Avatar, Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Chip } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const Blog = ({ blog }) => {
    const { coverImg, username, userImg, date, title, time, location, ratings, category, description, approve } = blog;
    const details = [time + ', ' + date + ', ' + location ];

    return (
        <Grid item xs={12} sm={6} md={4}>
            {approve === true && <Card sx={{p: 1}}>
                <CardHeader
                    avatar={
                        <Avatar alt={username} src={userImg} />
                    }
                    title={<Typography sx={{fontSize: 18, fontWeight: 'bold'}}>{username}</Typography>}
                    subheader={details}
                    sx={{px: 1}}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={coverImg}
                    alt="Blog Cover"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold', mb: 1 }}>{ title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Chip label={category} variant="outlined" sx={{fontWeight: 'bold'}} />
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <StarIcon /> &nbsp; <b>{ratings}</b>
                    </Box>
                </CardActions>
            </Card>}
        </Grid>
    );
};

export default Blog;