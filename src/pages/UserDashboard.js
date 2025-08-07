import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { API_BASE_URL } from "../config/api";

function UserDashboard() {
    const [user, setUser] = useState();
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = JSON.parse(sessionStorage.getItem('user'));
                if (!userData || !userData.id) {
                    setError('User not authenticated. Please login again.');
                    return;
                }

                const response = await fetch(`${API_BASE_URL}/user/${userData.id}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const newData = await response.json();
                setUser(newData.body[0]);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Failed to load user information. Please try again.');
            }
        };
        
        fetchData();
    }, []);

    if (error) {
        return (
            <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh" }}>
                <Header />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" }}>
                    <Typography variant="h6" color="error" align="center">
                        {error}
                    </Typography>
                </Box>
                <Footer />
            </div>
        );
    }

    if (!user) {
        return (
            <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh" }}>
                <Header />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" }}>
                    <Typography variant="h6" align="center">
                        User information not found.
                    </Typography>
                </Box>
                <Footer />
            </div>
        );
    }

    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh" }}>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5f5f5",
                    padding: "20px",
                }}
            >
                <Typography variant="h3" margin="40px auto" >
                    User Profile
                </Typography>
                <Card sx={{ maxWidth: 400, width: "100%", margin: "20px auto" }}>
                    <CardContent>
                        <Typography variant="h4" >Personal Information</Typography>
                        <hr style={{ width: '100%', maxWidth: 400, margin: '10px 0' }} />
                        <Typography variant="h6">First Name: {user.firstName}</Typography>
                        <Typography variant="h6">Last Name: {user.lastName}</Typography>
                        <Typography variant="h6">Email: {user.email}</Typography>
                    </CardContent>
                </Card>
            </Box>
            <Footer />
        </div>
    );
}

export default UserDashboard;
