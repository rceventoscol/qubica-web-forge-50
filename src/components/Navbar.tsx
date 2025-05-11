
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Proceso", href: "#process" },
    { name: "Precios", href: "#pricing" },
    { name: "Portafolio", href: "#portfolio" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-qubica-charcoal/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo container with text */}
          <div className="flex-shrink-0 mr-10">
            <a href="#home" className="flex items-center">
              {/* Cube logo */}
              <img
                alt="Qubica Cube Logo"
                className="h-10 w-10 object-contain"
                src="/lovable-uploads/152f9c93-1e37-4447-8609-2eab84f843f1.png"
              />
              {/* Studio text */}
              <span className="ml-2 text-xl font-semibold hero-gradient">
                Qubica Studio
              </span>
            </a>
          </div>

          {/* Desktop Navigation - pushed to the right */}
          <nav className="hidden md:flex items-center space-x-8 flex-grow justify-end">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="btn-primary"
              onClick={() =>
                window.open("https://wa.me/message/GAKSCPX7RSX3K1", "_blank")
              }
            >
              Contáctanos
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-qubica-charcoal/95 backdrop-blur-md z-40">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl text-gray-300 hover:text-white transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="btn-primary mt-4"
                onClick={() =>
                  window.open("https://wa.me/message/GAKSCPX7RSX3K1", "_blank")
                }
              >
                Contáctanos
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
