import { motion } from 'framer-motion';
import { Shield, Award, Globe, Users } from 'lucide-react';

const stats = [
  { icon: Shield, value: '15+', label: 'Years Experience' },
  { icon: Award, value: '500+', label: 'Projects Completed' },
  { icon: Globe, value: 'UK', label: 'Quality Equipment' },
  { icon: Users, value: '1000+', label: 'Happy Clients' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-heading font-semibold uppercase tracking-widest mb-6">
              About Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Delivering <span className="gradient-text">World-Class</span> ICT Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At RIIT GLOBAL TECH, we deliver world-class ICT solutions designed to help individuals, 
              schools, and businesses stay ahead in a fast-moving digital world. Since 2010, we have 
              been committed to excellence, innovation, and reliability.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We pride ourselves on importing only genuine, high-quality equipment from the United Kingdom, 
              ensuring that our clients receive products that meet international standards of quality 
              and durability.
            </p>
            
            {/* Trust Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {['Certified Professionals', 'UK-Sourced Equipment', 'Reliable Support', 'Affordable Pricing'].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 text-center hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-heading text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
