import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Menu, X, Mail, Phone, MapPin, Clock, Send, CheckCircle2,
  MessageSquare, Linkedin, Twitter, Facebook
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

const ContactUs = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "general"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        interest: "general"
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call us anytime"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: ["sales@cgcorp.com", "support@cgcorp.com"],
      action: "We reply within 24h"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Office",
      details: ["123 Business Avenue", "New York, NY 10001"],
      action: "Visit our headquarters"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 6PM EST", "24/7 Support Available"],
      action: "Always here for you"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Business Avenue, Suite 500",
      country: "United States"
    },
    {
      city: "London",
      address: "456 Tech Street, Floor 10",
      country: "United Kingdom"
    },
    {
      city: "Singapore",
      address: "789 Innovation Road, Tower A",
      country: "Singapore"
    }
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
            className="text-center max-w-5xl mx-auto"
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 px-6 py-2 text-sm">
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-[#2d8a9e]">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your contact center? Our team is here to answer your questions 
              and help you find the perfect solution for your business.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1f5d6b]/10 rounded-full blur-[120px] pointer-events-none" />
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 h-full group">
                  <CardContent className="p-8">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/70">{detail}</p>
                      ))}
                    </div>
                    <p className="text-sm text-primary font-medium">{info.action}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-heading font-bold mb-3">Send us a Message</h2>
                    <p className="text-white/60">Fill out the form and we'll get back to you within 24 hours</p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-white/70">Your message has been sent successfully. We'll be in touch soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Company</label>
                          <Input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Phone</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">I'm interested in *</label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 text-white rounded-md px-4 py-2 focus:border-primary focus:outline-none"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="demo">Request a Demo</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="partnership">Partnership Opportunities</option>
                          <option value="support">Technical Support</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your project or question..."
                          rows={5}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-white group"
                      >
                        <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Contact Us */}
              <Card className="bg-gradient-to-br from-primary/20 to-[#1f5d6b]/20 border-primary/30 backdrop-blur-xl">
                <CardContent className="p-8">
                  <MessageSquare className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Get expert advice tailored to your business needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Schedule a personalized demo of our solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Receive a custom quote within 48 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Connect with industry specialists</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Global Offices</h3>
                  <div className="space-y-6">
                    {officeLocations.map((location, index) => (
                      <div key={index} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                        <h4 className="font-bold text-lg mb-2">{location.city}</h4>
                        <p className="text-white/70 text-sm mb-1">{location.address}</p>
                        <p className="text-white/50 text-sm">{location.country}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="p-4 bg-white/5 rounded-xl hover:bg-primary/20 transition-colors group">
                      <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
                    </a>
                    <a href="#" className="p-4 bg-white/5 rounded-xl hover:bg-primary/20 transition-colors group">
                      <Twitter className="w-6 h-6 group-hover:text-primary transition-colors" />
                    </a>
                    <a href="#" className="p-4 bg-white/5 rounded-xl hover:bg-primary/20 transition-colors group">
                      <Facebook className="w-6 h-6 group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                  <p className="text-white/60 text-sm mt-4">
                    Stay updated with our latest news and insights
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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

export default ContactUs;
