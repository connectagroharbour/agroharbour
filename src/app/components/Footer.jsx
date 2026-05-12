import { Link } from "react-router";
import { Sprout, Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img 
                src="/Agro-logo.png" 
                alt="AgroHarbour Logo" 
                className="h-28 w-auto brightness-0 invert transition-transform group-hover:scale-105 duration-300" 
              />
            </Link>
            <p className="text-white/80 mb-4">
              Empowering farmers with science-driven agricultural solutions for sustainable and profitable farming.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/agroharbour?igsh=MWMwNmdvanVsc3k3aA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/agroharbour/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services" 
                  state={{ category: "hydroponics" }} 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Hydroponics Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  state={{ category: "soil" }} 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Soil Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919783441513" className="hover:text-white transition-colors">+91 9783441513</a>
                  <a href="tel:+917568179097" className="hover:text-white transition-colors">+91 7568179097</a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect.agroharbour@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  connect.agroharbour@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Sector+19+Pratap+Nagar+Jaipur+Rajasthan+302033" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Sector 19 Pratap Nagar, Jaipur, Rajasthan 302033
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} AgroHarbour. All rights reserved. Designed with care for sustainable farming.</p>
        </div>
      </div>
    </footer>
  );
}
