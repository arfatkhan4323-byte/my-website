import React from "react";
import VideoSection from "./VideoSection";
import Footer from "./Footer";
import "../index.css";
import CardSection from "./CardSection";

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <h1>Your Global Bridge to Smarter Warehousing and 3PL Solutions.</h1>
          <p>
            3PL Dynamics is a tech-driven logistics company specializing in
            third-party logistics (3PL) solutions, offering warehousing, order
            fulfillment, distribution, and custom logistics software to optimize
            global supply chains.
          </p>

          <div className="buttons">
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </section>
     
           <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl font-bold text-gray-800 mb-3 text-shadow-lg">
            Our Features
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-14">
            Let us show you how we can help your business thrive.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-xl transition">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl
               bg-blue-500 mb-6 text-white text-2xl">
                   📦
                </div>
                <h3 className="text-xl font-semibold mb-3">Inventory Management</h3>
                <p className="text-gray-600 text-sm">
                  Track and manage inventory in real time with automated stock updates and precise reporting.
                  </p>
              </div>
               <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-xl transition">
                 <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl
               bg-blue-500 mb-6 text-white text-2xl">
                🧾
               </div>
               <h3 className="text-xl font-semibold mb-3">Invoice Generation</h3>
               <p className="text-gray-600 text-sm">
                Generate and manage invoices effortlessly with integrated billing solutions.
                </p>
                 </div>
               <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-xl transition">
                 <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl
               bg-blue-500 mb-6 text-white text-2xl">
                💳
               </div>
               <h3 className="text-xl font-semibold mb-3">Payment Integration</h3>
               <p className="text-gray-600 text-sm">
                Secure and flexible payment gateways for seamless transactions.
                </p>
                </div>
                 <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-xl transition">
                 <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl
               bg-blue-500 mb-6 text-white text-2xl">
                💷
               </div>
               <h3 className="text-xl font-semibold mb-3">Multi-Currency & Tax Support</h3>
               <p className="text-gray-600 text-sm">
               Handle transactions in multiple currencies with automated tax calculations, 
               ensuring compliance with global standards.
                  </p>
                </div>
                 <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-xl transition">
                 <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl
               bg-blue-500 mb-6 text-white text-2xl">
                🏭
               </div>
               <h3 className="text-xl font-semibold mb-3">Warehousing</h3>
               <p className="text-gray-600 text-sm">
               Efficient warehouse management with optimized storage, tracking, and retrieval processes.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-xl transition">
                 <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl
               bg-blue-500 mb-6 text-white text-2xl">
                🚢
               </div>
               <h3 className="text-xl font-semibold mb-3">Pick-Pack-Ship</h3>
               <p className="text-gray-600 text-sm">
               Efficient warehouse management with optimized storage, tracking, and retrieval processes.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-xl transition">
                 <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl
               bg-blue-500 mb-6 text-white text-2xl">
                🚚
               </div>
               <h3 className="text-xl font-semibold mb-3">Delivery Management</h3>
               <p className="text-gray-600 text-sm">
               End-to-end tracking of shipments, optimized route planning, 
               and real-time status updates for timely deliveries.
                  </p>
                </div>
            </div>
          </div>
          </section>

           <VideoSection />

          <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
    
          
           <div className="lg:w-1/2 text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Our Mission
              </h1>

      <p className="text-gray-600 text-base mb-6">
        At 3PL Dynamics, our mission is to revolutionize third-party logistics by 
        leveraging cutting-edge technology to streamline operations, enhance efficiency, 
        and drive business growth. We are committed to delivering scalable, high-performance 
        solutions that empower businesses to optimize supply chain management with precision and reliability.
      </p>

      <div className="space-y-3">
        <p>✅ Scalable Solutions</p>
        <p>✅ High-performance Tools</p>
        <p>✅ Future-proof Technology</p>
        <p>✅ Robust Frameworks</p>
        <p>✅ Comprehensive Documentation</p>
        <p>✅ Developer-Centric Approach</p>
      </div>
    </div>

    
    <div className="lg:w-1/2 flex justify-center">
      <img 
        src="image.png" 
        alt="Our Mission"
        className="max-w-xl w-full rounded-xl shadow-lg"
      />
    </div>

  </div>
</section>

           <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
    
          
           <div className="lg:w-1/2 text-left">
             <img src="images.png"
             alt="Our Company"
              className="max-w-xl w-full rounded-xl shadow-lg">
             </img>
    </div>

    
         <div className="lg:w-1/2 text-left">
         <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Company
          </h1>

         <p className="text-gray-600 text-base mb-6">
          At 3PL Dynamics, we are dedicated to transforming logistics operations through 
          innovative technology and data-driven solutions. As a leading provider of third-party 
          logistics (3PL) technology solutions, we specialize in streamlining supply chain processes, optimizing 
          warehouse management, and enhancing operational efficiency.

          Our team of experienced professionals brings deep expertise across logistics technology, 
          warehouse automation, inventory management, data analytics, and API integrations. We work closely with 
          businesses to understand their unique logistics challenges, ensuring that every solution we deliver is scalable, 
          efficient, and tailored to their operational needs.</p>
        </div>

        </div>
      </section>
      <section className="bg-lime-100 py-16 rounded-2xl">
  <div className="max-w-5xl mx-auto px-6">

    
    <div className="text-center mb-12"> 
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        What Our Users Says
      </h1>
      <p className="text-gray-600 text-sm max-w-lg mx-auto">
        There are many variations of passages of Lorem Ipsum available 
        but the majority have suffered alteration in some form.
      </p>
    </div>

    
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Card 1: Matthew */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col justify-between">
        
        <div className="mb-6">
           
            <div className="text-xl text-yellow-500 mb-4">★★★★★</div> 
            
            <p className="text-gray-700 leading-relaxed">
                “Our team is highly impressed by the intuitive design of 3PL Dynamics. It’s sleek, 
                easy to navigate, and eliminates unnecessary complexity, making it perfect for 
                optimizing logistics operations.”
            </p>
        </div>
        
       
        <div className="flex items-center pt-4 mt-4 border-t border-gray-100">
            <img src="https://i.pravatar.cc/150?img=1" alt="Matthew" className="w-10 h-10 rounded-full mr-3 object-cover"/>
            <div>
                <p className="font-semibold text-gray-800 text-sm">Matthew</p>
                <p className="text-gray-500 text-xs">Founder @TallGrids</p>
            </div>
        </div>
      </div>

      
      {/* Card 2: William */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col justify-between">
        
        <div className="mb-6">
            <div className="text-xl text-yellow-500 mb-4">★★★★★</div> 

            <p className="text-gray-700 leading-relaxed">
              “We love how clean and simple the interface is. 3PL Dynamics ensures 
              a seamless workflow, keeping distractions at bay and allowing our 
              team to focus on what matters: efficient supply chain management.”
            </p>
        </div>
        
        <div className="flex items-center pt-4 mt-4 border-t border-gray-100">
            <img src="https://i.pravatar.cc/150?img=2" alt="William" className="w-10 h-10 rounded-full mr-3 object-cover"/>
            <div>
                <p className="font-semibold text-gray-800 text-sm">William</p>
                <p className="text-gray-500 text-xs">Founder @Uldedeck</p>
            </div>
        </div>
      </div>
      
      {/* Card 3: James */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col justify-between">
        
        <div className="mb-6">
            <div className="text-xl text-yellow-500 mb-4">★★★★★</div> 

            <p className="text-gray-700 leading-relaxed">
              “The intuitive navigation and distraction-free design of 3PL Dynamics create the 
              perfect environment for a productive logistics team. It has improved our efficiency
              and collaboration!"
            </p>
        </div>
        
        <div className="flex items-center pt-4 mt-4 border-t border-gray-100">
            <img src="https://i.pravatar.cc/150?img=3" alt="James" className="w-10 h-10 rounded-full mr-3 object-cover"/>
            <div>
                <p className="font-semibold text-gray-800 text-sm">James</p>
                <p className="text-gray-500 text-xs">Founder @Lineicons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

   <CardSection />

             <section className="bg-gray-50 py-20"> 
    <div className="max-w-6xl mx-auto px-4">
        
       
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl 
                        flex flex-col md:flex-row items-center justify-between 
                        space-y-4 md:space-y-0">
            
          
            <div className="text-center md:text-left md:pr-8">
                
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                
                    <span className="text-green-500 mr-2">💚</span> Help Kids in Palestine
                </h1>
                
                
                <p className="text-gray-600 text-lg">
                    Lets work together to give children the care and support they need!
                </p>
            </div>
            
            
            <div className="flex-shrink-0 w-full md:w-auto">
                <button
                    type="submit"
                    className="w-full px-8 py-3 border border-transparent text-base font-medium
                               rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                               transition duration-150"
                >
                    Donate Now
                </button>
            </div>
        </div>
    </div>
</section>

    </>
  );
};

export default HeroSection;
