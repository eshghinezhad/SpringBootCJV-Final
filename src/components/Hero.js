import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { API_BASE_URL } from '../config/api';




const Hero = () => {
    const [movies, setMovies] = useState([]);

      useEffect(() => {
        const fetchMovies = async () => {
            try {
              // const response = await fetch(`${API_BASE_URL}/movies_Tvs`) // JSON Server - FakeAPI
              const response = await fetch(`${API_BASE_URL}/show/find?featured=hero`);
              const data = await response.json();
              // const hero = data.filter(item => item.featured && item.featured.includes("hero")); // JSON Server - FakeAPI
              setMovies(data);
            } catch (error) {
                console.error('Error fetching featured movies:', error);
            }
        };
        fetchMovies();
      }, []);

  return (
    <Box 
      sx={{
        maxWidth: "900px",  
        margin: "auto",  
        mt: 1,  
        borderRadius: "12px", 
        overflow: "hidden",
        boxShadow: 3
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        // loop
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
            <Box
              component="img"
              src={movie.lposter}
              alt={movie.title}
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "cover" 
              }}
            />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;