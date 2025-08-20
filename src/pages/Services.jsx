import { Video, ImageIcon, Search, Users, Check, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing with color correction, audio enhancement, and seamless transitions",
      features: ["Color Grading", "Audio Enhancement", "Motion Graphics", "Transitions & Effects"],
      price: "Starting from $50",
      turnaround: "2-3 days",
    },
    {
      icon: ImageIcon,
      title: "Thumbnail Design",
      description: "Eye-catching thumbnails that increase click-through rates and boost video performance",
      features: ["Custom Graphics", "A/B Testing", "Brand Consistency", "High CTR Design"],
      price: "Starting from $15",
      turnaround: "24 hours",
    },
    {
      icon: Search,
      title: "YouTube SEO",
      description: "Optimize your content for maximum visibility and organic growth on YouTube",
      features: ["Keyword Research", "Title Optimization", "Description Writing", "Tag Strategy"],
      price: "Starting from $30",
      turnaround: "1-2 days",
    },
    {
      icon: Users,
      title: "Freelancing Support",
      description: "Complete support for your Fiverr and Upwork freelancing journey",
      features: ["Profile Optimization", "Proposal Writing", "Client Communication", "Project Management"],
      price: "Starting from $25",
      turnaround: "Same day",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive creative services designed to elevate your content and grow your audience
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="w-4 h-4 text-emerald-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">{service.price}</div>
                    <div className="text-sm text-gray-500">Turnaround: {service.turnaround}</div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Content?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
