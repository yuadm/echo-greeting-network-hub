import { Heart } from 'lucide-react';

interface FooterProps {
  companyName: string;
  companyLogo?: string;
}

const footerLinks = {
  services: [
    { name: 'Personal Care', href: '#services' },
    { name: 'Live-in Care', href: '#services' },
    { name: 'Companion Care', href: '#services' },
    { name: 'Respite Care', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

export function Footer({ companyName, companyLogo }: FooterProps) {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {companyLogo ? (
                <img src={companyLogo} alt={companyName} className="h-10 w-auto brightness-0 invert" />
              ) : (
                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {companyName.charAt(0)}
                  </span>
                </div>
              )}
              <span className="text-xl font-semibold">{companyName}</span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Providing compassionate, professional home care services that help your 
              loved ones live independently with dignity.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/50">
              <Heart className="w-4 h-4 text-primary" />
              <span>CQC Registered Provider</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            <p className="text-sm text-background/50">
              Made with <Heart className="w-4 h-4 inline text-primary" /> for better care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
