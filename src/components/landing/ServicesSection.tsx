import { 
  Heart, 
  Users, 
  Pill, 
  Home,
  Bath,
  Utensils,
  Car,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import personalCareImage from '@/assets/images/personal-care.jpg';
import companionshipImage from '@/assets/images/companionship.jpg';
import medicationImage from '@/assets/images/medication-support.jpg';

const services = [
  {
    icon: Bath,
    title: 'Personal Care & Hygiene',
    description: 'Dignified assistance with daily tasks, ensuring comfort and privacy.',
    features: [
      'Bathing, showering, and grooming assistance',
      'Dressing and transferring support (bed to chair)',
      'Incontinence and toileting care'
    ]
  },
  {
    icon: Users,
    title: 'Companionship & Support',
    description: 'Enhancing emotional and mental well-being to prevent isolation.',
    features: [
      'Engaging conversation and reading assistance',
      'Escorting to appointments and social activities',
      'Leisure activities (puzzles, gardening, hobbies)'
    ]
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Ensuring medications are taken correctly and on schedule.',
    features: [
      'Strict adherence to prescribed schedules',
      'Refill reminders and prescription collection',
      'Detailed record-keeping and communication'
    ]
  },
  {
    icon: Home,
    title: 'Home Help & Maintenance',
    description: 'Light chores and errands to keep the home environment safe.',
    features: [
      'Light housekeeping and laundry',
      'Meal planning and preparation',
      'Grocery shopping and local errands'
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-soft rounded-full text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Personalized Door-to-Door Care, Built Around Your Life
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a full spectrum of non-medical, professional home care services designed 
            to meet diverse needs—from short-term respite care to full-time assistance. 
            Our goal is to empower your loved one to thrive at home.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { image: personalCareImage, title: 'Personal Care', subtitle: 'Trust & Connection' },
            { image: companionshipImage, title: 'Companionship', subtitle: 'Joy & Laughter' },
            { image: medicationImage, title: 'Health Support', subtitle: 'Professional & Caring' },
          ].map((card, index) => (
            <div 
              key={card.title}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold text-background mb-1">{card.title}</h4>
                <p className="text-sm text-background/70">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Don't see what you need? Contact us to discuss a custom care plan.
          </p>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Phone className="w-4 h-4" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
