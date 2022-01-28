import React, {useState} from 'react';
import { Box } from '@mui/system';
import { AppBar, Avatar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Contact from '../Contact/Contact';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 0, color: 'black',position: 'absolute', zIndex: 1 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            noWrap
                            component="div"
                            sx={{ ml: 3, mr: 2, fontSize: 24, display: { xs: 'none', md: 'flex' } }}
                        >
                            <code sx={{ fontWeight: 700 }}>Travel Hub</code>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Button color="inherit" sx={{ mx: 1 }} className="hover">
                                        <code>
                                            <Link to="/" style={{ color: '#111430' }} className="link">Home</Link>
                                        </code>
                                    </Button>
                                    <Button color="inherit" sx={{ mx: 1 }} className="hover">
                                        <code>
                                            <HashLink to="/" style={{ color: '#111430' }} className="link">Blogs</HashLink>
                                        </code>
                                    </Button>
                                    <Button color="inherit" sx={{ mx: 1 }} className="hover">
                                        <code>
                                            <HashLink to="/" style={{ color: '#111430' }} className="link">Destinations</HashLink>
                                        </code>
                                    </Button>
                                    <Button color="inherit" sx={{ mx: 1 }} className="hover txt" onClick={handleOpen}>
                                        <code>Contact</code>
                                    </Button>
                                    {user?.email && <Button color="inherit" sx={{ mx: 1 }} className="hover txt">
                                        <Link to="/dashboard" style={{ color: '#111430' }} className="link">
                                            <code>Dashboard</code>
                                        </Link>
                                    </Button>}
                                    {user?.email ? <Button variant="contained" className="loginBtn">
                                        <code>Log Out</code>
                                    </Button> :
                                        <Button variant="contained" sx={{ mx: 1 }} className="loginBtn">
                                            <code>
                                                <Link to="/login" style={{ color: 'white' }} className="link">Login</Link>
                                            </code>
                                        </Button>}
                                    {user?.email ? <Tooltip title={user.displayName} arrow>
                                        <Avatar
                                            alt={user.displayName}
                                            src={user.photoURL}
                                            sx={{ ml: 2 }}
                                        />
                                    </Tooltip> :
                                        <Tooltip title="Login or Register" arrow>
                                            <Avatar sx={{ ml: 2 }}>
                                                <AccountCircleIcon />
                                            </Avatar>
                                        </Tooltip>
                                    }
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <code>Travel Hub</code>
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mr: 3 }}>
                            <Box>
                                <Button color="inherit" className="hover">
                                    <code>
                                        <Link to="/" style={{ color: '#111430' }} className="link">Home</Link>
                                    </code>
                                </Button>
                                <Button color="inherit" sx={{ mx: 1 }} className="hover">
                                    <code>
                                        <Link to="/" style={{ color: '#111430' }} className="link">Blogs</Link>
                                    </code>
                                </Button>
                                <Button color="inherit" className="hover">
                                    <code>
                                        <Link to="/" style={{ color: '#111430' }} className="link">Destination</Link>
                                    </code>
                                </Button>
                                <Button color="inherit" sx={{ mx: 1 }} className="hover txt" onClick={handleOpen}>
                                    <code>Contact</code>
                                </Button>
                                {user?.email && <Button color="inherit" sx={{ mx: 1 }} className="hover txt">
                                    <Link to="/dashboard" style={{ color: '#111430' }} className="link">
                                        <code>Dashboard</code>
                                    </Link>
                                </Button>}
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                {user?.email ? <Button variant="contained" className="loginBtn" onClick={logOut}>
                                    <code style={{ fontWeight: 700 }}>Log Out</code>
                                </Button> :
                                    <Button variant="contained" className="loginBtn">
                                        <code>
                                            <Link to="/login" style={{ color: 'white' }} className="link">Login</Link>
                                        </code>
                                    </Button>}
                                {user?.email ? <Tooltip title={user.displayName} arrow>
                                    <Avatar
                                        alt={user.displayName}
                                        src={user.photoURL}
                                        sx={{ ml: 2 }}
                                    />
                                </Tooltip> :
                                    <Tooltip title="Login or Register" arrow>
                                        <Avatar sx={{ ml: 2 }}>
                                            <AccountCircleIcon/>
                                        </Avatar>
                                    </Tooltip>
                                }
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Contact
                open={open}
                handleClose={handleClose}
            />
        </Box>
    );
};

export default Navigation;