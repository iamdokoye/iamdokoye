import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Terraform IaC Modules",
      description: "Reusable AWS infrastructure modules with security best practices, automated compliance checks, and cost optimization. Includes VPC, EKS, RDS, and security group configurations.",
      image: "🏗️",
      technologies: ["Terraform", "AWS", "Security", "IaC", "CI/CD"],
      githubUrl: "https://github.com/iamdokoye/terraform-aws-modules",
      liveUrl: "",
      featured: true
    },
    {
      title: "Kubernetes Security Automation",
      description: "Open-source project integrating RBAC policies, container scanning with Trivy, runtime security with Falco, and automated CI/CD security gates for Kubernetes clusters.",
      image: "🔒",
      technologies: ["Kubernetes", "Falco", "Trivy", "RBAC", "Security", "Go"],
      githubUrl: "https://github.com/iamdokoye/k8s-security-automation",
      liveUrl: "",
      featured: true
    },
    {
      title: "Student Management System",
      description: "Full-stack application with role-based access control supporting students, teachers, and administrators. Features course management, grading, and real-time notifications.",
      image: "🎓",
      technologies: ["Node.js", "Next.js", "PostgreSQL", "TypeScript", "Python"],
      githubUrl: "https://github.com/iamdokoye/student-management-system",
      liveUrl: "",
      featured: false
    },
    {
      title: "Decentra-Store",
      description: "Blockchain-backed decentralized file storage platform using IPFS for distributed storage, smart contracts for access control, and Go microservices for backend operations.",
      image: "🔗",
      technologies: ["IPFS", "Golang", "Solidity", "Blockchain", "Smart Contracts"],
      githubUrl: "https://github.com/iamdokoye/decentra-store",
      liveUrl: "",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Featured Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the <span className="text-gradient-primary">Future of Infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From secure cloud infrastructure to innovative blockchain solutions, 
            here are some projects that showcase my expertise in DevSecOps and backend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group shadow-soft hover:shadow-strong transition-all duration-300 border-border/50 hover:border-primary/30 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-200">
                        {project.title}
                        {project.featured && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            Featured
                          </Badge>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                </div>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                {project.liveUrl && (
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://github.com/iamdokoye', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;