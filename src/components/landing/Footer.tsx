import { Heart, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  companyName: string;
  companyLogo?: string;
}

const footerLinks = {
  services: [
    { name: 'Personal Care', href: '#services' },
    { name: 'Companionship', href: '#services' },
    { name: 'Medication Support', href: '#services' },
    { name: 'Home Help', href: '#services' },
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

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
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
              <span className="text-xl font-bold">{companyName}</span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed max-w-sm">
              Providing compassionate, professional home care services that help your 
              loved ones live independently with dignity.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
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

        {/* Contact Info */}
        <div className="border-t border-background/10 pt-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-background/70">
            <div>
              <span className="font-medium text-background">Phone:</span> 01234 567 890
            </div>
            <div>
              <span className="font-medium text-background">Email:</span> info@daryelcare.com
            </div>
            <div>
              <span className="font-medium text-background">Address:</span> Your Street, City, Postcode
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/50">
              <Heart className="w-4 h-4 text-primary" />
              <span>CQC Registered Provider</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
