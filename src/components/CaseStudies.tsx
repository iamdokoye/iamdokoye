import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertCircle, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Users, 
  Clock,
  ArrowRight,
  ExternalLink,
  BarChart3,
  Target
} from "lucide-react";
import { useState } from "react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "k8s-security",
      title: "Kubernetes Security Automation",
      category: "DevSecOps",
      timeline: "6 months",
      team: "3 engineers",
      problem: {
        title: "Manual Security Processes Creating Vulnerabilities",
        description: "Large-scale Kubernetes deployment suffering from manual security reviews, inconsistent RBAC policies, and delayed vulnerability detection. Security incidents increased by 40% over 6 months.",
        challenges: [
          "Manual pod security policy enforcement",
          "Inconsistent RBAC configurations across namespaces", 
          "Delayed vulnerability scanning (weekly vs real-time)",
          "No runtime threat detection",
          "Security reviews bottlenecking deployments"
        ],
        metrics: {
          "Security Incidents": "↑ 40%",
          "Deployment Time": "6+ hours",
          "Policy Violations": "~25/week",
          "Detection Time": "3-7 days"
        }
      },
      solution: {
        title: "Automated Security-First DevSecOps Pipeline",
        description: "Implemented comprehensive security automation with runtime monitoring, policy-as-code, and automated compliance validation.",
        implementation: [
          "Falco runtime security monitoring with custom rules",
          "Automated Trivy vulnerability scanning in CI/CD",
          "OPA Gatekeeper for policy enforcement",
          "RBAC-as-code with GitOps workflow",
          "Integrated security gates in deployment pipeline"
        ],
        technologies: ["Kubernetes", "Falco", "Trivy", "OPA Gatekeeper", "GitHub Actions", "Prometheus", "Grafana"]
      },
      outcome: {
        title: "85% Reduction in Security Incidents",
        description: "Transformed security posture with automated monitoring, faster detection, and proactive threat prevention.",
        improvements: [
          "85% reduction in security incidents",
          "Real-time vulnerability detection (< 5 minutes)",
          "100% policy compliance across all namespaces",
          "Deployment time reduced from 6+ hours to 45 minutes",
          "Zero manual security reviews required"
        ],
        metrics: {
          "Security Incidents": "↓ 85%",
          "Deployment Time": "45 minutes",
          "Policy Violations": "0/week",
          "Detection Time": "< 5 minutes"
        }
      },
      impact: {
        cost: "$240K annually saved in security incident response",
        performance: "6x faster deployments with embedded security",
        reliability: "99.9% uptime with proactive threat prevention"
      }
    },
    {
      id: "student-management",
      title: "Student Management System",
      category: "Full-Stack Development",
      timeline: "4 months",
      team: "2 developers",
      problem: {
        title: "Legacy System Hindering Educational Operations",
        description: "University struggling with paper-based processes, disconnected systems, and manual grade management affecting 5,000+ students and 200+ faculty members.",
        challenges: [
          "Manual student enrollment and course registration",
          "Disconnected grade management across departments",
          "No real-time communication between stakeholders",
          "Security vulnerabilities in legacy systems",
          "Scalability issues during peak registration periods"
        ],
        metrics: {
          "Processing Time": "2-3 days",
          "Manual Errors": "~15%",
          "System Downtime": "4-6 hours/week",
          "User Satisfaction": "2.1/5"
        }
      },
      solution: {
        title: "Modern Full-Stack Platform with RBAC",
        description: "Built comprehensive student management system with role-based access, real-time notifications, and scalable architecture.",
        implementation: [
          "Next.js frontend with responsive design",
          "Node.js backend with TypeScript",
          "PostgreSQL with optimized schemas",
          "JWT-based authentication with RBAC",
          "Real-time notifications and messaging"
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "JWT", "Socket.io", "Redis"]
      },
      outcome: {
        title: "10x Faster Operations with 99.9% Uptime",
        description: "Streamlined all educational processes with automated workflows and real-time collaboration features.",
        improvements: [
          "Instant student enrollment and course registration",
          "Real-time grade updates and parent notifications",
          "Automated report generation and analytics",
          "Mobile-responsive design for all stakeholders",
          "Comprehensive audit trails and compliance"
        ],
        metrics: {
          "Processing Time": "< 5 minutes",
          "Manual Errors": "< 1%",
          "System Downtime": "< 30 min/month",
          "User Satisfaction": "4.7/5"
        }
      },
      impact: {
        cost: "$180K annually saved in administrative overhead",
        performance: "10x faster enrollment and grade processing",
        reliability: "99.9% uptime with 5,000+ concurrent users"
      }
    }
  ];

  const [selectedStudy, setSelectedStudy] = useState("k8s-security");
  const currentStudy = caseStudies.find(study => study.id === selectedStudy) || caseStudies[0];

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Case Studies
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real-World <span className="text-gradient-primary">Impact Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Deep dive into how I've solved complex technical challenges, delivered measurable business value, 
            and transformed operations through strategic DevSecOps and backend engineering.
          </p>
        </div>

        {/* Case Study Selection */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/3 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
            {caseStudies.map((study) => (
              <Card 
                key={study.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedStudy === study.id ? 'ring-2 ring-primary/30 border-primary/50' : 'border-border/50 hover:shadow-medium'
                }`}
                onClick={() => setSelectedStudy(study.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {study.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {study.timeline}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {study.team}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Study Details */}
          <div className="lg:w-2/3">
            <Card className="shadow-medium border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{currentStudy.title}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {currentStudy.category} • {currentStudy.timeline} • {currentStudy.team}
                    </CardDescription>
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="problem" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="problem">Problem</TabsTrigger>
                    <TabsTrigger value="solution">Solution</TabsTrigger>
                    <TabsTrigger value="outcome">Outcome</TabsTrigger>
                    <TabsTrigger value="impact">Impact</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="problem" className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <AlertCircle className="h-5 w-5 text-orange-500" />
                        <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
                          {currentStudy.problem.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {currentStudy.problem.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Key Challenges</h4>
                          <ul className="space-y-2">
                            {currentStudy.problem.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Before Metrics</h4>
                          <div className="space-y-3">
                            {Object.entries(currentStudy.problem.metrics).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                                <span className="text-sm font-medium">{key}</span>
                                <Badge variant="destructive" className="text-xs">
                                  {value}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="solution" className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-5 w-5 text-blue-500" />
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                          {currentStudy.solution.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {currentStudy.solution.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Implementation Approach</h4>
                          <ul className="space-y-2">
                            {currentStudy.solution.implementation.map((item, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {currentStudy.solution.technologies.map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-blue-500/30 text-blue-600 dark:text-blue-400">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="outcome" className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                          {currentStudy.outcome.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {currentStudy.outcome.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Key Improvements</h4>
                          <ul className="space-y-2">
                            {currentStudy.outcome.improvements.map((improvement, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm">
                                <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {improvement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">After Metrics</h4>
                          <div className="space-y-3">
                            {Object.entries(currentStudy.outcome.metrics).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                                <span className="text-sm font-medium">{key}</span>
                                <Badge variant="default" className="text-xs bg-green-600">
                                  {value}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="impact" className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold">Business Impact</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-green-700 dark:text-green-300">Cost Savings</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-green-600 dark:text-green-400">
                              {currentStudy.impact.cost}
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-blue-700 dark:text-blue-300">Performance</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              {currentStudy.impact.performance}
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-purple-700 dark:text-purple-300">Reliability</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-purple-600 dark:text-purple-400">
                              {currentStudy.impact.reliability}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-primary/20">
                        <h4 className="font-semibold mb-2 text-primary">Project Highlights</h4>
                        <p className="text-sm text-muted-foreground">
                          This project demonstrates my ability to identify critical system vulnerabilities, 
                          design comprehensive solutions, and deliver measurable business value through 
                          strategic implementation of DevSecOps practices and modern development methodologies.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-medium border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Infrastructure?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help solve your DevSecOps challenges and deliver similar results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View More Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;