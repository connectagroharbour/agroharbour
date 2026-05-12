import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { BlogSection } from "../components/BlogSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { ContactSection } from "../components/ContactSection";
import SEO from "../components/SEO";

export function Home() {
  return (
    <main className="overflow-hidden">
      <SEO 
        title="Home"
        description="AgroHarbour provides science-driven agricultural solutions, including hydroponic consulting, soil testing, and modern farming techniques to maximize crop yields."
        keywords="agriculture, hydroponics, soil testing, crop management, smart farming, agronomist consulting"
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
