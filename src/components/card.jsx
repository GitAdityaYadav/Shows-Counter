import React from "react";
import "./contentStyles.css";
import {NavLink} from "react-router-dom";
import {FaStar} from "react-icons/fa";

function Card(props){
  let temp="/summary/"+props.title;
    return(
        <div className="container">
        <div className="card">
            <div className="card-content">
            <img src={props.imgSrc} alt="Show "></img>
            <div className="content2">
            <h2>{props.title}</h2>
            <h3>{props.rating}</h3>
            <div className="icon">
            <FaStar size={20} style={{color:"black"}}/>
            </div>
            </div>
            <div className="genre">
            {props.genres.map((gen)=>(
                <h3>{gen}</h3>   
            ))}
            </div> 
            </div>
          <div className="sum-btn">
            <NavLink to={temp} className="btn" 
            >
            Summary</NavLink>
          </div>
        </div>    
        </div>
    );
}

export default Card;