import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Grid , Card, CardMedia, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import { API_BASE_URL } from '../config/api';

function MoviesList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // const response = await fetch(`${API_BASE_URL}/movies_Tvs`) // JSON Server - FakeAPI
                const response = await fetch(`${API_BASE_URL}/show`);
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching featured movies:', error);
            }
        };
        fetchMovies();
    }, []);

    return (
    <>        
        <Header />
         <div style={{ padding: "80px" }}>
            <Typography variant="h4" align="center" gutterBottom>
             Movies & TV Shows Listing
            </Typography>

            {/* Grid Layout */}
            <div className="featured-section">
            <Grid container spacing={2} justifyContent="center">
            {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id} >
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Card sx={{ width: 240, margin: "auto", transition: "0.3s", "&:hover": { transform: "scale(0.95)", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.7)"  } }}>
                    <CardMedia component="img" height="350" image={movie.poster} alt={movie.title} />
                    <CardContent>
                        <Typography variant="caption" align="center">{movie.title}</Typography>
                    </CardContent>
                    </Card>
                </Link>
                </Grid>
            ))}
            </Grid>
            </div>
        </div>     
        <Footer />
    </>
    )
}

export default MoviesList
