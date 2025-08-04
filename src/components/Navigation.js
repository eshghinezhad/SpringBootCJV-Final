import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import '../css/App.css';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      try {
        const userData = sessionStorage.getItem('user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setIsLoggedIn(!!(parsedUser && parsedUser.id));
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", color: "#fff" }}>
        <Link to="/moviesList" className="nav-link">Movies/TVShows</Link>
        
        {isLoggedIn ? (
          <>
            <Link to="/user" className="nav-link">Dashboard</Link>
            <Button 
              onClick={handleLogout}
              sx={{ 
                color: '#fff', 
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </>
        )}
      </Box>
    </div>
  )
}

export default Navigation
