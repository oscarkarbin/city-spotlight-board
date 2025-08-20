import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BulletinDemo from "@/components/BulletinDemo";
import PricingSection from "@/components/PricingSection";
import CitySignup from "@/components/CitySignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <BulletinDemo />
        <PricingSection />
        <CitySignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
