import { 
  Heart, 
  Home, 
  Clock, 
  Users, 
  Pill, 
  Utensils,
  Bath,
  Car,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import companionCareImage from '@/assets/images/companion-care.jpg';
import dailyCareImage from '@/assets/images/daily-care.jpg';

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Assistance with bathing, dressing, grooming, and maintaining personal hygiene with dignity and respect.',
    color: 'primary',
  },
  {
    icon: Home,
    title: 'Live-in Care',
    description: 'Round-the-clock care and companionship from a dedicated carer who lives in your home.',
    color: 'care-sage',
  },
  {
    icon: Clock,
    title: 'Hourly Visits',
    description: 'Flexible care visits scheduled at times that work best for you and your family.',
    color: 'care-warm',
  },
  {
    icon: Users,
    title: 'Companionship',
    description: 'Friendly company, conversation, and emotional support to combat loneliness.',
    color: 'care-blue',
  },
  {
    icon: Pill,
    title: 'Medication Support',
    description: 'Help with medication reminders and ensuring prescriptions are taken correctly.',
    color: 'success',
  },
  {
    icon: Utensils,
    title: 'Meal Preparation',
    description: 'Nutritious, delicious meals prepared according to dietary requirements and preferences.',
    color: 'warning',
  },
  {
    icon: Bath,
    title: 'Domestic Help',
    description: 'Light housekeeping, laundry, and maintaining a clean, comfortable living environment.',
    color: 'primary',
  },
  {
    icon: Car,
    title: 'Escort Services',
    description: 'Accompaniment to appointments, social events, and outings in the community.',
    color: 'care-sage',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-care-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-soft rounded-full text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Care Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a wide range of home care services tailored to meet your individual 
            needs, ensuring you receive the support you need while maintaining your independence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-slow hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-slow">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg">
            <div className="aspect-video relative">
              <img
                src={companionCareImage}
                alt="Companion care services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Companion Care
                </h3>
                <p className="text-white/90">
                  Building meaningful relationships through conversation and activities
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Social Engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>Emotional Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg">
            <div className="aspect-video relative">
              <img
                src={dailyCareImage}
                alt="Daily living support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Daily Living Support
                </h3>
                <p className="text-white/90">
                  Helping with everyday tasks while promoting independence
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  <span>Meal Preparation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  <span>Household Tasks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 group"
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Discuss Your Care Needs
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
