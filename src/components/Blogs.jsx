import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search } from 'lucide-react';

// Import blog images (replace with your actual assets)
import imaginationbro1 from '../assets/imagination-bro.png';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    // ... (your blogPosts array remains unchanged)
  ];

  const categories = [
    // ... (your categories array remains unchanged)
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  // Optional: filter posts by search & category (basic implementation)
  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blogs" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Insights & Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto sm:mx-0">
            Thoughts, trends, and tales from the creative world
          </p>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto sm:mx-0"></div>
        </div>

        {/* Search + Categories */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Search Bar */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full pl-10 pr-4 py-3 
                  border border-gray-200 rounded-lg 
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                  transition-all duration-300
                  text-base
                "
              />
            </div>
          </div>

          {/* Categories - scrollable on mobile if many */}
          <div className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-thin">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-4 py-2 rounded-full text-sm sm:text-base font-medium 
                  whitespace-nowrap transition-all duration-300 flex-shrink-0
                  ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
                  }
                `}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="
            grid grid-cols-1 lg:grid-cols-2 
            gap-8 md:gap-10 lg:gap-12 
            items-center mb-16 md:mb-20 
            bg-gradient-to-r from-blue-50 to-white 
            rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12
          ">
            {/* Image side */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="
                  relative w-full h-64 sm:h-72 md:h-80 lg:h-[420px] xl:h-[480px]
                  object-cover rounded-xl bg-white p-2 sm:p-3 shadow-lg
                  transition-transform duration-500 group-hover:scale-[1.02]
                "
              />
            </div>

            {/* Content side */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-4">
                Featured Post
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 text-sm sm:text-base">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{featuredPost.author.split(' ')[0]}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group text-base sm:text-lg">
                Read Full Article
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Regular Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                bg-white rounded-xl overflow-hidden 
                shadow-sm hover:shadow-xl transition-all duration-300 
                border border-gray-100 group
              "
            >
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="
                    w-full h-full object-cover 
                    group-hover:scale-110 transition-transform duration-500
                  "
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="px-2.5 sm:px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-7">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-700 line-clamp-1">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No posts found matching your criteria.
          </div>
        )}

        {/* Load More */}
        <div className="flex justify-center mt-12 md:mt-16">
          <motion.button
            className="
              bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 
              rounded-full text-base sm:text-lg font-semibold 
              shadow-md hover:shadow-xl transition-all duration-300 
              flex items-center group
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Load More Articles</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Newsletter */}
        <div className="mt-16 sm:mt-20 bg-gray-50 rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Insights Delivered to Your Inbox
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
            Join our community of creative professionals and receive the latest trends, tips, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1 px-5 sm:px-6 py-3 border border-gray-200 
                rounded-full focus:ring-2 focus:ring-blue-500 
                focus:border-transparent text-base
              "
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}