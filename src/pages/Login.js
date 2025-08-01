import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  }

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
            Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
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
            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ marginTop: '20px' }}
            >
                Login
            </Button>
            <Box  component={Link} to='/signup' >
                <Button 
                    variant="text" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: '10px' }} 
                >
                    Sign Up
                </Button>
            </Box>
        </form>
      </Box>
      <Footer />
    </div>
  )
}

export default Login
