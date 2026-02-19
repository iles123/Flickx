import { useState } from 'react';
import { 
  GraduationCap, 
  Film, 
  Lightbulb, 
  Users, 
  PiggyBank, 
  FlaskConical,
  ChevronDown,
  ChevronUp 
} from 'lucide-react';
import Logo from '../assets/FlickXL.png';
import imaginationBro from '../assets/imagination-bro.png';

function Ecosystem() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownItems = [
    {
      id: 1,
      title: "",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      stats: "Learn",
      description: "Master your craft with courses, masterclasses and verified certificates.",
      details: [
        "200+ Courses",
        "Expert facilitators",
        " Career-ready skills"
      ]
    },
    {
      id: 2,
      title: "",
      icon: <Film className="w-6 h-6 text-blue-600" />,
      stats: "Studio",
      description: "Professional production services from concept to screen.",
      details: [
        "End to end production",
        "Film & video production sets",
        "Equipment & studios",
        "Verified Talent Pool",
        "Collaborative workspaces"
      ]
    },
    {
      id: 3,
      title: "",
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      stats: "Creative Base",
      description: "Discover the latest insights and trends. Create with valid information.",
      details: [
        " Industry reports",
        "Talent mapping",
        "Policy tracking",
        "Competitor insights",
        "Technology updates"
      ]
    },
    {
      id: 4,
      title: "",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      stats: "Talent",
      description: "Connect with opportunities and collaborations. Explore Africa's talent network.",
      details: [
        "Talent matching & placement",
        "Verified profiles",
        "Career coaching",
        " Live job board",
        "Skill ratings & endorsements",
        "Mentorship programs"
      ]
    },
    {
      id: 5,
      title: "",
      icon: <PiggyBank className="w-6 h-6 text-blue-600" />,
      stats: "Fund",
      description: "Access grants, funding, and investment capital.",
      details: [
        "Equity investment",
        "Seed grants",
        "Fellowship programs",
        "Crowdfunding support",
        "Financial planning"
      ]
    },
    {
      id: 6,
      title: "",
      icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
      stats: "Lab",
      description: "Where creativity meets emerging technology. ",
      details: [
        "AI & machine learning experiments",
        "AI, VR, AR tools access",
        " R&D resources",
        "Prototype development",
        " Innovation showcases"
      ]
    }
  ];

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <section id="ecosystem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16 ml-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Exploring FlickX ecosystem
          </h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <img 
                  src={imaginationBro} 
                  alt="Flickx Africa Ecosystem" 
                  className="relative w-80 h-auto object-contain rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Flickx Africa Ecosystem
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Every organisation moves differently. That's why we develop solutions built on insights, expertise, and a sharp understanding of your brand. Our strategic, creative, and technological disciplines strengthen one another giving you an approach that aligns precisely with the growth you want to achieve.
              </p>
            </div>
          </div>

          {/* Right Column - Dropdown Menu */}
          <div className="space-y-3">
            {dropdownItems.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-blue-200 transition-colors duration-200"
              >
                {/* Dropdown Header */}
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-blue-600">{item.stats}</span>
                        <span className="font-semibold text-gray-900">{item.title}</span>
                      </div>
                    </div>
                  </div>
                  {openDropdown === item.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {/* Dropdown Content */}
                {openDropdown === item.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Optional CTA within dropdown */}
                    <button className="mt-4 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-200">
                      Learn more about {item.title} →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;