import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  companyName: string;
  companyLogo?: string;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
];

export function Navbar({ companyName, companyLogo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
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
            <span className={cn(
              "text-xl font-bold hidden sm:block transition-colors",
              isScrolled ? "text-foreground" : "text-foreground"
            )}>
              {companyName}
            </span>
          </button>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "px-4 py-2 font-medium transition-colors rounded-lg",
                  isScrolled 
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Actions - Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => navigate('/job-application')}
              className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
            >
              Join the Team
            </Button>
            <Button
              onClick={() => navigate('/login')}
              className="rounded-full px-6 bg-primary hover:bg-primary-hover transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Staff Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden mt-4"
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
                    onClick={() => navigate('/job-application')}
                    className="w-full rounded-xl border-primary text-primary"
                  >
                    Join the Team
                  </Button>
                  <Button
                    onClick={() => navigate('/login')}
                    className="w-full rounded-xl"
                  >
                    Staff Portal
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
