import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, animate, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Server,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

import heroAbstract from "@assets/generated_images/logo_final.png";
import sphereImg from "@assets/generated_images/futuristic_glass_sphere_with_glowing_rose_gold_core.png";
import hybridVideo from "@assets/Video_Project_1764704898893.mp4";
import logoIntroVideo from "@assets/generated_images/logo.mp4";

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
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/50 blur-xl pointer-events-none z-50 hidden md:block mix-blend-screen"
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
          <a className="text-2xl font-heading font-bold tracking-wider text-white relative group cursor-pointer">
            C&G <span className="text-primary group-hover:text-white transition-colors duration-300">CORP</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
          </a>
        </Link>

        {/* Desktop Menu */}
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

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 6000); // 6 segundos exactos del video
    return () => clearTimeout(timer);
  }, []);

  // Variantes para la IMAGEN (Entra con el efecto morado)
  const finalImageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      mixBlendMode: "normal" 
    },
    visible: { 
      opacity: 0.6, // Tu opacidad deseada
      // @ts-ignore
      mixBlendMode: "screen", // El efecto que crea el morado
      transition: { 
        duration: 2, 
        ease: "easeInOut" 
      }
    }
  };

  // Variantes para el VIDEO (Se va para dejar ver el fondo negro)
  const videoVariants: Variants = {
    playing: { opacity: 1 },
    finished: { 
      opacity: 0, // Desaparece suavemente
      transition: { 
        duration: 2, // Sincronizado con la entrada de la imagen
        ease: "easeInOut" 
      } 
    }
  };
  
  return (
    // AGREGADO: 'bg-black' para asegurar que el mix-blend-screen tenga contraste y se vea morado
    <section className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden perspective-1000">
      
      {/* Capa de Fondo */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
         
         {/* 1. EL VIDEO: Ahora es motion.video y se desvanece a opacidad 0 */}
         <motion.video 
           src={logoIntroVideo} 
           autoPlay 
           muted 
           playsInline 
           className="absolute inset-0 w-full h-full object-cover scale-110 z-0"
           variants={videoVariants}
           initial="playing"
           // Cuando termina la intro, cambiamos a 'finished' para que desaparezca
           animate={introFinished ? "finished" : "playing"}
         />

         {/* 2. LA IMAGEN: Aparece encima mientras el video desaparece debajo */}
         <motion.img 
           src={heroAbstract} 
           alt="Abstract Ribbon"
           className="absolute inset-0 w-full h-full object-cover scale-110 z-10"
           variants={finalImageVariants}
           initial="hidden"
           animate={introFinished ? "visible" : "hidden"}
         />

      </motion.div>

      {/* Contenido (Texto y Botones) */}
      {introFinished && (
        <div className="z-20 w-full absolute bottom-32 left-0 right-0 flex justify-center items-center px-4">
          
          <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
             className="absolute -top-20 -left-20 w-40 h-40 bg-primary/30 rounded-full blur-[80px] animate-pulse" 
          />
          <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
             className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-[80px] animate-pulse delay-1000" 
          />

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse pointer-events-none" />
            <Button size="lg" className="relative group overflow-hidden bg-transparent border border-primary/50 hover:border-primary text-white px-8 py-3 rounded-full text-base backdrop-blur-sm">
              <span className="relative z-10 flex items-center gap-2">Book a Demo <Zap size={18} className="group-hover:text-yellow-300 transition-colors"/></span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            </Button>
          </motion.div>
        </div>
      )}

      {/* Indicador de Scroll */}
      {introFinished && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Mouse size={20} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

const Counter = ({ from, to, suffix = "" }: { from: number, to: number, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 2.5,
      onUpdate(value) {
        node.textContent = Math.floor(value).toLocaleString() + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, suffix]);

  return <span ref={nodeRef} />;
};

const ImpactStats = () => {
  return (
    <section id="impact" className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[400px]">
        <div className="bg-[#2a1b85] p-12 flex flex-col justify-center items-start relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-150">
            <Globe size={120} />
          </div>
          <h3 className="text-6xl font-heading font-bold text-white mb-2 relative z-10">
            +<Counter from={0} to={120} suffix="k" />
          </h3>
          <p className="text-xl text-blue-200 font-medium relative z-10">Interactions Daily</p>
        </div>

        <div className="bg-[#140d4f] p-12 flex flex-col justify-center items-start relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-150">
            <Globe size={120} />
          </div>
          <h3 className="text-6xl font-heading font-bold text-white mb-2 relative z-10">
            <Counter from={0} to={26} />
          </h3>
          <p className="text-xl text-blue-200 font-medium relative z-10">Countries Served</p>
        </div>

        <div className="bg-[#2a1b85] p-12 flex flex-col justify-center items-start relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-150">
            <Mic size={120} />
          </div>
          <h3 className="text-6xl font-heading font-bold text-white mb-2 relative z-10">
            +<Counter from={0} to={30} />
          </h3>
          <p className="text-xl text-blue-200 font-medium relative z-10">Languages Supported</p>
        </div>

        <div className="bg-white flex flex-col justify-center items-start p-12 relative">
          <h3 className="text-5xl font-heading font-bold text-[#140d4f] mb-6 leading-tight">
            Not convinced yet?
          </h3>
          <a href="#" className="group flex items-center gap-2 text-[#140d4f] font-bold text-lg hover:gap-4 transition-all">
            Meet the Team <ArrowRight className="group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

const HybridModel = () => {
  return (
    <section id="hybrid" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            From Human Experts to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Full Automation</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Flexibly choose the setup you need to elevate your Customer Experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Artificial Agent */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Artificial Agent</h3>
            <p className="text-primary font-bold mb-4 text-sm uppercase tracking-widest">Automation Where It Adds Value</p>
            <p className="text-white/80 leading-relaxed mb-8">
              Our artificial agents take care of routine tasks with speed and precision — maximizing efficiency at scale. 
              When interactions become more complex, they seamlessly hand off to human experts.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg group">
              Get Artificial Agent <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Center Video Graphic */}
          <div className="flex justify-center items-center relative h-[400px]">
            {/* Outer Glow/Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/5"
            />
            
            {/* Video Container */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(183,110,121,0.3)] z-10">
              <video
                src={hybridVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90 scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Human Agent */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left md:text-right flex flex-col items-start md:items-end"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Human Agent</h3>
            <p className="text-blue-400 font-bold mb-4 text-sm uppercase tracking-widest">Empowered People Deliver Better CX</p>
            <p className="text-white/80 leading-relaxed mb-8">
              Our flexible talent model attracts top-performing CX professionals. 
              Equipped with the best AI tools, they handle complex, high-empathy interactions that require a human touch.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg group">
              Book Human Agents <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ValueGraph = () => {
  return (
    <section id="value" className="py-32 bg-[#f0f0f5] text-[#140d4f] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            More Value, <span className="text-primary">Lower Cost</span>
          </h2>
          <p className="text-xl text-gray-600">That's our standard.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-end gap-16 h-[500px] max-w-5xl mx-auto">
          
          {/* Value Graph */}
          <div className="flex-1 h-full flex flex-col justify-end items-center gap-4">
            <h3 className="text-2xl font-bold mb-8">Value</h3>
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Customer Satisfaction</p>
            
            <div className="flex items-end gap-8 h-[300px] w-full justify-center border-b border-gray-300 pb-2">
              <div className="flex flex-col items-center gap-2 w-24">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "120px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="w-full bg-orange-200 rounded-t-2xl opacity-80"
                />
                <span className="text-sm font-bold text-gray-500">Conventional</span>
              </div>

              <div className="flex flex-col items-center gap-2 w-24 relative">
                <div className="absolute -top-12 font-bold text-3xl text-[#140d4f]">+15%</div>
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "240px" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-full bg-[#ff6b4a] rounded-t-2xl shadow-xl"
                />
                <span className="text-sm font-bold text-[#140d4f]">C&G CORP</span>
              </div>
            </div>
          </div>

          {/* Logo Divider */}
          <div className="hidden md:flex items-center justify-center h-full pb-20">
            <div className="text-3xl font-bold text-gray-300 transform -rotate-90 tracking-widest">VS</div>
          </div>

          {/* Costs Graph */}
          <div className="flex-1 h-full flex flex-col justify-end items-center gap-4">
            <h3 className="text-2xl font-bold mb-8">Total Costs</h3>
            <div className="flex items-end gap-8 h-[300px] w-full justify-center border-b border-gray-300 pb-2">
              <div className="flex flex-col items-center gap-2 w-24 relative">
                <div className="absolute -top-12 font-bold text-3xl text-[#140d4f]">-20%</div>
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "180px" }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="w-full bg-[#4d3df7] rounded-t-2xl shadow-xl flex flex-col justify-end overflow-hidden"
                >
                  <div className="h-1/3 bg-[#2a1b85] w-full"></div>
                </motion.div>
                <span className="text-sm font-bold text-[#140d4f]">C&G CORP</span>
              </div>

              <div className="flex flex-col items-center gap-2 w-24">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "280px" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="w-full bg-[#4d3df7] rounded-t-2xl opacity-40 flex flex-col justify-end overflow-hidden"
                >
                   <div className="h-1/3 bg-[#2a1b85] w-full opacity-50"></div>
                </motion.div>
                <span className="text-sm font-bold text-gray-500">Conventional</span>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex gap-4 mt-4 text-xs font-medium text-gray-500">
               <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#4d3df7]"></div> Operational Costs</div>
               <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#2a1b85]"></div> Agent Compensation</div>
            </div>
          </div>

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
              EST. 2025<br/>
              VOICE PROCESS OUTSOURCING<br/>
              AI DIVISION
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Coordinates</h4>
            <ul className="space-y-3 text-sm text-white/50 hover:text-white transition-colors">
              <li><a href="#hybrid" className="hover:text-primary transition-colors">Mission</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Modules</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Protocol</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Encryption</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Engagement</a></li>
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
      <ImpactStats />
      <HybridModel />
      <ValueGraph />
      <Solutions />
      <Footer />
    </div>
  );
}
