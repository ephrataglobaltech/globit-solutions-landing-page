import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    toast({
      title: "Subscribed!",
      description: "You'll receive our latest IT insights for education.",
    });
    setEmail("");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl">Globit Solutions</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering institutions with innovative IT solutions for a digital future.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("solutions")}
                className="block text-sm text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md text-left"
                data-testid="footer-link-solutions"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="block text-sm text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md text-left"
                data-testid="footer-link-benefits"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-sm text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md text-left"
                data-testid="footer-link-testimonials"
              >
                Testimonials
              </button>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <nav className="space-y-3 text-sm text-muted-foreground">
              <div>Student Management</div>
              <div>Process Automation</div>
              <div>Data Analytics</div>
              <div>Cloud Infrastructure</div>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get IT insights for education
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="input-newsletter"
                />
                <Button type="submit" size="icon" data-testid="button-newsletter">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Globit Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md" data-testid="link-privacy">
                Privacy Policy
              </button>
              <button className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md" data-testid="link-terms">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
