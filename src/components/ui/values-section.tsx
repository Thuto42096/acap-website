import { Shield, Eye, Users } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear, upfront pricing with no hidden fees. You know exactly what you're paying for."
  },
  {
    icon: Shield,
    title: "Reliability", 
    description: "All workers are thoroughly vetted with our comprehensive rating and review system."
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "We provide training opportunities and ensure fair compensation for all service providers."
  }
];

export function ValuesSection() {
  return (
    <section className="py-16 african-pattern section-gradient relative">
      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building trust through transparency, reliability, and empowerment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}