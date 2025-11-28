import React from "react";

const usefulLinks = [
  "Features",
  "Services",
  "Company"
];

const supportLinks = [
  "Privacy Policy",
  "Terms and Conditions",
  "Support and Services",
  "Contact Us"
];

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* === MAIN FOOTER GRID: 4 COLUMNS ON DESKTOP === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* 1. LOGO & DESCRIPTION (Takes 2 columns on large screen) */}
          <div className="col-span-2 md:col-span-2"> 
            
            {/* Logo and Name */}
            <div className="flex items-center mb-4">
              
              <div className="w-10 h-10 mr-2 rounded-full">
                <img src="img.png">
                </img>
                </div> 
              <h2 className="text-2xl font-bold text-gray-800">DYNAMICS</h2>
            </div>
            
            <p className="text-gray-600 text-sm max-w-sm mb-4">
              3PL Dynamics provides efficient third-party logistics solutions, enhancing visibility 
              and streamlining warehousing, order fulfillment, and distribution. Our real-time 
              tracking optimizes stock levels for accurate processing, reduced waste, and improved efficiency.
            </p>
            
            <div className="flex space-x-3 text-gray-500">
              <span className="hover:text-indigo-600 cursor-pointer text-xl">f</span> {/* Facebook */}
              <span className="hover:text-indigo-600 cursor-pointer text-xl">in</span> {/* LinkedIn */}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Support & Help</h3>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        {/* === BOTTOM COPYRIGHT BAR === */}
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm">
            Copyright @ 2025 3pl Dynamics.
          </p>
        </div>

      </div>
      
    
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
          
           <a href="#" className="bg-green-500 p-3 rounded-full shadow-lg 
           text-white hover:bg-green-600 transition">
                <span className="text-2xl">💬</span> 
           </a>
         
           <a href="#" className="bg-blue-600 p-3 rounded-full shadow-lg
            text-white hover:bg-blue-700 transition">
                <span className="text-xl">⬆️</span> 
           </a>
      </div>
      
    </footer>
  );
};

export default Footer;