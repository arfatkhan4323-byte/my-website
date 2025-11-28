import React from "react";
import "../index.css"; 

function Company () {
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
       text-transparent">Our Company</h1>
        <p>3PL (Third-Party Logistics) provides seamless supply chain solutions, 
            including warehousing, inventory management, and transportation, 
               ensuring efficiency, scalability, and cost savings for businesses.
        </p>
    </div>
</div>
);
}

export default Company;

