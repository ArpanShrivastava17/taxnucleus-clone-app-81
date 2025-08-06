import { Check, Zap, Clock, Database, Globe } from 'lucide-react';

const StreamlinedSection = () => {
  const features = [
    "Automated document categorization",
    "Real-time compliance monitoring", 
    "Intelligent deadline management"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process documents 10x faster with our AI-powered automation"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your tax needs"
    },
    {
      icon: Database,
      title: "Data Security",
      description: "Enterprise-grade security with SOC 2 Type II compliance"
    },
    {
      icon: Globe,
      title: "Multi-State Filing",
      description: "Support for complex multi-state tax filing requirements"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              STREAMLINED <span className="text-primary">TAX PREPARATION</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Automate the tax process with easy document uploads, task 
              management, and IRS compliance checks. Our platform reduces 
              preparation time by up to 60% while ensuring accuracy and compliance.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
            <div className="bg-primary p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-primary-foreground font-semibold mt-2">
                Tax Preparation Dashboard
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="text-sm font-medium text-foreground">Document Upload</span>
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <span className="text-sm font-medium text-foreground">Review & Verification</span>
                <Clock className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                <span className="text-sm font-medium text-foreground">Final Submission</span>
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamlinedSection;