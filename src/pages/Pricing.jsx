import React from "react";
import "../index.css"; 

function Price () {
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

    <div style={{ maxWidth: "800px", textAlign: "center", marginBottom: "150px"}}>
        <h1 className="bg-linear-to-r from-blue-900 to-violet-900 bg-clip-text text-5xl font-extrabold 
       text-transparent">Find the Perfect Plan for Your Needs</h1>
        <p>Explore our plans below and choose the one that best fits your goals, 
            budget, and usage. Each plan is thoughtfully designed to provide excellent 
            value, robust features, and the dedicated support you deserve.
        </p>
    </div>


</div>
    );

    
}  

export default Price;