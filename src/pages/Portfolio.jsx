import { useState } from "react";
import { ExternalLink, Play, Star, Filter, Youtube, TrendingUp, Users, Clock } from "lucide-react";
import VideoPlayer from "./../Components/VideoPlayer";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const videos = [
    {
      id: 1,
      title: "Complete YouTube Growth Strategy 2024",
      category: "tutorial",
      videoUrl: "https://youtu.be/eSEi-Zbl5Fs?list=PLGPbWPwWfXW83JYbehRudE3200NCHah8P",
      description: "Learn the complete strategy to grow your YouTube channel from 0 to 100K subscribers using proven techniques and insider tips.",
      views: "250K views",
      likes: "12K likes",
      results: "300% increase in engagement",
      client: "Content Creators",
      rating: 5,
    },
    {
      id: 2,
      title: "Thumbnail Design Masterclass",
      category: "design",
      videoUrl: "https://youtu.be/9Fsa0_uuaDM",
      description: "Master the art of creating click-worthy thumbnails that boost your CTR and get more views on your YouTube videos.",
      views: "180K views",
      likes: "8.5K likes",
      results: "45% higher CTR",
      client: "YouTube Creators",
      rating: 5,
    },
    {
      id: 3,
      title: "YouTube SEO Secrets Revealed",
      category: "seo",
      videoUrl: "https://youtu.be/3NWux1Ac9k4",
      description: "Discover the hidden SEO strategies that top YouTubers use to rank their videos higher and get discovered by millions.",
      views: "320K views",
      likes: "15K likes",
      results: "200% organic growth",
      client: "Content Creators",
      rating: 5,
    },
    {
      id: 4,
      title: "Video Editing Like a Pro",
      category: "editing",
      videoUrl: "https://youtu.be/vbwphZBCUX4",
      description: "Professional video editing techniques that will make your content stand out and keep viewers engaged till the end.",
      views: "195K views",
      likes: "9.2K likes",
      results: "150% retention rate",
      client: "Video Creators",
      rating: 5,
    },
    {
      id: 5,
      title: "Monetization Strategies That Work",
      category: "monetization",
      videoUrl: "https://youtu.be/UfN1aW3FOLE",
      description: "Multiple revenue streams and monetization strategies to turn your YouTube channel into a profitable business.",
      views: "410K views",
      likes: "18K likes",
      results: "500% revenue increase",
      client: "YouTubers",
      rating: 5,
    },
    {
      id: 6,
      title: "Analytics Deep Dive",
      category: "analytics",
      videoUrl: "https://youtu.be/-dr-wvPjGFo?si=I3T5y4jBxoV7nBbT",
      description: "Understanding YouTube Analytics to make data-driven decisions and optimize your content for maximum growth.",
      views: "145K views",
      likes: "7.1K likes",
      results: "400% better insights",
      client: "Data-Driven Creators",
      rating: 5,
    },
  ];

  const filters = [
    { id: "all", label: "All Videos" },
    { id: "tutorial", label: "Tutorials" },
    { id: "design", label: "Design" },
    { id: "seo", label: "SEO" },
    { id: "editing", label: "Editing" },
    { id: "monetization", label: "Monetization" },
    { id: "analytics", label: "Analytics" },
  ];

  const filteredVideos =
    activeFilter === "all" ? videos : videos.filter((video) => video.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
 
<div className="relative min-h-screen overflow-hidden rounded-xl">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
       <iframe
  src={`https://www.youtube.com/embed/6kYRUsXtS4s?autoplay=1&mute=1&loop=1&playlist=6kYRUsXtS4s&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0`}
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



      {/* Filter Buttons */}
      <section className="py-8 bg-card/50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-background hover:bg-primary/10 text-foreground hover:text-primary border border-border"
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <VideoPlayer
                key={video.id}
                videoUrl={video.videoUrl}
                title={video.title}
                description={video.description}
                views={video.views}
                likes={video.likes}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from creators who implemented strategies from my videos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.slice(0, 3).map((video) => (
              <div
                key={`success-${video.id}`}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">{video.client}</h3>
                  <div className="flex items-center">
                    {[...Array(video.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{video.description}</p>
                <div className="text-primary font-semibold text-lg">{video.results}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold mb-2">1M+</div>
              <div className="text-primary-foreground/80">Total Views</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-foreground/80">Subscribers Gained</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold mb-2">300%</div>
              <div className="text-primary-foreground/80">Average Growth</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Grow Your Channel?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to get the latest tips and strategies delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-youtube-red hover:bg-youtube-hover text-white py-3 px-8 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Youtube className="w-5 h-5" />
              Subscribe on YouTube
            </button>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-8 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Get Free Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;