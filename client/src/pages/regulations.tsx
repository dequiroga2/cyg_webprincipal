import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, X, Shield, FileCheck, Lock, Scale, AlertTriangle, 
  CheckCircle2, Globe, Book, Award, FileText, Search, ArrowRight
} from "lucide-react";
import { Link } from "wouter";

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
          <a className="text-2xl font-cinzel font-bold tracking-wider text-white relative group cursor-pointer">
            C&G <span className="text-primary group-hover:text-white transition-colors duration-300">CORP</span>
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

  const regulations = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "GDPR",
      fullName: "General Data Protection Regulation",
      region: "European Union",
      description: "Comprehensive data protection and privacy regulation for all individuals within the EU",
      requirements: [
        "Right to access and erasure",
        "Data portability",
        "Privacy by design",
        "Breach notification within 72 hours"
      ],
      ourCompliance: [
        "End-to-end encryption",
        "Data anonymization",
        "Consent management",
        "Regular compliance audits"
      ],
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "HIPAA",
      fullName: "Health Insurance Portability and Accountability Act",
      region: "United States",
      description: "Federal law protecting sensitive patient health information from disclosure",
      requirements: [
        "Physical safeguards",
        "Technical safeguards",
        "Administrative safeguards",
        "Business associate agreements"
      ],
      ourCompliance: [
        "HIPAA-compliant infrastructure",
        "Encrypted data transmission",
        "Access controls and audit logs",
        "Employee training programs"
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "PCI DSS",
      fullName: "Payment Card Industry Data Security Standard",
      region: "Global",
      description: "Security standards for organizations that handle credit card information",
      requirements: [
        "Secure network infrastructure",
        "Protect cardholder data",
        "Vulnerability management",
        "Regular security testing"
      ],
      ourCompliance: [
        "PCI DSS Level 1 certified",
        "Tokenization of card data",
        "Quarterly security scans",
        "Annual compliance validation"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "CCPA",
      fullName: "California Consumer Privacy Act",
      region: "California, USA",
      description: "State law enhancing privacy rights and consumer protection for California residents",
      requirements: [
        "Consumer data transparency",
        "Right to deletion",
        "Opt-out of data sales",
        "Non-discrimination"
      ],
      ourCompliance: [
        "Privacy policy updates",
        "Consumer request portal",
        "Data inventory management",
        "Third-party vendor audits"
      ],
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: <Scale className="w-12 h-12" />,
      title: "SOC 2",
      fullName: "Service Organization Control 2",
      region: "United States",
      description: "Framework for managing customer data based on five trust service principles",
      requirements: [
        "Security measures",
        "Availability monitoring",
        "Processing integrity",
        "Confidentiality controls",
        "Privacy protection"
      ],
      ourCompliance: [
        "SOC 2 Type II certified",
        "Annual audits",
        "Continuous monitoring",
        "Incident response plan"
      ],
      gradient: "from-cyan-500/20 to-teal-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "ISO 27001",
      fullName: "Information Security Management System",
      region: "International",
      description: "International standard for information security management systems",
      requirements: [
        "Risk assessment",
        "Security policies",
        "Asset management",
        "Access control",
        "Incident management"
      ],
      ourCompliance: [
        "ISO 27001 certified",
        "Regular risk assessments",
        "Documented procedures",
        "Continuous improvement"
      ],
      gradient: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/30"
    }
  ];

  const certifications = [
    { name: "ISO 27001", icon: <Award />, status: "Certified" },
    { name: "SOC 2 Type II", icon: <Shield />, status: "Certified" },
    { name: "PCI DSS Level 1", icon: <Lock />, status: "Compliant" },
    { name: "HIPAA", icon: <FileCheck />, status: "Compliant" },
    { name: "GDPR", icon: <Globe />, status: "Compliant" },
    { name: "CCPA", icon: <Scale />, status: "Compliant" }
  ];

  const commitments = [
    {
      title: "Continuous Monitoring",
      description: "24/7 security monitoring and threat detection across all systems",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Regular Audits",
      description: "Scheduled third-party audits and compliance assessments",
      icon: <FileCheck className="w-8 h-8" />
    },
    {
      title: "Employee Training",
      description: "Ongoing security awareness and compliance training programs",
      icon: <Book className="w-8 h-8" />
    },
    {
      title: "Incident Response",
      description: "Comprehensive incident response and disaster recovery plans",
      icon: <AlertTriangle className="w-8 h-8" />
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

      {/* Certifications Grid */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/50">
              Verified & Audited
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Certifications & Compliance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="text-primary flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg">{cert.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-green-500 text-sm font-medium">{cert.status}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations Details */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Regulatory Framework Compliance
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Deep compliance across global data protection and security standards
            </p>
          </motion.div>

          <div className="space-y-8">
            {regulations.map((regulation, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br ${regulation.gradient} ${regulation.borderColor} border backdrop-blur-xl hover:scale-[1.01] transition-all duration-300`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Header */}
                      <div className="lg:w-1/3">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-primary flex-shrink-0">
                            {regulation.icon}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold mb-1">{regulation.title}</h3>
                            <p className="text-white/80 text-sm font-medium">{regulation.fullName}</p>
                            <Badge className="mt-2 bg-white/10 text-white/80 border-white/20">
                              {regulation.region}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-white/70 leading-relaxed">{regulation.description}</p>
                      </div>

                      {/* Requirements & Compliance */}
                      <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                          <h4 className="font-bold mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-500" />
                            Key Requirements
                          </h4>
                          <ul className="space-y-2">
                            {regulation.requirements.map((req, idx) => (
                              <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                          <h4 className="font-bold mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            Our Compliance
                          </h4>
                          <ul className="space-y-2">
                            {regulation.ourCompliance.map((comp, idx) => (
                              <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {comp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">
              Our Commitment
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Ongoing Security & Compliance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 h-full group">
                  <CardContent className="p-8 text-center">
                    <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {commitment.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{commitment.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{commitment.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
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

export default Regulations;
