import React from "react";
import "../index.css";


export default function Services() {
  return (
      <div style={{
   width: "100vw",
   height: "100vh",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   backgroundColor: "white",
   }}>


    <div className="page-services" style={{ maxWidth: "800px", textAlign: "center" }}>
      <h1 className="bg-linear-to-r from-blue-900 to-violet-900 bg-clip-text text-5xl font-extrabold 
       text-transparent">Our Services</h1>
      <p>At 3PL Dynamics, we deliver innovative, scalable, and efficient technology solutions 
        tailored to meet the unique needs of businesses in today's fast-paced 
        digital world.</p>

        <button className="btn">Web Development</button>
        <button className="btn">Mobiles Apps</button>
        <button className="btn">Digital Marketing</button>
        <button className="btn">AI Solutions</button>
    </div>
    </div>
    
  );
}

