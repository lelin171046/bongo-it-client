import React from "react";

const VideoPlayer = ({ videoUrl, title, description, views, likes, className }) => {
  // Convert normal YouTube URL to embeddable version
  const getEmbedUrl = (url) => {
    const videoIdMatch = url.match(/(?:youtu\.be\/|v=)([^&?]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    if (!videoId) return url;

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&start=0&end=0`;
  };

  return (
    <div className={`bg-card rounded-xl shadow-lg  overflow-hidden ${className}`}>
      <div className="aspect-video relative">
        <iframe
          src={getEmbedUrl(videoUrl)}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{views}</span>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
