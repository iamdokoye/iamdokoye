import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code, Cloud, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security First",
      description: "DevSecOps expertise with focus on infrastructure security and compliance automation"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Strong backend skills with modern technologies and scalable architecture design"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Kubernetes orchestration, AWS infrastructure, and CI/CD pipeline optimization"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "5+ years experience mentoring teams and driving DevOps transformation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate About <span className="text-gradient-primary">Secure Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Daniel Okoye, a 21-year-old Igbo software engineer from Nigeria with a deep passion for 
            building secure, automated, and scalable systems. With 5+ years of DevOps experience, 
            I specialize in the intersection of development, security, and operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey began with a curiosity about how systems work and a drive to make them better. 
                Over the years, I've evolved from a backend developer into a DevSecOps engineer, 
                focusing on automation, infrastructure security, and scalable cloud architectures.
              </p>
              <p>
                I believe in the power of combining development agility with security best practices. 
                My approach integrates security into every stage of the development lifecycle, 
                ensuring that innovation never comes at the cost of protection.
              </p>
              <p>
                When I'm not coding or configuring infrastructure, you'll find me contributing to 
                open-source projects, sharing knowledge through my "100 Days of DevSecOps" challenge, 
                or exploring the latest in cloud-native technologies.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core values */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Core Values</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Security by Design", "Continuous Learning", "Open Source", "Team Collaboration", "Innovation", "Quality"].map((value) => (
              <Badge key={value} variant="secondary" className="px-4 py-2 text-sm">
                {value}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;