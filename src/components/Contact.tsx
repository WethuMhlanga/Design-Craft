import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm interested in your services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/27820935840?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message sent!",
      description: "You'll be redirected to WhatsApp to complete your message.",
    });
    
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Me",
      info: "082 093 5840",
      action: "tel:0820935840",
      description: "Quick chat about your project"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      info: "082 093 5840",
      action: "https://wa.me/27820935840",
      description: "Instant messaging & file sharing"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Me",
      info: "mhlangawethu56@gmail.com",
      action: "mailto:mhlangawethu56@gmail.com",
      description: "Detailed project discussions"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "South Africa",
      action: "",
      description: "Serving clients nationwide"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's discuss your project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-input rounded-md bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="poster-design">Poster Design</option>
                    <option value="cv-writing">CV Writing</option>
                    <option value="website-creation">Website Creation</option>
                    <option value="package-deal">Package Deal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
            
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="hover-lift cursor-pointer transition-all duration-300"
                  onClick={() => method.action && window.open(method.action, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-primary bg-primary/10 p-3 rounded-lg">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{method.title}</h4>
                        <p className="text-primary font-medium">{method.info}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Info */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4 text-primary">Quick Info</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Working Hours:</span>
                    <span className="font-medium">Mon-Fri 8AM-6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend Support:</span>
                    <span className="font-medium">Available via WhatsApp</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pricing:</span>
                    <span className="font-medium text-primary">Always Negotiable</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-effect inline-block">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold mb-4 text-primary">Ready to Start?</h4>
              <p className="text-muted-foreground mb-6 max-w-md">
                Don't wait! Let's discuss your project and get started on creating something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open('https://wa.me/27820935840', '_blank')}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('tel:0820935840', '_blank')}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;