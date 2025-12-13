import { Heart, Users, Shield, Award, CheckCircle } from 'lucide-react';
import teamCaregiversImage from '@/assets/images/team-caregivers.jpg';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every client with genuine warmth, empathy, and understanding.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'All our carers are fully vetted, trained, and committed to your wellbeing.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in building lasting relationships that feel like family.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.',
  },
];

const commitments = [
  'Personalized care plans tailored to individual needs',
  'Regular communication with family members',
  'Continuous training for all care staff',
  'CQC registered and fully compliant',
  '24/7 emergency support available',
  'Flexible scheduling to suit your lifestyle',
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-care-teal-light/30 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-soft rounded-full text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Care That Comes From the Heart
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over a decade, we've been providing exceptional home care services 
            that allow people to live with dignity, comfort, and independence in 
            the place they love most — their own home.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-slow hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-slow">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={teamCaregiversImage}
                alt="Our caring team of professionals"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide compassionate, reliable, and professional home care services 
                that enhance the quality of life for our clients while giving peace of 
                mind to their families. We believe that everyone deserves to age with 
                dignity and grace in the comfort of their own home.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Our Commitment to You
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {commitments.map((commitment) => (
                  <div key={commitment} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
