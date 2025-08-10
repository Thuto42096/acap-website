import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Clock, Star, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Vetted Professionals",
    description: "All service providers are background-checked and verified"
  },
  {
    icon: Star,
    title: "Rated & Reviewed",
    description: "Read real reviews from previous clients to make informed decisions"
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "Know exactly what you'll pay before booking - no hidden fees"
  }
];

const workerProfiles = [
  {
    name: "Thandiwe Mthembu",
    service: "Domestic Work",
    rating: 4.9,
    reviews: 47,
    experience: "5+ years",
    rate: "R150/hour",
    verified: true,
    avatar: "/placeholder.svg"
  },
  {
    name: "David Nkomo", 
    service: "Plumbing",
    rating: 4.8,
    reviews: 32,
    experience: "8+ years", 
    rate: "R200/hour",
    verified: true,
    avatar: "/placeholder.svg"
  }
];

export default function ForClients() {
  const [bookingData, setBookingData] = useState({
    service: "",
    location: "",
    date: "",
    time: "",
    description: "",
    contactName: "",
    contactPhone: "",
    contactEmail: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking request submitted:", bookingData);
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
              Find Trusted Service Providers
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Book vetted professionals for all your home and business needs. 
              Transparent pricing, reliable service, and guaranteed satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Background Checked
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Insured Workers
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                24/7 Support
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose A.C.A.P?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your peace of mind is our priority. We ensure every service provider meets our high standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worker Previews */}
      <section className="py-16 section-gradient">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Some of Our Professionals</h2>
            <p className="text-muted-foreground">
              Experienced, reliable, and ready to help with your service needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {workerProfiles.map((worker, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={worker.avatar} alt={worker.name} />
                      <AvatarFallback>{worker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-lg">{worker.name}</h3>
                        {worker.verified && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2">{worker.service}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span>{worker.rating} ({worker.reviews} reviews)</span>
                        </div>
                        <span>{worker.experience}</span>
                        <span className="font-semibold text-primary">{worker.rate}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Book a Service</CardTitle>
                <CardDescription className="text-center">
                  Tell us what you need and we'll match you with the perfect professional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                      Service Details
                    </h3>
                    
                    <div>
                      <Label htmlFor="service">What service do you need? *</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
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
                      <Label htmlFor="description">Describe your needs</Label>
                      <Textarea
                        id="description"
                        value={bookingData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Please describe what you need help with..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Location & Schedule */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      Location & Schedule
                    </h3>
                    
                    <div>
                      <Label htmlFor="location">Service Location *</Label>
                      <Input
                        id="location"
                        value={bookingData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="Enter your address or area"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={bookingData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                            <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                      Contact Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactName">Your Name *</Label>
                        <Input
                          id="contactName"
                          value={bookingData.contactName}
                          onChange={(e) => handleInputChange("contactName", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactPhone">Phone Number *</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          value={bookingData.contactPhone}
                          onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                          placeholder="+27 123 456 789"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="contactEmail">Email Address *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={bookingData.contactEmail}
                        onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Transparent Pricing</h4>
                    <p className="text-sm text-muted-foreground">
                      After submitting this request, you'll receive quotes from qualified professionals. 
                      All pricing is upfront with no hidden fees. You choose the best offer for your needs.
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Booking Request
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this request, you agree to our Terms of Service. 
                    You'll receive matches within 24 hours.
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