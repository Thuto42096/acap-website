import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">AC</span>
              </div>
              <span className="font-bold text-xl">A.C.A.P</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Connecting trusted service providers with clients across Africa. 
              Building communities through transparency, reliability, and empowerment.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-secondary-foreground/80">hello@acap-services.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-secondary-foreground/80">+27 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-secondary-foreground/80">Cape Town, South Africa</span>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-2">
              <Link to="/privacy" className="block text-secondary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-secondary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/support" className="block text-secondary-foreground/80 hover:text-accent transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2024 A.C.A.P. All rights reserved. Building stronger communities through service.
          </p>
        </div>
      </div>
    </footer>
  );
}