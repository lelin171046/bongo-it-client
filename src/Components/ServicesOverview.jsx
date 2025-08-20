import { Video, ImageIcon, Search, Users, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const ServicesOverview = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Transform raw footage into compelling stories with professional editing techniques",
      price: "From $50",
      features: ["Color Grading", "Audio Enhancement", "Motion Graphics"],
    },
    {
      icon: ImageIcon,
      title: "Thumbnail Design",
      description: "Create eye-catching thumbnails that increase your video's click-through rate",
      price: "From $15",
      features: ["Custom Graphics", "A/B Testing", "Brand Consistency"],
    },
    {
      icon: Search,
      title: "YouTube SEO",
      description: "Optimize your content for maximum visibility and organic growth",
      price: "From $30",
      features: ["Keyword Research", "Title Optimization", "Tag Strategy"],
    },
    {
      icon: Users,
      title: "Freelancing Support",
      description: "Complete support for your freelancing journey on major platforms",
      price: "From $25",
      features: ["Profile Setup", "Proposal Writing", "Client Management"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We <span className="text-emerald-600">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional services designed to help content creators and businesses thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                <service.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <div className="text-2xl font-bold text-emerald-600 mb-4">{service.price}</div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
