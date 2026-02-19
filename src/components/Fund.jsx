import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Target,
  ArrowRight,
  Clock,
  CheckCircle,
  Sparkles
} from 'lucide-react';



function Fund() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="fund" className="py-20 bg-[#0057A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FlickX Options
            </h2>
            <div className="w-20 h-1 bg-[#0057A0] mx-auto mt-4"></div>
          </motion.div>
        </div>

        {/* funding card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


          {/* Creative Grants */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0057A0] px-10 py-8 rounded-2xl border border-white"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Creative Grants</h3>
            <h6 className="text-lg font-bold text-white mb-4">Up to ₦10 Million</h6>
            <p className="text-gray-200 font-normal">
              Non-repayable grants for early-stage projects with strong creative vision and social impact. No equity required.
            </p>
          </motion.div>

          {/* Production Investment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0057A0] px-10 py-8 rounded-2xl border border-white"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Production Investment</h3>
             <h6 className="text-lg font-bold text-white mb-4">Up to ₦10 Million</h6>
            <p className="text-gray-200 font-normal">
              Equity-based investment for production-ready projects with commercial potential and clear distribution plans.
            </p>
          </motion.div>

          {/* Co-Production Deals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0057A0] px-10 py-8 rounded-2xl border border-white"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Co-Production Deals</h3>
             <h6 className="text-lg font-bold text-white mb-4">Up to ₦10 Million</h6>
            <p className="text-gray-200 font-normal">
             Strategic partnerships for established creators looking to scale. Shared resources and global distribution access.
            </p>
          </motion.div>


            {/* Innovation Fund */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0057A0] px-10 py-8 rounded-2xl border border-white"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Innovation Fund</h3>
             <h6 className="text-lg font-bold text-white mb-4">Up to ₦10 Million</h6>
            <p className="text-gray-200 font-normal">
              Special funding for experimental projects using new technologies, formats, or groundbreaking storytelling approaches.
            </p>
          </motion.div>
        </div>


      </div>
    </section>
  );
}


export default Fund;