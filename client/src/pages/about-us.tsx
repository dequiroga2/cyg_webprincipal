import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, X, Target, Users, Lightbulb, Award, TrendingUp, Globe2, 
  CheckCircle2, Rocket, Heart, Shield
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
    { name: "Contact Us", href: "/contact-us" },
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

const AboutUs = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const values = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions that transform businesses."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Client-Centric",
      description: "Your success is our mission. We build lasting partnerships based on trust and results."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Integrity Always",
      description: "We operate with complete transparency, ensuring compliance and ethical practices."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Excellence Driven",
      description: "Quality is non-negotiable. We deliver exceptional service in everything we do."
    }
  ];

  const milestones = [
    { year: "01", title: "Customer Focus", desc: "Understanding client goals and adapting our operations to exceed their expectations" },
    { year: "02", title: "Responsible Results", desc: "Achieving high recovery and sales rates with transparent practices and regulatory compliance" },
    { year: "03", title: "Operational Quality", desc: "Excellence standards, continuous improvement, and data-driven management" },
    { year: "04", title: "Customer Experience", desc: "Clear, multichannel, and resolution-oriented communication in all interactions" },
    { year: "05", title: "Team & Culture", desc: "Development, well-being, and performance of human talent as the engine of success" },
    { year: "06", title: "Sustainability & Ethics", desc: "Commitment to sustainable practices and social responsibility" }
  ];

  const team = [
    { name: "Languages", count: "25+", desc: "Many languages to choose" },
    { name: "Global Workforce", count: "10K+", desc: "Dedicated professionals" },
    { name: "Countries Served", count: "3+", desc: "Worldwide presence" },
    { name: "Client Satisfaction", count: "98%", desc: "Consistent excellence" }
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
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 px-6 py-2 text-sm">
              Who We Are
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-[#2d8a9e]">
              Transforming Contact Centers
              <br />Through Innovation
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              We're not just a service provider – we're your strategic partner in building 
              next-generation contact center solutions that blend human expertise with AI precision.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1f5d6b]/10 rounded-full blur-[120px] pointer-events-none" />
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-[#1f5d6b]/5 border-primary/20 backdrop-blur-xl p-8 h-full hover:border-primary/40 hover:shadow-[0_0_30px_rgba(183,110,121,0.3)] transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/20 rounded-2xl group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                      <Rocket className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold group-hover:scale-105 transition-transform duration-300 origin-left">Our Mission</h2>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    The mission of C&G Corp S.A.S. is to be a strategic partner
                    for our clients, maximizing portfolio recovery,
                    raising the quality of customer service, and boosting sales
                    through digital platforms, backed by artificial intelligence
                    that optimizes processes, improves the experience, and drives
                    sustainable results with high standards of quality and security.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 border-purple-500/20 backdrop-blur-xl p-8 h-full hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-purple-500/20 rounded-2xl group-hover:scale-110 group-hover:bg-purple-500/30 transition-all duration-300">
                      <Lightbulb className="w-8 h-8 text-purple-400" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold group-hover:scale-105 transition-transform duration-300 origin-left">Our Vision</h2>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    To be the leading strategic partner in Latin America for
                    companies seeking to maximize portfolio recovery, boost sales, 
                    and enhance the customer experience through high-quality solutions, 
                    technology, sustained innovation, and an exceptional team.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#1f5d6b]/20 text-[#2d8a9e] border-[#1f5d6b]/50">
              Our Foundation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Built on Strong Values
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 h-full group">
                  <CardContent className="p-8">
                    <div className="text-primary mb-4 group-hover:scale-125 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">{value.title}</h3>
                    <p className="text-white/60 leading-relaxed group-hover:text-white/80 group-hover:scale-105 transition-all duration-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">
              Core Principles
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Key Mission Principles
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-[#1f5d6b] to-blue-500 hidden md:block" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="text-primary text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{milestone.title}</h3>
                      <p className="text-white/60 group-hover:text-white/80 group-hover:scale-105 transition-all duration-300">{milestone.desc}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-[#0d1f28]" />
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Powered by Exceptional People
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-primary/20 to-[#1f5d6b]/10 border-primary/30 backdrop-blur-xl text-center p-8 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <div className="text-5xl font-bold text-primary mb-2">{stat.count}</div>
                    <h3 className="text-xl font-bold mb-2">{stat.name}</h3>
                    <p className="text-white/60">{stat.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary/20 to-[#1f5d6b]/20 border-primary/30 backdrop-blur-xl p-12 group hover:from-primary/30 hover:to-[#1f5d6b]/30 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <CardContent className="p-0">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 group-hover:scale-105 transition-all duration-300 group-hover:text-primary">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto group-hover:text-white/90 group-hover:scale-105 transition-all duration-300">
                  Join hundreds of forward-thinking companies that trust C&G Corp
                </p>
                <Link href="/contact-us">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-full hover:scale-110 transition-all duration-300">
                    Get Started Today
                  </Button>
                </Link>
              </CardContent>
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

export default AboutUs;
