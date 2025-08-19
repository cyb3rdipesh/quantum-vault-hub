import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Lock, Code } from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground font-mono">
              &gt; Hello World! I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Alex Chen
            </h1>
            <div className="text-xl md:text-2xl text-foreground space-y-2">
              <p className="font-mono">&lt;Cybersecurity Student /&gt;</p>
              <p className="text-muted-foreground">
                Securing the digital frontier, one vulnerability at a time
              </p>
            </div>
          </div>

          {/* Expertise Icons */}
          <div className="flex justify-center space-x-8 py-8">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-primary animate-pulse-glow" />
              <span className="text-sm font-mono text-muted-foreground">Security</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Lock className="h-8 w-8 text-secondary animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm font-mono text-muted-foreground">Encryption</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Code className="h-8 w-8 text-accent animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <span className="text-sm font-mono text-muted-foreground">Development</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              variant="cyber" 
              size="lg"
              onClick={scrollToAbout}
              className="min-w-[160px]"
            >
              Explore Portfolio
            </Button>
            <Button 
              variant="outline_cyber" 
              size="lg"
              className="min-w-[160px]"
            >
              View Projects
            </Button>
          </div>

          {/* Typing Animation */}
          <div className="pt-8">
            <div className="inline-block">
              <span className="text-primary font-mono">$</span>
              <span className="font-mono text-muted-foreground ml-2">
                ./scan_portfolio.sh --show-skills
              </span>
              <span className="animate-pulse text-primary">|</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;