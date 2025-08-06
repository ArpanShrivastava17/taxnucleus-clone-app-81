import { Edit3, CreditCard, Bell, Shield } from 'lucide-react';

const AdditionalFeaturesSection = () => {
  const features = [
    {
      icon: Edit3,
      title: "Digital E-Signatures",
      description: "Enable clients to sign engagement letters digitally for a smooth onboarding process."
    },
    {
      icon: CreditCard,
      title: "Billing & Invoicing",
      description: "Manage client invoices and payments directly through the portal with automated reminders."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Receive real-time updates and reminders for important deadlines and client activities."
    },
    {
      icon: Shield,
      title: "IRS Compliance Checks",
      description: "Automated IRS compliance checks to ensure all necessary forms and documents are submitted."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-lg p-6 mb-6 w-20 h-20 mx-auto flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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