import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="font-bold text-xl">Globit Solutions</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-solutions"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-benefits"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-testimonials"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex"
              data-testid="button-schedule-demo"
            >
              Schedule Demo
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 gap-2">
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-left px-4 py-3 rounded-md hover-elevate active-elevate-2 font-medium"
              data-testid="mobile-link-solutions"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-left px-4 py-3 rounded-md hover-elevate active-elevate-2 font-medium"
              data-testid="mobile-link-benefits"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left px-4 py-3 rounded-md hover-elevate active-elevate-2 font-medium"
              data-testid="mobile-link-testimonials"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left px-4 py-3 rounded-md hover-elevate active-elevate-2 font-medium"
              data-testid="mobile-link-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-2"
              data-testid="mobile-button-schedule-demo"
            >
              Schedule Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
