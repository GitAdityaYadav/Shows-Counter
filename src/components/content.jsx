import "./contentStyles.css";
import React, {useEffect,useState} from "react";
import Card from "./card";
function Content(){

    const [shows,setShows]=useState([]);
    let API="https://api.tvmaze.com/search/shows?q=all";
    
    const fetchApiData = async(url)=>{
     try{
     const res= await fetch(url);
      const data=await res.json();
      setShows(data);
     }catch(error){
     console.log(error);
     }
    }

    useEffect(()=>{
     fetchApiData(API);
    },[]);

    return(
        <div className="container">
        <h1>Top Picks For You</h1>
          <div className="show-Container">
          {shows.map((list,index)=>(
             <div>
               <Card
                key={index}
                imgSrc={list.show.image.medium}
                rating={list.show.rating.average}
                title={list.show.name}
                genres={list.show.genres}
                summary={list.show.summary}
                /> 
             </div>
          )
         )}
          </div>
        </div>
    );
}


export default Content;