import { Heart, Instagram, Twitter, Facebook, Youtube, ChevronDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Customer Service */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 tracking-wider uppercase">
                Customer Service
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/customer-service" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="/returns" className="hover:text-primary transition-colors">Returns & Exchanges</a></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 tracking-wider uppercase">
                Information
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 tracking-wider uppercase">
                Contact Us
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Email: hello@beachwear.com</li>
                <li>Phone: 1-800-BEACH-1</li>
                <li>Live Chat Available</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Brand & Social */}
          <div className="text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  BEACHWEAR
                </h2>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-6 mb-8">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Currency & Language */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-primary font-semibold">CA</span>
                <span>Canada (CAD $)</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2024 BeachWear. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;