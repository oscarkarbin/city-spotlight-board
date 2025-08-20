import { Button } from "@/components/ui/button";
import { Check, Crown, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Privat",
      price: "Gratis",
      description: "För dig som vill annonsera till grannar",
      features: [
        "Lägg upp annonser gratis",
        "Hittar din stad automatiskt", 
        "Vanliga kategorier",
        "Syns i 7 dagar",
        "Chatta med intresserade"
      ],
      buttonText: "Börja Annonsera",
      buttonVariant: "outline" as const,
      popular: false,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Företag",
      price: "299",
      period: " kr/mån",
      description: "Syns bättre och når fler kunder",
      features: [
        "Allt som Privat har",
        "Företagsannonser som syns mer",
        "Syns i 30 dagar",
        "Egen företagssida",
        "Hamnar högre upp",
        "Se hur många som tittar"
      ],
      buttonText: "Marknadsför Företaget",
      buttonVariant: "sponsor" as const,
      popular: true,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Kommun",
      price: "Anpassat pris",
      description: "Egen annonstavla för hela kommunen",
      features: [
        "Egen annonstavla för kommunen",
        "Era färger och logga", 
        "Hantera användare och annonser",
        "Verifiera invånare",
        "Obegränsat med meddelanden",
        "Tjäna pengar på företagsannonser",
        "Support dygnet runt"
      ],
      buttonText: "Kontakta Oss",
      buttonVariant: "hero" as const,
      popular: false,
      icon: <Crown className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/4 w-20 h-20 cork-texture rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 cork-texture rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 cork-texture rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Välj Vad Som
            <span className="text-primary"> Passar Dig</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Privatperson, företagare eller kommun - vi har rätt plan för alla
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'ring-2 ring-primary scale-105 transform' 
                  : 'hover:scale-105 transform'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Mest Populär
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 text-primary-foreground">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.buttonVariant} 
                className="w-full"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Har du frågor eller behöver hjälp?
          </p>
          <Button variant="link" className="text-primary hover:text-primary-glow">
            Kontakta oss →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;