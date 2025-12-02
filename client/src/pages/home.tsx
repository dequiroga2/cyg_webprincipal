import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  X
} from "lucide-react";

import heroAbstract from "@assets/generated_images/abstract_flowing_rose_gold_ribbon_on_dark_blue_background.png";
import callCenterImg from "@assets/generated_images/modern_call_center_with_ai_visualization.png";
import teamImg from "@assets/generated_images/professional_diverse_corporate_team.png";
import logoImg from "@assets/Logo_CG_Corp_1764700695799.jpg";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#140d4f]/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="block">
          <img 
            src={logoImg} 
            alt="C&G CORP" 
            className={`w-auto transition-all duration-300 mix-blend-screen ${isScrolled ? "h-12" : "h-16"}`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white ml-4">
            Contact Us
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#140d4f] border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-primary transition-colors block py-2"
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
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Element */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#140d4f] via-[#1a1160] to-[#140d4f]"></div>
      
      {/* Abstract flow in background, subtle */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
         <img 
          src={heroAbstract} 
          alt="Abstract Flow" 
          className="w-full h-full object-cover mix-blend-screen blur-sm"
        />
      </motion.div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto mt-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
          style={{ scale: logoScale, opacity: logoOpacity }}
          className="mb-10 relative"
        >
          {/* Glowing effect behind logo */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform scale-150 z-0"></div>
          
          <img 
            src={logoImg} 
            alt="C&G CORP Logo" 
            className="w-full max-w-[500px] h-auto mix-blend-screen relative z-10 drop-shadow-[0_0_15px_rgba(183,110,121,0.3)]"
          />
        </motion.div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-10"
        >
          AI voice agents that transform your call center.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-none text-lg px-8 py-6 h-auto rounded-full shadow-[0_0_20px_rgba(183,110,121,0.3)]">
            Book a Demo
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto rounded-full">
            Talk to our Team
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <Mouse size={24} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Redefining <span className="text-primary">Voice Process Outsourcing</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              C&G CORP combines human expertise with cutting-edge AI to deliver next-generation customer experiences. 
              Our intelligent voice agents handle complex interactions with natural fluency, reducing operational costs while 
              ensuring your customers always feel heard.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <BarChart3 className="text-primary" />, title: "Cost Optimization", desc: "Reduce operational overhead by up to 60%" },
                { icon: <Headphones className="text-primary" />, title: "Customer Experience", desc: "Zero wait times and instant resolution" },
                { icon: <Cpu className="text-primary" />, title: "Scalable AI", desc: "Infinite capacity during peak hours" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img src={callCenterImg} alt="Modern AI Call Center" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140d4f] to-transparent opacity-60"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    { title: "Inbound Support Agent", desc: "Handle Tier 1 queries instantly with empathetic AI that solves problems.", icon: <Headphones size={32} /> },
    { title: "Outbound Collections", desc: "Ethical, efficient payment reminders that improve recovery rates.", icon: <Phone size={32} /> },
    { title: "Appointment Scheduling", desc: "Seamless booking management integrated directly with your calendar.", icon: <Clock size={32} /> },
    { title: "24/7 Virtual Receptionist", desc: "Never miss a call. Professional greeting and routing around the clock.", icon: <Mic size={32} /> },
  ];

  return (
    <section id="solutions" className="py-24 bg-background/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent <span className="text-primary">Voice Solutions</span></h2>
          <p className="text-white/60">Deploy specialized AI agents tailored to your specific business needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(183,110,121,0.1)] transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    {sol.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">{sol.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 mb-4">{sol.desc}</p>
                  <a href="#" className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    Learn more <ChevronRight size={14} />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    "Telecom", "Financial Services", "Healthcare", "E-commerce & Retail", "Utilities", "Insurance"
  ];

  return (
    <section id="industries" className="py-24 bg-[#0f093e]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Trusted Across <span className="text-primary">Industries</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-xl bg-white/5 border border-white/5 hover:border-primary text-center group cursor-pointer transition-all hover:bg-white/10"
            >
              <h3 className="text-lg md:text-xl font-medium text-white/80 group-hover:text-white">{ind}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Regulations = () => {
  return (
    <section id="regulations" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Compliance & <span className="text-primary">Security</span></h2>
            <p className="text-white/70 mb-6">
              We adhere to the strictest global standards to ensure your data and your customers' privacy are protected at all times.
            </p>
            <div className="flex gap-4">
              <Badge variant="outline" className="border-white/20 py-2 px-4">GDPR Ready</Badge>
              <Badge variant="outline" className="border-white/20 py-2 px-4">ISO 27001</Badge>
              <Badge variant="outline" className="border-white/20 py-2 px-4">HIPAA</Badge>
            </div>
          </div>
          
          <div className="md:w-2/3 grid md:grid-cols-3 gap-6">
            {[
              { title: "Data Protection", items: ["End-to-end encryption", "Data residency options", "Regular audits"] },
              { title: "Security & Reliability", items: ["99.99% Uptime SLA", "DDoS Protection", "24/7 Monitoring"] },
              { title: "Quality & Monitoring", items: ["Real-time sentiment analysis", "Automated QA scoring", "Human-in-the-loop review"] }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="text-primary mb-4" />
                <h3 className="font-bold text-lg mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="text-sm text-white/60 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {item}
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
    <section id="news" className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">News & <span className="text-primary">Insights</span></h2>
            <p className="text-white/60">Latest updates from the world of AI and Voice Automation.</p>
          </div>
          <a href="#" className="hidden md:block text-primary hover:underline">View all articles</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "The Future of Voice AI in 2025", date: "Oct 12, 2025", cat: "Trends" },
            { title: "How C&G Reduced Wait Times by 80% for FinTech Client", date: "Sep 28, 2025", cat: "Case Study" },
            { title: "Understanding the New AI Ethics Guidelines", date: "Sep 15, 2025", cat: "Compliance" }
          ].map((news, i) => (
            <Card key={i} className="bg-transparent border-none shadow-none group cursor-pointer">
              <div className="aspect-video bg-white/5 rounded-xl mb-4 overflow-hidden border border-white/10">
                {/* Placeholder for news images */}
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div className="flex gap-3 mb-2 text-xs font-medium">
                <span className="text-primary">{news.cat}</span>
                <span className="text-white/40">{news.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{news.title}</h3>
              <p className="text-white/60 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...</p>
              <span className="text-sm font-medium text-white group-hover:underline">Read more</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a0628] py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-heading font-bold tracking-wider text-white block mb-6">
              C&G <span className="text-primary">CORP</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              Transforming enterprise communication with intelligent voice agents.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#news" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
              <li><a href="#regulations" className="hover:text-primary">Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Globe size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Phone size={18} />
              </div>
            </div>
            <p className="mt-6 text-sm text-white/40">
              123 Innovation Drive<br/>
              Tech District, NY 10012
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">© 2025 C&G CORP. All rights reserved.</p>
          <p className="text-xs text-white/30">Designed for the Future.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
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
