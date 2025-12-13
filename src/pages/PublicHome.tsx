import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { CareersSection } from '@/components/landing/CareersSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

function PublicHomeContent() {
  const { user, userRole, loading, signOut } = useAuth();
  const { companySettings, loading: companyLoading } = useCompany();
  const navigate = useNavigate();
  const [loadingTimeout, setLoadingTimeout] = useState(false);

  useEffect(() => {
    if (!loading && user && userRole !== null) {
      if (userRole === 'admin') {
        navigate('/admin');
      } else if (userRole === 'user') {
        navigate('/admin');
      }
    }
  }, [user, userRole, loading, navigate]);

  useEffect(() => {
    const randomTimeout = Math.random() * 3000 + 3000;
    const timeout = setTimeout(() => {
      if (loading || (user && userRole === null)) {
        setLoadingTimeout(true);
      }
    }, randomTimeout);

    return () => clearTimeout(timeout);
  }, [loading, user, userRole]);

  if (loadingTimeout) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <Card className="w-96">
          <CardContent className="flex flex-col items-center justify-center py-8 space-y-4">
            <AlertTriangle className="w-12 h-12 text-warning" />
            <h3 className="text-lg font-semibold">Loading Timeout</h3>
            <p className="text-sm text-muted-foreground text-center">
              We're having trouble loading your session.
            </p>
            <div className="flex gap-2 w-full">
              <Button onClick={() => window.location.reload()} variant="outline" className="flex-1">
                Retry
              </Button>
              <Button onClick={async () => { await signOut(); window.location.reload(); }} className="flex-1">
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading || (user && userRole === null)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-80">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm text-muted-foreground">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const companyName = companySettings?.name || 'Daryel Care';
  const companyLogo = companySettings?.logo;

  return (
    <div className="min-h-screen bg-background">
      <Navbar companyName={companyName} companyLogo={companyLogo} />
      <HeroSection companyName={companyName} />
      <WhyChooseUs />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <CareersSection />
      <ContactSection companyName={companyName} />
      <Footer companyName={companyName} companyLogo={companyLogo} />
    </div>
  );
}

export default function PublicHome() {
  return (
    <CompanyProvider>
      <PublicHomeContent />
    </CompanyProvider>
  );
}
