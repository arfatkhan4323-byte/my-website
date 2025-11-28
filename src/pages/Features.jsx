import React from "react";
import "../index.css";

function Features  ()   {
    return (
        <div style={{
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "White",
  color: "Black",
}}>
  <div style={{ maxWidth: "800px", textAlign: "center",  marginBottom: "150px"}}>
    <h1 className="bg-linear-to-r from-blue-900 to-violet-900 bg-clip-text text-5xl font-extrabold 
       text-transparent">What We Offer</h1>
    <p>Our powerful 3PL Dynamics platform is designed to streamline logistics, 
        warehouse, and production operations with 
        advanced tools and unmatched scalability.</p>

        <button className="btn">Unlimited Scalability</button>
        <button className="btn">Order Management</button>
        <button className="btn">Production Planning</button>
        <button className="btn">Advanced Analytics</button>
  </div>
  </div>


);

};

export default Features;