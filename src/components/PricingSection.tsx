import { Button } from "@/components/ui/button";
import { Check, Crown, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Gratis Inlägg",
      price: "Gratis",
      description: "Perfekt för invånare som vill dela med grannar",
      features: [
        "Obegränsade lokala inlägg",
        "Automatisk platsdetektering", 
        "Grundläggande kategorier",
        "7 dagars varaktighet",
        "Invånarengagemang"
      ],
      buttonText: "Börja Posta",
      buttonVariant: "outline" as const,
      popular: false,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Lokalt Företag",
      price: "299",
      period: " kr/mån",
      description: "Öka ditt lokala företags synlighet",
      features: [
        "Allt i Gratis-planen",
        "Utvalda företagsinlägg",
        "30 dagars varaktighet",
        "Företagsprofilsida",
        "Prioriterad placering",
        "Analysdashboard"
      ],
      buttonText: "Marknadsför Mitt Företag",
      buttonVariant: "sponsor" as const,
      popular: true,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Stadspartnerskap",
      price: "Skräddarsytt",
      description: "Komplett anslagstavla för din stad",
      features: [
        "Dedikerad stadsanslagstavla",
        "Anpassad design & domän", 
        "Admin-dashboard",
        "Invånarverifiering",
        "Obegränsade stadsinlägg",
        "Intäktsdelare-program",
        "24/7 support"
      ],
      buttonText: "Bli Partner",
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
            Välj Din
            <span className="text-primary"> Samhällsroll</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oavsett om du är invånare, företag eller stad - vi har den perfekta planen för att koppla samman ditt lokalsamhälle
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
            Frågor om priser eller behöver en skräddarsydd lösning?
          </p>
          <Button variant="link" className="text-primary hover:text-primary-glow">
            Kontakta vårt team →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;