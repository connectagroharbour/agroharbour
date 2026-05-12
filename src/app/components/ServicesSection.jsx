import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { TestTube, Sprout, Package, Bug, Droplets, LineChart, Waves, Layers, Zap } from "lucide-react";

const ICON_MAP = {
  TestTube,
  Sprout,
  Package,
  Bug,
  Droplets,
  LineChart,
  Waves,
  Layers,
  Zap,
};

const services = [
  // Hydroponics Services First
  {
    icon: "Sprout",
    title: "Nursery Management",
    description: "Professional seed germination and young plant propagation for healthy, robust crop starts.",
    gradient: "from-sky-400 to-blue-500",
  },
  {
    icon: "Waves",
    title: "Hydroponics NFT Farming",
    description: "Nutrient Film Technique systems for water-efficient leafy green cultivation.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: "Package",
    title: "Dutch Bucket Farming",
    description: "Specialized systems for high-yield large fruiting plants and vegetables.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: "Layers",
    title: "Vertical Wall & Vertical Towers",
    description: "High-density vertical hydroponic solutions to turn any wall or minimal footprint into a lush, productive garden.",
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    icon: "Zap",
    title: "Microgreens Farming",
    description: "Specialized setups for rapidly growing nutrient-dense microgreens with quick turnaround cycles.",
    gradient: "from-teal-400 to-emerald-500",
  },
  // Soil Services
  {
    icon: "TestTube",
    title: "Soil Testing & Analysis",
    description: "Comprehensive soil health assessment to optimize nutrient management and crop yields.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: "Bug",
    title: "Pest and Disease Management",
    description: "Early identification and management of plant pests and diseases using advanced diagnostic methods.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: "Droplets",
    title: "Irrigation & Fertigation",
    description: "Water management solutions for efficient irrigation and resource conservation.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: "LineChart",
    title: "Yield Optimization",
    description: "Data-driven strategies to maximize crop productivity and farm profitability.",
    gradient: "from-purple-500 to-indigo-600",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Agricultural Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From soil to harvest, we provide expert guidance at every stage of your farming journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Sprout;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-[#F1F8E9] to-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with animation */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} p-3 shadow-lg`}
                >
                  <Icon className="w-full h-full text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2E7D32] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2E7D32] to-[#FFC107] rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
