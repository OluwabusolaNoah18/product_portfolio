import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import IntroSection from "@/components/portfolio/IntroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import CurrentRoleSection from "@/components/portfolio/CurrentRoleSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <SkillsSection />
      <CurrentRoleSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
