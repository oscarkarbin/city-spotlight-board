import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Megaphone, Building2, Users } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Annonstavlan</span>
              <span className="text-xs text-muted-foreground">.se</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hem" className="text-foreground hover:text-primary transition-colors font-medium">
              Hem
            </a>
            <a href="#om-oss" className="text-foreground hover:text-primary transition-colors font-medium">
              Om Oss
            </a>
            <a href="#kontakt" className="text-foreground hover:text-primary transition-colors font-medium">
              Kontakt
            </a>
            <a href="#priser" className="text-foreground hover:text-primary transition-colors font-medium">
              Priser
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              <MapPin className="w-4 h-4" />
              Hitta Min Stad
            </Button>
            <Button variant="default" size="sm">
              <Building2 className="w-4 h-4" />
              För Kommuner
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a 
                href="#hem" 
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hem
              </a>
              <a 
                href="#om-oss" 
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Om Oss
              </a>
              <a 
                href="#kontakt" 
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <a 
                href="#priser" 
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Priser
              </a>
              <div className="flex flex-col gap-3 mt-4 px-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <MapPin className="w-4 h-4" />
                  Hitta Min Stad
                </Button>
                <Button variant="default" size="sm" className="justify-start">
                  <Building2 className="w-4 h-4" />
                  För Kommuner
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;