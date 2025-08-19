import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Download, 
  Send,
  MapPin,
  Phone
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.chen@email.com",
      href: "mailto:alex.chen@email.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
      color: "text-secondary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@alexchen",
      href: "https://github.com/alexchen",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Alex Chen",
      href: "https://linkedin.com/in/alexchen",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss cybersecurity projects, internships, or collaboration opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing cybersecurity trends, potential projects, 
                or career opportunities. Whether you're looking for a dedicated team member 
                or want to collaborate on security research, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-4 bg-gradient-card border-border hover:shadow-cyber transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-background/50 rounded-lg">
                        <IconComponent className={`h-5 w-5 ${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Social Profiles</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-all duration-300 ${social.color} group`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Download CV */}
            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="text-lg font-semibold mb-3">Professional Resume</h4>
              <p className="text-muted-foreground mb-4">
                Download my latest resume to learn more about my experience and qualifications.
              </p>
              <Button variant="cyber" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download CV (PDF)
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input 
                    placeholder="Project Collaboration Opportunity" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button variant="cyber" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;