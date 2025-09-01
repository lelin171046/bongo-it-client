// import { Link } from "lucide-react";
import React from "react";
import { Link } from 'react-router-dom';

const YouTubeBackground = ({ videoId, children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden rounded-xl">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
       <iframe
  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0`}
  title="YouTube Background Video"
  className="absolute top-0 left-0 w-full h-full object-cover 
             scale-[3] sm:scale-[2] md:scale-[1.7] lg:scale-[1.35]"
  style={{
    transformOrigin: "center", // keep video centered
    transition: "transform 0.6s ease-in-out",
  }}
  allow="autoplay; encrypted-media"
/>

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center 
                      text-center px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 lg:py-24">
        
        {/* Example Heading */}
        <h1 className="text-white font-bold 
                       text-2xl sm:text-3xl md:text-4xl lg:text-6xl 
                       max-w-4xl mb-4">
          Empower Your <span className="text-emerald-400">Journey</span> with Us
        </h1>

        {/* Example Subtext */}
        <p className="text-white/90 
                      text-sm sm:text-base md:text-lg lg:text-xl 
                      max-w-2xl mb-6">
          Professional services designed to help content creators and businesses thrive.
        </p>

        {/* Example CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
         <Link to='/contact'>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white 
                             px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 
                             rounded-lg font-semibold 
                             text-sm sm:text-base md:text-lg 
                             transition-all duration-300 shadow-lg">
            Get Started
          </button>
         </Link>
          <button className="bg-white/80 hover:bg-white text-emerald-600 
                             px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 
                             rounded-lg font-semibold 
                             text-sm sm:text-base md:text-lg 
                             transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeBackground;
