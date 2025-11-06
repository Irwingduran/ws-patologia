
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Award, ArrowRight, CheckCircle } from "lucide-react"
import { Calendar, Award } from "lucide-react"

export default function Hero() {
  return (
@@ -43,65 +43,23 @@ export default function Hero() {
          </p>
        </div>

        <div className="bg-blue-50/90 backdrop-blur-md rounded-3xl pt-14 p-8 border border-blue-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué elegir Laboratorio PIC?</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Más de 250 marcadores inmunohistoquímicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Certificación internacional IQNPath</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Red de 23+ hospitales aliados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Tecnología NGS de última generación</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="https://wa.me/525619852072" target="_blank">
                <Calendar className="w-5 h-5 mr-2" />
                Contacto
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-white/80 backdrop-blur-sm"
            >
              <Link href="/#servicios">
              Ver Servicios
              </Link>
            </Button>
          </div>
        </div>
      </div>
