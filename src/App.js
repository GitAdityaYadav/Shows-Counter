import React from "react";
import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Booking from "./routes/Booking";
import Summary from "./routes/Summary";
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking/:movie" element={<Booking />} />
      <Route path="/summary/:title" element={<Summary/>} />
     </Routes>
    </div>
  );
}

export default App;
