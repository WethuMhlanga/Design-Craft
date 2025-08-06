import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "100+", label: "Projects Completed" },
    { icon: <Clock className="w-8 h-8" />, number: "24hr", label: "Quick Turnaround" },
    { icon: <Heart className="w-8 h-8" />, number: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About DesignCraft
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Passionate about bringing your creative visions to life with professional design solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">My Story</h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Welcome to DesignCraft! I'm a passionate designer based in South Africa, 
                  dedicated to helping individuals and businesses tell their stories through 
                  compelling visual design.
                </p>
                <p>
                  Whether you need a professional CV that gets you noticed, an eye-catching 
                  poster for your event, or a modern website for your business, I bring 
                  creativity and technical expertise to every project.
                </p>
                <p>
                  My approach is simple: understand your needs, deliver quality work, 
                  and build lasting relationships. Every project is unique, and I take 
                  pride in creating designs that truly represent who you are.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-primary">Why Choose Me?</h3>
              <div className="space-y-4">
                {[
                  "🎨 Creative & original designs",
                  "⚡ Fast turnaround times",
                  "💬 Clear communication throughout",
                  "🔄 Unlimited revisions until perfect",
                  "💰 Affordable, negotiable pricing",
                  "🇿🇦 Local South African service"
                ].map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <span className="text-2xl">{point.split(' ')[0]}</span>
                    <span className="text-lg">{point.substring(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover-lift bg-gradient-to-br from-primary/5 to-primary/10"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="glass-effect inline-block px-8 py-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2 text-primary">Ready to Start Your Project?</h4>
              <p className="text-muted-foreground">
                Let's discuss your ideas and bring them to life together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;