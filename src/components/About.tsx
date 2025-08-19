import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  const highlights = [
    "Cybersecurity Student",
    "Ethical Hacker",
    "Security Researcher",
    "Full-Stack Developer"
  ];

  const interests = [
    "Penetration Testing",
    "Network Security",
    "Malware Analysis",
    "Incident Response",
    "Digital Forensics",
    "Cryptography"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about securing digital infrastructure and protecting against evolving cyber threats
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="prose prose-lg text-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a dedicated cybersecurity student with a passion for understanding and mitigating digital threats. 
                  My journey began with a curiosity about how systems work under the hood, which naturally evolved into 
                  a fascination with securing them against malicious actors.
                </p>
                <p className="text-lg leading-relaxed">
                  Through hands-on experience with penetration testing, vulnerability assessment, and security research, 
                  I've developed a comprehensive understanding of both offensive and defensive security practices. 
                  I believe in the power of ethical hacking to make the digital world safer for everyone.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">What I Do</h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="p-6 bg-gradient-card border-border hover:shadow-cyber transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Education</h3>
                  <p className="text-foreground font-medium">B.S. Cybersecurity</p>
                  <p className="text-muted-foreground">University of Technology</p>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Expected Graduation: 2025
                  </div>
                </div>
              </div>
            </Card>

            {/* Location Card */}
            <Card className="p-6 bg-gradient-card border-border hover:shadow-cyber transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-foreground">San Francisco, CA</p>
                  <p className="text-muted-foreground">Open to remote opportunities</p>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6 bg-gradient-card border-border hover:shadow-cyber transition-all duration-300">
              <h3 className="font-semibold text-lg mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;