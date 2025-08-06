import { FileText, ImageIcon, Globe, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <ImageIcon className="w-12 h-12" />,
      title: "Poster Design",
      description: "Eye-catching posters for events, businesses, and personal use. From promotional materials to artistic displays.",
      features: ["Event Posters", "Business Promotions", "Personal Projects", "High-resolution prints"],
      price: "From R150",
      popular: false,
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "CV Writing",
      description: "Professional CVs that get you noticed. Modern designs tailored to your industry and career goals.",
      features: ["ATS-optimized format", "Industry-specific templates", "Cover letter included", "Multiple revisions"],
      price: "From R200",
      popular: true,
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Creation",
      description: "Simple, beautiful websites for individuals and small businesses. Responsive and user-friendly designs.",
      features: ["Responsive design", "SEO optimized", "Contact forms", "Mobile-friendly"],
      price: "From R800",
      popular: false,
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional design solutions tailored to your needs. Quality work at affordable prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`hover-lift relative overflow-hidden ${service.popular ? 'border-2 border-primary' : ''}`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 text-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">*Prices negotiable</div>
                    </div>

                    <Button 
                      className="w-full hover:scale-105 transition-transform duration-300"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-effect inline-block px-8 py-4 rounded-xl">
            <p className="text-lg font-medium mb-2">💼 Package Deals Available</p>
            <p className="text-sm text-muted-foreground">
              Combine services for better rates • Custom solutions for businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;