import { StarBackground } from "@/Components/StarBackground";
import { AboutSection } from "../Components/AboutSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import { ProjectsSection } from "../Components/ProjectsSection";
import { SkillsSection } from "../Components/SkillsSection";
import { TestimonialSection } from "../Components/Testimonial";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <TestimonialSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};
