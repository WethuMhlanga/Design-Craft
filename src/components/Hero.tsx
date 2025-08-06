import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = ['Stunning Posters', 'Professional CVs', 'Modern Websites'];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `url(${heroBg}) center/cover, linear-gradient(135deg, hsl(225 100% 5%), hsl(215 14% 34%))`,
      }}
    >
      {/* Animated background overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-midnight/90 to-grey-dark/80 transition-all duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Creative</span>
            <span className="block text-gradient">Design Solutions</span>
            <span className="block text-white">for Everyone</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-grey-light mb-8 leading-relaxed">
            From eye-catching posters to professional CVs and modern websites - 
            I bring your ideas to life with creativity and precision
          </p>

          {/* Services showcase */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {services.map((service, index) => (
              <div
                key={service}
                className="glass-effect px-6 py-3 rounded-full text-white transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-2">
                  <Sparkles size={16} className="text-grey-light" />
                  <span>{service}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-midnight hover:bg-grey-light transform hover:scale-105 transition-all duration-300 shadow-xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-midnight transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>

          {/* South African touch */}
          <div className="mt-12 text-grey-light">
            <p className="text-lg">🇿🇦 Proudly South African</p>
            <p className="text-sm mt-2">All prices in ZAR • Negotiable rates</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;