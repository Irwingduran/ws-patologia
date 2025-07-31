'use client';

import { Button } from "@/components/ui/button";
import { Menu, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { href: "/", text: "Inicio" },
    { href: "/#sobre-mi", text: "Sobre Mí" },
    { href: "/servicios", text: "Servicios" },
    { href: "/#articulos", text: "Artículos" },
    { href: "/#contacto", text: "Contacto" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5619852072", "_blank", "noopener,noreferrer");
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 font-['Source_Sans_Pro_Bold']">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-30 h-30 rounded-lg flex items-center justify-center">
              <Image 
                src="/logo/logo.png" 
                alt="Logo PIC Patología" 
                width={50} 
                height={50} 
                priority
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 font-['Dogma_Bold']">
                PIC Patología
              </h1>
              <p className="text-sm text-blue-600 font-medium">
                Denisse A. Picazo
              </p>
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
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-blue-600 hover:bg-blue-700 text-white ml-4 transition-colors duration-200"
              aria-label="Agendar cita por WhatsApp"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Cita
            </Button>
          </nav>

          <Button 
            className="md:hidden" 
            variant="ghost" 
            size="sm"
            aria-label="Menú móvil"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
