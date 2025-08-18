import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cloud, Shield, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code,
      skills: ["Node.js", "Next.js", "TypeScript", "Python", "Golang", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
      color: "bg-blue-500"
    },
    {
      title: "DevOps / Cloud",
      icon: Cloud,
      skills: ["Terraform", "Kubernetes", "Docker", "Ansible", "AWS", "CI/CD", "Jenkins", "GitHub Actions", "ArgoCD"],
      color: "bg-green-500"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Kubernetes Security", "Infrastructure Security", "RBAC", "Trivy", "Falco", "Compliance", "Security Automation", "Penetration Testing"],
      color: "bg-red-500"
    },
    {
      title: "Tools & Technologies",
      icon: Server,
      skills: ["Git", "Linux", "Nginx", "Redis", "Prometheus", "Grafana", "ELK Stack", "Vault", "Istio"],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Skills & Technologies
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning backend development, cloud infrastructure, 
            and security automation to build robust, scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Core Proficiencies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "DevSecOps", level: 95 },
              { name: "Backend Development", level: 90 },
              { name: "Cloud Infrastructure", level: 88 },
              { name: "Security Automation", level: 85 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;