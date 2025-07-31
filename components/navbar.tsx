import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Menu,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div>
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
           <Link href="/">
            <div className="flex items-center space-x-3">   
              <div className="w-30 h-30 rounded-lg flex items-center justify-center">
                <Image src="/logo/logo.png" alt="Logo" width={50} height={50} />
              </div> 
              <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                <h1 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>PIC Patología</h1>
                <p className="text-sm text-blue-600 font-medium" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>Denisse A. Picazo</p>
              </div>
            </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                Inicio
              </Link>
              <Link href="/#sobre-mi" className="text-slate-700 hover:text-blue-600 font-medium transition-colors" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                Sobre Mí
              </Link>
              <Link href="/servicios" className="text-slate-700 hover:text-blue-600 font-medium transition-colors" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                Servicios
              </Link>
              <Link href="/#articulos" className="text-slate-700 hover:text-blue-600 font-medium transition-colors" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                Artículos
              </Link>
              <Link href="/#contacto" className="text-slate-700 hover:text-blue-600 font-medium transition-colors" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                Contacto
              </Link>
            <Button 
           onClick={() => window.open("https://wa.me/5619852072", "_blank", "noopener,noreferrer")}
           className="bg-blue-600 hover:bg-blue-700 text-white ml-4 transition-colors duration-200"
           >
          <Calendar className="w-4 h-4 mr-2" />
          Agendar Cita
          </Button>
            </nav>

            <Button className="md:hidden" variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
