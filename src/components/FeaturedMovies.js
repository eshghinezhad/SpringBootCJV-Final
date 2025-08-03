import React, {useEffect,useState} from "react";
import { Grid,Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import '../css/App.css';
import { API_BASE_URL } from '../config/api';


const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
          try {
              // const response = await fetch(`${API_BASE_URL}/movies_Tvs`) // JSON Server - FakeAPI
              const response = await fetch(`${API_BASE_URL}/show/find?featured=movie`);
              const data = await response.json();
              // const moviesOnly = data.filter(item => item.featured && item.featured.includes("movie"));  // JSON Server - FakeAPI
              setMovies(data);
          } catch (error) {
              console.error('Error fetching featured movies:', error);
          }
      };
      fetchMovies();
    }, []);

    return (
      <div className="featured-section">
      <Typography variant="h4" align="center" sx = {{marginBottom: "30px"}}>Featured Movies</Typography>
          <Grid container spacing={2} justifyContent="center">
                 {movies.map((movie) => (
                   <Grid item key={movie.id} xs={3}>
                     <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                       <Card sx={{
                                  maxWidth: 240,
                                  margin: "auto",
                                  transition: "0.3s",
                                  "&:hover": { transform: "scale(1.05)", boxShadow: "0 5px 15px rgba(0, 0, 0, 1)" }
                                }}>
                            <CardMedia
                              component="img"
                              height="350"
                              image={movie.poster}
                              alt={movie.title}
                              sx={{ borderRadius: "16px"}}
                            />
                            <CardContent>
                              <Typography variant="body1" align="center">{movie.title}</Typography>
                            </CardContent>
                       </Card>
                     </Link>
                   </Grid>
                 ))}
          </Grid>
    </div>
    );
};

export default FeaturedMovies
