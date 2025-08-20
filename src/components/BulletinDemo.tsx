import { Calendar, Clock, DollarSign, Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const BulletinDemo = () => {
  const posts = [
    {
      id: 1,
      type: "event",
      title: "Sommartorg varje lördag",
      content: "Varje lördag 08:00-14:00 på Centraltorget. Färska råvaror, lokalt hantverk och livemusik!",
      author: "Stadsparker",
      time: "2 timmar sedan",
      sponsored: false,
      color: "bg-yellow-100 border-yellow-200",
      icon: <Calendar className="w-4 h-4 text-yellow-600" />
    },
    {
      id: 2,
      type: "sponsor",
      title: "🍕 Tonys Pizza - Stor öppning!",
      content: "50% rabatt på alla pizzor denna helg! Familjeägt, äkta italienska recept. Storgatan 123.",
      author: "Tonys Pizza",
      time: "1 timme sedan",
      sponsored: true,
      color: "bg-gradient-to-br from-red-100 to-orange-100 border-red-200",
      icon: <Star className="w-4 h-4 text-red-600" />
    },
    {
      id: 3,
      type: "community",
      title: "Försvunnen katt - Musse",
      content: "Orange katt, väldigt vänlig. Sist sedd nära Ekgatan. Ring om ni hittar! 📞 070-123 45 67",
      author: "Sara M.",
      time: "4 timmar sedan",
      sponsored: false,
      color: "bg-blue-100 border-blue-200",
      icon: <Heart className="w-4 h-4 text-blue-600" />
    },
    {
      id: 4,
      type: "sponsor",
      title: "🏠 Johansson Mäkleri - Ditt drömhem väntar",
      content: "Nya objekt varje vecka! Expertkunskap, 20+ års erfarenhet. Gratis konsultation.",
      author: "Johansson Mäkleri",
      time: "6 timmar sedan",
      sponsored: true,
      color: "bg-gradient-to-br from-green-100 to-emerald-100 border-green-200",
      icon: <DollarSign className="w-4 h-4 text-green-600" />
    },
    {
      id: 5,
      type: "announcement",
      title: "Vägarbeten - viktigt meddelande",
      content: "Storgatan mellan 1:a och 3:e gatan stängd måndag-onsdag. Använd alternativa vägar.",
      author: "Tekniska",
      time: "8 timmar sedan",
      sponsored: false,
      color: "bg-orange-100 border-orange-200",
      icon: <MapPin className="w-4 h-4 text-orange-600" />
    },
    {
      id: 6,
      type: "community",
      title: "Barnvakt tillgänglig",
      content: "Erfaren, HLR-utbildad. Tillgänglig kvällar och helger. Referenser finns!",
      author: "Emma K.",
      time: "12 timmar sedan",
      sponsored: false,
      color: "bg-purple-100 border-purple-200",
      icon: <Heart className="w-4 h-4 text-purple-600" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm relative">
      <div className="absolute inset-0 cork-texture opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Se vad som händer i
            <span className="text-primary"> Göteborg</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Riktiga inlägg från ditt lokalsamhälle - automatiskt organiserade och alltid uppdaterade
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className={`paper-note ${post.color} p-6 rounded-lg relative ${
                  post.sponsored ? 'bulletin-pin ring-2 ring-primary/20' : 'bulletin-pin'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: `rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                {post.sponsored && (
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                    SPONSRAD
                  </div>
                )}
                
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
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="sponsor" size="lg">
              <MapPin className="w-5 h-5" />
              Se Hela Göteborgs Anslagstavla
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletinDemo;