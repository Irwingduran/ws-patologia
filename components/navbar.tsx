'use client';

import { Button } from "@/components/ui/button";
import { Menu, Calendar, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/", text: "Inicio" },
    { href: "/#conocenos", text: "Conócenos" },
    { href: "#servicios", text: "Servicios" },
    { href: "/#blog", text: "Blog" },
    { href: "/#contacto", text: "Contacto" },
  ];

  // Cerrar el menú al hacer clic en un enlace (útil para móviles)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Cerrar el menú al cambiar el tamaño de la ventana (si se expande a desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto para detectar scroll y añadir sombra al navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir el scroll del cuerpo cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-none'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3" onClick={handleLinkClick}>
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <Image 
                src="/logo/logo.png" 
                alt="Logo PIC Patología" 
                width={84} 
                height={84} 
                priority
                className="w-full h-auto"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.text}
              </Link>
            ))}
            
            <Link href="https://wa.me/525619852072" target="_blank">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white ml-4 transition-colors duration-200"
                aria-label="Agendar cita por WhatsApp"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Contacto
              </Button>
            </Link>
          </nav>

          <Button 
            className="md:hidden" 
            variant="ghost" 
            size="sm"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={handleLinkClick}
              >
                {link.text}
              </Link>
            ))}
            
            <Link 
              href="https://wa.me/525619852072" 
              target="_blank"
              onClick={handleLinkClick}
            >
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white w-full transition-colors duration-200"
                aria-label="Agendar cita por WhatsApp"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Contacto
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay para móviles */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 md:hidden z-[-1] mt-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
