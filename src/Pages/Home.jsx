import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { Footer } from "../components/footer";
import { ProjectsSection } from "../components/Projects";
import { ContactSection } from "../components/Contact";

export const Home =()=>{
    return (<div>
        <StarBackground/>
        <NavBar/>
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
            <Footer/>
        </main>
    </div>
   
    );
};