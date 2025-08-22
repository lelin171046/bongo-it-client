"use client"

import { useState, useEffect } from "react"
import { Video, ImageIcon, Search, Users, ChevronLeft, ChevronRight } from "lucide-react"
import img1 from "./../assets/Video Editing .png"
import img2 from "./../assets/SEO.png"
import img3 from "./../assets/YouTube Thumbnail.png"


const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing with seamless transitions, color correction, and audio enhancement",
    image: img1, // ✅ just use the imported local image
  },
  {
    icon: ImageIcon,
    title: "Thumbnail Design",
    description: "Eye-catching thumbnails that boost click-through rates and video performance",
    image: img3
  },
  {
    icon: Search,
    title: "YouTube SEO",
    description: "Optimize your content for maximum visibility and organic growth",
    image: img2
  },
  {
    icon: Users,
    title: "Freelancing Support",
    description: "Complete support for your Fiverr and Upwork freelancing journey",
    image: "https://i.ibb.co/N6Mxb7Gw/freelancing.png", // ✅ direct link
  },
]


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [services.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative services to help you succeed in the digital world
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                          <service.icon className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                      <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors w-fit">
                        Learn More
                      </button>
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="rounded-lg shadow-lg max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSlider
