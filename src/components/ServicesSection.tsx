import { motion } from 'framer-motion';
import { 
  Network, 
  MonitorCheck, 
  Globe2, 
  GraduationCap, 
  Wrench,
  ArrowRight,
  ShoppingCart,
  FileText,
  Briefcase,
  MoreHorizontal
} from 'lucide-react';

const services = [
  {
    icon: Network,
    title: 'Home & Office Networking',
    description: 'Professional networking solutions for small, medium, and large enterprises with complete system automation for seamless operations.',
    features: ['LAN/WAN Setup', 'Network Security', 'System Automation', 'Remote Access'],
  },
  {
    icon: MonitorCheck,
    title: 'CBT/CBE Center Setup',
    description: 'Standard, fully approved CBT/CBE centers for JAMB, WAEC, and NECO examinations with complete infrastructure.',
    features: ['JAMB Approved', 'WAEC Certified', 'NECO Accredited', 'Full Setup'],
  },
  {
    icon: Globe2,
    title: 'Website Development',
    description: 'Modern website development and full school portal design and management for educational institutions.',
    features: ['Custom Websites', 'School Portals', 'E-Learning Platforms', 'SEO Optimization'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Site Development',
    description: 'Build powerful online stores with payment integration, inventory management, and seamless shopping experiences.',
    features: ['Online Stores', 'Payment Gateway', 'Inventory System', 'Order Tracking'],
  },
  {
    icon: FileText,
    title: 'Blog Site Creation',
    description: 'Professional blog platforms with content management, SEO optimization, and engaging layouts.',
    features: ['CMS Setup', 'SEO Ready', 'Custom Themes', 'Social Integration'],
  },
  {
    icon: Briefcase,
    title: 'Portfolio Site Creation',
    description: 'Stunning portfolio websites to showcase your work, projects, and professional achievements.',
    features: ['Creative Designs', 'Gallery Layouts', 'Responsive', 'Contact Forms'],
  },
  {
    icon: GraduationCap,
    title: 'ICT Professional Training',
    description: 'Certified training under Cisco Networking Academy with corporate ICT consultancy services.',
    features: ['Cisco Certified', 'Networking', 'Cybersecurity', 'Data Analysis'],
  },
  {
    icon: Wrench,
    title: 'Sales, Repairs & Configurations',
    description: 'Sales of genuine UK-imported laptops, desktops, servers with professional repair and data recovery services.',
    features: ['Equipment Sales', 'Server Setup', 'Data Recovery', 'Configurations'],
  },
  {
    icon: MoreHorizontal,
    title: 'And Many More',
    description: 'We offer a wide range of additional ICT services tailored to meet your unique business needs.',
    features: ['IT Consulting', 'Custom Solutions', 'Tech Support', 'Maintenance'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full" />
      
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
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="gradient-text">ICT Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From networking to training, we provide end-to-end technology solutions 
            tailored to meet your specific needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Active CBT Centers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 card-premium p-8 md:p-12"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
            Our Active <span className="gradient-text">CBT Centers</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'STATO CBT Center', location: 'Igbo Elerin' },
              { name: 'SUBLIME CBT Center', location: 'Cele-Nica' },
              { name: 'MUSLIM TEENS CBT Center', location: 'Ijegun' },
            ].map((center, index) => (
              <motion.div
                key={center.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6 bg-secondary/50 rounded-xl border border-border"
              >
                <h4 className="font-heading font-semibold text-foreground mb-2">{center.name}</h4>
                <p className="text-sm text-muted-foreground">{center.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
