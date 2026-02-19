import imaginationBro from '../assets/imagination-bro.png';
import Logo from '../assets/FlickXL.png';

export default function AboutUs() {
  return (
    <section id="about-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            About Us
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto sm:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Image + Text */}
          <div className="space-y-8 md:space-y-10">
            <div className="flex justify-center lg:justify-start">
              <img
                src={Logo}
                alt="FlickX Africa Logo / Vision Illustration"
                className="
                  w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] 
                  md:max-w-[400px] lg:max-w-[460px] xl:max-w-[520px]
                  h-auto object-contain 
                  rounded-xl bg-gray-50 p-5 sm:p-6 md:p-8 
                  shadow-sm hover:shadow-md transition-shadow duration-300
                "
              />
            </div>

            <div className="space-y-4 md:space-y-6 text-center sm:text-left px-2 sm:px-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                About FlickX Africa
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                At FlickX, we believe creative excellence should be simple, personalized, and always within reach. We've reimagined how success is achieved, combining cutting-edge training with a human touch to create a seamless, talent-first experience.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="
            grid grid-cols-1 sm:grid-cols-2 
            gap-8 sm:gap-10 md:gap-12 lg:gap-16 
            bg-gray-50 
            p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 
            rounded-xl sm:rounded-2xl
          ">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-2 sm:mb-3">
                2,000+
              </div>
              <p className="text-sm sm:text-base text-gray-600 uppercase tracking-wide font-medium">
                Available Masterclass Courses
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-2 sm:mb-3">
                50+
              </div>
              <p className="text-sm sm:text-base text-gray-600 uppercase tracking-wide font-medium">
                Industry Mentors on Standby
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-2 sm:mb-3">
                1,200+
              </div>
              <p className="text-sm sm:text-base text-gray-600 uppercase tracking-wide font-medium">
                Readily Available Insights & Trends
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-2 sm:mb-3">
                15,000+
              </div>
              <p className="text-sm sm:text-base text-gray-600 uppercase tracking-wide font-medium">
                Total Creative Job Listings Annually
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}