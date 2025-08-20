import { Calendar, Clock, DollarSign, Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
const BulletinDemo = () => {
  const cities = ["Göteborg", "Stockholm", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping", "Lund", "Umeå", "Gävle", "Borås", "Eskilstuna", "Halmstad", "Växjö", "Karlstad", "Sundsvall", "Trollhättan"];
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex(prevIndex => (prevIndex + 1) % cities.length);
    }, 2000); // Växlar var 2:a sekund

    return () => clearInterval(interval);
  }, [cities.length]);
  const posts = [{
    id: 1,
    type: "event",
    title: "Lördagstorg på Centraltorget",
    content: "Varje lördag 08-14. Ekologiska grönsaker, hembakat bröd och live-musik. Välkomna!",
    author: "Göteborgs Stad",
    time: "2 tim sedan",
    sponsored: false,
    color: "bg-yellow-100 border-yellow-200",
    icon: <Calendar className="w-4 h-4 text-yellow-600" />
  }, {
    id: 2,
    type: "sponsor",
    title: "🍕 Marios Pizzeria - Stor invigning!",
    content: "Halva priset på alla pizzor denna helg! Italiensk familjerecept sedan 1962. Storgatan 15.",
    author: "Marios Pizzeria",
    time: "1 tim sedan",
    sponsored: true,
    color: "bg-gradient-to-br from-red-100 to-orange-100 border-red-200",
    icon: <Star className="w-4 h-4 text-red-600" />
  }, {
    id: 3,
    type: "community",
    title: "Borttappad katt - Smirre",
    content: "Röd korthår, mycket snäll. Försvann från Lindgatan. Hör av er om ni ser honom! 📞 070-123 45 67",
    author: "Maria A.",
    time: "4 tim sedan",
    sponsored: false,
    color: "bg-blue-100 border-blue-200",
    icon: <Heart className="w-4 h-4 text-blue-600" />
  }, {
    id: 4,
    type: "sponsor",
    title: "🏠 Andersson Fastigheter - Vi hjälper dig hitta hem",
    content: "Nya objekt varje vecka! 25 års erfarenhet av Göteborg. Kostnadsfri värdering.",
    author: "Andersson Fastigheter",
    time: "6 tim sedan",
    sponsored: true,
    color: "bg-gradient-to-br from-green-100 to-emerald-100 border-green-200",
    icon: <DollarSign className="w-4 h-4 text-green-600" />
  }, {
    id: 5,
    type: "announcement",
    title: "Vägarbete på Storgatan",
    content: "Storgatan avstängd mellan Första och Tredje gatan måndag-onsdag. Kör via Kyrkogatan.",
    author: "Trafikverket",
    time: "8 tim sedan",
    sponsored: false,
    color: "bg-orange-100 border-orange-200",
    icon: <MapPin className="w-4 h-4 text-orange-600" />
  }, {
    id: 6,
    type: "community",
    title: "Barnvakt sökes",
    content: "Erfaren barnvakt (HLR-utbildad) tillgänglig kvällar och helger. Kan fixa referenser!",
    author: "Lisa K.",
    time: "12 tim sedan",
    sponsored: false,
    color: "bg-purple-100 border-purple-200",
    icon: <Heart className="w-4 h-4 text-purple-600" />
  }];
  return <section className="py-20 bg-gradient-warm relative">
      <div className="absolute inset-0 cork-texture opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vad händer i
            <span className="text-primary inline-block min-w-[200px] transition-all duration-500 ease-in-out transform">
              {" " + cities[currentCityIndex]}
            </span> idag?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Äkta annonser från grannar och företag - alltid fräscht och lokalt
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => <div key={post.id} className={`paper-note ${post.color} p-6 rounded-lg relative ${post.sponsored ? 'bulletin-pin ring-2 ring-primary/20' : 'bulletin-pin'}`} style={{
            animationDelay: `${index * 0.1}s`,
            transform: `rotate(${Math.random() * 4 - 2}deg)`
          }}>
                {post.sponsored && <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                    SPONSRAD
                  </div>}
                
                <div className="flex items-start gap-3 mb-3">
                  {post.icon}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg leading-tight">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{post.author}</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {post.content}
                </p>
              </div>)}
          </div>

          <div className="text-center mt-12">
            
          </div>
        </div>
      </div>
    </section>;
};
export default BulletinDemo;