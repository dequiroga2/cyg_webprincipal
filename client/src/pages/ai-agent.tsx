import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "wouter";
import { 
  Users, 
  Bot, 
  UserCog, 
  CheckCircle, 
  Building2,
  Laptop,
  Network,
  Zap,
  MessageSquare,
  HeadphonesIcon,
  Mic,
  Shield,
  BarChart3,
  FileText,
  Database,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoNav from "@assets/generated_images/logo_nav.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AIAgentPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1f28] to-[#0a1628]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-[#0d1f28]/80 backdrop-blur-xl border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
            : "bg-[#0d1f28]/80 backdrop-blur-xl border-white/10 py-4"
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

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-32 pb-20 px-6"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Operations
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered Customer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Operations Framework
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              A comprehensive approach to transform your customer operations with intelligent automation, 
              flexible talent, and seamless technology integration.
            </p>
          </motion.div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
      </motion.section>

      {/* Steps Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-24"
          >
            {/* STEP 1 */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-[#1a2332] to-[#0d1f28] border-white/10 overflow-hidden">
                <CardContent className="p-10 md:p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                        <span className="text-3xl font-bold text-primary">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Intelligent Service Model
                      </h2>
                      <p className="text-primary text-lg font-semibold italic mb-8">
                        "Choose how your customers are served"
                      </p>
                      <p className="text-white/80 text-lg leading-relaxed mb-8">
                        Diseñamos el modelo operativo basado en volumen, complejidad y objetivos de negocio.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Human-Led Support */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#0a1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">100% Human</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Para interacciones sensibles, de alto valor o alta complejidad.
                      </p>
                    </motion.div>

                    {/* AI-Only */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#0a1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        <Bot className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">100% Artificial</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Respuestas instantáneas, disponibilidad 24/7 y cero tiempo de espera.
                      </p>
                    </motion.div>

                    {/* Hybrid */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#0a1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        <UserCog className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">Human & Artificial</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        La IA pre-califica y resuelve tareas repetitivas; el humano interviene solo cuando es necesario.
                      </p>
                    </motion.div>
                  </div>

                  <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">Outcome: </span>
                      <span className="text-white/80">
                        Resolución más rápida, costos reducidos y experiencia del cliente superior.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* STEP 2 */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-[#1a2332] to-[#0d1f28] border-white/10 overflow-hidden">
                <CardContent className="p-10 md:p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                        <span className="text-3xl font-bold text-primary">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Adaptive Operations Management
                      </h2>
                      <p className="text-primary text-lg font-semibold italic mb-8">
                        "Operational flexibility built for growth"
                      </p>
                      <p className="text-white/80 text-lg leading-relaxed mb-8">
                        Escalabilidad sin fricciones ni procesos de contratación lentos.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Our Experts */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#0a1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        <HeadphonesIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">yoummday Experts</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Especialistas en servicio al cliente, ventas y cobranza listos para operar.
                      </p>
                    </motion.div>

                    {/* Your Team */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#0a1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">Your Experts</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Integramos herramientas de IA en tu equipo actual para potenciar productividad y consistencia.
                      </p>
                    </motion.div>
                  </div>

                  <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">Outcome: </span>
                      <span className="text-white/80">
                        Escalabilidad inmediata y eficiencia operativa máxima.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* STEP 3 */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-[#1a2332] to-[#0d1f28] border-white/10 overflow-hidden">
                <CardContent className="p-10 md:p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                        <span className="text-3xl font-bold text-primary">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Connected Technology Ecosystem
                      </h2>
                      <p className="text-primary text-lg font-semibold italic mb-8">
                        "Technology that fits your business"
                      </p>
                      <p className="text-white/80 text-lg leading-relaxed mb-8">
                        Integración total sin necesidad de reemplazar tu infraestructura actual.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Our Platform */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#0a1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        <Network className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">yoummday Platform</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Solución de contact center impulsada por IA lista para desplegar.
                      </p>
                    </motion.div>

                    {/* Your Software */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#0a1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        <Laptop className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">YOUR Software</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Conexión nativa con CRM, telefonía, WhatsApp, Email y ERP.
                      </p>
                    </motion.div>

                    {/* Integrated Systems */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#0a1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3">Systems combined</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Unificación de todas las herramientas en una sola operación conectada.
                      </p>
                    </motion.div>
                  </div>

                  <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">Outcome: </span>
                      <span className="text-white/80">
                        Implementación ágil sin "tecnología aislada" (silos).
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* STEP 4 */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-[#1a2332] to-[#0d1f28] border-white/10 overflow-hidden">
                <CardContent className="p-10 md:p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                        <span className="text-3xl font-bold text-primary">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        AI Capabilities & Automation Layer
                      </h2>
                      <p className="text-primary text-lg font-semibold italic mb-8">
                        "The Intelligence Engine"
                      </p>
                      <p className="text-white/80 text-lg leading-relaxed mb-8">
                        Una capa transversal de tecnología que optimiza cada punto de contacto.
                      </p>
                    </div>
                  </div>

                  {/* Operational Automation */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Operational Automation</h3>
                      <Badge className="bg-primary/20 text-primary border-primary/30">Efficiency</Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-[#0a1628]/30 border border-white/5 rounded-lg p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="w-5 h-5 text-primary" />
                          <h4 className="text-white font-semibold">Smart Responses</h4>
                        </div>
                        <p className="text-white/70 text-sm">
                          Respuestas contextuales en tiempo real por chat, voz y correo.
                        </p>
                      </div>
                      
                      <div className="bg-[#0a1628]/30 border border-white/5 rounded-lg p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <HeadphonesIcon className="w-5 h-5 text-primary" />
                          <h4 className="text-white font-semibold">AI Assist for Agents</h4>
                        </div>
                        <p className="text-white/70 text-sm">
                          Sugerencias y soporte de conocimiento en vivo para el agente humano.
                        </p>
                      </div>
                      
                      <div className="bg-[#0a1628]/30 border border-white/5 rounded-lg p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Mic className="w-5 h-5 text-primary" />
                          <h4 className="text-white font-semibold">Customer Voice Intelligence</h4>
                        </div>
                        <p className="text-white/70 text-sm">
                          Detección de intención y análisis de sentimiento.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quality & Compliance */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Intelligent Quality & Compliance</h3>
                      <Badge className="bg-primary/20 text-primary border-primary/30">QA</Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-[#0a1628]/30 border border-white/5 rounded-lg p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-5 h-5 text-primary" />
                          <h4 className="text-white font-semibold">Automated Quality Monitoring</h4>
                        </div>
                        <p className="text-white/70 text-sm">
                          Análisis del 100% de las interacciones (no solo muestras).
                        </p>
                      </div>
                      
                      <div className="bg-[#0a1628]/30 border border-white/5 rounded-lg p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="w-5 h-5 text-primary" />
                          <h4 className="text-white font-semibold">Language & Tone Optimization</h4>
                        </div>
                        <p className="text-white/70 text-sm">
                          Auditoría de fluidez y cumplimiento en tiempo real.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Document & Data Intelligence */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Document & Data Intelligence</h3>
                      <Badge className="bg-primary/20 text-primary border-primary/30">Ops Support</Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-[#0a1628]/30 border border-white/5 rounded-lg p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-5 h-5 text-primary" />
                          <h4 className="text-white font-semibold">Automated Document Processing</h4>
                        </div>
                        <p className="text-white/70 text-sm">
                          Extracción de datos de facturas, contratos e imágenes.
                        </p>
                      </div>
                      
                      <div className="bg-[#0a1628]/30 border border-white/5 rounded-lg p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="w-5 h-5 text-primary" />
                          <h4 className="text-white font-semibold">Secure Data Matching</h4>
                        </div>
                        <p className="text-white/70 text-sm">
                          Validación automática contra sistemas internos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">Impact: </span>
                      <span className="text-white/80">
                        Reducción drástica del trabajo manual y ciclos de resolución acelerados.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Discover how our AI-powered framework can revolutionize your customer operations 
                and drive unprecedented efficiency.
              </p>
              <Link href="/contact-us">
                <a>
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-lg">
                    Get Started Today
                  </Button>
                </a>
              </Link>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Footer Spacer */}
      <div className="h-20" />
    </div>
  );
}
