import { Container, Grid, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import GoogleButton from 'react-google-button';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    let navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, navigate);
        e.preventDefault();
        navigate('/home')
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sx={{ mx: 'auto' }}>
                        <Box sx={{p: '4rem 20px', textAlign: 'center'}}>
                            <form
                                onSubmit={handleLogin}
                                style={{ textAlign: 'center' }}
                            >
                                <Typography variant="h5" sx={{ mb: 3 }} className="txt">Login</Typography>
                                <TextField
                                    id="standard-basic-email"
                                    label="Enter Your Email"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    autoComplete="off"
                                    variant="standard"
                                    sx={{ width: '100%', mb: 2 }} /><br />
                                <TextField
                                    id="standard-basic-password"
                                    type="password"
                                    label="Enter Your Password"
                                    variant="standard"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    sx={{ width: '100%', mb: 1 }} /><br />
                                <Typography variant="body1" sx={{ color: 'red', cursor: 'pointer' }}>Forget Your Password?</Typography>
                                <br />
                                <Button variant="contained" sx={{ mt: 5 }} className="btn" type="submit"> Login</Button>
                            </form>
                            <NavLink to="/register" style={{ textDecoration: 'none' }} className="txt"><Typography sx={{ mt: 2, fontWeight: 600}}>New User? Register Now</Typography></NavLink>
                            <GoogleButton
                                style={{ margin: '1rem auto' }}
                                onClick={signInWithGoogle}
                            />
                            {user?.email &&
                                <Alert severity="success" sx={{ mt: 3, width: '100%', mx: 'auto', fontWeight: 'bold', textAlign: 'center' }}>Welcome, User</Alert>
                            }
                            {authError && <Alert severity="error" sx={{ mt: 3, width: '100%', mx: 'auto', fontWeight: 'bold', textAlign: 'center' }}>{authError}</Alert>}
                            {isLoading && <CircularProgress />}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Login;