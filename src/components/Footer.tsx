import { Button } from "@/components/ui/button";
import { Megaphone, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-warm border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cork-texture opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-4 h-4 bg-primary/10 rounded-full float-animation"></div>
        <div className="absolute top-1/2 right-10 w-6 h-6 bg-primary/15 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Megaphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Annonstavlan</span>
                <span className="text-sm text-muted-foreground">.se</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sveriges ledande plattform för lokala annonstavlor. Vi förenar kommuner, 
              invånare och lokala företag i en digital mötesplats.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Snabblänkar</h3>
            <ul className="space-y-2">
              <li><a href="#hem" className="text-muted-foreground hover:text-primary transition-colors text-sm">Hem</a></li>
              <li><a href="#om-oss" className="text-muted-foreground hover:text-primary transition-colors text-sm">Om Oss</a></li>
              <li><a href="#priser" className="text-muted-foreground hover:text-primary transition-colors text-sm">Priser</a></li>
              <li><a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors text-sm">Kontakt</a></li>
              <li><a href="#integritet" className="text-muted-foreground hover:text-primary transition-colors text-sm">Integritetspolicy</a></li>
              <li><a href="#villkor" className="text-muted-foreground hover:text-primary transition-colors text-sm">Användarvillkor</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Tjänster</h3>
            <ul className="space-y-2">
              <li><a href="#kommuner" className="text-muted-foreground hover:text-primary transition-colors text-sm">För Kommuner</a></li>
              <li><a href="#invånare" className="text-muted-foreground hover:text-primary transition-colors text-sm">För Invånare</a></li>
              <li><a href="#företag" className="text-muted-foreground hover:text-primary transition-colors text-sm">För Företag</a></li>
              <li><a href="#support" className="text-muted-foreground hover:text-primary transition-colors text-sm">Support</a></li>
              <li><a href="#api" className="text-muted-foreground hover:text-primary transition-colors text-sm">API & Integration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@annonstavlan.se" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@annonstavlan.se
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+46771234567" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  077-123 45 67
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <div>Storgatan 15</div>
                  <div>411 23 Göteborg</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 Annonstavlan.se. Alla rättigheter förbehållna.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;