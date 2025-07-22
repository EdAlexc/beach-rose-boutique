import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, Clock, ChevronRight } from "lucide-react";

const CustomerService = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order using the tracking number sent to your email after shipment."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original packaging."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days, express shipping 1-2 business days."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. International shipping times vary by location."
    },
    {
      question: "How do I find the right size?",
      answer: "Check our detailed size guide on each product page for the perfect fit."
    }
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      hours: "Mon-Fri, 9am-6pm EST",
      action: "Start Chat"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Call us at 1-800-BEACH-WR",
      hours: "Mon-Fri, 9am-6pm EST",
      action: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "hello@beachwear.com",
      hours: "Response within 24 hours",
      action: "Send Email"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Customer <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Get quick answers to common questions or reach out for personalized support.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-2">{method.description}</p>
                <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  {method.hours}
                </div>
                <Button variant="outline" className="w-full">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
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
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="orderNumber">Order Number (Optional)</Label>
                <Input id="orderNumber" placeholder="#BW12345" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more about your question or concern..." rows={4} />
              </div>
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-sm">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground ml-2 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-soft rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Need More Help?</h3>
              <p className="text-muted-foreground mb-4">
                Visit our comprehensive help center for detailed guides and tutorials.
              </p>
              <Button variant="outline">
                Visit Help Center
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;