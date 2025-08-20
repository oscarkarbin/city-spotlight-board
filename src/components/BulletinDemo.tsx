import { Calendar, Clock, DollarSign, Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const BulletinDemo = () => {
  const posts = [
    {
      id: 1,
      type: "event",
      title: "Summer Farmers Market",
      content: "Every Saturday 8AM-2PM at Central Park. Fresh produce, local crafts, and live music!",
      author: "City Parks Dept",
      time: "2 hours ago",
      sponsored: false,
      color: "bg-yellow-100 border-yellow-200",
      icon: <Calendar className="w-4 h-4 text-yellow-600" />
    },
    {
      id: 2,
      type: "sponsor",
      title: "🍕 Tony's Pizza - Grand Opening!",
      content: "50% off all pizzas this weekend! Family-owned, authentic Italian recipes. 123 Main St.",
      author: "Tony's Pizza",
      time: "1 hour ago",
      sponsored: true,
      color: "bg-gradient-to-br from-red-100 to-orange-100 border-red-200",
      icon: <Star className="w-4 h-4 text-red-600" />
    },
    {
      id: 3,
      type: "community",
      title: "Lost Cat - Mr. Whiskers",
      content: "Orange tabby, very friendly. Last seen near Oak Street. Please call if found! 📞 (555) 123-4567",
      author: "Sarah M.",
      time: "4 hours ago",
      sponsored: false,
      color: "bg-blue-100 border-blue-200",
      icon: <Heart className="w-4 h-4 text-blue-600" />
    },
    {
      id: 4,
      type: "sponsor",
      title: "🏠 Johnson Realty - Your Dream Home Awaits",
      content: "New listings every week! Expert local knowledge, 20+ years experience. Free consultation.",
      author: "Johnson Realty",
      time: "6 hours ago",
      sponsored: true,
      color: "bg-gradient-to-br from-green-100 to-emerald-100 border-green-200",
      icon: <DollarSign className="w-4 h-4 text-green-600" />
    },
    {
      id: 5,
      type: "announcement",
      title: "Road Construction Update",
      content: "Main Street between 1st and 3rd Ave will be closed Mon-Wed. Use alternate routes.",
      author: "City Works",
      time: "8 hours ago",
      sponsored: false,
      color: "bg-orange-100 border-orange-200",
      icon: <MapPin className="w-4 h-4 text-orange-600" />
    },
    {
      id: 6,
      type: "community",
      title: "Babysitter Available",
      content: "Experienced, CPR certified. Available evenings and weekends. References available!",
      author: "Emma K.",
      time: "12 hours ago",
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
            See What's Happening in
            <span className="text-primary"> Springfield</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real posts from your community - automatically organized and always up to date
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
                    SPONSORED
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
              View Full Springfield Board
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletinDemo;