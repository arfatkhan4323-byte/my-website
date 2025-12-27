import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import VideoSection from "./Components/VideoSection";
import CardSection from "./Components/CardSection";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Company from "./pages/Company";
import Pricing from "./pages/Pricing";
import Customer from "./pages/Customer";
import Dashboard from "./pages/Dashboard";
import "./index.css";


function App() {
  return (
    
    <Router>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/features" element={<Features />} />
         <Route path="/company" element={<Company />} />
         <Route path="/pricing" element={<Pricing />} />
          <Route path="/customer" element={<Customer />} />
        
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

    


  );
}

export default App;