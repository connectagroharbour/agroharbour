import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData for the request
    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSubmit.append(key, formData[key]);
    });
    // Add professional subject for the consultation request
    formDataToSubmit.append("subject", "Book Consultation");

    try {
      // Send the data using fetch
      await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formDataToSubmit),
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Book Your Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your farm? Let's discuss how we can help you achieve your agricultural goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 shadow-xl text-center space-y-6 border border-gray-100"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-12 h-12 text-[#2E7D32]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your consultation request has been received successfully.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl inline-block">
                  <p className="text-[#2E7D32] font-medium flex items-center gap-2 justify-center">
                    <Send className="w-4 h-4" />
                    Our experts will contact you within 24 hours.
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  A confirmation email has been sent to your inbox.
                </p>
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === "name"
                          ? "border-[#2E7D32] shadow-lg shadow-[#2E7D32]/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === "email"
                          ? "border-[#2E7D32] shadow-lg shadow-[#2E7D32]/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === "phone"
                        ? "border-[#2E7D32] shadow-lg shadow-[#2E7D32]/20"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    placeholder="+91 97834-41513"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === "message"
                        ? "border-[#2E7D32] shadow-lg shadow-[#2E7D32]/20"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    placeholder="Tell us about your farming needs..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Book Consultation
                  <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-500" />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919783441513" className="text-white/80 hover:text-white transition-colors">+91 9783441513</a>
                      <a href="tel:+917568179097" className="text-white/80 hover:text-white transition-colors">+91 7568179097</a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=connect.agroharbour@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      connect.agroharbour@gmail.com
                    </a>
                    <p className="text-sm text-white/60">We reply within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Sector+19+Pratap+Nagar+Jaipur+Rajasthan+302033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <p className="font-semibold mb-1">Office</p>
                    <p className="text-white/80 group-hover:text-white transition-colors">Sector 19, Pratap Nagar</p>
                    <p className="text-white/80 group-hover:text-white transition-colors">Jaipur, Rajasthan 302033</p>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-[#F1F8E9] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {[
                  "5+ years of professional experience",
                  "Personalized farm consultations",
                  "Science-backed recommendations",
                  "Proven track record of success",
                  "Ongoing support and guidance",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-[#2E7D32] flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
