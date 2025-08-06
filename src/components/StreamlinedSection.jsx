import Button from './ui/Button';
import { useNavigate } from 'react-router-dom';

const StreamlinedSection = () => {
  const navigate = useNavigate();

  const sectionStyle = {
    padding: 'var(--spacing-3xl) 0',
    backgroundColor: 'var(--color-background)',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--spacing-md)',
  };

  const titleStyle = {
    fontSize: 'var(--font-size-4xl)',
    fontWeight: 'bold',
    marginBottom: 'var(--spacing-lg)',
    color: 'var(--color-foreground)',
  };

  const descriptionStyle = {
    fontSize: 'var(--font-size-lg)',
    color: 'var(--color-muted-foreground)',
    marginBottom: 'var(--spacing-xl)',
    maxWidth: '48rem',
    margin: '0 auto var(--spacing-xl)',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          Ready to Streamline Your Tax Process?
        </h2>
        <p style={descriptionStyle}>
          Join thousands of tax professionals who have transformed their practice with Tax Nucleus.
          Get started today with our free trial.
        </p>
        <Button 
          variant="cta" 
          size="lg"
          onClick={() => navigate('/signup')}
        >
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
};

export default StreamlinedSection;