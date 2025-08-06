import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FileText, Cloud, BarChart3, Users, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    { icon: FileText, description: 'Document Management' },
    { icon: Cloud, description: 'Cloud Processing' },
    { icon: BarChart3, description: 'Analytics Dashboard' },
    { icon: Users, description: 'Client Portal' },
    { icon: Zap, description: 'Fast Processing' },
    { icon: Shield, description: 'Secure Platform' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-hero-bg to-primary-dark overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-light rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 border border-primary-light rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-primary-light rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              At the <span className="bg-gradient-to-r from-hero-accent to-primary bg-clip-text text-transparent">Nucleus</span> of Success
            </h1>
            <h2 className="text-xl lg:text-2xl mb-6 text-gray-300 animate-slide-up delay-200">
              for Your Tax Needs
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-gray-300 leading-relaxed max-w-lg animate-slide-up delay-400">
              Streamline your tax preparation process with our comprehensive portal 
              that automates workflows, enhances client communication, and ensures 
              IRS compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up delay-600">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => navigate('/signup')}
                className="text-lg px-8 py-3 bg-gradient-to-r from-hero-accent to-primary hover:from-primary hover:to-hero-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/demo')}
              >
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-gray-400">
              Trusted by 5,000+ tax professionals
            </p>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6 animate-fade-in delay-800">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-hero-accent/50 group"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <feature.icon className="w-8 h-8 text-hero-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white text-sm font-medium group-hover:text-hero-accent transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;