import { 
  Video, 
  ImageIcon, 
  Search, 
  Users, 
  Check, 
  ArrowRight, 
  DoorClosed, 
  LucideVoicemail 
} from "lucide-react"
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
      icon: DoorClosed,
      title: "Script Writing",
      description: "Engaging and tailored scripts that connect with your audience and deliver your message effectively.",
      features: [
        "Creative Storytelling",
        "SEO-Friendly Scripts",
        "Clear Structure & Flow",
        "Custom Tone & Style"
      ],
      price: "Starting from $50",
      turnaround: "2-3 days",
    },
    {
      icon: LucideVoicemail,
      title: "AI Voiceover",
      description: "Natural and high-quality AI-generated voiceovers tailored for your videos, ads, and presentations.",
      features: [
        "Multiple Voice Options",
        "Male & Female Voices",
        "Multilingual Support",
        "Fast Turnaround"
      ],
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
    <div className="min-h-screen pt-0 sm:pt-3">
      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-24"
  style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp7110658.jpg')" }}
>
  {/* Optional overlay for better text readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
      Our <span className="text-emerald-400">Services</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-2">
      Comprehensive creative services designed to elevate your content and grow your audience
    </p>
  </div>
</section>


      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 sm:p-8 flex flex-col"
              >
                {/* Icon & Title */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">{service.description}</p>

                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm sm:text-base">
                        <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Turnaround */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-600">{service.price}</div>
                    <div className="text-xs sm:text-sm text-gray-500">Turnaround: {service.turnaround}</div>
                  </div>
                </div>

                {/* Button (responsive placement) */}
                <Link
                  to="/contact"
                  className="mt-auto w-full bg-emerald-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center text-sm sm:text-base"
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
      <section className="bg-emerald-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Content?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
