import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Zap, BarChart3, Cloud, Shield, Puzzle, GraduationCap, BookOpen, FileSpreadsheet, CalendarCheck, Laptop, Network } from "lucide-react";

const solutions = [
  {
    icon: GraduationCap,
    title: "Result Processing",
    description: "Automated computation and publishing of student results with subject weighting, grading, and performance reports.",
  },
  {
    icon: FileSpreadsheet,
    title: "Continuous Assessment",
    description: "Easily manage and track students’ continuous assessment scores throughout the term for accurate grading.",
  },
  {
    icon: Users,
    title: "Student Management",
    description: "Comprehensive student record system covering biodata, class placement, attendance, and academic history.",
  },
  {
    icon: BookOpen,
    title: "Teacher & Subject Management",
    description: "Assign subjects and classes to teachers, track workloads, and manage teaching schedules efficiently.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance & Timetable",
    description: "Generate class timetables, manage daily attendance for students and teachers, and analyze attendance trends.",
  },
  {
    icon: Laptop,
    title: "E-Learning Integration",
    description: "Integrate digital learning materials, quizzes, and assignments directly into the school’s learning environment.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Gain actionable insights into student performance and school trends with real-time analytics and visual dashboards.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate admissions, promotions, report card generation, and communication workflows to save valuable time.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Access your school system anywhere with secure, scalable cloud hosting and automatic data backup.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect sensitive student and staff data using enterprise-grade encryption and secure authentication protocols.",
  },
  {
    icon: Puzzle,
    title: "System Integration",
    description: "Easily integrate payment gateways, SMS services, and third-party platforms for a seamless digital experience.",
  },
  {
    icon: Network,
    title: "Multi-School Management",
    description: "Centralized platform to manage multiple campuses or schools under one account with role-based access control.",
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
