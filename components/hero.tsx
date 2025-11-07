"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0 -top-20 bottom-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
          style={{ objectFit: 'cover' }}
        >
          <source src="/video/video-background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
        <div className="text-center mb-16" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo/logo.png"
              alt="Laboratorio PIC"
              width={500}
              height={200}
              className="w-auto h-38 lg:h-52"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="https://wa.me/525619852072" target="_blank">
                    <Calendar className="w-5 h-5 mr-2" />
                    Contacto
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Link href="/#servicios">
                  Ver Servicios
                  </Link>
                </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
