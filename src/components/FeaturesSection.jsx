import { Upload, CheckSquare, FileText, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Upload,
      title: "Secure Document Uploads",
      description: "Clients can easily upload and share their tax documents securely with bank-level encryption."
    },
    {
      icon: CheckSquare,
      title: "Task Management & Deadlines",
      description: "Organize tax tasks and track deadlines to ensure nothing is missed during tax season."
    },
    {
      icon: FileText,
      title: "Customizable Tax Organizer",
      description: "A personalized tax organizer to guide clients through the information gathering process."
    },
    {
      icon: Users,
      title: "Client Portal Access",
      description: "Clients can log in to view progress, tasks, and securely communicate with their accountant."
    }
  ];

  const sectionStyle = {
    padding: 'var(--spacing-3xl) 0',
    backgroundColor: 'var(--color-background)',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--spacing-md)',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: 'var(--font-size-4xl)',
    fontWeight: 'bold',
    color: 'var(--color-foreground)',
    marginBottom: 'var(--spacing-md)',
  };

  const subtitleStyle = {
    fontSize: 'var(--font-size-lg)',
    color: 'var(--color-muted-foreground)',
    marginBottom: 'var(--spacing-3xl)',
    maxWidth: '64rem',
    margin: '0 auto var(--spacing-3xl)',
    lineHeight: 'var(--line-height-relaxed)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: 'var(--spacing-xl)',
  };

  const featureStyle = {
    textAlign: 'center',
  };

  const iconContainerStyle = {
    backgroundColor: 'var(--color-secondary)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--spacing-lg)',
    marginBottom: 'var(--spacing-lg)',
    width: '5rem',
    height: '5rem',
    margin: '0 auto var(--spacing-lg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all var(--transition-normal)',
    cursor: 'pointer',
  };

  const iconContainerHoverStyle = {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-primary-foreground)',
  };

  const featureTitleStyle = {
    fontSize: 'var(--font-size-xl)',
    fontWeight: '600',
    color: 'var(--color-foreground)',
    marginBottom: 'var(--spacing-md)',
  };

  const featureDescriptionStyle = {
    color: 'var(--color-muted-foreground)',
    lineHeight: 'var(--line-height-relaxed)',
  };

  // Responsive grid styles
  const responsiveGridStyle = {
    ...gridStyle,
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  };

  const responsiveTitleStyle = {
    ...titleStyle,
    '@media (min-width: 1024px)': {
      fontSize: 'var(--font-size-5xl)',
    },
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={responsiveTitleStyle}>
          What we <span style={{ color: 'var(--color-primary)' }}>do</span>.
        </h2>
        <p style={subtitleStyle}>
          Our tax portal simplifies and automates the tax preparation process for accountants and their clients,
          offering secure document uploads, task management, e-signatures, and seamless billing integration
          in one user-friendly platform.
        </p>

        <div style={responsiveGridStyle}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={featureStyle}
              className="group"
            >
              <div 
                style={iconContainerStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, iconContainerHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, iconContainerStyle);
                }}
              >
                <feature.icon size={32} />
              </div>
              <h3 style={featureTitleStyle}>
                {feature.title}
              </h3>
              <p style={featureDescriptionStyle}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;