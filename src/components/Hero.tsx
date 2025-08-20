import { Button } from "@/components/ui/button";
import { MapPin, Users, Megaphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Floating cork elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-cork rounded-full opacity-60 float-animation"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cork-dark rounded-full opacity-40 float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-cork rounded-full opacity-50 float-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your City's
            <span className="block bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent">
              Digital Bulletin
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect your community with local announcements, events, and opportunities. 
            Automatically discover what's happening in your city.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <MapPin className="w-5 h-5" />
              Discover My City
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Megaphone className="w-5 h-5" />
              List My City
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-primary-foreground/80">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Auto Location</h3>
              <p className="text-sm">Instantly see your city's bulletin board</p>
            </div>

            <div className="flex flex-col items-center text-primary-foreground/80">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
              <p className="text-sm">Real posts from real neighbors</p>
            </div>

            <div className="flex flex-col items-center text-primary-foreground/80">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Megaphone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sponsor Spots</h3>
              <p className="text-sm">Premium visibility for local businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;