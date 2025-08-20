import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

const SkillsRadar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  const skills = [
    { name: "Kubernetes", value: 95, category: "DevOps" },
    { name: "Docker", value: 90, category: "DevOps" },
    { name: "AWS", value: 85, category: "Cloud" },
    { name: "Security", value: 88, category: "Security" },
    { name: "Python", value: 82, category: "Backend" },
    { name: "Go", value: 78, category: "Backend" },
    { name: "Terraform", value: 92, category: "IaC" },
    { name: "CI/CD", value: 89, category: "DevOps" },
    { name: "Monitoring", value: 85, category: "Observability" },
    { name: "Linux", value: 93, category: "Systems" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationProgress < 100) {
        setAnimationProgress(prev => Math.min(prev + 2, 100));
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [animationProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 20;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw concentric circles (grid)
    ctx.strokeStyle = 'hsl(var(--border))';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw axis lines
    const angleStep = (2 * Math.PI) / skills.length;
    ctx.strokeStyle = 'hsl(var(--border))';
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * maxRadius;
      const y = centerY + Math.sin(angle) * maxRadius;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Draw skill polygon
    ctx.beginPath();
    ctx.strokeStyle = 'hsl(var(--primary))';
    ctx.fillStyle = 'hsl(var(--primary) / 0.2)';
    ctx.lineWidth = 2;

    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const skillRadius = (skills[i].value / 100) * maxRadius * (animationProgress / 100);
      const x = centerX + Math.cos(angle) * skillRadius;
      const y = centerY + Math.sin(angle) * skillRadius;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw skill points and labels
    ctx.fillStyle = 'hsl(var(--primary))';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'center';
    
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const skillRadius = (skills[i].value / 100) * maxRadius * (animationProgress / 100);
      const labelRadius = maxRadius + 15;
      
      // Draw skill point
      const x = centerX + Math.cos(angle) * skillRadius;
      const y = centerY + Math.sin(angle) * skillRadius;
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
      
      // Draw label
      const labelX = centerX + Math.cos(angle) * labelRadius;
      const labelY = centerY + Math.sin(angle) * labelRadius;
      
      ctx.fillStyle = 'hsl(var(--foreground))';
      ctx.fillText(skills[i].name, labelX, labelY + 4);
    }
  }, [animationProgress, skills]);

  const categoryColors = {
    DevOps: "hsl(var(--primary))",
    Cloud: "hsl(var(--accent))",
    Security: "hsl(var(--destructive))",
    Backend: "hsl(var(--secondary))",
    IaC: "hsl(var(--muted))",
    Observability: "hsl(var(--primary))",
    Systems: "hsl(var(--accent))"
  };

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Radar Chart */}
      <div className="lg:col-span-2">
        <Card className="shadow-medium border-border/50">
          <CardHeader>
            <CardTitle className="text-center">Skills Radar Chart</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>

      {/* Skills Breakdown */}
      <div className="space-y-6">
        <Card className="shadow-medium border-border/50">
          <CardHeader>
            <CardTitle>Skill Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {categories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const avgValue = Math.round(
                categorySkills.reduce((sum, skill) => sum + skill.value, 0) / categorySkills.length
              );
              
              return (
                <div key={category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {category}
                    </Badge>
                    <span className="text-sm font-medium">{avgValue}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-primary transition-all duration-1000"
                      style={{ 
                        width: `${(avgValue * animationProgress) / 100}%`,
                        backgroundColor: categoryColors[category as keyof typeof categoryColors]
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="shadow-medium border-border/50">
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {skills
              .sort((a, b) => b.value - a.value)
              .slice(0, 5)
              .map((skill, index) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium">{skill.value}%</span>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillsRadar;