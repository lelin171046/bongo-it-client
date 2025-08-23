import { Users, Target, Award, TrendingUp } from "lucide-react"

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "1000+", label: "Projects Completed" },
    { icon: Target, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "5+", label: "Years Experience" },
  ]

  const team = [
    {
      name: "MD Raihan  (Kb)",
      role: "HO & Creative Director",
      image: "https://scontent.fdac147-1.fna.fbcdn.net/v/t39.30808-6/481455224_1986988411829375_5755904641479299324_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeEyUT6b__H0jG353MIXZZdbdNCoOhiE4Tp00Kg6GIThOpRZnjOvOO020fRF8dAKHgx4W8pDlJ8Lq_6xSlVLQWRA&_nc_ohc=zcbWdAiwSKwQ7kNvwGaiW-o&_nc_oc=Adm64RvcAtj3GEfMN2vhx7SoqAfkNPF8yUmrVNU7FXeg0P8d5BCLDz-QohzAca51waA&_nc_zt=23&_nc_ht=scontent.fdac147-1.fna&_nc_gid=2IVz1I84dJ3dnPxj2_3I9w&oh=00_AfXbe_u781AqYiHRJk1EPKNH0CqrhYxS5ESvd4opE9clDQ&oe=68AF66F8",
    },
    {
      name: "Moniruzzaman",
      role: "Co-Founder",
      image: "https://avatars.githubusercontent.com/u/115658279?v=4",
      bio: "Expert in thumbnail design and visual branding",
    },
    {
      name: "Md Sohag Hasan ",
      role: "CEO ",
      image: "https://scontent.fdac147-1.fna.fbcdn.net/v/t39.30808-1/471246658_2403938936604126_3866987642265250416_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeE1VI2lrCSZ-KzJf0UBgTrj9kFoXauvSPf2QWhdq69I9wEH8HP2_akUXEfOJS9TLPVK8xNIEi990a5P1E3GohOL&_nc_ohc=PESavF9RtycQ7kNvwEwBP_a&_nc_oc=Adnw556H-lvIoiFnV-nztgp67y66Jt5CL66UzcZEDX4lcYEWsmE2SqkNV-O1bN5fUAU&_nc_zt=24&_nc_ht=scontent.fdac147-1.fna&_nc_gid=Fjqy8gEcHypuWbccttTIqQ&oh=00_AfX5ZVFSydLwmzDAqKfLj5Yn7b4PEVT_8PQmLwCDolHlww&oe=68AEA0DD",
      bio: "YouTube SEO expert with proven track record",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-emerald-600">Our Agency</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of creative professionals dedicated to helping content creators and businesses
              achieve their goals through exceptional video editing, design, and optimization services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower content creators and businesses with professional-grade creative services that drive
                engagement, growth, and success in the digital landscape.
              </p>
              <p className="text-lg text-gray-600">
                We believe every creator deserves access to high-quality production services that can transform their
                vision into compelling content that resonates with their audience.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://media.licdn.com/dms/image/v2/D563DAQH9a8N8-M1Ndg/image-scale_127_750/image-scale_127_750/0/1700868161300/bongoit_rangpur_cover?e=1756544400&v=beta&t=a4eDCKdInIdOgHsNGTXjYFFuIHDDEHlzlU1FdQ6fml8"
                alt="Our team at work"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Talented professionals passionate about creating exceptional content
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
