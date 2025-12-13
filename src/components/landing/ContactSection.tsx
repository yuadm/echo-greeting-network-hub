import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  ChevronDown
} from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactSectionProps {
  companyName: string;
}

export function ContactSection({ companyName }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Thank you for your inquiry! We\'ll be in touch soon.');
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
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
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Talk About Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are here to answer your questions, discuss your loved one's needs, 
            or help you start the application process. Reaching out is the first 
            step toward personalized support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form - Primary Focus */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Get Started with Home Care
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-success-soft flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our care team will contact you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Your Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="e.g., Sarah Johnson"
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="e.g., sarah.johnson@email.com"
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Include area code"
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whoNeedsCare">Who needs care? *</Label>
                      <Select required>
                        <SelectTrigger className="rounded-xl h-12">
                          <SelectValue placeholder="Select one" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="myself">Myself</SelectItem>
                          <SelectItem value="family">A Family Member</SelectItem>
                          <SelectItem value="friend">Friend/Client</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="careLevel">What level of care are you seeking? *</Label>
                    <Select required>
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="companionship">General Companionship</SelectItem>
                        <SelectItem value="personal">Personal Care</SelectItem>
                        <SelectItem value="postop">Post-Op/Short-Term</SelectItem>
                        <SelectItem value="unsure">Unsure - Need Guidance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us briefly about your situation, location, and the type of assistance required..."
                      rows={4}
                      required
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-full h-14 text-lg bg-primary hover:bg-primary-hover transition-all duration-200 hover:scale-[1.02] group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Immediate Assistance */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Immediate Assistance
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                We are available Monday - Friday, 8:00 AM to 6:00 PM
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:+441onal23456789" 
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-sm text-muted-foreground">Best for urgent inquiries</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@daryelcare.com" 
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-sm text-muted-foreground">info@daryelcare.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Our Office</p>
                    <p className="text-sm text-muted-foreground">Your Street Address, City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-2xl h-48 flex items-center justify-center border border-border overflow-hidden">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Map Location</p>
              </div>
            </div>

            {/* Free Assessment CTA */}
            <div className="bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-6 text-primary-foreground">
              <h4 className="font-semibold text-lg mb-2">
                Free Care Assessment
              </h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                We offer a free, no-obligation care assessment to understand your 
                needs and create a personalized care plan.
              </p>
              <p className="text-sm font-medium">
                Call us today to book your assessment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
