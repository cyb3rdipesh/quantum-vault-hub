import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-mono text-primary">
                &lt;CyberSec/&gt;
              </span>
            </div>
            <p className="text-muted-foreground">
              Passionate cybersecurity student dedicated to securing the digital future 
              through innovative solutions and ethical practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg transition-all duration-300 hover:shadow-glow-primary group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-accent/10 rounded-lg transition-all duration-300 hover:shadow-glow-accent group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="mailto:alex.chen@email.com"
                className="p-3 bg-card hover:bg-secondary/10 rounded-lg transition-all duration-300 hover:shadow-glow-secondary group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            </div>
            
            {/* Back to Top */}
            <Button
              variant="outline_cyber"
              size="sm"
              onClick={scrollToTop}
              className="mt-4"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {currentYear} Alex Chen. Built with passion for cybersecurity.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <span className="font-mono">&gt; while(learning) {"{code(); secure(); repeat();}"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;