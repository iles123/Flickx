import { motion } from 'framer-motion';
import { Heart, Shield, Users, Zap, Target, Globe } from 'lucide-react';

function Corevalues() {
  // return (
  //   <section id="core-values" className="py-20 bg-gray-50">
  //     <div className="max-w-7xl mx-auto px-4">
  //       <div className="text-center mb-16">
  //         <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
  //         <p className="text-gray-600">The principles that guide everything we do</p>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  //         {coreValues.map((value) => (
  //           <motion.div
  //             key={value.id}
  //             initial={{ opacity: 0, y: 20 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             className="text-center p-6"
  //           >
  //             <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white`}>
  //               {value.icon}
  //             </div>
  //             <h3 className={`text-xl font-bold mb-2 ${value.textColor}`}>{value.title}</h3>
  //             <p className="text-gray-600 text-sm">{value.description}</p>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );



  return (
    <section id="core-values" className="py-20 bg-[#0057A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core Values
            </h2>
            <div className="w-20 h-1 bg-[#0057A0] mx-auto mt-4"></div>
          </motion.div>
        </div>

        {/* Corecard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


          {/* African-Centered */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0057A0] px-10 py-8 rounded-2xl border border-white"
          >
            <div className='px-8 py-6 text-white font-semibold text-5xl'>01</div>
            <h3 className="text-3xl font-bold text-white mb-4">African-Centered</h3>
            <p className="text-gray-200 font-normal">
              We celebrate authentic African voices, perspectives, and stories rooted in excellence.
            </p>
          </motion.div>

          {/* Excellence First */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0057A0] px-10 py-8 rounded-2xl border border-white"
          >
            <div className='px-8 py-6 text-white font-semibold text-5xl'>02</div>
            <h3 className="text-3xl font-bold text-white mb-4">Excellence First</h3>
            <p className="text-gray-200 font-normal">
              World-class quality in everything from courses to facilities, mentors to support.
            </p>
          </motion.div>

          {/* Community-Driven */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0057A0] px-10 py-8 rounded-2xl border border-white"
          >
            <div className='px-8 py-6 text-white font-semibold text-5xl'>03</div>
            <h3 className="text-3xl font-bold text-white mb-4">Community-Driven</h3>
            <p className="text-gray-200 font-normal">
             We celebrate authentic African voices, perspectives, and stories rooted in excellence.
            </p>
          </motion.div>


            {/* Impact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0057A0] px-10 py-8 rounded-2xl border border-white"
          >
            <div className='px-8 py-6 text-white font-semibold text-5xl'>04</div>
            <h3 className="text-3xl font-bold text-white mb-4">Impact</h3>
            <p className="text-gray-200 font-normal">
              We push boundaries and embrace new technologies to create meaningful industry impact.
            </p>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

export default Corevalues;