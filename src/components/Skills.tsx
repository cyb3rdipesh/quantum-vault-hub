import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Terminal, 
  Globe, 
  Database, 
  Bug, 
  Key,
  Network,
  Eye,
  Lock,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Security Tools",
      icon: Shield,
      color: "text-primary",
      skills: [
        { name: "Nmap", level: 90 },
        { name: "Metasploit", level: 85 },
        { name: "Burp Suite", level: 80 },
        { name: "Wireshark", level: 85 },
        { name: "OWASP ZAP", level: 75 }
      ]
    },
    {
      title: "Programming",
      icon: Terminal,
      color: "text-accent",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Bash/Shell", level: 80 },
        { name: "C/C++", level: 70 },
        { name: "PowerShell", level: 75 }
      ]
    },
    {
      title: "Web Security",
      icon: Globe,
      color: "text-secondary",
      skills: [
        { name: "OWASP Top 10", level: 95 },
        { name: "XSS/CSRF", level: 90 },
        { name: "SQL Injection", level: 85 },
        { name: "Authentication", level: 80 },
        { name: "API Security", level: 75 }
      ]
    },
    {
      title: "Network Security",
      icon: Network,
      color: "text-primary",
      skills: [
        { name: "Firewall Config", level: 85 },
        { name: "IDS/IPS", level: 80 },
        { name: "VPN Setup", level: 75 },
        { name: "Network Analysis", level: 90 },
        { name: "Packet Inspection", level: 85 }
      ]
    }
  ];

  const certifications = [
    { name: "CompTIA Security+", status: "In Progress", icon: Shield },
    { name: "CEH (Certified Ethical Hacker)", status: "Planned", icon: Bug },
    { name: "CISSP", status: "Future Goal", icon: Key },
    { name: "OSCP", status: "Future Goal", icon: Terminal }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern cybersecurity challenges
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-border hover:shadow-cyber transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-background/50 rounded-lg">
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Certifications & Goals</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center bg-gradient-card border-border hover:shadow-cyber transition-all duration-300 group"
                >
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <span className="text-sm text-muted-foreground px-3 py-1 bg-muted/50 rounded-full">
                    {cert.status}
                  </span>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;