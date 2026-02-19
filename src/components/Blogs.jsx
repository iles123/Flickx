import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';

// Import blog images (replace with your actual assets)
import imaginationbro1 from '../assets/imagination-bro.png';



export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of African Cinema: Trends to Watch in 2024",
      excerpt: "From Nollywood to emerging filmmakers across the continent, discover the trends shaping African storytelling.",
      image: imaginationbro1,
      author: "Chioma Okafor",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      category: "Industry Insights",
      featured: true
    },
    {
      id: 2,
      title: "Mastering the Art of Documentary Filmmaking",
      excerpt: "Learn from award-winning documentarians about capturing authentic stories that resonate with global audiences.",
      image: imaginationbro1,
      author: "Adebayo Salami",
      date: "Mar 12, 2024",
      readTime: "8 min read",
      category: "Film Making",
      featured: false
    },
    {
      id: 3,
      title: "How to Build a Successful Creative Career in Africa",
      excerpt: "Practical advice on navigating the creative industry and turning your passion into a sustainable career.",
      image: imaginationbro1,
      author: "Folake Williams",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Career Advice",
      featured: false
    },
    {
      id: 4,
      title: "The Rise of Virtual Production in African Film",
      excerpt: "Exploring how new technologies are revolutionizing filmmaking across the continent.",
      image: imaginationbro1,
      author: "Tunde Oni",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      category: "Technology",
      featured: false
    },
    {
      id: 5,
      title: "Women in African Cinema: Breaking Barriers",
      excerpt: "Celebrating the achievements of female filmmakers and their impact on the industry.",
      image: imaginationbro1,
      author: "Ngozi Eze",
      date: "Mar 5, 2024",
      readTime: "4 min read",
      category: "Diversity",
      featured: false
    },
    {
      id: 6,
      title: "Essential Equipment for Indie Filmmakers",
      excerpt: "A comprehensive guide to building your filmmaking kit on a budget.",
      image: imaginationbro1,
      author: "Emeka Okonkwo",
      date: "Mar 3, 2024",
      readTime: "10 min read",
      category: "Resources",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'industry-insights', name: 'Industry Insights', count: 8 },
    { id: 'film-making', name: 'Film Making', count: 12 },
    { id: 'career-advice', name: 'Career Advice', count: 6 },
    { id: 'technology', name: 'Technology', count: 5 },
    { id: 'diversity', name: 'Diversity', count: 4 },
    { id: 'resources', name: 'Resources', count: 7 }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Matching About Us style */}
        <div className="text-left mb-16 ml-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Insights & Stories
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Thoughts, trends, and tales from the creative world
          </p>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        {/* Search and Categories - New section but matching aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Search Bar */}
          <div className="lg:col-span-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post - Using the two-column layout from About Us */}
        {featuredPost && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8">
            {/* Left Column - Image (matching About Us image style) */}
            <div className="space-y-6">
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="relative w-full h-[300px] object-cover rounded-xl bg-white p-2 shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content (matching Stats Grid style) */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                Featured Post
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                {featuredPost.excerpt}
              </p>
              
              {/* Post Meta - Similar to stats layout */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                Read Full Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Blog Posts Grid - Using the stats grid pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content - Matching stats card style */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author Info - Similar to stats layout */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button - Matching Browse All button style */}
        <div className="flex justify-center mt-16">
          <motion.button 
            className="bg-blue-600 text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-md hover:shadow-xl flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Load More Articles</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Newsletter Section - Additional element inspired by the layout */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Get Insights Delivered to Your Inbox
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of creative professionals and receive the latest trends, tips, and opportunities.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}