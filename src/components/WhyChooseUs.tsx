import { motion } from 'framer-motion';
import { Package, Users, HeadphonesIcon, BadgeDollarSign } from 'lucide-react';

const reasons = [
  {
    icon: Package,
    title: 'Genuine UK Equipment',
    description: 'All our IT equipment is sourced directly from the United Kingdom, ensuring international quality standards.',
  },
  {
    icon: Users,
    title: 'Certified Professionals',
    description: 'Our team consists of certified experts with years of experience in IT solutions and support.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Reliable Support',
    description: '24/7 customer support to ensure your systems run smoothly without any interruptions.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Pricing',
    description: 'Premium quality services and products at competitive prices without compromise.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-heading font-semibold uppercase tracking-widest mb-6">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="gradient-text">RIIT Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            What sets us apart from the competition and makes us your trusted IT partner.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 glow-effect">
                <reason.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
