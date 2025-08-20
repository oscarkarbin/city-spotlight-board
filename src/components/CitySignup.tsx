import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, MapPin, Users, Zap } from "lucide-react";
import { useState } from "react";

const CitySignup = () => {
  const [email, setEmail] = useState("");
  const [cityName, setCityName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("City signup:", { email, cityName });
  };

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Engage Residents",
      description: "Give your community a central hub for communication"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Support Local Business", 
      description: "Help local businesses reach residents effectively"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Increase Visibility",
      description: "Make city announcements and updates more accessible"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Revenue Share",
      description: "Earn from sponsored posts and business partnerships"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      <div className="absolute inset-0 cork-texture opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-primary/20 rounded-full float-animation"></div>
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-primary/15 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-primary/25 rounded-full float-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bring Digital Bulletins to
              <span className="text-primary"> Your City</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with us to create a thriving digital community space. 
              Engage residents, support local businesses, and modernize your city's communication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Why Cities Love Our Platform
              </h3>
              
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Signup Form */}
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 text-primary-foreground">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Get Your City Started
                </h3>
                <p className="text-muted-foreground">
                  Join hundreds of cities already connecting their communities
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="cityName" className="block text-sm font-medium text-foreground mb-2">
                    City Name
                  </label>
                  <Input
                    id="cityName"
                    type="text"
                    placeholder="Springfield"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Official Contact Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="mayor@springfield.gov"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  <MapPin className="w-5 h-5" />
                  Request City Partnership
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you within 24 hours to discuss your city's digital bulletin board
                </p>
              </form>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Partner Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2.5M+</div>
              <div className="text-muted-foreground">Community Posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Resident Engagement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
              <div className="text-muted-foreground">Avg. Monthly Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitySignup;