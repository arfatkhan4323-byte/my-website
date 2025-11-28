import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-6">

        
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stay Updated!
          </h1>
          <p className="text-gray-600">
           Catch the latest news and insights through our videos, 
           designed to keep you updated and supported every step of the way!
          </p>
        </div>

        
        <div className="w-full flex justify-center">
          <video
            className="w-full md:w-3/4 rounded-xl shadow-lg"
            controls
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          
          </video>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
