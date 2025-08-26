import React from "react";

const YouTubeBackground = ({ videoId, children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden rounded-xl ">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full ">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&start=0&end=0`}
          title="YouTube Background Video"
          className="w-full h-full object-cover blur-xs "
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
            transform: "scale(1.2)",
          }}
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Overlay to darken video if needed */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default YouTubeBackground;
