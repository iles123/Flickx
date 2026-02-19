import { motion } from 'framer-motion';
import { Eye, Rocket, Target } from 'lucide-react';

function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-[#0057A0] mx-auto mt-4"></div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
             A thriving African creative ecosystem where talent is nurtured, stories are celebrated, and creators compete on the world stage.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100"
          >
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
             Democratize access to world-class creative education and resources across Africa, empowering storytellers to create authentic content and build sustainable careers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Mission;