import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, X, Shield, Download, ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import logoNav from "@assets/generated_images/logo_nav.png";

// PDFs
import dataProtectionPDF from "@assets/regulations/SI-POL-3 POLITICA DE PROTECCIÓN DE DATOS.docx.pdf";
import globalSecurityPDF from "@assets/regulations/SI-POL-2 POLÍTICA GLOBAL DE SEGURIDAD DE LA INFORMACIÓN PROVEEDORES.docx.pdf";
import equityPDF from "@assets/regulations/SI-POL-4 POLITICA DE EQUIDAD, DIVERSIDAD E INCLUSIÓN.docx.pdf";

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

const Regulations = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const certificates = [
    {
      title: "Data Protection Policy",
      organization: "C&G CORP",
      date: "2025",
      keySkills: ["Data Privacy", "GDPR Compliance"],
      pdfUrl: dataProtectionPDF,
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Global Information Security Policy",
      organization: "C&G CORP",
      date: "2025",
      keySkills: ["Information Security", "Provider Management"],
      pdfUrl: globalSecurityPDF,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Equity, Diversity & Inclusion Policy",
      organization: "C&G CORP",
      date: "2025",
      keySkills: ["Diversity", "Inclusion"],
      pdfUrl: equityPDF,
      gradient: "from-green-500/20 to-emerald-500/20"
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
              Compliance & Security
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-blue-400">
              Enterprise-Grade Compliance
              <br />You Can Trust
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              We maintain the highest standards of data protection, privacy, and security compliance 
              across all major regulatory frameworks worldwide.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-40 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </motion.section>

      {/* Certificates Cards with Flip Effect */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">
              Our Policies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Compliance Documentation
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Access our comprehensive policies and compliance certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <FlipCard key={index} certificate={cert} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-blue-500/20 via-primary/20 to-purple-500/20 border-primary/30 backdrop-blur-xl p-12 relative overflow-hidden">
              <CardContent className="p-0 relative z-10">
                <div className="text-center">
                  <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Your Data Security is Our Priority
                  </h2>
                  <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                    We invest heavily in maintaining the highest security standards and compliance 
                    certifications to protect your business and customer data. Our commitment to 
                    regulatory compliance ensures you can trust us with your most sensitive information.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact-us">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-full group">
                        Request Compliance Documentation
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
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

// Flip Card Component
const FlipCard = ({ certificate, index }: { certificate: any; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="perspective-1000 h-[400px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front of Card */}
        <div 
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card className={`bg-gradient-to-br ${certificate.gradient} border-white/10 backdrop-blur-xl h-full flex flex-col items-center justify-center p-8`}>
            <CardContent className="p-0 text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 border-8 border-primary rounded-full flex items-center justify-center">
                    <Shield className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#9FD356] flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase">CERTIFIED</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {certificate.title}
              </h3>
              <p className="text-white/80 font-semibold mb-1">{certificate.organization}</p>
              <p className="text-white/60">{certificate.date}</p>
            </CardContent>
          </Card>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute w-full h-full backface-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <Card className="bg-[#1a1a1a] border-white/10 backdrop-blur-xl h-full flex flex-col justify-between p-8">
            <CardContent className="p-0 flex-grow flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-6 text-white text-center">Key Skills:</h3>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {certificate.keySkills.map((skill: string, idx: number) => (
                  <Badge 
                    key={idx}
                    className="bg-[#2a4a3a] text-[#9FD356] border-[#9FD356]/30 px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <div className="flex justify-center">
              <a 
                href={certificate.pdfUrl} 
                download
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Certificate
              </a>
            </div>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Regulations;
