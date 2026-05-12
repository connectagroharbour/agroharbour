import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import {
  TestTube,
  Sprout,
  Package,
  Bug,
  Droplets,
  LineChart,
  CheckCircle,
  ArrowRight,
  Waves,
  Zap,
  Layers,
  Thermometer,
  ChevronDown
} from "lucide-react";
import { Link, useLocation } from "react-router";
import SEO from "../components/SEO";

const services = [
  // Soil Services
  {
    category: "soil",
    icon: TestTube,
    title: "Soil Testing & Analysis",
    description: "Comprehensive soil health assessment to optimize nutrient management and crop yields.",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Complete nutrient profile analysis",
      "pH level testing and recommendations",
      "Organic matter assessment",
      "Soil structure evaluation",
      "Customized fertilization plan",
    ],
  },
  {
    category: "soil",
    icon: Sprout,
    title: "Crop Planning",
    description: "Strategic crop selection and rotation planning for maximum profitability and sustainability.",
    gradient: "from-green-500 to-emerald-600",
    features: [
      "Crop rotation strategy",
      "Seasonal planting calendar",
      "Variety selection guidance",
      "Market demand analysis",
      "Risk assessment and mitigation",
    ],
  },
  {
    category: "soil",
    icon: Package,
    title: "Fertilizer Guidance",
    description: "Customized fertilization programs based on soil analysis and crop requirements.",
    gradient: "from-lime-500 to-green-600",
    features: [
      "Nutrient requirement calculation",
      "Application timing schedule",
      "Organic vs synthetic recommendations",
      "Cost-benefit analysis",
      "Environmental impact assessment",
    ],
  },
  {
    category: "soil",
    icon: Bug,
    title: "Pest and Disease Management",
    description: "Early identification and management of plant pests and diseases using advanced diagnostic methods.",
    gradient: "from-amber-500 to-orange-600",
    features: [
      "Visual disease diagnostics",
      "Treatment recommendations",
      "Prevention strategies",
      "Integrated pest management",
    ],
  },
  {
    category: "soil",
    icon: Droplets,
    title: "Irrigation & Fertigation",
    description: "Water management solutions for efficient irrigation and resource conservation.",
    gradient: "from-blue-500 to-cyan-600",
    features: [
      "Water requirement analysis",
      "System efficiency evaluation",
      "Scheduling optimization",
      "Drip vs sprinkler comparison",
      "Drought management planning",
    ],
  },
  {
    category: "soil",
    icon: LineChart,
    title: "Yield Optimization",
    description: "Data-driven strategies to maximize crop productivity and farm profitability.",
    gradient: "from-purple-500 to-indigo-600",
    features: [
      "Performance benchmarking",
      "Data collection and analysis",
      "Precision agriculture integration",
      "ROI improvement strategies",
      "Long-term growth planning",
    ],
  },
  // Hydroponics Services
  {
    category: "hydroponics",
    icon: Sprout,
    title: "Nursery Management",
    description: "Professional seed germination and young plant propagation for healthy, robust crop starts.",
    gradient: "from-sky-400 to-blue-500",
    features: [
      "Optimal germination conditions",
      "Disease-free propagation",
      "Custom seedling trays",
      "Root development tracking",
      "Seamless transplant preparation",
    ],
  },
  {
    category: "hydroponics",
    icon: Waves,
    title: "Hydroponics NFT Farming",
    description: "Nutrient Film Technique systems designed for efficient growth of leafy greens and herbs with minimal water waste.",
    gradient: "from-blue-400 to-blue-600",
    features: [
      "Continuous nutrient flow systems",
      "High oxygen delivery to roots",
      "Ideal for lettuce, kale & herbs",
      "Low maintenance maintenance",
      "Commercial scale layouts",
    ],
  },
  {
    category: "hydroponics",
    icon: Package,
    title: "Hydroponics Dutch Bucket Farming",
    description: "Versatile systems optimized for larger, fruiting plants that require more root space and support.",
    gradient: "from-cyan-400 to-blue-500",
    features: [
      "Individual plant control",
      "Best for tomatoes & cucumbers",
      "Scalable modular design",
      "Recirculating nutrient system",
      "High yield per plant",
    ],
  },
  {
    category: "hydroponics",
    icon: Layers,
    title: "Vertical Wall & Vertical Towers",
    description: "High-density vertical hydroponic solutions to turn any wall or minimal footprint into a lush, productive garden.",
    gradient: "from-indigo-400 to-purple-500",
    features: [
      "Space-saving vertical design",
      "360-degree & wall-mounted options",
      "Highest yield per square foot",
      "Automated irrigation & lighting",
      "Aesthetic & productive results",
    ],
  },
  {
    category: "hydroponics",
    icon: Zap,
    title: "Microgreens Farming",
    description: "Specialized setups for rapidly growing nutrient-dense microgreens with quick turnaround cycles.",
    gradient: "from-teal-400 to-emerald-500",
    features: [
      "Fast crop cycles (7-14 days)",
      "Multi-tier rack systems",
      "Climate & humidity control",
      "Specialized lighting recipes",
      "High profitability margin",
    ],
  },
  {
    category: "hydroponics",
    icon: Layers,
    title: "Hydroponics Internship and Workshop",
    description: "Interactive training sessions and comprehensive internship programs providing real-world experience in modern hydroponic operations.",
    gradient: "from-emerald-400 to-teal-500",
    features: [
      "Expert-led training sessions",
      "Hands-on farm experience",
      "System setup & maintenance",
      "Certificate of completion",
    ],
  },
];

export function Services() {
  const location = useLocation();
  const ref = useRef(null);

  // Initialize from location state if available (e.g. from Navbar dropdown)
  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.category || "hydroponics"
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  const filteredServices = services.filter(
    (service) => service.category === selectedCategory
  );

  const categories = [
    { id: "hydroponics", label: "Hydroponics Services", icon: Waves },
    { id: "soil", label: "Soil Services", icon: Sprout },
  ];

  return (
    <main>
      <SEO 
        title="Our Services"
        description="Explore our range of agricultural consultancy services, from soil testing and crop planning to advanced hydroponic system design and vertical farming."
        keywords="hydroponics services, soil testing india, vertical farming, microgreens farming, agricultural consultancy"
      />
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC107] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Expertise</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From traditional soil farming to modern hydroponic systems, we provide end-to-end solutions for the future of agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Selector Section */}
      <section className="py-12 bg-white border-b border-gray-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">Select Service Type</p>

            {/* Desktop Tabs */}
            <div className="hidden md:flex bg-gray-100 p-1.5 rounded-2xl">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${isActive
                      ? "bg-white text-[#2E7D32] shadow-md"
                      : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                      }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-[#2E7D32]" : "text-gray-400"}`} />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Dropdown */}
            <div className="md:hidden w-full relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white border-2 border-[#2E7D32] rounded-xl text-[#2E7D32] font-bold shadow-lg"
              >
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = categories.find(c => c.id === selectedCategory).icon;
                    return <Icon className="w-5 h-5" />;
                  })()}
                  {categories.find(c => c.id === selectedCategory).label}
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setIsDropdownOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors ${selectedCategory === cat.id
                            ? "bg-[#F1F8E9] text-[#2E7D32]"
                            : "text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-bold">{cat.label}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-gray-50/50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-gray-100"
                  >
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 shadow-lg flex items-center justify-center`}
                        >
                          <Icon className="w-full h-full text-white" />
                        </motion.div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#2E7D32] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="bg-gray-50/50 rounded-2xl p-6 mb-8 border border-gray-100">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">What's included</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <CheckCircle className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                              <span className="text-sm font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                      >
                        Book Service
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Farm?</h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
                Whether you're looking to upgrade your soil health or dive into hydroponics, our experts are here to guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFC107] text-[#1B5E20] px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Book Free Consultation
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <a
                  href="https://wa.me/919783441513?text=Hello%20AgroHarbour!%20I%20am%20interested%20in%20your%20agricultural%20consultancy%20services.%20Please%20guide%20me%20on%20how%20to%20proceed."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Chat with Expert
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

