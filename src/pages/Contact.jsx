"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const services = ["Video Editing", "Thumbnail Design", "YouTube SEO", "Freelancing Support", "Custom Package"]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-12  sm:py-16 lg:py-24"
  style={{ backgroundImage: "url('https://z-p3-scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/467280086_412500785259082_856439851067107433_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeElLCXIRA1TXKeK5SxMHH_-mgX877_dhnaaBfzvv92GdsXBmhOp7P5Y3CTE7rBKGJfv-rfzac9tVgQRGa-2K75n&_nc_ohc=A7162rQZG8MQ7kNvwFXa3PO&_nc_oc=AdnuRiwUbILnsaM-gF2FStKJEeo8OUZOPlk13hNo1oFITdhMLMyld1OsFMwJt09s4HM&_nc_zt=23&_nc_ht=z-p3-scontent.fjsr1-2.fna&_nc_gid=BGSWAnRJt_GArHcaGeQ0Nw&oh=00_AfVIbm0Rb8WaW9hto_Uc1XVWzb8_kxcGMrRVmleq5WYiZA&oe=68BC8F56')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="text-emerald-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your content? Let's discuss your project and create something amazing together
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8 text-center">
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <Mail className="w-6 h-6 text-emerald-600 mb-2" />
        <div>
          <h3 className="font-semibold text-gray-900">Email</h3>
          <p className="text-gray-600">promarketerraihan@gmail.com</p>
          <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Phone className="w-6 h-6 text-emerald-600 mb-2" />
        <div>
          <h3 className="font-semibold text-gray-900">Phone & Whatsapp </h3>
          <p className="text-gray-600">+880 1876-213996</p>
          <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <MapPin className="w-6 h-6 text-emerald-600 mb-2" />
        <div>
          <h3 className="font-semibold text-gray-900">Address</h3>
          <p className="text-gray-600">
             Akhsha Complex (2th floor), Burirhat, Rangpur City,
            <br />
           Bangladesh
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Clock className="w-6 h-6 text-emerald-600 mb-2" />
        <div>
          <h3 className="font-semibold text-gray-900">Business Hours</h3>
          <p className="text-gray-600">
            Monday - Friday: 9AM - 6PM EST
            <br />
            Weekend: By appointment
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* FAQ Section */}
  <div className="bg-gray-50 rounded-xl p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
    <div className="space-y-4 text-left">
      <div>
        <h4 className="font-medium text-gray-900">How quickly can you start my project?</h4>
        <p className="text-sm text-gray-600">Most projects can begin within 24-48 hours of confirmation.</p>
      </div>
      <div>
        <h4 className="font-medium text-gray-900">Do you offer revisions?</h4>
        <p className="text-sm text-gray-600">Yes, we include 2-3 rounds of revisions with every project.</p>
      </div>
      <div>
        <h4 className="font-medium text-gray-900">What's your payment process?</h4>
        <p className="text-sm text-gray-600">
          50% upfront, 50% upon completion. We accept all major payment methods.
        </p>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
