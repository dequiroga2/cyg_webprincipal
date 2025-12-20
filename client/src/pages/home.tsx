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
import logo2Video from "@assets/generated_images/logo2.mp4";
import logoNav from "@assets/generated_images/logo_nav.png";
import aiVoiceAudio from "@assets/aivoice.mp3";

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

  // Variantes para el VIDEO LOOP (Entra con el efecto morado)
  const finalVideoVariants: Variants = {
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

         {/* 2. EL VIDEO LOOP: Aparece encima mientras el video desaparece debajo */}
         <motion.video 
           src={logo2Video} 
           autoPlay 
           muted 
           loop
           playsInline
           className="absolute inset-0 w-full h-full object-cover scale-110 z-10"
           variants={finalVideoVariants}
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
            <Link href="/contact-us">
              <Button size="lg" className="relative group overflow-hidden bg-transparent border border-primary/50 hover:border-primary text-white px-8 py-3 rounded-full text-base backdrop-blur-sm">
                <span className="relative z-10 flex items-center gap-2">Book a Demo <Zap size={18} className="group-hover:text-yellow-300 transition-colors"/></span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-[#1a4d59]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
              </Button>
            </Link>
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



const HybridModel = () => {
  return (
    <section id="hybrid" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            From Live Support to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#2d8a9e]">End-to-End Automation</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Pick the setup that fits your operation and level up your customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Artificial Agent */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="text-left"
          >
            <motion.h3 
              whileHover={{ scale: 1.05, color: "rgb(183, 110, 121)" }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-bold text-white mb-4 cursor-default origin-left"
            >
              AI Agent
            </motion.h3>
            <p className="text-primary font-bold mb-4 text-sm uppercase tracking-widest">SPEED + SCALE FOR ROUTINE WORK</p>
            <p className="text-white/80 leading-relaxed mb-8">
              Automate high-volume, repeatable interactions with consistent quality. When the case requires a human touch, the AI hands off smoothly with full context.
            </p>
            <Link href="/ai-agent">
              <a>
                <Button className="bg-primary hover:bg-primary/90 hover:scale-105 text-white rounded-full px-8 py-6 text-lg group transition-all duration-300">
                  Get AI Agent <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </Link>
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
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.5 }}
              className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(183,110,121,0.3)] hover:shadow-[0_0_60px_rgba(183,110,121,0.6)] z-10 transition-shadow duration-500"
            >
              <video
                src={hybridVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90 scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-[#1f5d6b]/20 mix-blend-overlay"></div>
            </motion.div>
          </div>

          {/* Human Agent */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="text-left md:text-right flex flex-col items-start md:items-end"
          >
            <motion.h3 
              whileHover={{ scale: 1.05, color: "rgb(59, 130, 246)" }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-bold text-white mb-4 cursor-default origin-right"
            >
              Human Agent
            </motion.h3>
            <p className="text-blue-400 font-bold mb-4 text-sm uppercase tracking-widest">HIGH-EMPATHY, HIGH-COMPLEXITY CASES</p>
            <p className="text-white/80 leading-relaxed mb-8">
              Bring in trained CX specialists on demand. They use AI-assisted workflows to resolve complex issues quickly while keeping the conversation human.
            </p>
            <Link href="/contact-us#contact-form">
              <a>
                <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white rounded-full px-8 py-6 text-lg group transition-all duration-300">
                  Schedule Human Agents <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AIVoiceDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0a1a24] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50 hover:scale-110 transition-transform duration-300 cursor-default">
              Experience Our AI
            </Badge>
            <motion.h2 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white cursor-default"
            >
              Hear Our AI Agent in Action
            </motion.h2>
            <p className="text-white/60 text-lg">
              Listen to a real simulation of our AI-powered voice agent handling a customer interaction
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-[#1f5d6b]/5 to-blue-500/10 border-primary/30 backdrop-blur-xl p-8 md:p-12 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(183,110,121,0.3)] transition-all duration-500 group">
            <CardContent className="p-0">
              <div className="flex flex-col items-center gap-8">
                {/* Waveform Visual */}
                <div className="flex items-center justify-center gap-1 md:gap-2 h-32 w-full">
                  {[...Array(40)].map((_, i) => {
                    // Crear alturas más realistas basadas en frecuencias
                    const frequency = Math.sin(i * 0.15) * 0.5 + 0.5;
                    const baseHeight = 15 + frequency * 25;
                    
                    // Diferentes intensidades para simular espectro de audio
                    const intensity = Math.random() * 0.6 + 0.4;
                    const maxHeight = 30 + frequency * 80;
                    const playingHeight = isPlaying ? baseHeight + intensity * maxHeight : baseHeight;
                    
                    // Velocidades variables para cada barra
                    const animationSpeed = 0.4 + Math.random() * 0.6;
                    
                    return (
                      <motion.div
                        key={i}
                        className="w-1 md:w-1.5 rounded-full"
                        style={{
                          background: `linear-gradient(to top, rgb(183, 110, 121), rgb(168, 85, 247), rgb(59, 130, 246))`,
                        }}
                        animate={{
                          height: playingHeight,
                          opacity: isPlaying ? [0.4 + intensity * 0.3, 0.8 + intensity * 0.2, 0.4 + intensity * 0.3] : 0.25,
                          scaleY: isPlaying ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: animationSpeed,
                          repeat: isPlaying ? Infinity : 0,
                          delay: i * 0.015,
                          ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                      />
                    );
                  })}
                </div>

                {/* Custom Audio Player */}
                <div className="w-full space-y-6">
                  {/* Play Button & Time */}
                  <div className="flex items-center gap-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={togglePlay}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-primary to-[#1f5d6b] flex items-center justify-center shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all relative group"
                    >
                      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {isPlaying ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex gap-1.5"
                        >
                          <div className="w-1 h-6 bg-white rounded-full" />
                          <div className="w-1 h-6 bg-white rounded-full" />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"
                        />
                      )}
                    </motion.button>

                    <div className="flex-1 space-y-2">
                      {/* Progress Bar */}
                      <div 
                        onClick={handleSeek}
                        className="h-2 bg-white/10 rounded-full cursor-pointer relative overflow-hidden group"
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-[#2d8a9e] rounded-full relative"
                          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      </div>

                      {/* Time Display */}
                      <div className="flex justify-between text-sm text-white/60 font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <span>{duration ? formatTime(duration) : '0:00'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hidden Audio Element */}
                  <audio ref={audioRef} src={aiVoiceAudio} preload="metadata" />
                </div>

                {/* Info Text */}
                <div className="text-center pt-4 border-t border-white/10 w-full">
                  <p className="text-white/80 text-sm flex items-center justify-center gap-2">
                    <Mic className="w-4 h-4 text-primary" />
                    Sample interaction: Customer support inquiry with intelligent routing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1f5d6b]/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

const ValueGraph = () => {
  return (
    <section id="value" className="py-20 md:py-32 bg-gradient-to-b from-[#0a1a24] to-[#050f15] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-4 cursor-default"
          >
            More Value, <span className="text-primary">Lower Cost</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-white/60">That's our standard.</p>
        </div>

        {/* CAMBIO CLAVE 1: 
           - 'h-auto': En móvil la altura se adapta al contenido (las gráficas apiladas).
           - 'md:h-[500px]': En escritorio volvemos a la altura fija para alinear abajo.
           - 'items-center': En móvil centramos todo.
           - 'md:items-end': En escritorio alineamos al fondo.
        */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-12 md:gap-16 h-auto md:h-[500px] max-w-5xl mx-auto">
          
          {/* --- Value Graph --- */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full md:flex-1 flex flex-col justify-end items-center gap-4"
          >
            <motion.h3 
              whileHover={{ scale: 1.1, color: "rgb(34, 197, 94)" }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold mb-6 md:mb-8 cursor-default"
            >
              Value
            </motion.h3>
            <p className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-4">Customer Satisfaction</p>
            
            <div className="flex items-end gap-4 md:gap-8 h-[200px] md:h-[300px] w-full justify-center border-b border-white/20 pb-2">
              <div className="flex flex-col items-center gap-2 w-16 md:w-24">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "80px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-2xl shadow-lg"
                />
                <span className="text-[10px] md:text-sm font-bold text-white/60">Conventional</span>
              </div>

              <div className="flex flex-col items-center gap-2 w-16 md:w-24 relative">
                <div className="absolute -top-8 md:-top-12 font-bold text-lg md:text-3xl text-green-400">+15%</div>
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "160px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-2xl shadow-xl shadow-green-500/20"
                />
                <span className="text-[10px] md:text-sm font-bold text-white">C&G CORP</span>
              </div>
            </div>
          </motion.div>

          {/* Logo Divider (Escritorio) / Line Divider (Móvil) */}
          <div className="hidden md:flex items-center justify-center h-full pb-20">
            <div className="text-3xl font-bold text-white/30 transform -rotate-90 tracking-widest">VS</div>
          </div>
          {/* Divisor solo para móvil para separar las graficas */}
          <div className="md:hidden w-1/2 h-[2px] bg-white/20 my-4"></div>

          {/* --- Costs Graph --- */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full md:flex-1 flex flex-col justify-end items-center gap-4"
          >
            <motion.h3 
              whileHover={{ scale: 1.1, color: "rgb(34, 211, 238)" }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold mb-12 md:mb-8 cursor-default"
            >
              Total Costs
            </motion.h3>
            
            <div className="flex items-end gap-4 md:gap-8 h-[200px] md:h-[300px] w-full justify-center border-b border-white/20 pb-2">
              <div className="flex flex-col items-center gap-2 w-16 md:w-24 relative">
                <div className="absolute -top-8 md:-top-12 font-bold text-lg md:text-3xl text-cyan-400">-20%</div>
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "120px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-2xl shadow-xl shadow-cyan-500/20 flex flex-col justify-end overflow-hidden"
                >
                  <div className="h-1/3 bg-blue-600/80 w-full"></div>
                </motion.div>
                <span className="text-[10px] md:text-sm font-bold text-white">C&G CORP</span>
              </div>

              <div className="flex flex-col items-center gap-2 w-16 md:w-24">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "180px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="w-full bg-gradient-to-t from-cyan-600/40 to-cyan-400/40 rounded-t-2xl flex flex-col justify-end overflow-hidden"
                >
                   <div className="h-1/3 bg-blue-600/30 w-full"></div>
                </motion.div>
                <span className="text-[10px] md:text-sm font-bold text-white/60">Conventional</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4 text-[10px] md:text-xs font-medium text-white/60">
               <div className="flex items-center gap-2"><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500 rounded-sm"></div> Operational Costs</div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 md:w-3 md:h-3 bg-blue-600 rounded-sm"></div> Agent Compensation</div>
            </div>
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
    <section id="solutions" className="py-32 bg-[#0a1a24] relative">
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
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary animate-pulse hover:scale-110 transition-transform cursor-default">AI MODULES</Badge>
          <motion.h2 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white cursor-default"
          >
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#2d8a9e]">Core Systems</span>
          </motion.h2>
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
              <div className="h-full p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 hover:to-[#1f5d6b]/50 transition-all duration-500">
                <div className="bg-[#0e1d28] h-full rounded-2xl p-8 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Layers size={64} />
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-125 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(183,110,121,0.1)] group-hover:shadow-[0_0_30px_rgba(183,110,121,0.4)]">
                    {sol.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary group-hover:scale-105 transition-all origin-left">{sol.title}</h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed group-hover:text-white/70 transition-colors">{sol.desc}</p>
                  
                  <div className="mt-auto">
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
    <footer className="bg-[#050f15] py-20 border-t border-white/10 relative overflow-hidden">
      {/* Footer Grid Background */}
       <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-cinzel font-bold tracking-wider text-white block mb-6">
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
              <a href="tel:+491762257043" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer group">
                <Phone size={20} className="text-white/50 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-white/20">SYSTEM VERSION 2.0.5 // ALL RIGHTS RESERVED</p>
          <p className="text-xs font-mono text-white/20">DESIGNED BY C&G CORP</p>
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
      <HybridModel />
      <AIVoiceDemo />
      <ValueGraph />
      <Solutions />
      <Footer />
    </div>
  );
}
