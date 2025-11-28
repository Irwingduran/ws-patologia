"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-blue-50/90 backdrop-blur-md rounded-3xl pt-14 p-8 border border-blue-200">
          <div className="grid lg:grid-cols-1 gap-8 items-center">
   

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>20+</div>
                <div className="text-blue-800" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>Años de Experiencia</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>98%</div>
                <div className="text-blue-800" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>Precisión Diagnóstica</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>10K+</div>
                <div className="text-blue-800" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>Casos Procesados</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>250+</div>
                <div className="text-blue-800" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>Marcadores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
