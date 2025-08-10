import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload, Users, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: Users,
    title: "Steady Work",
    description: "Access to a consistent stream of verified client requests"
  },
  {
    icon: TrendingUp,
    title: "Fair Pay",
    description: "Competitive rates with transparent pricing and on-time payments"
  },
  {
    icon: Shield,
    title: "Skill Development",
    description: "Free training programs to enhance your professional skills"
  }
];

export default function ForWorkers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceCategory: "",
    experience: "",
    description: "",
    idFile: null as File | null,
    certFile: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Worker application submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Network
            </h1>
            <p className="text-xl mb-8 opacity-90">
              We connect you with meaningful work opportunities, provide skills training, 
              and ensure fair compensation. All workers are vetted to build client trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Verified Opportunities
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Skills Training
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Fair Compensation
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose A.C.A.P?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of service providers who have found success through our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 section-gradient">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Apply to Join</CardTitle>
                <CardDescription className="text-center">
                  Fill out the form below to start your journey with A.C.A.P
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+27 123 456 789"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                      Service Details
                    </h3>
                    
                    <div>
                      <Label htmlFor="serviceCategory">Service Category *</Label>
                      <Select onValueChange={(value) => handleInputChange("serviceCategory", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="domestic">Domestic Work</SelectItem>
                          <SelectItem value="gardening">Gardening</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="handyman">Handyman Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Select onValueChange={(value) => handleInputChange("experience", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-5">2-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Tell us about yourself</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Describe your skills, experience, and what makes you unique..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Upload className="w-5 h-5 mr-2 text-primary" />
                      Required Documents
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="idFile">ID Document *</Label>
                        <Input
                          id="idFile"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange("idFile", e.target.files?.[0] || null)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Upload a clear photo of your ID document
                        </p>
                      </div>
                      <div>
                        <Label htmlFor="certFile">Certifications (Optional)</Label>
                        <Input
                          id="certFile"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange("certFile", e.target.files?.[0] || null)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Upload relevant certificates or qualifications
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this application, you agree to our Terms of Service and Privacy Policy.
                    We will review your application within 2-3 business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}