import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Gift, Star, Zap, Users, TrendingUp } from "lucide-react";

const Subscribe = () => {
  const benefits = [
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Exclusive Discounts",
      description: "Get 15% off your first order and early access to sales"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "New Arrivals First",
      description: "Be the first to shop our latest collections"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Style Tips",
      description: "Weekly styling advice and beachwear inspiration"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Access",
      description: "Join our exclusive online community and events"
    }
  ];

  const plans = [
    {
      name: "Newsletter",
      price: "Free",
      description: "Stay updated with our latest news and offers",
      features: [
        "Weekly newsletter",
        "Sale notifications",
        "New arrival alerts",
        "Style tips"
      ],
      popular: false
    },
    {
      name: "VIP Club",
      price: "$9.99/month",
      description: "Premium membership with exclusive perks",
      features: [
        "Everything in Newsletter",
        "15% off all orders",
        "Free shipping always",
        "Early sale access",
        "Birthday surprise",
        "Personal styling advice"
      ],
      popular: true
    },
    {
      name: "Style Insider",
      price: "$19.99/month",
      description: "Ultimate membership for fashion enthusiasts",
      features: [
        "Everything in VIP Club",
        "20% off all orders",
        "Monthly curated box",
        "1-on-1 styling session",
        "Exclusive member events",
        "First access to limited editions"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join the <span className="bg-gradient-primary bg-clip-text text-transparent">Club</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get exclusive access to new arrivals, special discounts, and styling tips. 
            Choose the plan that's perfect for you.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                {benefit.icon}
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Subscription Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{plan.price}</div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  size="lg" 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.price === 'Free' ? 'Sign Up Free' : 'Subscribe Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Start with Our Newsletter</CardTitle>
            <p className="text-muted-foreground">
              Join over 10,000 subscribers and get 15% off your first order
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            
            <div className="space-y-3">
              <Label>Interests (Optional)</Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Swimwear",
                  "Casual Wear",
                  "Activewear", 
                  "Accessories",
                  "Sale Alerts",
                  "Style Tips"
                ].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2">
                    <Checkbox />
                    <span className="text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to receive marketing emails and accept the{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a> and{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
              </Label>
            </div>

            <Button size="lg" className="w-full">
              Subscribe & Get 15% Off
            </Button>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                You can unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Happy Subscribers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;