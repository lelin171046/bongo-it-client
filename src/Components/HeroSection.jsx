import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Play, Star, Users, Award, TrendingUp, Sparkles } from "lucide-react"
import YouTubeBackground from "./YouTubeBackground"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "1000+", label: "Projects Done" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
    { icon: TrendingUp, value: "300%", label: "Growth Rate" },
  ]

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube Background */}
      <YouTubeBackground videoId="sQ22pm-xvrE">
        <div
          className={`flex flex-col justify-center items-center text-center min-h-screen px-4 md:px-8 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="space-y-6 max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full text-xs sm:text-sm md:text-blue-500 font-semibold border border-white/20 shadow-lg animate-pulse text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              #1 Creative Agency for Content Creators
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse">
                Content
              </span>
              <br />
              Into Success
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-400 leading-relaxed backdrop-blur-sm bg-black/30 p-3 sm:p-6 rounded-xl border border-white/10">
              Professional video editing, stunning thumbnails, and YouTube SEO optimization that helps content creators
              grow their audience and increase revenue.
            </p>
          </div>

          {/* CTA Buttons - moved lower */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-xl hover:from-primary/90 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-primary/25 border border-white/20"
            >
              <span className="mr-3">Get Started Today</span>
              <TrendingUp className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 backdrop-blur-sm bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
            >
              <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>View Our Work</span>
            </Link>
          </div>

         
        </div>
      </YouTubeBackground>
      <div className="">
         {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 w-full max-w-5xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-3 sm:p-4 lg:p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-2 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/20 rounded-full">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default HeroSection
