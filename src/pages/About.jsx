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
      role: "Creative Director",
      image: "https://scontent.fdac147-1.fna.fbcdn.net/v/t39.30808-6/488991945_2015287382332811_6124703051187284899_n.jpg?stp=c0.168.1540.1540a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=52bb43&_nc_eui2=AeFEMbcB2zIg4vlXG0dFz9q4K_CxBFt8pv4r8LEEW3ym_vTkGbVd0bKyThJYSgllh_9NQuHzk82HIHIl1UtJo6sQ&_nc_ohc=fLMVht_3hTYQ7kNvwFkydfe&_nc_oc=AdkuUdKcTuwuvIvnIhkU-oT1N8-HbA1WgK0zD6x9SGjdtsuuzf8vteGzFNdPn_9EquI&_nc_zt=23&_nc_ht=scontent.fdac147-1.fna&_nc_gid=qnLE5_1aXVgFcAUzOEMeaQ&oh=00_AfVBkrkdHaR_GxfTfa1kxWmHwWx3Xy0_GolqxgC5KgtEmQ&oe=68AECBEC",
      bio: "10+ years in video editing and creative direction",
    },
    {
      name: "MD Raihan MIah",
      role: "General Manager",
      image: "https://scontent.fdac147-1.fna.fbcdn.net/v/t1.6435-9/122269301_928780167650210_6572663537588986019_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeEV9LOFrBvIf4iQO14fB-hG0jt9YOjM2n7SO31g6Mzafk5cTQtXwqI8lgGQYul1gUih_alYzDFWtmqCXSXXpkmU&_nc_ohc=ZXDIl0uE0zYQ7kNvwGM6bGk&_nc_oc=AdnfisYP8HbKhx3lg_WpmPkK4kl2USXgjUz2TWiA7b7VV4wNgN_3yNUMZ3ZInC2YYU8&_nc_zt=23&_nc_ht=scontent.fdac147-1.fna&_nc_gid=knkzZ5-V4HNYpHKoMEaPEA&oh=00_AfWYOjdHn96U9HxpRjbjVd7yjhhQiNEpQxIB7Ao_qPtB1g&oe=68D057C0",
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
                src="https://scontent.fdac147-1.fna.fbcdn.net/v/t39.30808-6/475845758_1961535351041348_7875120399383956409_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFmGy-qJ1cFm8_y4lez68R8SGnCZvSgMkpIacJm9KAySitb1m8qA0Xkv42ms38lKlcu344B7LqN5KI1YfOGzQGG&_nc_ohc=zrsP6vGEwFwQ7kNvwGKXVx7&_nc_oc=AdmR1ZcE4Q9NuTN_mH6TkODIaAdnQEUp2KeGOofZCyzo7rahXXZCH8zWZFv7Tg_8G3I&_nc_zt=23&_nc_ht=scontent.fdac147-1.fna&_nc_gid=U6HN-913o1uGKGtCJACiXQ&oh=00_AfXuerCy7syg9MTFA8e9hvbdETNm6BSXGznE3unqFifycA&oe=68AECE7A"
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
