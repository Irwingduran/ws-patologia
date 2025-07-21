import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, ArrowRight, CheckCircle } from "lucide-react"

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4 relative bg-white">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-600/20">
            <Award className="w-4 h-4 text-yellow-600" />
            <span className="text-blue-800 font-medium">Líderes en Patología Molecular</span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            El Futuro del
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent block">
              Diagnóstico
            </span>
            <span className="text-blue-600">Está Aquí</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Revolucionamos la medicina de precisión, análisis molecular avanzado y la experiencia de los mejores
            patólogos oncólogos de México.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-blue-50 border-blue-200 hover:bg-blue-100 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">Recepción</h3>
              <p className="text-gray-600 text-sm">Muestras procesadas con protocolos internacionales</p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">Análisis</h3>
              <p className="text-gray-600 text-sm">Tecnología NGS y marcadores moleculares</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200 hover:bg-purple-100 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">Interpretación</h3>
              <p className="text-gray-600 text-sm">Expertos patólogos oncólogos certificados</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200 hover:bg-orange-100 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">Resultados</h3>
              <p className="text-gray-600 text-sm">Reportes detallados en 24-48 horas</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué elegir PIC Laboratory?</h2>
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
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Ver Servicios
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24+</div>
                <div className="text-blue-800">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-blue-800">Precisión Diagnóstica</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-blue-800">Casos Procesados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24h</div>
                <div className="text-blue-800">Tiempo Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
