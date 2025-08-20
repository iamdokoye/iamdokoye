import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SkillsRadar from "@/components/SkillsRadar";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SecurityLab from "@/components/SecurityLab";
import CiCdPipeline from "@/components/CiCdPipeline";
import ApiPlayground from "@/components/ApiPlayground";
import CaseStudies from "@/components/CaseStudies";
import GitHubStats from "@/components/GitHubStats";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollIndicator />
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Skills />
        <SkillsRadar />
        <SecurityLab />
        <CiCdPipeline />
        <ApiPlayground />
        <Projects />
        <CaseStudies />
        <Experience />
        <GitHubStats />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
