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
            {/* ... resto del código del Navbar ... */}
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-blue-600 hover:bg-blue-700 text-white ml-4 transition-colors duration-200"
              aria-label="Agendar cita por WhatsApp"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Cita
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
