import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import domesticIcon from "@/assets/domestic-work-icon.jpg";
import gardeningIcon from "@/assets/gardening-icon.jpg";
import plumbingIcon from "@/assets/plumbing-icon.jpg";
import handymanIcon from "@/assets/handyman-icon.jpg";

const services = [
  {
    icon: domesticIcon,
    title: "Domestic Work",
    description: "Professional cleaning, housekeeping, and domestic assistance services.",
    category: "domestic"
  },
  {
    icon: gardeningIcon,
    title: "Gardening",
    description: "Expert landscaping, garden maintenance, and plant care services.",
    category: "gardening"
  },
  {
    icon: plumbingIcon,
    title: "Plumbing",
    description: "Reliable plumbing repairs, installations, and maintenance services.",
    category: "plumbing"
  },
  {
    icon: handymanIcon,
    title: "Handyman",
    description: "General repairs, maintenance, and home improvement services.",
    category: "handyman"
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional, vetted service providers ready to help with all your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.category} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img 
                    src={service.icon} 
                    alt={`${service.title} icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  <Link to={`/for-clients?service=${service.category}`}>
                    Book Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}