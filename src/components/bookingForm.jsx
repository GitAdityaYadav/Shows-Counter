import { useState } from "react";
import React  from "react";
import {useNavigate,useParams} from "react-router-dom";
import "./bookingStyles.css";
function BookingForm(){
    const {movie}=useParams();
    const navigate=useNavigate();
    const [users,setUsers]=useState({
        name:"",
        phone:"",
        tickets:"",
    })

    
    function handleInputs(event){
       const {name,value}=event.target;
       setUsers({...users,[name]:value});
      
    }

    function postData(event){
         event.preventDefault();
        if( users.name && users.phone && users.tickets){
            localStorage.setItem("Show",users.show);
            localStorage.setItem("name",users.name);
            localStorage.setItem("phone",users.phone);
            localStorage.setItem("tickets",users.tickets);
            window.alert("Booking Successful");
            setUsers({ name:"",
            phone:"",
            tickets:"",})
            navigate("/");
        }else{
            window.alert("Fill all the fields")
        }
        
    }

    return(
        <div className="form">
        <form>
             <label>Show Name</label>
             <input name="show" type="text" defaultValue={movie}
             value={users.show}
             onChange={handleInputs}
             ></input>
             <label>Name</label>
             <input name="name" type="text" placeholder="Your Full Name"
             value={users.name}
             onChange={handleInputs}
             ></input>

             <label>Phone Number</label>
             <input name="phone" type="text" placeholder="Your Phone"
             value={users.phone}
             onChange={handleInputs}
             maxLength={10}
             ></input>

             <label>Number of Tickets</label>
             <input name="tickets" type="number" placeholder="Tickets Count" min={1}
             value={users.tickets}
             onChange={handleInputs}
             ></input>

             <button type="submit" onClick={postData}
             className="btn">Book</button>
        </form>
        </div>
    );
}

export default BookingForm;