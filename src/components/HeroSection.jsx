import Button from './ui/Button';
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

  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, var(--color-hero-bg), var(--color-primary-dark))',
    overflow: 'hidden',
  };

  const containerStyle = {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 'var(--spacing-3xl) var(--spacing-md)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'var(--spacing-2xl)',
    alignItems: 'center',
  };

  const contentStyle = {
    color: 'white',
    animation: 'fadeIn 0.5s ease-out',
  };

  const titleStyle = {
    fontSize: 'var(--font-size-5xl)',
    fontWeight: 'bold',
    lineHeight: 'var(--line-height-tight)',
    marginBottom: 'var(--spacing-lg)',
    animation: 'slideUp 0.3s ease-out',
  };

  const subtitleStyle = {
    fontSize: 'var(--font-size-xl)',
    marginBottom: 'var(--spacing-lg)',
    color: '#d1d5db',
    animation: 'slideUp 0.3s ease-out 0.2s both',
  };

  const descriptionStyle = {
    fontSize: 'var(--font-size-lg)',
    marginBottom: 'var(--spacing-xl)',
    color: '#d1d5db',
    lineHeight: 'var(--line-height-relaxed)',
    maxWidth: '32rem',
    animation: 'slideUp 0.3s ease-out 0.4s both',
  };

  const buttonsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-md)',
    marginBottom: 'var(--spacing-2xl)',
    animation: 'slideUp 0.3s ease-out 0.6s both',
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 'var(--spacing-md)',
    animation: 'fadeIn 0.5s ease-out 0.8s both',
  };

  const trustTextStyle = {
    fontSize: 'var(--font-size-sm)',
    color: '#9ca3af',
  };

  // Responsive grid
  const responsiveGridStyle = {
    ...gridStyle,
    '@media (min-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  };

  const responsiveButtonsStyle = {
    ...buttonsStyle,
    '@media (min-width: 640px)': {
      flexDirection: 'row',
    },
  };

  const responsiveTitleStyle = {
    ...titleStyle,
    '@media (min-width: 1024px)': {
      fontSize: 'var(--font-size-6xl)',
    },
  };

  const responsiveSubtitleStyle = {
    ...subtitleStyle,
    '@media (min-width: 1024px)': {
      fontSize: 'var(--font-size-2xl)',
    },
  };

  const responsiveDescriptionStyle = {
    ...descriptionStyle,
    '@media (min-width: 1024px)': {
      fontSize: 'var(--font-size-xl)',
    },
  };

  const responsiveFeaturesStyle = {
    ...featuresGridStyle,
    '@media (min-width: 1024px)': {
      gap: 'var(--spacing-lg)',
    },
  };

  return (
    <section className="hero-section">
      {/* Animated Background Pattern */}
      <div className="hero-background-pattern">
        <div className="hero-background-circle"></div>
        <div className="hero-background-circle"></div>
        <div className="hero-background-circle"></div>
        <div className="hero-background-blur"></div>
      </div>

      <div style={containerStyle}>
        <div style={responsiveGridStyle}>
          {/* Left Content */}
          <div style={contentStyle}>
            <h1 style={responsiveTitleStyle}>
              At the <span className="text-gradient">Nucleus</span> of Success
            </h1>
            <h2 style={responsiveSubtitleStyle}>
              for Your Tax Needs
            </h2>
            <p style={responsiveDescriptionStyle}>
              Streamline your tax preparation process with our comprehensive portal 
              that automates workflows, enhances client communication, and ensures 
              IRS compliance.
            </p>
            
            <div style={responsiveButtonsStyle}>
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => navigate('/signup')}
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/demo')}
              >
                Watch Demo
              </Button>
            </div>

            <p style={trustTextStyle}>
              Trusted by 5,000+ tax professionals
            </p>
          </div>

          {/* Right Content - Feature Grid */}
          <div style={responsiveFeaturesStyle}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="hero-feature-card"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <feature.icon />
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;