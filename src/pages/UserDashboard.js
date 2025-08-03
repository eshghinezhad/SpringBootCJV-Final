import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { API_BASE_URL } from "../config/api";

function UserDashboard() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/user/info`); // Replace with actual endpoint
                if (!response.ok) {
                    throw new Error("Failed to fetch user information");
                }
                const data = await response.json();
                setUserInfo(data);
            } catch (error) {
                console.error("Error fetching user information:", error);
            }
        };

        fetchUserInfo();
    }, []);

    if (!userInfo) {
        return (
            <Typography variant="h6" align="center">
                Loading user information...
            </Typography>
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
                <Typography variant="h4" gutterBottom>
                    User Dashboard
                </Typography>
                <Card sx={{ maxWidth: 400, width: "100%", margin: "20px auto" }}>
                    <CardContent>
                        <Typography variant="h6">Personal Information</Typography>
                        <Typography variant="body1">Name: {userInfo.name}</Typography>
                        <Typography variant="body1">Email: {userInfo.email}</Typography>
                        <Typography variant="body1">Joined: {new Date(userInfo.joined).toLocaleDateString()}</Typography>
                    </CardContent>
                </Card>
            </Box>
            <Footer />
        </div>
    );
}

export default UserDashboard;
