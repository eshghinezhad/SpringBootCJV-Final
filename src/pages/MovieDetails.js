import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Typography, Card, CardMedia, Button, Box } from "@mui/material";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { API_BASE_URL } from '../config/api';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
      // fetch(`${API_BASE_URL}/movies_Tvs/${id}`)
      const fetchMovie = async () => {
          try {
              const response = await fetch(`${API_BASE_URL}/show/${id}`);
              if (!response.ok) {
                  throw new Error('Failed to fetch movie');
              }
              const data = await response.json();
              setMovie(data.body[0]);
          } catch (error) {
              console.error('Error fetching movie:', error);
          }
      };
    
        fetchMovie();
    }, [id]);

    if (!movie) {
      return <Typography variant="h3" align="center">Movie/TVShow Not Found</Typography>;
    }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>        
    <Header />
      <main style={{ flex: 1, padding: 0, display: 'flex', minHeight:0 }}>
        {/* Left column: Details */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 30%" },
            display: "flex",
            background: "linear-gradient(90deg, #000000 0%,rgb(13, 28, 47) 100%)",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            
            // p: { xs: 0.5, sm: 1, md: 2},
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" } }}>
              {movie.title}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: "0.7rem", md: "0.8rem" } }}>
              {movie.genre}
            </Typography>
            <Box sx={{ display: "flex",flexDirection: "column", alignItems: "center", m: 2 }}>
              <Card sx={{ maxWidth: "60%" }}>
                <CardMedia
                  component="img"
                  image={movie.poster}
                  alt={movie.title}
                  sx={{ width: "100%", borderRadius: "5px" }}
                />
              </Card>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.7rem", md: "0.9rem" },
                  textAlign: "center",
                  maxWidth: "80%",
                  pt: 1,
                }}
              >
                {movie.overview}
              </Typography>
            </Box>
            <Box sx={{ mt: 3, display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center",justifyContent: "center" }}>
              <Button variant="contained" color="primary">
                Rent: {movie.rent}
              </Button>
              <Button variant="contained" color="primary">
                Buy: {movie.purchase}
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Right column: lposter as image */}
        <Box
          sx={{
            flex: { xs: "0 0 0%", md: "1 1 80%" },
            display: { xs: "none", md: "flex" },
            alignItems: "left",
            justifyContent: "left",
          }}
        >
          <img
            src={movie.lposter}
            alt={movie.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", 
            }}
          />
        </Box>
      </main>
      <Footer />
    </div>
  );
};


export default MovieDetails
