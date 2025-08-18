import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "iamdokoye@gmail.com",
      href: "mailto:iamdokoye@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234(0)9152906499",
      href: "tel:+2349152906499"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dokoye",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/dokoye",
      color: "text-gray-800 dark:text-gray-200"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something <span className="gradient-primary bg-clip-text text-transparent">Secure & Scalable</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking to enhance your infrastructure security, optimize your DevOps processes, 
            or build robust backend systems, I'm here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-medium border-border/50">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I'd love to hear about your project. Fill out the form below and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-medium border-border/50">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out through any of these channels. I'm always happy to connect!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-medium border-border/50">
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>
                  Follow my journey and connect with me on these platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <social.icon className="mr-2 h-5 w-5" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="shadow-medium border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse"></div>
                <h3 className="font-semibold mb-2">Available for New Projects</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Currently accepting new opportunities for both full-time positions and consulting projects.
                </p>
                <Badge variant="secondary" className="px-4 py-2">
                  Response time: Within 24 hours
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;