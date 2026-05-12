import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { Calendar, User, ArrowRight, ChevronRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 7,
    title: "Growing Strawberries Hydroponically: Sweet Success Year-Round",
    excerpt: "Learn the secrets to cultivating perfect, vibrant red strawberries in your hydroponic greenhouse.",
    image: "/assets/blog/strawberry.png",
    date: "2026-05-01",
    author: "AgroHarbour Expert",
    categories: ["Greenhouse Farming", "Hydroponics Crops"],
    readTime: "7 min read",
  },
  {
    id: 8,
    title: "Microgreens: The Ultimate Guide to Indoor Vertical Farming",
    excerpt: "Maximize your yield and nutrition by growing fresh, lush microgreens using indoor vertical farming techniques.",
    image: "/assets/blog/microgreens.png",
    date: "2026-04-28",
    author: "AgroHarbour Expert",
    categories: ["Indoor Farming", "Vertical Farming"],
    readTime: "6 min read",
  },
  {
    id: 9,
    title: "Maximizing Bell Pepper Yields in Modern Greenhouses",
    excerpt: "Discover the best practices for growing colorful and vibrant hydroponic bell peppers.",
    image: "/assets/blog/bell_pepper.png",
    date: "2026-04-25",
    author: "AgroHarbour Expert",
    categories: ["Greenhouse Farming", "Crop Management"],
    readTime: "8 min read",
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-black uppercase tracking-widest rounded-full mb-4 border border-[#1B5E20]/10">
              Hydroponics Knowledge Hub
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Latest from the <span className="text-[#1B5E20]">Field</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stay ahead with professional techniques, market trends, and technical guides curated by AgroHarbour experts.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/blog"
              className="group flex items-center gap-3 bg-white text-[#1B5E20] px-8 py-4 rounded-2xl font-bold shadow-xl shadow-gray-200/50 hover:bg-[#1B5E20] hover:text-white transition-all duration-300"
            >
              Explore All Articles
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col border border-gray-100 focus-within:ring-4 focus-within:ring-[#1B5E20]/20 outline-none"
              tabIndex="0"
            >
              <Link to={`/blog/${post.id}`} className="flex flex-col flex-1 outline-none">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Agricultural insights: ${post.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur-md text-[#1B5E20] text-[10px] font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">
                      {post.categories[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#FFC107]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#FFC107]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1B5E20] transition-colors duration-300 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between group/btn">
                    <span className="text-sm font-bold text-[#1B5E20] tracking-tight">Read Full Insight</span>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover/btn:bg-[#1B5E20] transition-colors duration-300">
                      <ChevronRight size={20} className="text-[#1B5E20] group-hover/btn:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
