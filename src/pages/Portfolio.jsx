"use client"

import { useState } from "react"
import { ExternalLink, Play, Star, Filter } from "lucide-react"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Tech Review Channel",
      category: "video-editing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete video editing package for tech review channel",
      results: "300% increase in engagement",
      client: "TechReviewer Pro",
      rating: 5,
    },
    {
      id: 2,
      title: "Gaming Thumbnails",
      category: "thumbnail",
      image: "/placeholder.svg?height=300&width=400",
      description: "Eye-catching thumbnail designs for gaming content",
      results: "45% higher CTR",
      client: "GameMaster",
      rating: 5,
    },
    {
      id: 3,
      title: "Cooking Channel SEO",
      category: "seo",
      image: "/placeholder.svg?height=300&width=400",
      description: "YouTube SEO optimization for cooking channel",
      results: "200% organic growth",
      client: "Chef's Kitchen",
      rating: 5,
    },
    {
      id: 4,
      title: "Business Explainer Videos",
      category: "video-editing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Professional explainer videos for SaaS company",
      results: "150% conversion rate",
      client: "StartupCo",
      rating: 5,
    },
    {
      id: 5,
      title: "Fitness Channel Branding",
      category: "thumbnail",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete thumbnail redesign for fitness channel",
      results: "60% more clicks",
      client: "FitLife",
      rating: 5,
    },
    {
      id: 6,
      title: "Educational Content SEO",
      category: "seo",
      image: "/placeholder.svg?height=300&width=400",
      description: "SEO strategy for educational YouTube channel",
      results: "400% subscriber growth",
      client: "EduTech",
      rating: 5,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "video-editing", label: "Video Editing" },
    { id: "thumbnail", label: "Thumbnails" },
    { id: "seo", label: "YouTube SEO" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the success stories of creators and businesses we've helped grow
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700"
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Client:</span>
                      <span className="text-gray-600 ml-1">{project.client}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-emerald-600">Results:</span>
                      <span className="text-gray-600 ml-1">{project.results}</span>
                    </div>
                  </div>

                  <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-emerald-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">250%</div>
              <div className="text-emerald-100">Average Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-emerald-100">Average Turnaround</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
