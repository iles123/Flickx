import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield, Globe, Zap } from 'lucide-react';
import { MoveUpRight } from 'lucide-react';

function Whychooseflickx() {
  const reasons = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "All-in-One Platform",
      desc: "Learn, fund, and grow in one place",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Mentors",
      desc: "Learn from industry leaders",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Results",
      desc: "85% success rate among graduates",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      desc: "Connect with audiences worldwide",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <section id='why-choose-flickx' className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FlickX?</h2>
          <p className="text-gray-600">The smart choice for Africa's creative talent</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 ${reason.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                {reason.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#0057A0] text-white px-8 py-3 rounded-[50px] font-semibold hover:bg-[#32A8E0] transition-colors">
            Start Your Journey  <MoveUpRight className="ml-2 inline-block" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Whychooseflickx;