import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import topLogo from "./../topLogo.png";
import './../css/App.css';
import Navigation from "./Navigation";
 
const Header = () => {
  return (
    <>
      <header className="header">
        <Box display="flex" alignItems="center">
          <Tooltip title="Home" arrow>
            <Link to="/" >
              <img src={topLogo} className="topLogo" alt="Logo" />
            </Link>
          </Tooltip>
        </Box>
        <Navigation />
      </header>
    </>
  );
}
export default Header;