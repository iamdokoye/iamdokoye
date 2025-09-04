import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import resumeUrl from "./assets/Resume.pdf?url";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-soft' 
          : 'bg-background/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-bold text-sm">DO</span>
            </div>
            <span className="font-bold text-lg text-gradient-primary group-hover:scale-105 transition-transform duration-200">
              Daniel Okoye
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium relative group"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 ml-4"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
            <ThemeToggle />
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Availability badge */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Badge variant="secondary" className="text-xs">
                Available
              </Badge>
            </div>
            
            {/* Theme toggle - always visible on mobile */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/98 backdrop-blur-md shadow-lg">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200 text-sm font-medium rounded-lg"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 py-2 flex flex-col gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 justify-center"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <Badge variant="secondary" className="text-xs">
                    Available for opportunities
                  </Badge>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;