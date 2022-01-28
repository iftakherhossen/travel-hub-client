import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import GoogleButton from 'react-google-button';

const Register = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();

    let navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData };
        newRegistrationData[field] = value;
        setRegistrationData(newRegistrationData);
    }
    const handleRegister = e => {
        if (registrationData.password !== registrationData.retypePassword) {
            alert("Password didn't match!")
        }
        else {
            registerUser(registrationData.name, registrationData.email, registrationData.password, navigate);
            alert('Registration Successfully!')
        }

        e.preventDefault();
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sx={{ mx: 'auto' }}>
                        <Box sx={{ padding: '60px 0', textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ mb: 3 }} className="txt">Register</Typography>
                            {!isLoading && <form onSubmit={handleRegister}>
                                <TextField
                                    id="name"
                                    label="Enter Your Name"
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                    sx={{ width: '100%', mb: 2 }}
                                /><br />
                                <TextField
                                    id="email"
                                    label="Enter Your Email"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                    sx={{ width: '100%', mb: 2 }}
                                /><br />
                                <TextField
                                    id="password"
                                    type="password"
                                    label="Enter Your Password"
                                    variant="standard"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    sx={{ width: '100%', mb: 2 }}
                                /><br />
                                <TextField
                                    id="retype-password"
                                    type="password"
                                    label="Retype Your Password"
                                    variant="standard"
                                    name="retypePassword"
                                    onBlur={handleOnBlur}
                                    sx={{ width: '100%', mb: 2 }}
                                /><br />
                                <Button variant="contained" sx={{ mt: 5 }} type="submit" className="btn">Register</Button>
                                <NavLink to="/login" style={{ textDecoration: 'none' }}><Typography sx={{ mt: 2 }} className="txt"> Already Registered? Login Here</Typography></NavLink>
                                <GoogleButton
                                    style={{ margin: '1rem auto' }}
                                    onClick={signInWithGoogle}
                                />
                            </form>}
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success" sx={{ mt: 3, width: '100%', mx: 'auto', fontWeight: 'bold' }}>User Created Successfully!</Alert>}
                            {authError && <Alert severity="error" sx={{ mt: 3, width: '100%', mx: 'auto', fontWeight: 'bold' }}>{authError}</Alert>}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;