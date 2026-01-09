import { motion } from 'framer-motion';
import { 
  Monitor, 
  Wifi, 
  BarChart3, 
  ShieldCheck,
  Settings,
  Award,
  Code,
  Globe,
  Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  { 
    icon: Monitor, 
    name: 'Computer Hardware',
    description: 'Learn PC assembly, troubleshooting, and maintenance.',
    duration: 'Flexible'
  },
  { 
    icon: Wifi, 
    name: 'Networking',
    description: 'Master network design, configuration, and management.',
    duration: 'Cisco Certified'
  },
  { 
    icon: BarChart3, 
    name: 'Data Analysis',
    description: 'Excel, SQL, Python for data-driven decisions.',
    duration: 'Practical'
  },
  { 
    icon: ShieldCheck, 
    name: 'Cybersecurity',
    description: 'Protect systems from threats and vulnerabilities.',
    duration: 'Industry Standard'
  },
  { 
    icon: Settings, 
    name: 'OS Fundamentals',
    description: 'Windows, Linux, and system administration.',
    duration: 'Comprehensive'
  },
  { 
    icon: Code, 
    name: 'Frontend Development',
    description: 'HTML, CSS, JavaScript, React for modern web development.',
    duration: 'Hands-On'
  },
  { 
    icon: Globe, 
    name: 'WordPress Training',
    description: 'Build and manage professional websites with WordPress.',
    duration: 'Beginner Friendly'
  },
  { 
    icon: Palette, 
    name: 'Graphic Design',
    description: 'Master Photoshop, Illustrator, and visual design principles.',
    duration: 'Creative'
  },
];

const TrainingSection = () => {
  return (
    <section id="training" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full" />
      
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
              ICT Training
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="gradient-text">Cisco Certified</span> Training
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Advance your career with our industry-recognized certifications under the 
              Cisco Networking Academy. We offer comprehensive ICT training programs 
              designed for both beginners and professionals.
            </p>

            {/* Cisco Badge */}
            <div className="flex items-center gap-4 p-6 bg-secondary/50 border border-border rounded-xl mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Cisco Networking Academy</h4>
                <p className="text-sm text-muted-foreground">Authorized Training Partner</p>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Enroll Now</a>
            </Button>
          </motion.div>

          {/* Right Content - Courses */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 card-premium hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <course.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-heading font-semibold text-foreground">{course.name}</h4>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {course.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
