import React from "react";
import BookingForm from "../components/bookingForm";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function Booking(){
    return(
        <div>
        <Navbar />
        <h1>Book Your Tickets Now</h1>
        <BookingForm />
        <Footer/>
        </div>
    );
}

export default Booking;