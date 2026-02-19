import imaginationBro from '../assets/imagination-bro.png';
import Logo from '../assets/FlickXL.png';

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16 ml-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <img 
                src={Logo} 
                alt="Our Vision Illustration" 
                className="w-80 h-auto object-contain rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                About Flickx Africa
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                At FlickX, we believe creative excellence should be simple, personalized, and always within reach. We've reimagined how success is achieved, combining cutting-edge training with a human touch to create a seamless, talent-first experience.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-20 rounded">
            {/* Stat 1 */}
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,000+</div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Available Masterclass Courses</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">industry mentors on standby</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Readily available insights & trends</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Total creative job listings annually</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}