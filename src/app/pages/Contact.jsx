import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { Send, Phone, Mail, MapPin, CheckCircle, Clock, Calendar, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const iframeRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData for the request
    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSubmit.append(key, formData[key]);
    });

    try {
      // Send the data using fetch
      await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // This is required for Google Apps Script
        body: new URLSearchParams(formDataToSubmit),
      });

      // Show success state
      setIsSubmitted(true);
      // Clear form data
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or contact us directly via WhatsApp.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <SEO 
        title="Contact Us"
        description="Get in touch with AgroHarbour for professional agricultural consultancy, hydroponic setup inquiries, and soil health assessments."
        keywords="contact agroharbour, agricultural consulting jaipur, farm visit request, agricultural expert contact"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your farm? Let's discuss how we can help you achieve your agricultural goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/919783441513?text=Hello%20AgroHarbour!%20I%20am%20interested%20in%20your%20agricultural%20consultancy%20services.%20Please%20guide%20me%20on%20how%20to%20proceed."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-[#E8F5E9] rounded-xl border border-[#C8E6C9] hover:shadow-md transition-all group"
                >
                  <div className="bg-[#25D366] p-3 rounded-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                    <p className="text-gray-600 group-hover:text-[#2E7D32] transition-colors">+91 97834-41513</p>
                    <p className="text-sm text-gray-500">Available for instant chat</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-[#F1F8E9] rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919783441513" className="text-gray-600 hover:text-[#2E7D32] transition-colors">+91 9783441513</a>
                      <a href="tel:+917568179097" className="text-gray-600 hover:text-[#2E7D32] transition-colors">+91 7568179097</a>
                    </div>
                  </div>
                </motion.div>

                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect.agroharbour@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send us an email"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-[#F1F8E9] rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-600 group-hover:text-[#2E7D32] transition-colors">connect.agroharbour@gmail.com</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://www.google.com/maps/search/?api=1&query=Sector+19+Pratap+Nagar+Jaipur+Rajasthan+302033"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View our office location on Google Maps"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-[#F1F8E9] rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Office</p>
                    <p className="text-gray-600 group-hover:text-[#2E7D32] transition-colors">Sector 19, Pratap Nagar</p>
                    <p className="text-gray-600 group-hover:text-[#2E7D32] transition-colors">Jaipur, Rajasthan 302033</p>
                  </div>
                </motion.a>
              </div>


            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-[#F1F8E9] to-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <iframe
                  name="hidden_iframe"
                  id="hidden_iframe"
                  style={{ display: "none" }}
                  ref={iframeRef}
                ></iframe>

                {/* 
                  NOTE: Form submission to Google Apps Script requires the script 
                  to be deployed as a Web App with access set to "Anyone".
                  If you see a 403 Forbidden error, please check the script's 
                  deployment settings in the Google Apps Script editor.
                */}
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-[#2E7D32]" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Message Sent!</h2>
                    <p className="text-gray-600 max-w-md mx-auto text-lg">
                      Thank you for reaching out to AgroHarbour. Our agricultural experts have received your inquiry and will get back to you within 24 hours.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 text-[#2E7D32] font-semibold hover:underline mt-4"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Send another message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
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
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
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
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
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
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <motion.select
                          whileFocus={{ scale: 1.01 }}
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                            focusedField === "subject"
                              ? "border-[#2E7D32] shadow-lg shadow-[#2E7D32]/20"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <option value="">Select a subject</option>
                          <option value="consultation">Book Consultation</option>
                          <option value="soil-testing">Soil Testing</option>
                          <option value="crop-planning">Crop Planning</option>
                          <option value="general">General Inquiry</option>
                        </motion.select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
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
                        rows={6}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none resize-none ${
                          focusedField === "message"
                            ? "border-[#2E7D32] shadow-lg shadow-[#2E7D32]/20"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="Tell us about your farming needs and goals..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                      <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-500" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg h-96 relative w-full"
          >
            <iframe 
              title="Google Maps Location"
              src="https://maps.google.com/maps?q=Sector+19+Pratap+Nagar+Jaipur+Rajasthan+302033&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
