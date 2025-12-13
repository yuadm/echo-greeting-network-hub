import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, Shield, Clock } from 'lucide-react';
import heroCareImage from '@/assets/images/hero-care.jpg';

interface HeroSectionProps {
  companyName: string;
}

export function HeroSection({ companyName }: HeroSectionProps) {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-care-sage/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-soft rounded-full border border-primary/20">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Compassionate Care at Home
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Caring for Your
                <span className="text-primary block">Loved Ones</span>
                Like Family
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {companyName} provides professional, compassionate door-to-door care services 
                that help your family members live independently and with dignity in the 
                comfort of their own home.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                <span>CQC Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-care-warm" />
                <span>Trusted by Families</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/job-application')}
                className="rounded-full px-8 py-6 text-lg shadow-glow hover:shadow-lg transition-all group"
              >
                Apply for a Job
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/login')}
                className="rounded-full px-8 py-6 text-lg hover:bg-muted transition-all"
              >
                Employee Portal
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroCareImage}
                  alt="Professional caregiver helping elderly person at home"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating card - Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-lg border border-border animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-success-soft flex items-center justify-center">
                    <Heart className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Families Helped</p>
                  </div>
                </div>
              </div>

              {/* Floating card - Rating */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-lg border border-border animate-scale-in" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-warning"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Based on 200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
