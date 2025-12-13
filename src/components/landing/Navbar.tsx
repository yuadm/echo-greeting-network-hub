import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  companyName: string;
  companyLogo?: string;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Services', href: '#services' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar({ companyName, companyLogo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-slow',
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            {companyLogo ? (
              <img src={companyLogo} alt={companyName} className="h-10 w-auto" />
            ) : (
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  {companyName.charAt(0)}
                </span>
              </div>
            )}
            <span className="text-xl font-semibold text-foreground hidden sm:block">
              {companyName}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-muted-foreground hover:text-foreground font-medium transition-colors rounded-lg hover:bg-muted/50"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/login')}
              className="rounded-full px-6"
            >
              Employee Login
            </Button>
            <Button
              onClick={() => navigate('/job-application')}
              className="rounded-full px-6 shadow-soft"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-slow',
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          )}
        >
          <div className="bg-card rounded-2xl p-4 shadow-lg border border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-foreground font-medium transition-colors rounded-xl hover:bg-muted"
                >
                  {link.name}
                </button>
              ))}
              <hr className="my-2 border-border" />
              <Button
                variant="outline"
                onClick={() => navigate('/login')}
                className="w-full rounded-xl"
              >
                Employee Login
              </Button>
              <Button
                onClick={() => navigate('/job-application')}
                className="w-full rounded-xl"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
