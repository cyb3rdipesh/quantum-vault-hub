import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Terminal, Globe, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "VulnScanner Pro",
      description: "An automated vulnerability scanner that identifies security flaws in web applications using OWASP methodology and custom detection algorithms.",
      image: "🛡️",
      tech: ["Python", "Django", "SQLite", "OWASP"],
      category: "Security Tool",
      icon: Shield,
      features: [
        "Automated vulnerability detection",
        "OWASP Top 10 coverage",
        "Custom payload generation",
        "Detailed reporting system"
      ],
      status: "Completed"
    },
    {
      title: "SecureChat",
      description: "End-to-end encrypted messaging application implementing modern cryptographic protocols for secure communication.",
      image: "💬",
      tech: ["React", "Node.js", "Socket.io", "AES-256"],
      category: "Cryptography",
      icon: Lock,
      features: [
        "End-to-end encryption",
        "Perfect forward secrecy",
        "Real-time messaging",
        "Key exchange protocols"
      ],
      status: "In Progress"
    },
    {
      title: "Network Sentinel",
      description: "Real-time network monitoring and intrusion detection system with machine learning capabilities for anomaly detection.",
      image: "🌐",
      tech: ["Python", "Scapy", "TensorFlow", "Flask"],
      category: "Network Security",
      icon: Globe,
      features: [
        "Real-time packet analysis",
        "ML-based anomaly detection",
        "Alert system",
        "Traffic visualization"
      ],
      status: "Completed"
    },
    {
      title: "Forensics Toolkit",
      description: "Digital forensics suite for analyzing system artifacts, memory dumps, and network traffic in cybersecurity investigations.",
      image: "🔍",
      tech: ["C++", "Qt", "SQLite", "Volatility"],
      category: "Digital Forensics",
      icon: Terminal,
      features: [
        "Memory dump analysis",
        "File system examination",
        "Timeline reconstruction",
        "Evidence collection"
      ],
      status: "Planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-accent/20 text-accent border-accent/30";
      case "In Progress":
        return "bg-primary/20 text-primary border-primary/30";
      case "Planned":
        return "bg-secondary/20 text-secondary border-secondary/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in cybersecurity and digital protection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden bg-gradient-card border-border hover:shadow-cyber transition-all duration-300 group"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{project.image}</div>
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <Badge 
                          variant="outline" 
                          className={getStatusColor(project.status)}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Button 
                      variant="cyber" 
                      size="sm" 
                      className="flex-1"
                      disabled={project.status === "Planned"}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      variant="outline_cyber" 
                      size="sm" 
                      className="flex-1"
                      disabled={project.status === "Planned"}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on cybersecurity projects?
          </p>
          <Button variant="cyber" size="lg">
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;