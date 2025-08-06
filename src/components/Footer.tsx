import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="DesignCraft Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">DesignCraft</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Professional design solutions for posters, CVs, and websites. 
              Bringing your creative visions to life with quality and affordability.
            </p>
            <div className="mt-4 flex items-center space-x-2 text-primary-foreground/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>in South Africa</span>
              <span>🇿🇦</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:0820935840"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>082 093 5840</span>
              </a>
              <a
                href="mailto:mhlangawethu56@gmail.com"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>mhlangawethu56@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} DesignCraft. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
            Prices negotiable • Quality guaranteed • Fast delivery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;