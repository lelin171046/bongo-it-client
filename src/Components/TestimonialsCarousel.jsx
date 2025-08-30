"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "YouTube Creator",
      avatar:
        "https://media.istockphoto.com/id/1184187261/photo/portrait-of-cheerful-bearded-black-man-over-yellow-background.jpg?s=612x612&w=0&k=20&c=me77y_a3sfKKOauLJpMMQo3wctCyMTf9_PtQT6YLhN4=",
      content:
        "The video editing quality exceeded my expectations. My channel growth increased by 300% after working with this team!",
      rating: 5,
      channel: "@SarahCreates",
    },
    {
      name: "Mike Chen",
      role: "Business Owner",
      avatar:
        "https://t3.ftcdn.net/jpg/03/22/53/38/360_F_322533850_Lz5JL2K0nVqL48gjCiRLSa2ssxpdfyer.jpg",
      content:
        "Their thumbnail designs are incredible. Click-through rates improved dramatically, and the turnaround time is amazing.",
      rating: 5,
      channel: "@MikeBusiness",
    },
    {
      name: "Emma Rodriguez",
      role: "Content Creator",
      avatar:
        "https://media.istockphoto.com/id/863488868/photo/portrait-of-smiling-young-man-in-city-on-sunny-day.jpg?s=612x612&w=0&k=20&c=7tD8Nm7e6eZixJWkuXE99PmX4yEvMkts8DMAiOLv3y8=",
      content:
        "The YouTube SEO optimization helped my videos rank higher. I'm getting more organic views than ever before!",
      rating: 5,
      channel: "@EmmaContent",
    },
    {
      name: "David Kim",
      role: "Freelancer",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      content:
        "Their freelancing support was game-changing. I landed my first high-paying client within a week of their help.",
      rating: 5,
      channel: "@DavidFreelance",
    },
  ]

  // Auto-slide on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  // Scroll slider on mobile when currentIndex changes
  useEffect(() => {
    if (window.innerWidth < 768 && sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            What Our <span className="text-emerald-600">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the creators and businesses we've helped succeed
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Slider for mobile */}
          <div
            ref={sliderRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full md:w-auto snap-center"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 flex flex-col h-full justify-between">
                  <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-100 mb-4" />
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mx-0.5 ${
                          idx < t.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center mb-6 leading-relaxed min-h-[4rem] sm:min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center">
                    "{t.content}"
                  </blockquote>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-emerald-100"
                    />
                    <div className="text-center sm:text-left">
                      <div className="font-semibold text-gray-900 text-base sm:text-lg lg:text-xl">{t.name}</div>
                      <div className="text-emerald-600 font-medium text-sm sm:text-base lg:text-lg">{t.role}</div>
                      <div className="text-gray-500 text-xs sm:text-sm lg:text-base">{t.channel}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows for mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-105 z-10 md:hidden"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-105 z-10 md:hidden"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
