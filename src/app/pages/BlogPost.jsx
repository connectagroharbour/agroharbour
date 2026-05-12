import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { useEffect } from "react";
import { blogPosts } from "./Blog";
import SEO from "../components/SEO";

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return (
    <main className="pt-24 pb-20 bg-white min-h-screen font-display">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.categories.join(', ')}
        ogImage={post.image}
        ogType="article"
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1B5E20] font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>

        <div className="mb-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-black uppercase tracking-widest rounded-full mb-6">
            {post.categories[0]}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-gray-500 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <User size={16} className="text-[#FFC107]" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#FFC107]" />
              {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#FFC107]" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-[2rem] overflow-hidden mb-16 shadow-2xl">
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover relative z-10"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 prose-headings:font-black prose-headings:text-gray-900 prose-a:text-[#1B5E20]">
          <p className="text-xl md:text-2xl leading-relaxed mb-10 font-medium text-gray-800">
            {post.excerpt}
          </p>
          <p className="mb-8 leading-relaxed">
            Welcome to this comprehensive guide on {post.title.toLowerCase()}. As modern agriculture continues to evolve, techniques like hydroponics and indoor farming are becoming increasingly vital for sustainable food production. This article dives deep into the best practices, setups, and nutrient management required to succeed.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6">The Importance of Controlled Environments</h2>
          <p className="mb-6 leading-relaxed">
            By removing unpredictable variables such as weather, pests, and soil quality, a controlled environment agriculture (CEA) system allows you to optimize every stage of the plant's life cycle. Whether you are growing leafy greens, microgreens, or fruiting plants like tomatoes and peppers, the principles remain the same: provide the exact nutrients, water, and light required.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Key Benefits to Remember</h3>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li><strong>Water Efficiency:</strong> Up to 90% more efficient use of water compared to traditional soil-based farming.</li>
            <li><strong>Higher Yields:</strong> Plants can be grown closer together, and multiple harvests can be achieved year-round.</li>
            <li><strong>No Soil-Borne Diseases:</strong> By eliminating soil, you significantly reduce the risk of common agricultural pests and diseases.</li>
            <li><strong>Location Independence:</strong> These systems can be implemented anywhere, from urban centers and warehouses to arid regions.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
          <p className="mb-8 leading-relaxed">
            Implementing these strategies will set you on the right path toward a thriving hydroponic setup. Always remember to monitor your EC and pH levels daily, ensure adequate airflow, and maintain a clean environment to prevent pathogens. Happy farming!
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {post.categories.map((cat, index) => (
              <span key={index} className="px-4 py-2 bg-gray-50 text-[#1B5E20] rounded-xl text-xs font-bold uppercase tracking-wider border border-[#1B5E20]/10">
                {cat}
              </span>
            ))}
          </div>
          <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#1B5E20] hover:bg-[#1B5E20]/10 transition-colors shadow-sm">
            <Share2 size={20} />
          </button>
        </div>
      </article>
    </main>
  );
}
