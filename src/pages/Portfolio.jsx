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
      image: "data:image/jpeg;base64,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",
      description: "Complete video editing package for tech review channel",
      results: "300% increase in engagement",
      client: "TechReviewer Pro",
      rating: 5,
    },
    {
      id: 2,
      title: "Gaming Thumbnails",
      category: "thumbnail",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eDz6UUs8tH8EnEz3hdsDDlBhnkSaNbA3gQ&s",
      description: "Eye-catching thumbnail designs for gaming content",
      results: "45% higher CTR",
      client: "GameMaster",
      rating: 5,
    },
    {
      id: 3,
      title: "Cooking Channel SEO",
      category: "seo",
      image: "https://sarahwarsi.com/wp-content/uploads/2023/01/wp1955114-cooking-wallpapers.jpg",
      description: "YouTube SEO optimization for cooking channel",
      results: "200% organic growth",
      client: "Chef's Kitchen",
      rating: 5,
    },
    {
      id: 4,
      title: "Business Explainer Videos",
      category: "video-editing",
      image: "https://images.wondershare.com/anireel/Resource/2021/10/business-explainer-video-3.jpg",
      description: "Professional explainer videos for SaaS company",
      results: "150% conversion rate",
      client: "StartupCo",
      rating: 5,
    },
    {
      id: 5,
      title: "Fitness Channel Branding",
      category: "thumbnail",
      image: "https://greyjournal.net/wp-content/uploads/2024/04/Best-Workout-Youtube-Channels-For-Guys-in-2024-1.jpg",
      description: "Complete thumbnail redesign for fitness channel",
      results: "60% more clicks",
      client: "FitLife",
      rating: 5,
    },
    {
      id: 6,
      title: "Educational Content SEO",
      category: "seo",
      image: "https://vaidikedu.com/wp-content/uploads/2025/02/What-IS-Educational-Content-And-Why-is-it-Important-Vaidik-eduservices-1024x576.webp",
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
