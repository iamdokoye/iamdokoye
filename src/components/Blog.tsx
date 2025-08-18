import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Day 1-10: Setting Up Secure CI/CD Pipelines",
      excerpt: "Starting my 100 Days of DevSecOps journey with implementing security gates in GitLab CI/CD pipelines using SAST, DAST, and container scanning.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["CI/CD", "Security", "GitLab", "DevSecOps"],
      featured: true
    },
    {
      title: "Kubernetes RBAC: Beyond the Basics",
      excerpt: "Deep dive into Role-Based Access Control implementation for multi-tenant Kubernetes clusters with practical examples and security best practices.",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Kubernetes", "RBAC", "Security", "Multi-tenancy"],
      featured: true
    },
    {
      title: "Infrastructure as Code Security with Terraform",
      excerpt: "How to implement security scanning and compliance checks in your Terraform workflows using tools like Checkov and Terrascan.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["Terraform", "IaC", "Security", "Compliance"],
      featured: false
    },
    {
      title: "Container Security: From Image Build to Runtime",
      excerpt: "Complete guide to securing containerized applications throughout their lifecycle using Trivy, Falco, and runtime security monitoring.",
      date: "2024-01-01",
      readTime: "10 min read",
      tags: ["Containers", "Docker", "Security", "Monitoring"],
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            100 Days of DevSecOps
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learning & <span className="gradient-primary bg-clip-text text-transparent">Sharing Knowledge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow my journey as I explore advanced DevSecOps concepts, share practical insights, 
            and document lessons learned from real-world implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className={`group shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer ${
                post.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  {post.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground ml-auto">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Challenge Progress */}
        <Card className="shadow-medium border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">100 Days Challenge Progress</h3>
            </div>
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>15/100 Days</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '15%' }}
                ></div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Currently exploring advanced Kubernetes security and infrastructure automation. 
              New posts published weekly covering practical DevSecOps implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                View All Posts
              </Button>
              <Button variant="default">
                Subscribe for Updates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Blog;