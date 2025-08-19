import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Star, 
  GitFork, 
  Code, 
  Activity,
  ExternalLink,
  TrendingUp,
  Calendar,
  Users
} from "lucide-react";
import { useState, useEffect } from "react";

const GitHubStats = () => {
  const [stats, setStats] = useState({
    totalRepos: 0,
    totalStars: 0,
    totalForks: 0,
    totalCommits: 0,
    contributions: 0,
    loading: true
  });

  // Mock GitHub stats - In a real app, you'd fetch from GitHub API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({
        totalRepos: 42,
        totalStars: 284,
        totalForks: 67,
        totalCommits: 1250,
        contributions: 365,
        loading: false
      });
    }, 1500);
  }, []);

  const languages = [
    { name: "JavaScript", percentage: 28, color: "bg-yellow-500" },
    { name: "TypeScript", percentage: 24, color: "bg-blue-500" },
    { name: "Python", percentage: 18, color: "bg-green-500" },
    { name: "Go", percentage: 15, color: "bg-cyan-500" },
    { name: "Shell", percentage: 8, color: "bg-gray-500" },
    { name: "HCL", percentage: 7, color: "bg-purple-500" }
  ];

  const pinnedRepos = [
    {
      name: "terraform-aws-modules",
      description: "Reusable Terraform modules for AWS with security best practices",
      language: "HCL",
      stars: 89,
      forks: 23,
      isPrivate: false,
      topics: ["terraform", "aws", "security", "iac", "devsecops"]
    },
    {
      name: "k8s-security-automation",
      description: "Kubernetes security automation with Falco, Trivy, and RBAC policies",
      language: "Go",
      stars: 142,
      forks: 31,
      isPrivate: false,
      topics: ["kubernetes", "security", "falco", "trivy", "rbac"]
    },
    {
      name: "student-management-system",
      description: "Full-stack student management platform with role-based access control",
      language: "TypeScript",
      stars: 76,
      forks: 18,
      isPrivate: false,
      topics: ["nextjs", "nodejs", "postgresql", "typescript", "rbac"]
    },
    {
      name: "decentra-store",
      description: "Decentralized file storage using IPFS and blockchain verification",
      language: "Go",
      stars: 54,
      forks: 12,
      isPrivate: false,
      topics: ["ipfs", "blockchain", "golang", "smart-contracts", "web3"]
    },
    {
      name: "devops-automation-scripts",
      description: "Collection of DevOps automation scripts and CI/CD templates",
      language: "Shell",
      stars: 37,
      forks: 8,
      isPrivate: false,
      topics: ["devops", "automation", "cicd", "scripts", "docker"]
    },
    {
      name: "security-monitoring-stack",
      description: "Complete security monitoring solution with Prometheus and Grafana",
      language: "Python",
      stars: 63,
      forks: 15,
      isPrivate: false,
      topics: ["monitoring", "security", "prometheus", "grafana", "alerting"]
    }
  ];

  const contributionData = [
    { month: "Jan", commits: 45 },
    { month: "Feb", commits: 67 },
    { month: "Mar", commits: 89 },
    { month: "Apr", commits: 134 },
    { month: "May", commits: 156 },
    { month: "Jun", commits: 98 },
    { month: "Jul", commits: 123 },
    { month: "Aug", commits: 145 },
    { month: "Sep", commits: 167 },
    { month: "Oct", commits: 189 },
    { month: "Nov", commits: 134 },
    { month: "Dec", commits: 112 }
  ];

  const achievements = [
    {
      title: "Arctic Code Vault Contributor",
      description: "Contributed code to the 2020 GitHub Archive Program",
      icon: Star,
      date: "2020"
    },
    {
      title: "Pull Shark",
      description: "Opened pull requests in multiple repositories",
      icon: GitFork,
      date: "2023"
    },
    {
      title: "YOLO",
      description: "Merged a pull request without review",
      icon: Activity,
      date: "2024"
    },
    {
      title: "Quickdraw",
      description: "Closed an issue or pull request within 5 min of opening",
      icon: TrendingUp,
      date: "2024"
    }
  ];

  return (
    <section id="github-stats" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            GitHub Analytics
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Code <span className="text-gradient-primary">Contributions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Track my open-source contributions, project activity, and development patterns through 
            comprehensive GitHub analytics and repository insights.
          </p>
        </div>

        {/* GitHub Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-medium border-border/50 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                {stats.loading ? (
                  <div className="animate-pulse bg-muted h-6 w-16 mx-auto rounded"></div>
                ) : (
                  stats.totalRepos
                )}
              </div>
              <div className="text-sm text-muted-foreground">Public Repositories</div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-border/50 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                {stats.loading ? (
                  <div className="animate-pulse bg-muted h-6 w-16 mx-auto rounded"></div>
                ) : (
                  stats.totalStars
                )}
              </div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-border/50 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <GitFork className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                {stats.loading ? (
                  <div className="animate-pulse bg-muted h-6 w-16 mx-auto rounded"></div>
                ) : (
                  stats.totalForks
                )}
              </div>
              <div className="text-sm text-muted-foreground">Total Forks</div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-border/50 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                {stats.loading ? (
                  <div className="animate-pulse bg-muted h-6 w-16 mx-auto rounded"></div>
                ) : (
                  stats.contributions
                )}
              </div>
              <div className="text-sm text-muted-foreground">Contributions (2024)</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Language Distribution */}
          <Card className="shadow-medium border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Top Languages
              </CardTitle>
              <CardDescription>
                Most used programming languages across repositories
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`${lang.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contribution Graph */}
          <Card className="shadow-medium border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Contribution Activity
              </CardTitle>
              <CardDescription>
                Monthly commit activity throughout the year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contributionData.map((data, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-xs w-8 text-muted-foreground">{data.month}</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(data.commits / 200) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs w-8 text-muted-foreground">{data.commits}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-primary">{stats.totalCommits.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Commits</div>
              </div>
            </CardContent>
          </Card>

          {/* GitHub Achievements */}
          <Card className="shadow-medium border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Achievements
              </CardTitle>
              <CardDescription>
                GitHub badges and special recognitions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{achievement.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{achievement.description}</div>
                    <Badge variant="secondary" className="text-xs mt-2">
                      {achievement.date}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Pinned Repositories */}
        <Card className="shadow-medium border-border/50 mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5 text-primary" />
              Pinned Repositories
            </CardTitle>
            <CardDescription>
              Featured projects showcasing my expertise in DevSecOps and backend development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pinnedRepos.map((repo, index) => (
                <Card key={index} className="border-border/50 hover:shadow-medium transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{repo.name}</CardTitle>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                    <CardDescription className="text-sm">
                      {repo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        {repo.language}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forks}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{repo.topics.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-medium border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Github className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Explore My Code</h3>
              <p className="text-muted-foreground mb-6">
                Dive into my repositories to see detailed implementations, documentation, and real-world DevSecOps solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://github.com/iamdokoye', '_blank')}
                >
                  <Github className="h-4 w-4" />
                  Visit GitHub Profile
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/iamdokoye?tab=repositories', '_blank')}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Browse Repositories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;