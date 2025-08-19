import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, Code, Play, ArrowRight } from "lucide-react";
import { useState } from "react";

const SecurityLab = () => {
  const [selectedDemo, setSelectedDemo] = useState("kubernetes");

  const securityFeatures = [
    {
      id: "kubernetes",
      title: "Kubernetes Security Automation",
      icon: Shield,
      description: "RBAC policies, runtime monitoring with Falco, and automated vulnerability scanning",
      beforeAfter: {
        before: "Manual security reviews, delayed vulnerability detection, inconsistent RBAC policies",
        after: "Automated security gates, real-time threat detection, policy-as-code enforcement"
      },
      tools: ["Falco", "Trivy", "OPA Gatekeeper", "Pod Security Standards"],
      status: "Implemented"
    },
    {
      id: "iac",
      title: "Infrastructure as Code Security",
      icon: Lock,
      description: "Terraform modules with built-in security best practices and compliance checks",
      beforeAfter: {
        before: "Manual infrastructure setup, security configurations as afterthought, drift detection",
        after: "Immutable infrastructure, security by default, automated compliance validation"
      },
      tools: ["Terraform", "Checkov", "tfsec", "Terraform Cloud"],
      status: "Production"
    },
    {
      id: "monitoring",
      title: "Security Monitoring & Compliance",
      icon: Eye,
      description: "Real-time security monitoring with automated incident response",
      beforeAfter: {
        before: "Reactive security monitoring, manual log analysis, delayed incident response",
        after: "Proactive threat detection, automated alerting, instant security response"
      },
      tools: ["Prometheus", "Grafana", "ELK Stack", "PagerDuty"],
      status: "Active"
    }
  ];

  const complianceBadges = [
    { name: "CIS Benchmarks", level: "Level 1 & 2", color: "bg-green-500" },
    { name: "OWASP Top 10", level: "Compliant", color: "bg-blue-500" },
    { name: "Kubernetes Security", level: "Hardened", color: "bg-purple-500" },
    { name: "SOC 2 Type II", level: "Aligned", color: "bg-orange-500" },
    { name: "ISO 27001", level: "Principles", color: "bg-red-500" },
    { name: "NIST Framework", level: "Implemented", color: "bg-indigo-500" }
  ];

  const selectedFeature = securityFeatures.find(f => f.id === selectedDemo);

  return (
    <section id="security-lab" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Security Laboratory
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            DevSecOps in <span className="text-gradient-primary">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore interactive demonstrations of my security automation, compliance frameworks, 
            and DevSecOps implementations that protect infrastructure and applications at scale.
          </p>
        </div>

        {/* Compliance Badges */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Compliance & Best Practices</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {complianceBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 shadow-soft border border-border/50">
                <div className={`w-3 h-3 rounded-full ${badge.color}`}></div>
                <div>
                  <div className="font-medium text-sm">{badge.name}</div>
                  <div className="text-xs text-muted-foreground">{badge.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card 
              key={feature.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-strong ${
                selectedDemo === feature.id ? 'ring-2 ring-primary/30 border-primary/50' : 'border-border/50'
              }`}
              onClick={() => setSelectedDemo(feature.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {feature.status}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="mt-4">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before & After Showcase */}
        {selectedFeature && (
          <Card className="shadow-medium border-border/50 mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <selectedFeature.icon className="h-5 w-5 text-primary" />
                {selectedFeature.title} - Impact Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400">Before Implementation</h4>
                  </div>
                  <p className="text-muted-foreground bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-l-4 border-orange-500">
                    {selectedFeature.beforeAfter.before}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <h4 className="font-semibold text-green-600 dark:text-green-400">After Implementation</h4>
                  </div>
                  <p className="text-muted-foreground bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border-l-4 border-green-500">
                    {selectedFeature.beforeAfter.after}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Interactive Demo Section */}
        <Card className="shadow-medium border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Security Demo Console
            </CardTitle>
            <CardDescription>
              Explore real security automation workflows and see the code behind them
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="scan" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="scan">Vulnerability Scan</TabsTrigger>
                <TabsTrigger value="policy">Policy Enforcement</TabsTrigger>
                <TabsTrigger value="monitor">Runtime Monitoring</TabsTrigger>
              </TabsList>
              
              <TabsContent value="scan" className="space-y-4">
                <div className="bg-card border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Container Security Scan</h4>
                    <Button size="sm" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Run Scan
                    </Button>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-600 dark:text-green-400">$ trivy image --security-checks vuln,secret myapp:latest</div>
                    <div className="text-muted-foreground mt-2">
                      ✓ Scanning container image...<br/>
                      ✓ Found 0 HIGH/CRITICAL vulnerabilities<br/>
                      ✓ No secrets detected<br/>
                      ✓ Security scan passed
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="policy" className="space-y-4">
                <div className="bg-card border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">RBAC Policy Validation</h4>
                    <Button size="sm" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Validate
                    </Button>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-blue-600 dark:text-blue-400">$ kubectl auth can-i --list --as=system:serviceaccount:default:myapp</div>
                    <div className="text-muted-foreground mt-2">
                      ✓ Pod security policies enforced<br/>
                      ✓ Network policies applied<br/>
                      ✓ RBAC permissions validated<br/>
                      ✓ Least privilege principle followed
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="monitor" className="space-y-4">
                <div className="bg-card border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Falco Runtime Security</h4>
                    <Button size="sm" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Monitor
                    </Button>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-purple-600 dark:text-purple-400">$ falco --daemon</div>
                    <div className="text-muted-foreground mt-2">
                      ✓ Runtime security monitoring active<br/>
                      ✓ Anomaly detection enabled<br/>
                      ✓ Real-time alerts configured<br/>
                      ✓ Threat hunting in progress
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ArrowRight className="mr-2 h-4 w-4" />
                View Full Implementation on GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SecurityLab;