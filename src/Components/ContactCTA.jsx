import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

const ContactCTA = () => {
  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Content?</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Join hundreds of satisfied creators and businesses who have elevated their content with our professional
            services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
            <p className="text-emerald-100">Get a response within 2 hours during business hours</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
            <p className="text-emerald-100">Discuss your project requirements at no cost</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
            <p className="text-emerald-100">Tailored services to meet your specific needs</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <Link
            to="/portfolio"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
          >
            View Our Work
          </Link>
        </div>

        <div className="text-center mt-8">
          <p className="text-emerald-100">
            Or email us directly at{" "}
            <a href="mailto:hello@agency.com" className="text-white font-semibold hover:underline">
              hello@agency.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
