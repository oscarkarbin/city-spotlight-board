import Hero from "@/components/Hero";
import BulletinDemo from "@/components/BulletinDemo";
import PricingSection from "@/components/PricingSection";
import CitySignup from "@/components/CitySignup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BulletinDemo />
      <PricingSection />
      <CitySignup />
    </div>
  );
};

export default Index;
