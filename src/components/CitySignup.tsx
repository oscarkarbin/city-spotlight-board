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
      title: "Engagera Invånare",
      description: "Ge ditt lokalsamhälle en central plats för kommunikation"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Stöd Lokala Företag", 
      description: "Hjälp lokala företag att nå invånare på ett effektivt sätt"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Öka Synlighet",
      description: "Gör stadsmeddelanden och uppdateringar mer tillgängliga"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Intäktsdelning",
      description: "Tjäna på sponsrade inlägg och företagspartnerskap"
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
              Ta Med Digitala Anslagstavlor till
              <span className="text-primary"> Din Stad</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Samarbeta med oss för att skapa ett blomstrande digitalt samhällsutrymme. 
              Engagera invånare, stöd lokala företag och modernisera din stads kommunikation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Därför älskar städer vår plattform
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
                  Kom igång med din stad
                </h3>
                <p className="text-muted-foreground">
                  Anslut dig till hundratals städer som redan kopplar samman sina lokalsamhällen
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="cityName" className="block text-sm font-medium text-foreground mb-2">
                    Stadsnamn
                  </label>
                  <Input
                    id="cityName"
                    type="text"
                    placeholder="Göteborg"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Officiell kontakt-e-post
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="borgmastare@goteborg.se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  <MapPin className="w-5 h-5" />
                  Begär Stadspartnerskap
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Vi kontaktar dig inom 24 timmar för att diskutera din stads digitala anslagstavla
                </p>
              </form>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Partnerstäder</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2,5M+</div>
              <div className="text-muted-foreground">Lokalsamhälls-inlägg</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Invånarengagemang</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Kr mån-intäkt i snitt</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitySignup;