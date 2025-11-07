import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import principalImage from "@assets/generated_images/Male_principal_testimonial_photo_97d34655.png";
import directorImage2 from "@assets/generated_images/Male_IT_director_photo_3db3cfbe.png";
import principalImage2 from "@assets/generated_images/Male_principal_testimonial_photo_97d34656.png";
import directorImage from "@assets/generated_images/Female_IT_director_photo_3db3cfbe.png";

const testimonials = [
  {
    quote: "Globit Solutions transformed how we manage our student data. The automation features alone have saved our staff countless hours every week.",
    name: "Mr Iwere O. Victor",
    role: "Principal",
    institution: "Career Builders Academy",
    image: principalImage,
    fallback: "MC",
  },
  {
    quote: "Our teachers and parents now have real-time access to student results and attendance. Globit made school management easier and more transparent.",
    name: "Mrs. Theresa Nwosu",
    role: "School Owner",
    institution: "Riverside School District",
    image: directorImage,
    fallback: "ST",
  },
  {
    quote: "From admissions to report cards, everything is automated. Globit’s result processing system has improved our school’s efficiency remarkably.",
    name: "Mr Alawode Gideon",
    role: "Principal",
    institution: "Kem's College",
    image: principalImage2,
    fallback: "MC",
  },
  {
    quote: "The seamless integration with our existing systems was impressive. Their support team guided us every step of the way, making the transition smooth and effortless.",
    name: "Mr. Samuel Adeyemi",
    role: "School Administrator",
    institution: "Golden Steps Academy",
    image: directorImage2,
    fallback: "ST",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="text-testimonials-title">
            Trusted by Educators Nationwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what our clients have to say about their experience with Globit Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-lg leading-relaxed mb-6" data-testid={`text-quote-${index}`}>
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold" data-testid={`text-name-${index}`}>{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.institution}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          <div className="text-2xl font-bold text-muted-foreground">Oracle Partner</div>
          <div className="text-2xl font-bold text-muted-foreground">AWS Certified</div>
          <div className="text-2xl font-bold text-muted-foreground">Google Cloud</div>
          <div className="text-2xl font-bold text-muted-foreground">SOC 2 Compliant</div>
        </div>
      </div>
    </section>
  );
}
