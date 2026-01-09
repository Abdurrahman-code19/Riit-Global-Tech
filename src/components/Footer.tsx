import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, ArrowUp, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Training', href: '#training' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'X (Twitter)' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/2348023990966', label: 'WhatsApp' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-secondary border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="RIIT Global Tech Logo" 
                className="h-16 w-16 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  RIIT <span className="text-primary">GLOBAL TECH</span>
                </h3>
                <p className="text-sm text-muted-foreground">Your Reliable IT Partner</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Delivering world-class ICT solutions since 2010. We provide professional 
              IT services, genuine UK-imported equipment, and certified training programs.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-foreground mb-6">Contact Info</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>25, Ijegun Road, Oropo Bus Stop,<br />Ikotun, Alimosho, Lagos</p>
              <p>
                <a href="tel:08023962693" className="hover:text-primary transition-colors">
                  08023962693
                </a>
              </p>
              <p>
                <a href="mailto:riitic51@gmail.com" className="hover:text-primary transition-colors">
                  riitic51@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RIIT Global Tech. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
