import { Heart, Users, Shield, Award, Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutOfficeImage from '@/assets/images/about-office.jpg';
import careersTeamImage from '@/assets/images/careers-team.jpg';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every client with genuine warmth, empathy, and understanding.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'All carers are fully vetted, trained, and committed to your wellbeing.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building lasting relationships that feel like family.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do.',
  },
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

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
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
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide compassionate, reliable, and professional home care services 
              that enhance the quality of life for our clients while giving peace of 
              mind to their families. We believe that everyone deserves to age with 
              dignity and grace in the comfort of their own home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted home care provider in the region, known for 
              our unwavering commitment to quality, our exceptional caregivers, 
              and our ability to transform lives through compassionate care that 
              treats every person as family.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={careersTeamImage}
                alt="Our caring team of professionals"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Meet Our Dedicated Team
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team is made up of compassionate, dedicated professionals who are 
              passionate about making a difference. Every caregiver goes through 
              rigorous training and background checks to ensure the highest quality care.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={aboutOfficeImage}
                  alt="Care coordinator on phone"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="bg-primary-soft rounded-2xl p-6 flex flex-col justify-center">
                <p className="text-3xl font-bold text-primary mb-1">500+</p>
                <p className="text-sm text-muted-foreground">Families Served</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
