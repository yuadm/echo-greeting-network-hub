import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import heroDoorstepImage from '@/assets/images/hero-doorstep.jpg';

interface HeroSectionProps {
  companyName: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function HeroSection({ companyName }: HeroSectionProps) {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroDoorstepImage}
          alt="Compassionate caregiver at doorstep"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Main headline */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight">
                Compassionate Care,
                <span className="block text-primary-soft">Right at Your Doorstep.</span>
              </h1>
              <p className="text-lg sm:text-xl text-background/80 max-w-2xl leading-relaxed">
                Professional care services tailored to your loved one's needs. 
                We help families feel confident that their loved ones are receiving 
                the best possible care in the comfort of their own home.
              </p>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-6 text-sm text-background/70"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Reliable Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Personalized Plans</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent-hover shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Care for Your Loved One
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full px-8 py-6 text-lg border-background/30 text-background hover:bg-background/10 transition-all"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-12 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-background/50 rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
