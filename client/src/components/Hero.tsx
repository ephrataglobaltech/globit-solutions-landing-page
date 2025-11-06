import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_background_office_technology_a65c610e.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSolutions = () => {
    const element = document.getElementById("solutions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
                Transform Your
                <span className="text-primary"> Institution</span> with
                Modern IT Solutions
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-subtitle">
                Streamline processes, enhance efficiency, and empower your educational or organizational goals with cutting-edge technology solutions designed for the future.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-base"
                data-testid="button-hero-demo"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToSolutions}
                className="text-base backdrop-blur-sm"
                data-testid="button-hero-learn"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span data-testid="text-trust-indicator">Trusted by 500+ institutions worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
