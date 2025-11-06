"use client"

import Image from "next/image"

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
              className="w-auto h-32 lg:h-48"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-justify" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
            Los tejidos son una extensión del paciente, por eso los tratamos con el mismo cuidado y respeto a través de servicios de diagnóstico de alta calidad.
          </p>
        </div>
      </div>
    </section>
  )
}
