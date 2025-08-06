import { Link } from 'react-router-dom';
import { FileText, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: 'Tax Portal', href: '/product/tax-portal' },
    { name: 'Document Management', href: '/product/document-management' },
    { name: 'Client Communication', href: '/product/client-communication' },
    { name: 'E-Signatures', href: '/product/e-signatures' },
    { name: 'Billing & Invoicing', href: '/product/billing' }
  ];

  const resourceLinks = [
    { name: 'Help Center', href: '/resources/help' },
    { name: 'Documentation', href: '/resources/docs' },
    { name: 'API Reference', href: '/resources/api' },
    { name: 'Training Videos', href: '/resources/training' },
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Support', href: '/resources/support' }
  ];

  return (
    <footer className="bg-hero-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">TAX NUCLEUS</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At the nucleus of success for your tax needs. 
              Streamlining tax preparation with innovative 
              technology and exceptional service.
            </p>
            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                📧 support@taxnucleus.com
              </p>
              <p className="text-gray-300">
                📞 1-800-TAX-HELP
              </p>
              <div className="text-gray-300">
                <p>123 Business Ave</p>
                <p>Suite 100</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Tax Nucleus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;