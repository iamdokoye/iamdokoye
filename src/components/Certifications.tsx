import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  CheckCircle, 
  Clock, 
  ExternalLink, 
  Shield, 
  Cloud, 
  Container,
  BookOpen,
  Target,
  Calendar
} from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: "aws-saa",
      title: "AWS Certified Solutions Architect - Associate",
      provider: "Amazon Web Services",
      status: "certified",
      dateEarned: "2023-08-15",
      expiryDate: "2026-08-15",
      credentialId: "AWS-SAA-2023-DKY001",
      icon: Cloud,
      color: "border-orange-500 bg-orange-50 dark:bg-orange-950/20",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      description: "Validates expertise in designing distributed systems on AWS platform with security and cost optimization."
    },
    {
      id: "cks",
      title: "Certified Kubernetes Security Specialist (CKS)",
      provider: "Cloud Native Computing Foundation",
      status: "certified",
      dateEarned: "2023-11-20",
      expiryDate: "2026-11-20",
      credentialId: "CKS-2023-DKY002",
      icon: Shield,
      color: "border-blue-500 bg-blue-50 dark:bg-blue-950/20",
      skills: ["Kubernetes Security", "Container Runtime Security", "Network Policies", "RBAC"],
      description: "Demonstrates ability to secure container-based applications and Kubernetes platforms during build, deployment and runtime."
    },
    {
      id: "ckad",
      title: "Certified Kubernetes Application Developer (CKAD)",
      provider: "Cloud Native Computing Foundation",
      status: "certified",
      dateEarned: "2023-05-10",
      expiryDate: "2026-05-10",
      credentialId: "CKAD-2023-DKY003",
      icon: Container,
      color: "border-cyan-500 bg-cyan-50 dark:bg-cyan-950/20",
      skills: ["Kubernetes", "Container Orchestration", "Application Deployment", "Troubleshooting"],
      description: "Validates skills to design, build, configure, and expose cloud native applications for Kubernetes."
    },
    {
      id: "terraform",
      title: "HashiCorp Certified: Terraform Associate",
      provider: "HashiCorp",
      status: "in-progress",
      expectedDate: "2024-02-15",
      progress: 75,
      icon: Cloud,
      color: "border-purple-500 bg-purple-50 dark:bg-purple-950/20",
      skills: ["Infrastructure as Code", "Terraform", "Cloud Provisioning", "State Management"],
      description: "Validates practical knowledge of the open source HashiCorp Terraform skills."
    }
  ];

  const achievements = [
    {
      title: "100 Days of DevSecOps",
      description: "Completed comprehensive DevSecOps learning challenge",
      date: "2024-01-01",
      status: "ongoing",
      progress: 68,
      icon: Target,
      highlights: ["Daily learning logs", "Hands-on security projects", "Community engagement"]
    },
    {
      title: "AWS Security Specialty",
      description: "Advanced security certification in progress",
      date: "2024-03-01",
      status: "planned",
      progress: 25,
      icon: Shield,
      highlights: ["Advanced threat detection", "Compliance frameworks", "Incident response"]
    },
    {
      title: "DevSecOps Foundation",
      description: "Comprehensive foundation in DevSecOps practices",
      date: "2023-12-15",
      status: "completed",
      progress: 100,
      icon: BookOpen,
      highlights: ["Security integration", "CI/CD security", "Compliance automation"]
    }
  ];

  const learningPaths = [
    {
      category: "Cloud Security",
      certifications: ["AWS Security Specialty", "Azure Security Engineer", "GCP Cloud Security Engineer"],
      progress: 40,
      timeframe: "6 months"
    },
    {
      category: "Container Security",
      certifications: ["Docker Security", "Kubernetes Security", "Red Hat OpenShift Security"],
      progress: 75,
      timeframe: "4 months"
    },
    {
      category: "DevSecOps",
      certifications: ["DevSecOps Professional", "Security+", "CISSP"],
      progress: 60,
      timeframe: "8 months"
    }
  ];

  const getStatusBadge = (status: string, progress?: number) => {
    switch (status) {
      case "certified":
        return <Badge className="bg-green-600 text-white">Certified</Badge>;
      case "in-progress":
        return <Badge variant="secondary">{progress}% Complete</Badge>;
      case "planned":
        return <Badge variant="outline">Planned</Badge>;
      case "ongoing":
        return <Badge className="bg-blue-600 text-white">Ongoing</Badge>;
      case "completed":
        return <Badge className="bg-green-600 text-white">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isExpiringSoon = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    return expiry <= sixMonthsFromNow;
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Certifications & Achievements
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-gradient-primary">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuously expanding my expertise through industry-recognized certifications, 
            hands-on learning challenges, and professional development in DevSecOps and cloud technologies.
          </p>
        </div>

        {/* Current Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Current Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className={`shadow-medium border-2 ${cert.color}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                        <cert.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <CardDescription>{cert.provider}</CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(cert.status, cert.progress)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  {cert.status === "in-progress" && cert.progress && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="w-full" />
                      <div className="text-xs text-muted-foreground">
                        Expected completion: {formatDate(cert.expectedDate!)}
                      </div>
                    </div>
                  )}
                  
                  {cert.status === "certified" && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Earned: {formatDate(cert.dateEarned!)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>
                          Expires: {formatDate(cert.expiryDate!)}
                          {isExpiringSoon(cert.expiryDate!) && (
                            <Badge variant="destructive" className="ml-2 text-xs">
                              Renewal Due
                            </Badge>
                          )}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {cert.status === "certified" && (
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify Credential
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Challenges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Learning Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-medium border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <achievement.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      {getStatusBadge(achievement.status, achievement.progress)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{achievement.description}</CardDescription>
                  
                  {achievement.status !== "completed" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="w-full" />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {achievement.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {achievement.status === "completed" ? "Completed" : "Started"}: {formatDate(achievement.date)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Roadmap */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Learning Roadmap</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="shadow-medium border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {path.category}
                  </CardTitle>
                  <CardDescription>
                    Estimated completion: {path.timeframe}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Progress</span>
                      <span>{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} className="w-full" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Target Certifications:</h4>
                    <ul className="space-y-1">
                      {path.certifications.map((cert, certIndex) => (
                        <li key={certIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-medium border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Mindset</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm committed to staying current with the latest DevSecOps practices, cloud technologies, 
                and security frameworks. Always learning, always growing, always securing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View All Credentials
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Award className="mr-2 h-4 w-4" />
                  Discuss My Expertise
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;