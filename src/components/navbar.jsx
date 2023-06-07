import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyles.css";

function Navbar(){
    return(
        <div className="navbar">
        <Link to="/">
        <h1>Shows Counter </h1>
        </Link>
            
        </div>
    );

}

export default Navbar;