import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, GraduationCap, Users, TrendingUp } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Users, value: "500+", label: "Farmers Helped" },
    { icon: TrendingUp, value: "35%", label: "Avg. Yield Increase" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: GraduationCap, value: "10+", label: "Projects" },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#F1F8E9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-5"
          >
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#2E7D32]/5 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#1B5E20]/5 rounded-full blur-3xl -z-0" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="pic1.jpeg"
                className="w-full h-[600px] object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/10 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] p-3 rounded-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-[#2E7D32]">5+</p>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">
              About the Expert
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Mr. Punit Gupta
              <span className="block text-2xl text-gray-600 mt-2">Professional Agronomist</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 5 years of hands-on experience in sustainable agriculture, I've helped hundreds of farmers transform their practices and maximize their yields. My passion lies in bridging the gap between traditional farming wisdom and modern agricultural science.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Specializing in Strawberry, Bell Pepper, Microgreens Production and Hydroponics Systems, We provide personalized consultations that address each farm's unique challenges and opportunities.
            </p>



            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white rounded-xl p-4 text-center"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
