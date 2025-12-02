import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mic, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Headphones, 
  Cpu, 
  Clock, 
  Mouse,
  ChevronRight,
  Menu,
  X,
  Zap,
  Activity,
  Layers,
  Server
} from "lucide-react";

import heroAbstract from "@assets/generated_images/abstract_flowing_rose_gold_ribbon_on_dark_blue_background.png";
import callCenterImg from "@assets/generated_images/modern_call_center_with_ai_visualization.png";
import teamImg from "@assets/generated_images/professional_diverse_corporate_team.png";
import dataFlowImg from "@assets/generated_images/futuristic_abstract_data_flow_with_neon_rose_gold_and_cyan_lines.png";

// --- Components ---

const GlowingCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/30 blur-xl pointer-events-none z-50 hidden md:block"
      style={{ x: cursorX, y: cursorY }}
    />
  );
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Industries", href: "#industries" },
    { name: "Regulations", href: "#regulations" },
    { name: "News", href: "#news" },
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
        <a href="#" className="text-2xl font-heading font-bold tracking-wider text-white relative group">
          C&G <span className="text-primary group-hover:text-white transition-colors duration-300">CORP</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest hover:tracking-[0.15em] duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="relative overflow-hidden border-primary/50 text-white bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 group"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-full left-0 right-0 bg-[#140d4f]/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-primary transition-colors block py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-1000">
      {/* Parallax Background Layers */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
         <img 
          src={heroAbstract} 
          alt="Abstract Ribbon" 
          className="w-full h-full object-cover mix-blend-screen opacity-60 scale-110"
        />
      </motion.div>
      
      <motion.div style={{ y: y2, opacity }} className="absolute inset-0 z-0">
         <img 
          src={dataFlowImg} 
          alt="Data Flow" 
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
        />
      </motion.div>

      {/* Content */}
      <div className="z-10 text-center px-4 max-w-5xl mx-auto mt-20 relative">
        {/* Floating Particles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/30 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-[80px] animate-pulse delay-1000" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ delay: 0.2, duration: 1.2, type: "spring" }}
          className="mb-8 relative"
        >
          <h1 className="text-7xl md:text-9xl font-heading font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            C&G <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">CORP</span>
          </h1>
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 blur-xl rounded-full opacity-50 animate-pulse" />
        </motion.div>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-blue-100/80 font-light max-w-2xl mx-auto mb-12 backdrop-blur-sm py-2 rounded-lg"
        >
          AI voice agents that <span className="text-white font-medium">transform</span> your call center.
        </motion.p>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button size="lg" className="relative group overflow-hidden bg-transparent border border-primary/50 hover:border-primary text-white px-10 py-7 rounded-full text-lg">
            <span className="relative z-10 flex items-center gap-2">Book a Demo <Zap size={18} className="group-hover:text-yellow-300 transition-colors"/></span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
          </Button>
          
          <Button size="lg" variant="ghost" className="text-white hover:text-primary hover:bg-white/5 px-8 py-7 rounded-full text-lg transition-all">
            Talk to our Team
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Mouse size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

const HolographicCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-10 bg-primary"></span>
              <span className="text-primary uppercase tracking-widest text-xs font-bold">The Future of VPO</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Human Expertise.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">AI Efficiency.</span>
            </h2>
            <p className="text-lg text-blue-100/60 mb-10 leading-relaxed font-light">
              C&G CORP isn't just outsourcing; it's <span className="text-white">upgrading</span>. We combine empathy with algorithmic precision to create customer experiences that feel like magic.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <BarChart3 className="text-primary" />, title: "Cost Optimization", desc: "Slash operational overhead by 60%" },
                { icon: <Cpu className="text-primary" />, title: "Neural Processing", desc: "Real-time sentiment adaptation" },
                { icon: <Activity className="text-primary" />, title: "Infinite Scaling", desc: "Zero-latency capacity expansion" }
              ].map((item, i) => (
                <HolographicCard key={i}>
                  <div className="flex items-center gap-6 p-6 rounded-xl glass-panel hover:bg-white/5 transition-colors group">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:from-primary/40 group-hover:to-purple-500/40 transition-all shadow-[0_0_15px_rgba(183,110,121,0.2)]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                </HolographicCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={callCenterImg} alt="AI Call Center" className="w-full h-auto scale-105 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140d4f] via-transparent to-transparent opacity-80"></div>
              
              {/* Floating HUD Elements */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between text-xs font-mono text-primary/80 mb-2">
                  <span>SYSTEM_STATUS</span>
                  <span>ONLINE</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    animate={{ width: ["30%", "60%", "45%", "80%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative Glows */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-0 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    { title: "Inbound Neural Agent", desc: "Tier 1 support resolved instantly with empathy.", icon: <Headphones size={28} /> },
    { title: "Predictive Collections", desc: "AI that negotiates payments ethically and effectively.", icon: <BarChart3 size={28} /> },
    { title: "Quantum Scheduling", desc: "Seamless calendar integration across timezones.", icon: <Clock size={28} /> },
    { title: "Omni-Receptionist", desc: "24/7 presence with perfect brand voice alignment.", icon: <Mic size={28} /> },
  ];

  return (
    <section id="solutions" className="py-32 bg-[#0a0628] relative">
      {/* Abstract lines background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary animate-pulse">AI MODULES</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Core Systems</span></h2>
          <p className="text-white/50 text-lg">Select the neural architecture that fits your enterprise needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 hover:to-purple-500/50 transition-all duration-500">
                <div className="bg-[#0e0935] h-full rounded-2xl p-8 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Layers size={64} />
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(183,110,121,0.1)] group-hover:shadow-[0_0_30px_rgba(183,110,121,0.4)]">
                    {sol.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{sol.title}</h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">{sol.desc}</p>
                  
                  <div className="mt-auto">
                    <a href="#" className="text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-white flex items-center gap-2 transition-all">
                      Deploy Module <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform"/>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    "Telecom", "FinTech", "HealthTech", "E-Commerce", "Energy", "SaaS"
  ];

  return (
    <section id="industries" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute -left-20 top-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Powered by <span className="text-primary">C&G</span></h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer"
            >
              <div className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(183,110,121,0.3)] transition-all duration-300">
                <span className="text-lg md:text-xl font-medium text-white/80">{ind}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Regulations = () => {
  return (
    <section id="regulations" className="py-32 bg-[#0f093e] relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-mono mb-6 border border-green-500/20">
              <ShieldCheck size={12} /> SECURE ENVIRONMENT
            </div>
            <h2 className="text-4xl font-bold mb-6">Military-Grade <span className="text-white">Compliance</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              We operate within a fortress of digital security. Every interaction is encrypted, monitored, and compliant with global standards.
            </p>
            <div className="flex flex-wrap gap-3">
              {["GDPR", "ISO 27001", "HIPAA", "PCI DSS"].map(tag => (
                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-white/80 py-1 px-3 font-mono">{tag}</Badge>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 grid md:grid-cols-3 gap-6">
            {[
              { title: "Data Vault", icon: <Server className="text-cyan-400"/>, items: ["AES-256 Encryption", "Sovereignty Controls"] },
              { title: "Network Shield", icon: <Zap className="text-yellow-400"/>, items: ["Active DDoS Mitigation", "Zero-Trust Architecture"] },
              { title: "Quality Matrix", icon: <Activity className="text-primary"/>, items: ["Real-time Sentiment", "Auto-Redaction"] }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                   {/* Tiny decorative corner */}
                   <div className="w-2 h-2 bg-white/20"></div>
                </div>
                
                <div className="mb-4 p-3 rounded-lg bg-black/20 w-fit backdrop-blur-md border border-white/5">{card.icon}</div>
                <h3 className="font-bold text-lg mb-4 text-white group-hover:translate-x-1 transition-transform">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
                    <li key={j} className="text-xs font-mono text-white/50 flex items-center gap-2">
                      <span className="text-primary/50">///</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const News = () => {
  return (
    <section id="news" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-2">Signal & <span className="text-primary">Noise</span></h2>
            <p className="text-white/50">Broadcasts from the edge of innovation.</p>
          </div>
          <Button variant="link" className="hidden md:flex text-primary hover:text-white gap-2">
            View Transmission Archive <ChevronRight size={14} />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Voice AI Singularity: 2025 Outlook", date: "TRANS: 10.12.25", color: "bg-cyan-500" },
            { title: "Case File: 80% Latency Reduction in FinTech", date: "TRANS: 09.28.25", color: "bg-primary" },
            { title: "The Ethics of Synthetic Empathy", date: "TRANS: 09.15.25", color: "bg-purple-500" }
          ].map((news, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-black/40 rounded-xl mb-6 overflow-hidden border border-white/10 relative">
                <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity ${news.color} mix-blend-screen`}></div>
                <img src={dataFlowImg} className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
                
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white border border-white/10">
                  {news.date}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{news.title}</h3>
              <div className="h-[1px] w-full bg-white/10 group-hover:bg-primary/50 transition-colors mt-4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050314] py-20 border-t border-white/10 relative overflow-hidden">
      {/* Footer Grid Background */}
       <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-heading font-bold tracking-wider text-white block mb-6">
              C&G <span className="text-primary">CORP</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed font-mono">
              EST. 2024<br/>
              VOICE PROCESS OUTSOURCING<br/>
              AI DIVISION
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Coordinates</h4>
            <ul className="space-y-3 text-sm text-white/50 hover:text-white transition-colors">
              <li><a href="#about" className="hover:text-primary transition-colors">Mission</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Modules</a></li>
              <li><a href="#news" className="hover:text-primary transition-colors">Intel</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Protocol</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Encryption</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Engagement</a></li>
              <li><a href="#regulations" className="hover:text-primary transition-colors">Compliance Check</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Link</h4>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer group">
                <Globe size={20} className="text-white/50 group-hover:text-white" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer group">
                <Phone size={20} className="text-white/50 group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-white/20">SYSTEM VERSION 2.0.5 // ALL RIGHTS RESERVED</p>
          <p className="text-xs font-mono text-white/20">DESIGNED BY REPLIT AGENT</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden cursor-none">
      <GlowingCursor />
      <Nav />
      <Hero />
      <About />
      <Solutions />
      <Industries />
      <Regulations />
      <News />
      <Footer />
    </div>
  );
}
