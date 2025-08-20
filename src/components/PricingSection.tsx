import { Button } from "@/components/ui/button";
import { Check, Crown, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Community Post",
      price: "Free",
      description: "Perfect for residents sharing with neighbors",
      features: [
        "Unlimited community posts",
        "Auto-location detection", 
        "Basic post categories",
        "7-day post duration",
        "Community engagement"
      ],
      buttonText: "Start Posting",
      buttonVariant: "outline" as const,
      popular: false,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Local Business",
      price: "$29",
      period: "/month",
      description: "Boost your local business visibility",
      features: [
        "Everything in Community",
        "Featured business posts",
        "30-day post duration",
        "Business profile page",
        "Priority placement",
        "Analytics dashboard"
      ],
      buttonText: "Grow My Business",
      buttonVariant: "sponsor" as const,
      popular: true,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "City Partnership",
      price: "Custom",
      description: "Complete bulletin board for your city",
      features: [
        "Dedicated city bulletin board",
        "Custom branding & domain", 
        "Admin dashboard",
        "Resident verification",
        "Unlimited city posts",
        "Revenue sharing program",
        "24/7 support"
      ],
      buttonText: "Partner With Us",
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
            Choose Your
            <span className="text-primary"> Community Role</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a resident, business, or city - we have the perfect plan to connect your community
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
                    Most Popular
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
            Questions about pricing or need a custom solution?
          </p>
          <Button variant="link" className="text-primary hover:text-primary-glow">
            Contact our team →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;