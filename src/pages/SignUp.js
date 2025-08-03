import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Checkbox, FormControlLabel, Button, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { API_BASE_URL } from '../config/api';

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const validateInputs = () => {
        if (!firstName) {
            return "First name is required";
        }
        if (!/^[a-zA-Z]+$/.test(firstName)) {
            return "First name must contain only letters";
        }
        if (firstName.length < 3 || firstName.length > 20) {
            return "First name must be between 3 and 20 characters";
        }

        if (!lastName) {
            return "Last name is required";
        }
        if (!/^[a-zA-Z]+$/.test(lastName)) {
            return "Last name must contain only letters";
        }
        if (lastName.length < 3 || lastName.length > 20) {
            return "Last name must be between 3 and 20 characters";
        }

        if (!email) {
            return "Email is required";
        }
        if (!/^\w+@\w+\.\w+$/.test(email)) {
            return "Invalid email format";
        }

        if (!password) {
            return "Password is required";
        }
        if (password.length < 6 || password.length > 20) {
            return "Password must be between 6 and 20 characters";
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/.test(password)) {
            return "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character";
        }

        if (!termsAccepted) {
            return "You must accept the terms and conditions";
        }

        return null;
    };

    const checkEmailExists = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/user/checkEmail?email=${email}`);
            if (response.status === 409) {
                const errorMessage = "Email address is already exist.";
                return errorMessage; 
            } else if (!response.ok) {
                // Handle other non-OK responses
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to check email');
            }
            return null; // Email does not exist
        } catch (error) {
            console.error("Error checking email:", error);
            return "An error occurred while checking the email.";
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateInputs();
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        const emailError = await checkEmailExists();
        if (emailError) {
            setErrorMessage(emailError);
            return;
        }

        const newUser = {
            firstName,
            lastName,
            email,
            password
        };

        try {
            const response = await fetch(`${API_BASE_URL}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to register user');
            }

            alert("User registered successfully!"); 
            navigate("/login");
        } catch (error) {
            console.error("Error registering user:", error);
            setErrorMessage(error.message || "An error occurred during registration.");
        }
    };

    return (
        <div style={{
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            minHeight: '100vh'
        }}>
            <Header />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                    padding: '20px'
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                {errorMessage && (
                    <Typography variant="body2" color="error" gutterBottom>
                        {errorMessage}
                    </Typography>
                )}
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                    <TextField
                        required
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        required
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        required
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        required
                        control={
                            <Checkbox
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                            />
                        }
                        label="I accept the terms and conditions"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: '20px' }}
                    >
                        Sign Up
                    </Button>
                </form>
            </Box>
            <Footer />
        </div>
    );
}

export default SignUp;
