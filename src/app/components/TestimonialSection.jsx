import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Quote, Star, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ranjan Vaid",
    role: "Agrolytic Farm, Jammu & Kashmir",
    content: "Mr. Punit Gupta worked with us closely on our Agrolytic Farm for bell pepper and strawberry cultivation. His precise technical consulting on nutrient management, disease control, and crop scheduling made the entire setup successful and highly profitable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Vivek Chandra",
    role: "Hariyali Farm, Gurgaon",
    content: "Mr. Punit Gupta worked on our Hariyali Farm to implement scientific practices for cultivating broccoli, beetroot, radish, and other vine crops. His customized fertigation scheduling and soil enrichment protocols dramatically improved our yield and crop health.",
    rating: 5,
  },
  {
    id: 4,
    name: "Shaurya Arya",
    role: "R.K. Arya Farm, Sambhal (UP)",
    content: "Working with Mr. Punit Gupta on our R.K. Arya Farm in Sambhal (UP) was a turning point. He guided us through every stage of cultivating cauliflower, vine crops, lettuce, and other leafy greens. His deep agronomic insights on pest management and climate control made a massive difference.",
    rating: 5,
  },
];

// Duplicate the testimonials to create a seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-widest px-4 py-1.5 bg-[#F1F8E9] rounded-full">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Trusted by Progressive Farmers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering measurable results and sustainable growth through scientific expertise.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Continuous Scroll Container */}
        <motion.div
          className="flex whitespace-nowrap gap-8 py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[350px] md:w-[450px] bg-[#F1F8E9]/50 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden border border-[#2E7D32]/10"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-[#2E7D32]/10" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-800 font-medium mb-10 leading-relaxed whitespace-normal italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#2E7D32] text-sm font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}

