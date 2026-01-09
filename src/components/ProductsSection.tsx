import { motion } from 'framer-motion';
import { 
  Router, 
  Cable, 
  Cpu, 
  Printer, 
  Mouse, 
  Keyboard,
  Tablet,
  Briefcase,
  Package
} from 'lucide-react';

const products = [
  { icon: Cable, name: 'Networking Cables', description: 'CAT5, CAT6, Fiber Optic' },
  { icon: Router, name: 'Routers & Switches', description: 'Enterprise Grade' },
  { icon: Cpu, name: 'CPUs & Processors', description: 'Intel & AMD' },
  { icon: Printer, name: 'Printers', description: 'Laser & Inkjet' },
  { icon: Mouse, name: 'Wireless Mouse', description: 'Ergonomic Design' },
  { icon: Keyboard, name: 'Wireless Keyboards', description: 'Premium Quality' },
  { icon: Tablet, name: 'Tablets', description: 'Various Brands' },
  { icon: Briefcase, name: 'Tablet Pouches', description: 'Protective Cases' },
  { icon: Package, name: 'IT Accessories', description: 'Complete Range' },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
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
            Our Products
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium <span className="gradient-text">UK-Imported</span> Equipment
          </h2>
          <p className="text-lg text-muted-foreground">
            Genuine, high-quality IT equipment imported directly from the United Kingdom, 
            meeting international standards of quality and reliability.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-premium p-6 md:p-8 text-center group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-sm md:text-base">
                {product.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* UK Quality Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-secondary/50 border border-border rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-heading font-semibold text-foreground">100% Genuine</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-heading font-semibold text-foreground">UK Imported</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-heading font-semibold text-foreground">Quality Assured</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
