import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useMemo } from "react";
import { useInView } from "motion/react";
import { Link } from "react-router";
import { Calendar, User, Tag, Clock, Search, ArrowRight, ChevronRight, SortAsc, SortDesc } from "lucide-react";
import SEO from "../components/SEO";

export const blogPosts = [
  {
    id: 7,
    title: "Growing Strawberries Hydroponically: Sweet Success Year-Round",
    excerpt: "Learn the secrets to cultivating perfect, vibrant red strawberries in your hydroponic greenhouse.",
    image: "/assets/blog/strawberry.png",
    date: "2026-05-01",
    author: "AgroHarbour Expert",
    categories: ["Greenhouse Farming", "Hydroponics Crops", "Commercial Farming"],
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 8,
    title: "Microgreens: The Ultimate Guide to Indoor Vertical Farming",
    excerpt: "Maximize your yield and nutrition by growing fresh, lush microgreens using indoor vertical farming techniques.",
    image: "/assets/blog/microgreens.png",
    date: "2026-04-28",
    author: "AgroHarbour Expert",
    categories: ["Indoor Farming", "Vertical Farming", "Hydroponics Crops"],
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 9,
    title: "Maximizing Bell Pepper Yields in Modern Greenhouses",
    excerpt: "Discover the best practices for growing colorful and vibrant hydroponic bell peppers.",
    image: "/assets/blog/bell_pepper.png",
    date: "2026-04-25",
    author: "AgroHarbour Expert",
    categories: ["Greenhouse Farming", "Hydroponics Crops", "Crop Management"],
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 10,
    title: "Hydroponic Cucumbers: High-Yield Vine Management",
    excerpt: "Essential tips for managing cucumber vines and ensuring fresh, green harvests in your hydroponic setup.",
    image: "/assets/blog/cucumber.png",
    date: "2026-04-20",
    author: "AgroHarbour Expert",
    categories: ["Greenhouse Farming", "Hydroponics Crops", "Growing Techniques"],
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 11,
    title: "Cultivating Perfect Cherry Tomatoes in Hydroponics",
    excerpt: "A comprehensive guide to growing ripe, vibrant red cherry tomatoes on vines using modern hydroponics.",
    image: "/assets/blog/cherry_tomato.png",
    date: "2026-04-15",
    author: "AgroHarbour Expert",
    categories: ["Greenhouse Farming", "Hydroponics Crops", "Nutrient Solutions"],
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 1,
    title: "Hydroponic Farming at Home — Complete Guide for India 2026",
    excerpt: "Discover the step-by-step process of setting up a successful hydroponic farm at your home in India. Learn about climate control, seed selection, and more.",
    image: "/assets/blog/lettuce_system.png",
    date: "2026-04-22",
    author: "AgroHarbour Expert",
    categories: ["Advanced Techniques", "Eco Farming", "Future Agriculture", "Hydroponic Systems", "Smart Farming", "Sustainable Practices", "Urban Hydroponics"],
    readTime: "8 min read",
    featured: true,
  },
];

export function Blog() {
  const categories = useMemo(() => {
    const cats = new Set(["Show All"]);
    blogPosts.forEach(post => {
      post.categories.forEach(cat => cats.add(cat));
    });
    return Array.from(cats);
  }, []);

  const [activeCategory, setActiveCategory] = useState("Show All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Date");
  const [sortOrder, setSortOrder] = useState("Desc");

  const filteredAndSortedPosts = useMemo(() => {
    let results = blogPosts.filter(post => {
      const matchesCategory = activeCategory === "Show All" || post.categories.includes(activeCategory);
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    results.sort((a, b) => {
      let comparison = 0;
      if (sortBy === "Date") {
        comparison = new Date(a.date) - new Date(b.date);
      } else {
        comparison = a.title.localeCompare(b.title);
      }
      return sortOrder === "Desc" ? -comparison : comparison;
    });

    return results;
  }, [activeCategory, searchQuery, sortBy, sortOrder]);

  return (
    <main className="pt-20 bg-white min-h-screen font-display">
      <SEO 
        title="Agricultural Blog"
        description="Stay updated with the latest trends in hydroponics, crop management, and sustainable farming through our expert-led blog posts."
        keywords="agricultural blog, hydroponics guides, farming tips india, crop management news, agroharbour blog"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
              Expert <span className="text-[#1B5E20]">Blogs</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-10">
              Your comprehensive guide to modern hydroponics, sustainable farming, and agricultural technology.
            </p>

            <div className="max-w-2xl mx-auto relative group">
              <input
                type="text"
                placeholder="Search hydroponic guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-5 pl-16 rounded-3xl border-2 border-gray-100 focus:border-[#1B5E20]/30 focus:outline-none focus:ring-4 focus:ring-[#1B5E20]/5 shadow-xl transition-all font-medium text-lg"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1B5E20] transition-colors" size={24} />
            </div>
          </motion.div>
        </div>
      </section>


      {/* Categories & Sorting UI Header - Removed sticky behavior as it was hiding content */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm font-black text-gray-400 uppercase tracking-widest">
                <span className="text-gray-900 border-r border-gray-200 pr-6">Sort:</span>
                <div className="flex gap-4">
                  {["Date", "Name"].map(s => (
                    <button 
                      key={s}
                      onClick={() => setSortBy(s)}
                      className={`hover:text-[#1B5E20] transition-colors ${sortBy === s ? "text-[#1B5E20]" : ""}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4 border-l border-gray-200 pl-6">
                  {["Desc", "Asc"].map(o => (
                    <button 
                      key={o}
                      onClick={() => setSortOrder(o)}
                      className={`hover:text-[#1B5E20] transition-colors ${sortOrder === o ? "text-[#1B5E20]" : ""}`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#1B5E20] text-white shadow-lg"
                      : "bg-white text-gray-500 border border-gray-100 hover:border-[#1B5E20]/30 hover:text-[#1B5E20]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section id="blog-grid" className="py-24 bg-white scroll-mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedPosts.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group flex flex-col focus-within:ring-4 focus-within:ring-[#1B5E20]/20 rounded-[2.5rem] outline-none transition-all"
                  tabIndex="0"
                >
                  <Link to={`/blog/${post.id}`} className="flex flex-col flex-1 outline-none">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] mb-8 shadow-xl bg-gray-50">
                      <img
                        src={post.image}
                        alt={`Agricultural insights: ${post.title}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    </div>

                    <div className="flex flex-col flex-1 px-2">
                      <div className="flex flex-wrap gap-x-3 gap-y-2 mb-4">
                        {post.categories.map((cat, i) => (
                          <span key={i} className="text-[10px] font-black uppercase text-[#1B5E20] tracking-[0.2em] opacity-60">
                            {cat} {i < post.categories.length - 1 && "•"}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-5 group-hover:text-[#1B5E20] transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-8 border-t border-gray-50">
                        <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          <Calendar size={14} className="text-[#FFC107]" />
                          <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div 
                          className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#1B5E20] group-hover:bg-[#1B5E20] group-hover:text-white transition-all shadow-sm"
                        >
                          <ChevronRight size={24} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredAndSortedPosts.length === 0 && (
            <div className="text-center py-40 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
              <div className="mb-6 mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Search size={32} className="text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No results for this selection</h3>
              <p className="text-gray-500 mb-8">Try choosing another category or clearing your search.</p>
              <button 
                onClick={() => {setActiveCategory("Show All"); setSearchQuery("");}}
                className="bg-[#1B5E20] text-white px-8 py-3 rounded-2xl font-bold hover:shadow-xl transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
