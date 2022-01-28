import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TourIcon from '@mui/icons-material/Tour';
import { Avatar, Button, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Popular = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={5}>
                    <Box sx={{}}>
                        <Typography className="txt" variant="h5" sx={{ m: 1 }}>
                            Popular Blogs
                        </Typography>
                        <Divider sx={{ mx: 4, bgcolor: '#111430' }} />
                        <List sx={{ width: '100%' }}>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6">Blog Name</Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            {"Author Name"}
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body1"
                                                color="text.primary"
                                            >
                                                &nbsp; — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque sodales felis et luctus. Praesent eget sem lacus. Maecenas id ante ac dolor pulvinar ullamcorper vel quis urna... <Link to="/">Read More</Link>
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6">Blog Name</Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            {"Author Name"}
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body1"
                                                color="text.primary"
                                            >
                                                &nbsp; — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque sodales felis et luctus. Praesent eget sem lacus. Maecenas id ante ac dolor pulvinar ullamcorper vel quis urna... <Link to="/">Read More</Link>
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6">Blog Name</Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            {"Author Name"}
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body1"
                                                color="text.primary"
                                            >
                                                &nbsp; — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque sodales felis et luctus. Praesent eget sem lacus. Maecenas id ante ac dolor pulvinar ullamcorper vel quis urna... <Link to="/">Read More</Link>
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                        <Button>See More !</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7} md={4}>
                    <Box sx={{ px: 1 }}>
                        <Typography className="txt" variant="h5" sx={{ m: 1 }}>
                            Popular Destinations
                        </Typography>
                        <Divider sx={{ mx: 4, bgcolor: '#111430' }} />
                        <List sx={{ width: '100%' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar>
                                        <TourIcon className="icon" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<b>Bangladesh Tour</b>}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                We will visit 10 Popular Destinations of Bangladesh in 15 Days — &nbsp;
                                            </Typography>
                                            {<b>Going: 50 Travellers</b>}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar>
                                        <TourIcon className="icon" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<b>Nepal Tour</b>}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                We will visit 8 Popular destinations of Nepal in 10 Days — &nbsp;
                                            </Typography>
                                            {<b>Going: 35 Travellers</b>}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar>
                                        <TourIcon className="icon" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<b>Bhutan Tour</b>}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                We will visit 7 Popular Destinations of Bhutan in 10 Days — &nbsp;
                                            </Typography>
                                            {<b>Going: 25 Travellers</b>}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar>
                                        <TourIcon className="icon" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<b>Indonesia Tour</b>}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                We will visit 8 Popular Destinations of Bhutan in 15 Days — &nbsp;
                                            </Typography>
                                            {<b>Going: 20 Travellers</b>}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5} md={3}>
                    <Typography className="txt" variant="h5" sx={{ m: 1 }}>
                        Traveller of the Month
                    </Typography>
                    <Divider sx={{ mx: 1, bgcolor: '#111430' }} />
                    <List sx={{ width: '100%' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon className="icon" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Iftakher Hossen" secondary="Travel 12 Times January, 2022" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon className="icon" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Shafi Alam" secondary="Travel 11 Times January, 2022" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon className="icon" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Mehrima Sara" secondary="Travel 10 Times January, 2022" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Popular;