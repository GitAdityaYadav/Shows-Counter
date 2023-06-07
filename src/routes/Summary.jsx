import React from "react";
import "./summaryStyles.css";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Footer from "../components/footer";
function Summary(){
     const {title}=useParams();

     const [sum,setSum]=useState({
        summary:""
     });
    let API="https://api.tvmaze.com/singlesearch/shows?q="+title;
    
    const fetchApiData = async(url)=>{
     try{
     const res= await fetch(url);
      const data=await res.json();
      setSum({...sum,summary:data.summary});
     }catch(error){
     console.log(error);
     }
    }

    useEffect(()=>{
     fetchApiData(API);
    },[]);
   
    const regex = /(<([^>]+)>)/ig;
    const result = sum.summary.replace(regex, ''); 
    return(
        <div>
        <Navbar />
        <h1>{title} </h1>
        <div className="summary">
        <p>{result}</p>
        </div>
        <NavLink to={"/booking/"+title} className="btn">Book Now</NavLink>
        <Footer />
        </div>
    );
}

export default Summary;