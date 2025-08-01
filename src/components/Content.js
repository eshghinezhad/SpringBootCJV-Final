import React from "react";
import { Card, CardMedia, Typography, Grid, Box } from "@mui/material";

const Content = () => {
  const contentData = [
    {
      title: "Movie.ca Events",
      description:
        "Movies For Mommies, Monday Night At the Movies, Toonie Movies, Seniors' Day, Sensory Friendly Screenings",
      image: "https://www.explore1.ca/wp-content/uploads/2013/06/IMG_5813-800x500.jpg",
    },
    {
      title: "Services",
      description:
      "Outdoor Screening Service, Advertise With Us, Film Set Rentals, Basecamp Service, Pop-Up Cinema, Private Rentals",
      image: "https://openaircinema.blog/wp-content/uploads/2016/02/pop-up-cinema.jpg",
    },
    {
      title: "Private Rentals",
      description:
      "Holiday Parties, Team Building Events, Staff Appreciation, Celebratory Events, Camp Groups, Theatre Rentals, Cinema 7 - Private Screening",
      image: "https://cbx-prod.b-cdn.net/COLOURBOX6974306.jpg?width=800&height=800&quality=70",
    }
  ];

  return (
    <Box sx={{ padding: 3 , mb: 5 }}>
      <Box
        component="hr"
        sx={{
          border: 0,
          borderTop: "3px solid rgb(75, 111, 165, 0.7)", 
          width: "70%",                 
          margin: "10px auto 50px auto"    
        }}
      />
      <Typography variant="h4" align="center" sx={{ marginBottom: "30px" }}>
          Attend Movie.ca Events & Plan Your Own!
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {contentData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
            <Card sx={{ maxWidth: 350, boxShadow: 3, position: "relative",  borderRadius: "25px"  }}>
              <Box sx={{ position: "relative"}}>
                <CardMedia
                  component="img"
                  height="450"
                  image={item.image}
                  alt={item.title}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    background: "rgba(0,0,0,0.35)", // semi-transparent overlay
                    fontWeight: "bold",
                    textShadow: "0 2px 8px #000",
                    px: 2,
                    textAlign: "center"
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 1,paddingBottom: "30px" , paddingRight: "36px"}}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "1.3rem", paddingLeft: "5px", paddingRight: "36px" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Content
