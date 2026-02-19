import africaImage from '../assets/africa-image.png';

export default function CreativeBase({ onAuthClick }) {
  return (
    <section id="creative-base" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Creative Base
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Your Source For Intelligence and Data
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
            <div className="w-full md:w-2/5 lg:w-5/12 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={africaImage}
                  alt="The State Of Africa Film Report 2024"
                  className="
                    w-full aspect-[4/3] sm:aspect-[5/3] md:aspect-[4/3] 
                    object-cover 
                    transition-transform duration-500 hover:scale-105
                  "
                />
              </div>
            </div>

            <div className="w-full md:w-3/5 lg:w-7/12 text-center md:text-left pt-4 md:pt-6 lg:pt-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                The State Of Africa Film Report 2024
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-prose mx-auto md:mx-0">
                A deep dive into the trends, challenges, and opportunities shaping the industry.
              </p>
              <button
                onClick={onAuthClick}
                className="
                  inline-flex items-center gap-2 
                  text-red-600 hover:text-red-700 
                  font-semibold text-base sm:text-lg 
                  transition-colors group
                "
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
            <div className="w-full md:w-2/5 lg:w-5/12 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={africaImage}
                  alt="Policy Watch: New Regulations in Nigeria's Creative Sector"
                  className="
                    w-full aspect-[4/3] sm:aspect-[5/3] md:aspect-[4/3] 
                    object-cover 
                    transition-transform duration-500 hover:scale-105
                  "
                />
              </div>
            </div>

            <div className="w-full md:w-3/5 lg:w-7/12 text-center md:text-left pt-4 md:pt-6 lg:pt-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Policy Watch: New Regulations in Nigeria's Creative Sector
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-prose mx-auto md:mx-0">
                Stay informed on the latest government policies affecting creators and businesses.
              </p>
              <button
                onClick={onAuthClick}
                className="
                  inline-flex items-center gap-2 
                  text-blue-600 hover:text-blue-700 
                  font-semibold text-base sm:text-lg 
                  transition-colors group
                "
              >
                <span>Read More</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}