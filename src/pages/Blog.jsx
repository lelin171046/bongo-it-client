import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import { Link } from "react-router-dom"
import HeroSection from "../Components/HeroSection"

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "10 Video Editing Tips That Will Transform Your Content",
    excerpt: "Learn the professional techniques that top creators use to make their videos stand out from the crowd.",
    image: "/https://www.proglobalbusinesssolutions.com/wp-content/uploads/2022/04/social-media-video-editing-tips-scaled.jpg",
    author: "Alex Johnson",
    date: "March 15, 2024",
    category: "Video Editing",
    readTime: "8 min read",
  }

  const blogPosts = [
    {
      id: 2,
      title: "The Psychology Behind High-Converting Thumbnails",
      excerpt: "Discover the science of what makes viewers click on your videos.",
      image: "https://mytasker.com/blog/images/posts/video-editing-strategies-techniques-and-tips-for-every-creator.webp",
      author: "Sarah Chen",
      date: "March 12, 2024",
      category: "Design",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "YouTube SEO: Complete Guide for 2024",
      excerpt: "Master the latest YouTube algorithm changes and optimization strategies.",
      image: "https://rankmath.com/wp-content/uploads/2024/01/YouTube-SEO-1200x630-1.jpg",
      author: "Mike Rodriguez",
      date: "March 10, 2024",
      category: "SEO",
      readTime: "12 min read",
    },
    {
      id: 4,
      title: "Building a Successful Freelancing Business",
      excerpt: "From first client to six-figure income: a complete roadmap.",
      image: "https://youpreneur.com/wp-content/uploads/2020/01/Building-a-Successful-Freelancing-Business-with-Jason-Resnick-e1579549934489.png",
      author: "Emma Davis",
      date: "March 8, 2024",
      category: "Business",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "Color Grading Techniques for Beginners",
      excerpt: "Transform your videos with professional color grading methods.",
      image: "https://i.ytimg.com/vi/huMGyDnq0bk/maxresdefault.jpg",
      author: "Alex Johnson",
      date: "March 5, 2024",
      category: "Video Editing",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Growing Your YouTube Channel in 2024",
      excerpt: "Proven strategies to increase subscribers and engagement.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mSt_rhZLFcnn-PVcooBYAeB7usLsAcdyLA&s",
      author: "Sarah Chen",
      date: "March 3, 2024",
      category: "Growth",
      readTime: "9 min read",
    },
  ]

  const categories = ["All", "Video Editing", "Design", "SEO", "Business", "Growth"]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and strategies to help you succeed in content creation and digital marketing
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src="/https://www.proglobalbusinesssolutions.com/wp-content/uploads/2022/04/social-media-video-editing-tips-scaled.jpg"
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                    <Tag className="w-3 h-3 mr-1" />
                    {featuredPost.category}
                  </span>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium bg-white text-gray-700 hover:bg-emerald-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* <HeroSection></HeroSection> */}
      </section>

      {/* Newsletter Signup */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get the latest tips, strategies, and industry insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
