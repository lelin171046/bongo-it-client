import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Content?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied creators and businesses who have elevated their content with our professional
            services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            {
              icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
              title: "Quick Response",
              description: "Get a response within 2 hours during business hours",
            },
            {
              icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
              title: "Free Consultation",
              description: "Discuss your project requirements at no cost",
            },
            {
              icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
              title: "Custom Solutions",
              description: "Tailored services to meet your specific needs",
            },
          ].map((feature, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-emerald-100 text-sm sm:text-base text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Link
            to="/contact"
            className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center w-full sm:w-auto"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
          </Link>

          <Link
            to="/portfolio"
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors w-full sm:w-auto text-center"
          >
            View Our Work
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-emerald-100 text-sm sm:text-base">
            Or email us directly at{" "}
            <a
              href="mailto:promarketerraihan@gmail.com"
              className="text-white font-semibold hover:underline"
            >
              promarketerraihan@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
