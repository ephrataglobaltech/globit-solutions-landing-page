import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Zap, BarChart3, Cloud, Shield, Puzzle } from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Student Management",
    description: "Comprehensive systems to track student information, attendance, grades, and performance analytics in real-time.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks, workflows, and administrative processes to save time and reduce human error.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and customizable reporting dashboards.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions that grow with your institution and ensure 99.9% uptime.",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Enterprise-grade security measures to protect sensitive data and ensure compliance with regulations.",
  },
  {
    icon: Puzzle,
    title: "System Integration",
    description: "Seamlessly connect existing tools and platforms for a unified, efficient technology ecosystem.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="text-solutions-title">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
            Everything you need to modernize your institution and streamline operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 cursor-pointer transition-all"
                data-testid={`card-solution-${index}`}
              >
                <CardHeader className="space-y-4">
                  <div className={`h-12 w-12 rounded-md flex items-center justify-center ${
                    index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}>
                    <Icon className={`h-6 w-6 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
