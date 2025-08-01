import React from 'react'
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import '../css/App.css';

function Navigation() {
  return (
    <div>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", color: "#fff" }}>
              <Link to="/moviesList" className="nav-link">Movies/TVShows</Link>
              <Link to="/signup" className="nav-link">Sign Up</Link>
              <Link to="/login" className="nav-link" >Login</Link>
        </Box>
    </div>
  )
}

export default Navigation
