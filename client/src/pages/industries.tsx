import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, X, Building2, ShoppingCart, Heart, Landmark, GraduationCap, 
  Plane, Home, Smartphone, TrendingUp, CheckCircle2, ArrowRight,
  Users, Target, Zap, Globe
} from "lucide-react";
import { Link } from "wouter";
import logoNav from "@assets/generated_images/logo_nav.png";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Regulations", href: "/regulations" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-[#0d1f28]/80 backdrop-blur-xl border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <a className="relative group cursor-pointer flex items-center">
            <img src={logoNav} alt="C&G Corp" className="h-10 w-auto object-contain" />
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest hover:tracking-[0.15em] duration-300">
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/contact-us">
            <Button 
              variant="outline" 
              className="relative overflow-hidden border-primary/50 text-white bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 group rounded-full px-6"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </Link>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-full left-0 right-0 bg-[#0d1f28]/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-primary transition-colors block py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Industries = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const industries = [
    {
      icon: <ShoppingCart className="w-14 h-14" />,
      title: "Retail & E-Commerce",
      description: "Transform customer shopping experiences with AI-powered support and personalized service",
      challenges: ["Order management", "Product inquiries", "Returns processing", "Peak season scaling"],
      solutions: ["24/7 AI chatbots", "Smart routing", "Inventory integration", "Multi-channel support"],
      stats: { improvement: "40%", metric: "Customer satisfaction increase" },
      gradient: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      icon: <Landmark className="w-14 h-14" />,
      title: "Banking & Finance",
      description: "Secure, compliant contact center solutions for financial services excellence",
      challenges: ["Fraud prevention", "Compliance requirements", "Account security", "Complex transactions"],
      solutions: ["Secure authentication", "PCI DSS compliance", "Fraud detection AI", "Encrypted communications"],
      stats: { improvement: "60%", metric: "Faster issue resolution" },
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Heart className="w-14 h-14" />,
      title: "Healthcare",
      description: "HIPAA-compliant solutions delivering compassionate patient care at scale",
      challenges: ["Patient privacy", "Appointment scheduling", "Medical inquiries", "Emergency triage"],
      solutions: ["HIPAA compliance", "Intelligent triage", "EHR integration", "Telehealth support"],
      stats: { improvement: "50%", metric: "Reduction in wait times" },
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Smartphone className="w-14 h-14" />,
      title: "Telecommunications",
      description: "High-volume support systems built for connectivity and network services",
      challenges: ["Technical support", "Billing inquiries", "Network issues", "Plan management"],
      solutions: ["Network diagnostics AI", "Automated troubleshooting", "Real-time monitoring", "Self-service portals"],
      stats: { improvement: "45%", metric: "Call deflection rate" },
      gradient: "from-[#1f5d6b]/20 to-violet-500/20",
      borderColor: "border-[#1f5d6b]/30"
    },
    {
      icon: <Plane className="w-14 h-14" />,
      title: "Travel & Hospitality",
      description: "Enhance guest experiences with seamless, multi-lingual support services",
      challenges: ["Booking changes", "Multi-language support", "Complaint resolution", "Loyalty programs"],
      solutions: ["Real-time translation", "Booking system integration", "Loyalty management", "Crisis communication"],
      stats: { improvement: "70%", metric: "First-call resolution" },
      gradient: "from-cyan-500/20 to-teal-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      icon: <GraduationCap className="w-14 h-14" />,
      title: "Education",
      description: "Support educational institutions with enrollment, student services, and alumni relations",
      challenges: ["Enrollment inquiries", "Student support", "Financial aid", "Course registration"],
      solutions: ["Student portal integration", "Automated FAQs", "Multi-term scheduling", "Parent communication"],
      stats: { improvement: "55%", metric: "Inquiry response time" },
      gradient: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: <Home className="w-14 h-14" />,
      title: "Real Estate",
      description: "Connect buyers, sellers, and agents with intelligent lead management and support",
      challenges: ["Lead qualification", "Property inquiries", "Showing coordination", "Transaction support"],
      solutions: ["CRM integration", "Lead scoring", "Automated follow-ups", "Virtual tours support"],
      stats: { improvement: "65%", metric: "Lead conversion increase" },
      gradient: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30"
    },
    {
      icon: <Building2 className="w-14 h-14" />,
      title: "Manufacturing",
      description: "Optimize supply chain support, dealer networks, and customer service operations",
      challenges: ["Technical support", "Order tracking", "Dealer coordination", "Warranty claims"],
      solutions: ["Supply chain visibility", "Parts lookup AI", "Dealer portals", "Quality tracking"],
      stats: { improvement: "35%", metric: "Order accuracy improvement" },
      gradient: "from-gray-500/20 to-slate-500/20",
      borderColor: "border-gray-500/30"
    }
  ];

  const stats = [
    { number: "20+", label: "Industries Served", icon: <Globe /> },
    { number: "500+", label: "Enterprise Clients", icon: <Building2 /> },
    { number: "50M+", label: "Interactions Handled", icon: <Users /> },
    { number: "99.9%", label: "Client Retention", icon: <Target /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a24] via-[#0d1f28] to-[#152838] text-white overflow-hidden">
      <Nav />

      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-32 pb-20 px-6"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 px-6 py-2 text-sm">
              Industries We Serve
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-[#2d8a9e]">
              Industry-Specific Solutions
              <br />for Every Sector
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Deep industry expertise combined with cutting-edge technology to deliver 
              tailored contact center solutions that understand your unique challenges.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1f5d6b]/10 rounded-full blur-[120px] pointer-events-none" />
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl text-center p-8 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-primary mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <p className="text-white/60 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Specialized Solutions by Industry
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Every industry has unique needs. We deliver solutions that speak your language.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br ${industry.gradient} ${industry.borderColor} border backdrop-blur-xl h-full hover:scale-[1.02] transition-all duration-300 group`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {industry.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                        <p className="text-white/70 leading-relaxed">{industry.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold mb-3 text-white/90 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Challenges
                        </h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-white/60 text-sm">• {challenge}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold mb-3 text-white/90 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Our Solutions
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="text-white/60 text-sm flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-bold text-primary">{industry.stats.improvement}</div>
                          <div className="text-white/60 text-sm">{industry.stats.metric}</div>
                        </div>
                        <Button 
                          variant="ghost" 
                          className="text-primary hover:text-white hover:bg-primary/20 group/btn"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-primary/20 via-[#1f5d6b]/20 to-blue-500/20 border-primary/30 backdrop-blur-xl p-12 relative overflow-hidden">
              <CardContent className="p-0 relative z-10">
                <div className="text-center mb-8">
                  <Badge className="mb-4 bg-white/10 text-white border-white/20">
                    Industry Expertise
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    Why Industry Leaders Choose Us
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Deep Industry Knowledge</h3>
                      <p className="text-white/70 text-sm">We understand your sector's unique challenges and regulations</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Rapid Deployment</h3>
                      <p className="text-white/70 text-sm">Industry-specific templates for faster implementation</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Proven ROI</h3>
                      <p className="text-white/70 text-sm">Measurable results across all industries we serve</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Dedicated Support</h3>
                      <p className="text-white/70 text-sm">Industry specialists who understand your business</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/contact-us">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-full">
                      Discuss Your Industry Needs
                    </Button>
                  </Link>
                </div>
              </CardContent>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1f5d6b]/20 rounded-full blur-[100px] pointer-events-none" />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="container mx-auto text-center text-white/40">
          <p>&copy; 2025 C&G Corp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Industries;
