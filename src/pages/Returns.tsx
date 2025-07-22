import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Package, RefreshCw, CreditCard, Clock } from "lucide-react";

const Returns = () => {
  const returnSteps = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Request Return",
      description: "Start your return process online or contact customer service"
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Pack & Ship",
      description: "Use our prepaid return label to send items back"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Check",
      description: "We inspect returned items to ensure they meet our standards"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Refund Processed",
      description: "Receive your refund within 3-5 business days"
    }
  ];

  const returnPolicy = [
    "Items must be returned within 30 days of purchase",
    "Items must be unworn, unwashed, and in original packaging",
    "Tags must be attached and intact",
    "Sale items are final sale and cannot be returned",
    "Custom or personalized items cannot be returned",
    "Return shipping is free for exchanges and store credit"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Returns & <span className="bg-gradient-primary bg-clip-text text-transparent">Exchanges</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Not completely satisfied? No worries! We offer hassle-free returns and exchanges 
            to ensure you love every piece.
          </p>
        </div>

        {/* Return Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How Returns Work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  {index < returnSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Return Form */}
          <Card>
            <CardHeader>
              <CardTitle>Start a Return</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="orderNumber">Order Number*</Label>
                <Input id="orderNumber" placeholder="#BW12345" />
              </div>
              <div>
                <Label htmlFor="email">Email Address*</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code*</Label>
                <Input id="zipCode" placeholder="12345" />
              </div>
              <div className="space-y-2">
                <Label>Return Reason</Label>
                <div className="space-y-2">
                  {[
                    "Wrong size",
                    "Didn't like the fit",
                    "Quality concerns",
                    "Wrong item received",
                    "Other"
                  ].map((reason) => (
                    <label key={reason} className="flex items-center space-x-2">
                      <input type="radio" name="reason" value={reason} />
                      <span className="text-sm">{reason}</span>
                    </label>
                  ))}
                </div>
              </div>
              <Button size="lg" className="w-full">
                Find My Order
              </Button>
            </CardContent>
          </Card>

          {/* Return Policy */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Return Policy</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-2" />
                  <span className="text-lg font-semibold">30-Day Return Window</span>
                </div>
                <ul className="space-y-3">
                  {returnPolicy.map((policy, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{policy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Refund Options */}
            <Card>
              <CardHeader>
                <CardTitle>Refund Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                  <h3 className="font-semibold text-primary mb-2">Store Credit (Recommended)</h3>
                  <p className="text-sm text-muted-foreground">
                    Get 10% bonus value + free return shipping
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Exchange</h3>
                  <p className="text-sm text-muted-foreground">
                    Swap for a different size or color - free shipping both ways
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Original Payment Method</h3>
                  <p className="text-sm text-muted-foreground">
                    Full refund to your original payment method
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Return FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How long do refunds take?</h3>
                <p className="text-sm text-muted-foreground">
                  Refunds are processed within 3-5 business days after we receive your return. 
                  Bank processing may take an additional 1-2 business days.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I return sale items?</h3>
                <p className="text-sm text-muted-foreground">
                  Sale items marked as "Final Sale" cannot be returned. Regular sale items 
                  follow our standard return policy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What if my item is damaged?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us immediately with photos. We'll provide a prepaid return label 
                  and send a replacement at no charge.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">International returns?</h3>
                <p className="text-sm text-muted-foreground">
                  International customers are responsible for return shipping costs. 
                  We recommend purchasing return shipping insurance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;