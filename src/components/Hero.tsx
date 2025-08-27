import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-16 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Daniel Okoye</span>
                <br />
                <span className="text-gradient-primary">
                  DevSecOps Engineer
                </span>
                <br />
                <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  & Backend Developer
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Building secure, automated, and scalable systems that power the future of technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Navigate to contact section"
              >
                Connect with Me
                <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Cloud Platforms</div>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="DevSecOps engineering illustration showing cloud security, automation, and infrastructure" 
                className="w-full h-auto rounded-2xl shadow-strong"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;