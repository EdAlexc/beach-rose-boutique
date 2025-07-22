import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Leaf, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Inclusive Community",
      description: "We celebrate diversity and create clothing for everyone to feel confident and authentic."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Practice",
      description: "Our commitment to the environment drives every decision, from materials to packaging."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      description: "We never compromise on quality, ensuring every piece meets our high standards."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community First",
      description: "Built by the community, for the community. Your feedback shapes our brand."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">BeachWear</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to create premium beachwear that celebrates authenticity, 
            confidence, and the vibrant spirit of the LGBTQ+ community.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                BeachWear was born from a simple belief: everyone deserves to feel confident 
                and comfortable in their own skin. We noticed a gap in the market for high-quality 
                beachwear that truly understood and celebrated the gay male community.
              </p>
              <p>
                Our founders, passionate about both fashion and inclusivity, set out to create 
                a brand that would not only deliver exceptional products but also foster a 
                sense of belonging and pride.
              </p>
              <p>
                Today, we're proud to serve customers worldwide, creating pieces that blend 
                style, comfort, and sustainability while supporting LGBTQ+ causes and 
                environmental initiatives.
              </p>
            </div>
          </div>
          <div className="aspect-square bg-gradient-soft rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <Heart className="h-12 w-12 text-primary-foreground" />
              </div>
              <p className="text-lg font-semibold">Made with Love</p>
              <p className="text-muted-foreground">Since 2020</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Team</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're a diverse group of creatives, dreamers, and changemakers working 
            together to build something meaningful.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-primary rounded-full"></div>
                  <h3 className="text-xl font-semibold mb-2">Team Member {member}</h3>
                  <p className="text-muted-foreground mb-3">Co-Founder & Designer</p>
                  <p className="text-sm text-muted-foreground">
                    Passionate about creating inclusive fashion that makes a difference.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;