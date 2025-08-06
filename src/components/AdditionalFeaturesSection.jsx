import { Shield, Zap, Users, Calendar } from 'lucide-react';

const AdditionalFeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade security measures and compliance standards."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensures quick document processing and seamless user experience."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team and clients in real-time with built-in collaboration tools."
    },
    {
      icon: Calendar,
      title: "Deadline Management",
      description: "Never miss a deadline with intelligent reminders and automated workflow scheduling."
    }
  ];

  const sectionStyle = {
    padding: 'var(--spacing-3xl) 0',
    backgroundColor: 'var(--color-secondary)',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--spacing-md)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'var(--spacing-xl)',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {features.map((feature, index) => (
            <div key={index} className="card hover-lift" style={{ padding: 'var(--spacing-xl)' }}>
              <feature.icon size={48} style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }} />
              <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: '600', marginBottom: 'var(--spacing-sm)' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--color-muted-foreground)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeaturesSection;