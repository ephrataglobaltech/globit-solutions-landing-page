import { Card } from "@/components/ui/card";
import dashboardImage from "@assets/generated_images/Student_management_dashboard_mockup_35985486.png";

const benefits = [
  {
    stat: "50%",
    label: "Faster Processing",
    description: "Reduce administrative workload and complete tasks in half the time with automated workflows.",
  },
  {
    stat: "99.9%",
    label: "Uptime Guarantee",
    description: "Industry-leading reliability ensures your systems are always available when you need them.",
  },
  {
    stat: "20hrs",
    label: "Saved Per Week",
    description: "Our clients report saving an average of 20 hours weekly through process optimization.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" data-testid="text-benefits-title">
              Why Choose Globit Solutions?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine cutting-edge technology with deep understanding of educational and organizational needs to deliver solutions that truly make a difference.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Tailored to Education</h3>
                  <p className="text-muted-foreground">
                    Built specifically for schools and educational organizations with unique requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expert Support</h3>
                  <p className="text-muted-foreground">
                    Dedicated support team available 24/7 to ensure smooth operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    Over a decade of experience serving 500+ institutions globally.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border shadow-lg">
              <img
                src={dashboardImage}
                alt="Dashboard preview"
                className="w-full h-full object-cover"
                data-testid="img-dashboard"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center" data-testid={`card-benefit-${index}`}>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" data-testid={`text-stat-${index}`}>
                {benefit.stat}
              </div>
              <div className="font-semibold text-lg mb-2">{benefit.label}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
