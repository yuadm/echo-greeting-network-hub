import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  GraduationCap, 
  Calendar, 
  Banknote,
  ArrowRight,
  CheckCircle,
  Users,
  Clock
} from 'lucide-react';

const benefits = [
  {
    icon: Banknote,
    title: 'Competitive Pay',
    description: 'Excellent hourly rates with regular reviews and performance bonuses.',
  },
  {
    icon: GraduationCap,
    title: 'Full Training',
    description: 'Comprehensive paid training and ongoing professional development.',
  },
  {
    icon: Calendar,
    title: 'Flexible Hours',
    description: 'Work schedules that fit around your life and commitments.',
  },
  {
    icon: Heart,
    title: 'Rewarding Work',
    description: 'Make a real difference in people\'s lives every single day.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Apply Online',
    description: 'Complete our simple online application form with your details and experience.',
  },
  {
    number: '02',
    title: 'Interview',
    description: 'Meet our friendly team for an informal chat about your passion for care.',
  },
  {
    number: '03',
    title: 'Training',
    description: 'Receive comprehensive, paid training to prepare you for your new role.',
  },
  {
    number: '04',
    title: 'Start Caring',
    description: 'Begin your rewarding career making a difference in people\'s lives.',
  },
];

const requirements = [
  'Right to work in the UK',
  'Genuine passion for helping others',
  'Good communication skills',
  'Reliable and trustworthy',
  'DBS check (we can help arrange this)',
  'No experience required - we provide training',
];

export function CareersSection() {
  const navigate = useNavigate();

  return (
    <section id="careers" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-warm opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-care-warm-light rounded-full text-care-warm text-sm font-medium mb-4">
            Join Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start a Rewarding Career in Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Looking for a job that makes a real difference? Join our team of dedicated 
            caregivers and discover the joy of helping others while building a fulfilling career.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-care-warm/30 transition-all duration-slow hover:shadow-lg text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-care-warm-light flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-slow">
                <benefit.icon className="w-8 h-8 text-care-warm" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-br from-primary to-care-blue rounded-3xl p-8 sm:p-12 text-primary-foreground mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              How to Join Us
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Our simple 4-step process makes it easy to start your career in care
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-foreground/20" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/30 mb-4">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-primary-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What We're Looking For
            </h3>
            <div className="space-y-4">
              {requirements.map((requirement) => (
                <div key={requirement} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success-soft flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-muted-foreground">{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-soft flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Ready to Make a Difference?
                </h3>
                <p className="text-muted-foreground">
                  Start your application today
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Join hundreds of caring individuals who have found their calling with us. 
              Whether you're new to care or an experienced professional, we'd love to 
              hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/job-application')}
                className="rounded-full flex-1 group"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/login')}
                className="rounded-full flex-1"
              >
                <Clock className="mr-2 w-5 h-5" />
                Employee Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
