import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  GraduationCap, 
  Calendar, 
  Banknote,
  ArrowRight,
  CheckCircle,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import careersTeamImage from '@/assets/images/careers-team.jpg';

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
  { number: '01', title: 'Apply Online', description: 'Complete our simple online application form.' },
  { number: '02', title: 'Interview', description: 'Meet our friendly team for a chat.' },
  { number: '03', title: 'Training', description: 'Receive comprehensive, paid training.' },
  { number: '04', title: 'Start Caring', description: 'Begin making a difference!' },
];

const requirements = [
  'Right to work in the UK',
  'Genuine passion for helping others',
  'Good communication skills',
  'Reliable and trustworthy',
  'DBS check (we can help arrange this)',
  'No experience required - we provide training',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function CareersSection() {
  const navigate = useNavigate();

  return (
    <section id="careers" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
            Join Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start a Rewarding Career in Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Looking for a job that makes a real difference? Join our team of dedicated 
            caregivers and discover the joy of helping others while building a fulfilling career.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl mb-16"
        >
          <img
            src={careersTeamImage}
            alt="Our diverse team of caregivers"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary to-primary-hover rounded-3xl p-8 sm:p-12 text-primary-foreground mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              How to Join Us
            </h3>
            <p className="text-primary-foreground/80">
              Our simple 4-step process makes it easy to start your career in care
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-foreground/20" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/30 mb-4">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-primary-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Requirements and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Ready to Make a Difference?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Start your application today
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Join hundreds of caring individuals who have found their calling with us. 
              Whether you're new to care or experienced, we'd love to hear from you.
            </p>

            <Button
              size="lg"
              onClick={() => navigate('/job-application')}
              className="w-full rounded-full group bg-primary hover:bg-primary-hover transition-all duration-200 hover:scale-[1.02]"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
