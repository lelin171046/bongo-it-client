"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "YouTube Creator",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "The video editing quality exceeded my expectations. My channel growth increased by 300% after working with this team!",
      rating: 5,
      channel: "@SarahCreates",
    },
    {
      name: "Mike Chen",
      role: "Business Owner",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "Their thumbnail designs are incredible. Click-through rates improved dramatically, and the turnaround time is amazing.",
      rating: 5,
      channel: "@MikeBusiness",
    },
    {
      name: "Emma Rodriguez",
      role: "Content Creator",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "The YouTube SEO optimization helped my videos rank higher. I'm getting more organic views than ever before!",
      rating: 5,
      channel: "@EmmaContent",
    },
    {
      name: "David Kim",
      role: "Freelancer",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "Their freelancing support was game-changing. I landed my first high-paying client within a week of their help.",
      rating: 5,
      channel: "@DavidFreelance",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-emerald-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the creators and businesses we've helped succeed
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-emerald-100" />

            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentTestimonial].rating ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-emerald-600 font-medium">{testimonials[currentTestimonial].role}</div>
                  <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].channel}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
