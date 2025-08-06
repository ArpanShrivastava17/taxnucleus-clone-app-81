import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { ArrowLeft, FileText, Wrench } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PlaceholderPage = ({ title }) => {
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: 'var(--color-background)',
  };

  const contentStyle = {
    maxWidth: '64rem',
    margin: '0 auto',
    padding: 'var(--spacing-3xl) var(--spacing-md)',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: 'var(--spacing-2xl)',
  };

  const iconContainerStyle = {
    width: '5rem',
    height: '5rem',
    backgroundColor: 'var(--color-primary) / 0.1',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto var(--spacing-lg)',
  };

  return (
    <div style={containerStyle}>
      <Navigation />
      
      <div style={contentStyle}>
        <div style={headerStyle}>
          <div style={iconContainerStyle}>
            <Wrench size={40} color="var(--color-primary)" />
          </div>
          
          <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'bold', marginBottom: 'var(--spacing-md)' }}>
            {title}
          </h1>
          
          <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-muted-foreground)', marginBottom: 'var(--spacing-xl)', maxWidth: '32rem', margin: '0 auto var(--spacing-xl)' }}>
            This feature is currently under development. We're working hard to bring you 
            the best tax management experience possible.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/">
              <Button>
                <ArrowLeft size={16} style={{ marginRight: 'var(--spacing-sm)' }} />
                Back to Home
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <Card style={{ maxWidth: '32rem', margin: '0 auto' }}>
          <CardHeader>
            <CardTitle style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <FileText size={20} />
              Coming Soon
            </CardTitle>
            <CardDescription>
              This {title.toLowerCase()} feature will include:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></div>
                Advanced functionality tailored for tax professionals
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></div>
                Seamless integration with existing workflows
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></div>
                Bank-level security and compliance
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></div>
                24/7 customer support and training resources
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlaceholderPage;