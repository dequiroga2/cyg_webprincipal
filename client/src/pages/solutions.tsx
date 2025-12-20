import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, X, Cpu, Bot, Users, Cloud, BarChart3, MessageSquare, 
  Phone, Zap, ArrowRight, CheckCircle2, TrendingUp, Sparkles,
  Brain, Headphones, Shield, Clock
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
          ? "bg-[#140d4f]/80 backdrop-blur-xl border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
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
          className="absolute top-full left-0 right-0 bg-[#140d4f]/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
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

const Solutions = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const solutions = [
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI-Powered Automation",
      description: "Intelligent virtual agents that handle routine inquiries with human-like conversation",
      features: ["24/7 Availability", "Multi-language Support", "Natural Language Processing", "Self-Learning AI"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Hybrid Workforce Model",
      description: "Seamlessly blend AI agents with human experts for optimal customer experience",
      features: ["Intelligent Routing", "Real-time Collaboration", "Skill-based Assignment", "Performance Analytics"],
      gradient: "from-primary/20 to-purple-500/20",
      borderColor: "border-primary/30"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Contact Center",
      description: "Scalable, secure cloud infrastructure that grows with your business",
      features: ["Global Deployment", "99.99% Uptime", "Auto-scaling", "Data Security"],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Advanced Analytics",
      description: "Real-time insights and predictive analytics to optimize operations",
      features: ["Custom Dashboards", "Predictive Insights", "Performance Metrics", "Quality Monitoring"],
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Omnichannel Support",
      description: "Unified platform for voice, chat, email, and social media interactions",
      features: ["Unified Inbox", "Context Preservation", "Channel Switching", "Social Integration"],
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Compliance & Security",
      description: "Enterprise-grade security with full regulatory compliance",
      features: ["End-to-end Encryption", "GDPR Compliant", "PCI DSS Certified", "Regular Audits"],
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    }
  ];

  const benefits = [
    { icon: <TrendingUp />, title: "50% Cost Reduction", desc: "Lower operational costs" },
    { icon: <Clock />, title: "30% Faster Response", desc: "Improved response times" },
    { icon: <Sparkles />, title: "95% Customer Satisfaction", desc: "Enhanced customer experience" },
    { icon: <Zap />, title: "3x Productivity", desc: "Increased agent efficiency" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current operations, pain points, and goals to design the perfect solution"
    },
    {
      step: "02",
      title: "Custom Solution Design",
      description: "Our experts create a tailored hybrid model that fits your specific business needs"
    },
    {
      step: "03",
      title: "Seamless Implementation",
      description: "We deploy and integrate our solutions with minimal disruption to your operations"
    },
    {
      step: "04",
      title: "Training & Optimization",
      description: "Comprehensive training for your team and continuous optimization for peak performance"
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "24/7 technical support and regular updates to keep you ahead of the curve"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0628] via-[#140d4f] to-[#1a1147] text-white overflow-hidden">
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
              Our Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-blue-400">
              Enterprise Solutions Built
              <br />for Modern Business
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Harness the power of AI and human expertise with our comprehensive suite of 
              contact center solutions designed to scale with your business.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      </motion.section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Comprehensive Solutions Portfolio
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything you need to deliver exceptional customer experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br ${solution.gradient} ${solution.borderColor} border backdrop-blur-xl h-full hover:scale-105 transition-all duration-300 group`}>
                  <CardContent className="p-8">
                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/50">
              Proven Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Measurable Impact on Your Business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl text-center p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="text-primary mb-4 flex justify-center">
                      <div className="p-4 bg-primary/20 rounded-2xl">
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{benefit.title}</div>
                    <p className="text-white/60">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/50">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Simple Implementation Process
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From discovery to deployment, we make it seamless
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-8"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="text-5xl font-bold text-primary/30 flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 border-primary/30 backdrop-blur-xl p-12 text-center relative overflow-hidden">
              <CardContent className="p-0 relative z-10">
                <Brain className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Ready to Transform Your Contact Center?
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our solutions can revolutionize your customer experience
                </p>
                <Link href="/contact-us">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-full group">
                    Schedule a Demo
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
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

export default Solutions;
