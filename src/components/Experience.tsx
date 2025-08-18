import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior DevSecOps Engineer",
      company: "TechSecure Solutions",
      location: "Lagos, Nigeria (Remote)",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading infrastructure security initiatives and automation for enterprise clients. Architecting secure CI/CD pipelines and implementing zero-trust security models.",
      achievements: [
        "Reduced security vulnerabilities by 75% through automated scanning and remediation",
        "Implemented Kubernetes security policies affecting 50+ microservices",
        "Led team of 4 DevOps engineers in cloud migration projects",
        "Established security compliance frameworks for SOC 2 certification"
      ],
      technologies: ["Kubernetes", "AWS", "Terraform", "Falco", "Trivy", "ArgoCD"]
    },
    {
      title: "Backend Developer & DevOps Engineer",
      company: "InnovateTech Hub",
      location: "Abuja, Nigeria",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Developed scalable backend systems and managed cloud infrastructure for fintech applications. Focused on API development and database optimization.",
      achievements: [
        "Built RESTful APIs serving 1M+ requests daily with 99.9% uptime",
        "Optimized database queries reducing response time by 60%",
        "Implemented automated testing reducing deployment time by 50%",
        "Mentored 3 junior developers in backend best practices"
      ],
      technologies: ["Node.js", "PostgreSQL", "Docker", "AWS", "Redis", "GraphQL"]
    },
    {
      title: "DevOps Intern",
      company: "CloudFirst Solutions",
      location: "Remote",
      period: "2020 - 2021",
      type: "Internship",
      description: "Assisted in cloud infrastructure setup and automation. Gained hands-on experience with containerization and CI/CD pipeline development.",
      achievements: [
        "Automated deployment processes using Jenkins and Docker",
        "Contributed to infrastructure-as-code initiatives",
        "Monitored system performance and implemented alerting",
        "Participated in incident response and troubleshooting"
      ],
      technologies: ["Docker", "Jenkins", "Linux", "Bash", "Monitoring", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Professional Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-gradient-primary">Career Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over 5 years of progressive experience in DevOps, security, and backend development, 
            working with diverse teams to build and secure enterprise-grade systems.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="leading-relaxed">
                  {exp.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto shadow-medium border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities, innovative projects, 
                and ways to make technology more secure and efficient.
              </p>
              <Badge variant="secondary" className="px-4 py-2">
                Available for Full-time & Contract Opportunities
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;