import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Target, Users, TrendingUp, GraduationCap, Heart, Lightbulb, Leaf, CheckCircle, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import SEO from "../components/SEO";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Heart,
      title: "Farmer-Centric",
      description: "Every decision we make is guided by what's best for farmers and their land.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Combining traditional wisdom with cutting-edge agricultural science.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promoting practices that protect the environment for future generations.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on measurable outcomes that improve farm profitability.",
    },
  ];

  const achievements = [
    { icon: Users, value: "500+", label: "Farmers Helped" },
    { icon: TrendingUp, value: "35%", label: "Avg. Yield Increase" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: GraduationCap, value: "10+", label: "Projects" },
  ];

  const team = [
    {
      name: "Mr. Punit Gupta",
      role: "Founder & Lead Agronomist",
      bio: "Dedicated to transforming traditional farming with modern scientific practices and sustainable solutions.",
      image: "punit.jpeg",
      gradient: "from-emerald-500 to-teal-600",
      expertise: ["Hydroponics Expert", "Strawberry Production Expert", "Microgreens Expert"],
      social: { linkedin: "#", mail: "mailto:punit@agroharbour.com" }
    },
    {
      name: "Mr. Karan Khanger",
      role: "Co-founder & Senior Agronomist",
      bio: "Leading expert in Bellpaper Production with extensive experience in driving modern agricultural strategies.",
      image: "Co-founder.jpeg",
      gradient: "from-purple-500 to-pink-600",
      expertise: ["Bellpaper Production", "Farm Management", "Business Strategy"],
      social: { linkedin: "#", mail: "mailto:karan@agroharbour.com" }
    },
    {
      name: "Mr. Abhishek Yadav",
      role: "Hydroponics Specialist",
      bio: "Expert in designing and maintaining high-yield NFT and Dutch Bucket systems for commercial use.",
      image: "team1.jpeg",
      gradient: "from-blue-500 to-indigo-600",
      expertise: ["NFT System Design", "Nutrient Optimization", "Automated Farming"],
      social: { linkedin: "#", mail: "mailto:sarah@agroharbour.com" }
    },
    {
      name: "Mr. Savarmal Bairwa",
      role: "Head of Research",
      bio: "Specializes in plant pathology and developing disease-resistant crop varieties for arid regions.",
      image: "team2.jpeg",
      gradient: "from-cyan-500 to-blue-600",
      expertise: ["Plant Pathology", "Genetic Analysis", "Seed Technology"],
      social: { linkedin: "#", mail: "mailto:vikram@agroharbour.com" }
    },
    {
      name: "Mr. Sandeep Chauhan",
      role: "Cucumber Expert",
      bio: "Specialist in high-yield cucumber cultivation, focusing on greenhouse environments and optimal nutrient delivery systems.",
      image: "team3.jpeg",
      gradient: "from-green-500 to-emerald-600",
      expertise: ["Cucumber Cultivation", "Greenhouse Management", "Yield Optimization"],
      social: { linkedin: "#", mail: "mailto:sandeep@agroharbour.com" }
    },
    {
      name: "Mr. Naitik Jilowa",
      role: "Soil Farming Expert",
      bio: "Specialist in analyzing and optimizing soil health for maximum yield and sustainable agricultural practices.",
      image: "team4.jpeg",
      gradient: "from-yellow-500 to-yellow-600",
      expertise: ["Soil Farming", "Soil Health Analysis", "Crop Nutrition"],
      social: { linkedin: "#", mail: "mailto:naitik@agroharbour.com" }
    },
  ];

  return (
    <main>
      <SEO
        title="About Us"
        description="Learn more about AgroHarbour, our mission to empower farmers with science-driven solutions, and our team of expert agronomists."
        keywords="about agroharbour, agronomist team, punit gupta, agricultural mission, sustainable farming india"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About AgroHarbour</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Empowering farmers with science-driven solutions for sustainable and profitable agriculture since 2024.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="pic2.jpeg"
                alt="AgroHarbour Founder Mr. Punit Gupta, a professional agronomist specializing in modern scientific farming."
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Mr. Punit Gupta
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                With over 5 years of hands-on experience in the fields of across India, Mr. Punit Gupta has dedicated his career to helping farmers achieve sustainable success. His journey began with a deep interest in the agricultural heritage of Rajasthan, which drove him to master the science of modern agronomy.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Today, he combines his deep agricultural roots with cutting-edge scientific knowledge to provide personalized consulting services that address each farm's unique needs. His holistic approach considers soil health, water conservation, crop selection, and economic viability to create comprehensive farming solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mr. Punit Gupta's work has empowered hundreds of farmers to optimize their yields while minimizing environmental impact. His mission is simple: to help farmers grow more with less, ensuring prosperity for the farming community and the land.
              </p>
            </motion.div>
          </div>

          {/* Achievements */}
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#F1F8E9] to-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 text-[#2E7D32] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[#2E7D32] mb-1">{achievement.value}</p>
                  <p className="text-sm text-gray-600">{achievement.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Values */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated team of professionals working together to revolutionize agriculture through science and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-gray-100"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Image Container */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500`} />
                      <img
                        src={member.image}
                        alt={`AgroHarbour team member: ${member.name}, ${member.role}`}
                        className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-md"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors">
                          {member.name}
                        </h3>
                      </div>

                      <p className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white text-xs font-bold uppercase tracking-wider mb-4`}>
                        {member.role}
                      </p>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Core Expertise</p>
                        <div className="flex flex-wrap gap-3">
                          {member.expertise.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-[#2E7D32]" />
                              <span className="text-sm font-medium text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
