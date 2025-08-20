import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  GitBranch, 
  Cog, 
  Shield, 
  Rocket, 
  Eye, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  Play,
  Pause,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const CiCdPipeline = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const pipelineSteps = [
    {
      id: "source",
      title: "Source Code",
      icon: GitBranch,
      description: "Code commit triggers pipeline",
      details: "Git webhook triggers automated pipeline on code push to main branch",
      duration: "~10s",
      tools: ["Git", "GitHub Actions", "Webhooks"],
      status: "completed"
    },
    {
      id: "build",
      title: "Build & Test",
      icon: Cog,
      description: "Compile, test, and package application",
      details: "Unit tests, integration tests, code coverage analysis, and artifact generation",
      duration: "~2-5min",
      tools: ["Docker", "Jest", "SonarQube", "npm/yarn"],
      status: "running"
    },
    {
      id: "security",
      title: "Security Scan",
      icon: Shield,
      description: "Vulnerability and compliance checks",
      details: "SAST, DAST, dependency scanning, container image vulnerability assessment",
      duration: "~1-3min",
      tools: ["Trivy", "Snyk", "OWASP ZAP", "Checkov"],
      status: "pending"
    },
    {
      id: "deploy",
      title: "Deploy",
      icon: Rocket,
      description: "Automated deployment to staging/production",
      details: "Infrastructure provisioning, blue-green deployment, database migrations",
      duration: "~3-8min",
      tools: ["Terraform", "Kubernetes", "Helm", "ArgoCD"],
      status: "pending"
    },
    {
      id: "monitor",
      title: "Monitor",
      icon: Eye,
      description: "Health checks and monitoring setup",
      details: "Application metrics, logs aggregation, alerting rules, and health dashboards",
      duration: "Continuous",
      tools: ["Prometheus", "Grafana", "ELK", "PagerDuty"],
      status: "pending"
    }
  ];

  const securityGates = [
    {
      name: "Code Quality",
      checks: ["Lint rules", "Code coverage > 80%", "No critical bugs"],
      status: "passed"
    },
    {
      name: "Security Scan",
      checks: ["No HIGH/CRITICAL CVEs", "Secret detection", "License compliance"],
      status: "running"
    },
    {
      name: "Infrastructure",
      checks: ["Terraform plan", "Security groups", "IAM policies"],
      status: "pending"
    },
    {
      name: "Runtime Security",
      checks: ["Pod security policies", "Network policies", "RBAC validation"],
      status: "pending"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < pipelineSteps.length - 1) {
            return prev + 1;
          } else {
            setIsRunning(false);
            return prev;
          }
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isRunning, pipelineSteps.length]);

  const getStepStatus = (index: number) => {
    if (index < currentStep) return "completed";
    if (index === currentStep && isRunning) return "running";
    return "pending";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "running":
        return <Clock className="h-5 w-5 text-blue-500 animate-spin" />;
      case "failed":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const handleStartPipeline = () => {
    setCurrentStep(0);
    setIsRunning(true);
  };

  const handlePausePipeline = () => {
    setIsRunning(false);
  };

  return (
    <section id="cicd-pipeline" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            CI/CD Pipeline
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interactive <span className="text-gradient-primary">DevSecOps Pipeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience a live walkthrough of my automated CI/CD pipeline with integrated security checks, 
            compliance validation, and deployment automation.
          </p>
        </div>

        {/* Pipeline Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            onClick={handleStartPipeline} 
            disabled={isRunning}
            className="flex items-center gap-2"
          >
            <Play className="h-4 w-4" />
            Start Pipeline
          </Button>
          <Button 
            variant="outline" 
            onClick={handlePausePipeline} 
            disabled={!isRunning}
            className="flex items-center gap-2"
          >
            <Pause className="h-4 w-4" />
            Pause
          </Button>
        </div>

        {/* Pipeline Visualization */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            {pipelineSteps.map((step, index) => (
              <TooltipProvider key={step.id}>
                <div className="flex flex-col lg:flex-row items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card 
                        className={`w-full lg:w-64 cursor-pointer transition-all duration-300 ${
                          getStepStatus(index) === "running" ? "ring-2 ring-blue-500/50 shadow-strong" :
                          getStepStatus(index) === "completed" ? "ring-2 ring-green-500/50" :
                          "border-border/50"
                        }`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                              <step.icon className="h-5 w-5 text-primary-foreground" />
                            </div>
                            {getStatusIcon(getStepStatus(index))}
                          </div>
                          <CardTitle className="text-sm">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-xs mb-2">
                            {step.description}
                          </CardDescription>
                          <Badge variant="secondary" className="text-xs">
                            {step.duration}
                          </Badge>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs">
                      <div className="space-y-2">
                        <p className="font-semibold">{step.title}</p>
                        <p className="text-sm">{step.details}</p>
                        <div className="flex flex-wrap gap-1">
                          {step.tools.map((tool, toolIndex) => (
                            <Badge key={toolIndex} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                  
                  {index < pipelineSteps.length - 1 && (
                    <div className="hidden lg:block">
                      <ArrowRight 
                        className={`h-6 w-6 mx-4 transition-colors duration-300 ${
                          getStepStatus(index) === "completed" ? "text-green-500" : "text-muted-foreground"
                        }`} 
                      />
                    </div>
                  )}
                </div>
              </TooltipProvider>
            ))}
          </div>
        </div>

        {/* Security Gates */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-medium border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security Gates
              </CardTitle>
              <CardDescription>
                Automated security validation at each pipeline stage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {securityGates.map((gate, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{gate.name}</h4>
                    {getStatusIcon(gate.status)}
                  </div>
                  <div className="space-y-1">
                    {gate.checks.map((check, checkIndex) => (
                      <div key={checkIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
                        {check}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pipeline Metrics */}
          <Card className="shadow-medium border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Pipeline Metrics
              </CardTitle>
              <CardDescription>
                Real-time performance and reliability metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">98.5%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">7.3min</div>
                  <div className="text-sm text-muted-foreground">Avg Duration</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">142</div>
                  <div className="text-sm text-muted-foreground">Deployments/Week</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Build Time</span>
                  <span>2.1min avg</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Security Scan</span>
                  <span>1.8min avg</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Deployment</span>
                  <span>3.4min avg</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Step Details */}
        {isRunning && (
          <Card className="shadow-medium border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {(() => {
                  const IconComponent = pipelineSteps[currentStep].icon;
                  return <IconComponent className="h-5 w-5 text-primary" />;
                })()}
                Currently Running: {pipelineSteps[currentStep].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {pipelineSteps[currentStep].details}
              </p>
              <div className="flex flex-wrap gap-2">
                {pipelineSteps[currentStep].tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default CiCdPipeline;