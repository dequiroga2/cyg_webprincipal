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
              A 4-step model for contact center digital transformation.
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
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Intelligent Service Model
                      </h2>
                      
                      <div className="space-y-3 mb-8">
                        <p className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>Human-led support for complex cases.</span>
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>AI-only service available 24/7.</span>
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>Hybrid human + AI model for efficiency.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">Outcome: </span>
                      <span className="text-white/80">
                        faster resolution and lower costs.
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
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Adaptive Operations Management
                      </h2>
                      
                      <div className="space-y-3 mb-8">
                        <p className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>Scalable operations without slow hiring.</span>
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>Our trained experts or your team enhanced by AI.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">Outcome: </span>
                      <span className="text-white/80">
                        immediate scalability and operational efficiency.
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
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Connected Technology Ecosystem
                      </h2>
                      
                      <div className="space-y-3 mb-8">
                        <p className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>AI-powered contact center platform.</span>
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>Seamless integration with existing business systems.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">Outcome: </span>
                      <span className="text-white/80">
                        fast deployment with no technology silos.
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
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        AI Capabilities & Automation
                      </h2>
                      
                      <div className="space-y-3 mb-8">
                        <p className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>Smart automation across voice, chat, and email.</span>
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>AI assistance, quality monitoring, and document processing.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">Impact: </span>
                      <span className="text-white/80">
                        reduced manual work and faster resolution cycles.
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
