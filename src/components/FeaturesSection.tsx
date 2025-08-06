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

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          What we <span className="text-primary">do</span>.
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-4xl mx-auto">
          Our tax portal simplifies and automates the tax preparation process for accountants and their clients,
          offering secure document uploads, task management, e-signatures, and seamless billing integration
          in one user-friendly platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-secondary/50 rounded-lg p-6 mb-6 w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="w-8 h-8" />
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

export default FeaturesSection;