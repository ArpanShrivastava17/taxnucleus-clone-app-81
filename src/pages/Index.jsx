import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AdditionalFeaturesSection from '../components/AdditionalFeaturesSection';
import StreamlinedSection from '../components/StreamlinedSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AdditionalFeaturesSection />
      <StreamlinedSection />
      <Footer />
    </div>
  );
};

export default Index;