import React, {useEffect,useState} from "react";
import { Grid,Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import '../css/App.css';
import { API_BASE_URL } from '../config/api';





const FeaturedTV = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      console.log('Server URL:', API_BASE_URL);
      // fetch(`${API_BASE_URL}/movies_Tvs`) // JSON Server - FakeAPI
      fetch(`${API_BASE_URL}/show/featured?type=tv`)
        .then(res => res.json())
        .then(data => {
          // const tvsOnly = data.filter(item => item.featured && item.featured.includes("tv")); // JSON Server - FakeAPI
          setMovies(data.body);
        })
        .catch(error => console.error("Error fetching movies:", error));
    }, []);
    if (!movies || movies.length === 0) {
      return <Typography variant="h6" align="center">Sorry! <br />  No movies or TV shows available at the moment</Typography>;
    }


    return (
      <div className="featured-section">
      <Typography variant="h4" align="center" sx = {{marginBottom: "30px"}}>Featured TV Shows</Typography>
          <Grid container spacing={2} justifyContent="center">
                 {movies.map((movie) => (
                   <Grid item key={movie.id} xs={3}>
                     <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                       <Card sx={{
                                  maxWidth: 240,
                                  margin: "auto",
                                  transition: "0.3s",
                                  "&:hover": { transform: "scale(1.05)", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.7)" }
                                }}>
                         <CardMedia
                           component="img"
                           height="350"
                           image={movie.poster}
                           alt={movie.title}
                           sx={{ borderRadius: "16px" }}
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
export default FeaturedTV
