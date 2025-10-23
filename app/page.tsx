import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Microscope,
  Users,
  ArrowRight,
  Stethoscope,
  FlaskConical,
  GraduationCap,
  Building2,
  CheckCircle,
  Target,
  FileText,
  Eye,
  Heart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import DoctorsSection from "@/components/doctors-section"
import VimeoPlayer from "@/components/vimeo-player"

export default function PathologyWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
      {/* Header */}
      <Navbar/>
      {/* Hero Section */}
    <Hero/>

      {/* About Section */}
    <section id="conocenos" className="py-16 px-4 bg-white relative">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-12">
      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Nuestra Historia</Badge>
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Sobre Nosotros</h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Más de dos décadas de excelencia en diagnóstico patológico especializado
      </p>
    </div>

    {/* Video de Presentación */}
    <div className="mb-16">
      <div className="max-w-4xl mx-auto">
        <VimeoPlayer videoId="1124298307" title="Presentación PIC Patología" />
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Nuestra Historia</h3>
        <p className="text-slate-600 mb-4 text-justify">
          PATOLOGÍA, INMUNOHISTOQUÍMICA Y CITOPATOLOGÍA S.C. (PIC), somos un laboratorio referente en México, fundado en el año 2000 por la reconocida patóloga
          <span className="font-semibold text-blue-700"> Dra. Alejandra Zárate Osorno</span>, quien con su visión y expertise
          estableció los más altos estándares de calidad en diagnóstico patológico.
        </p>
        <p className="text-slate-600 mb-4 text-justify">
          Actualmente, bajo la dirección del
          <span className="font-semibold text-blue-700"> Dr. Adrián Alejandro Carballo Zárate</span>.
        </p>
        <p className="text-slate-600 text-justify">
          Nuestro compromiso es integrar la Patología y la Biología Molecular para ofrecer una amplia variedad de estudios especializados
          que proporcionan información precisa para definir diagnóstico, pronóstico, tratamiento y monitoreo de manera personalizada.
        </p>
      </div>
      <div className="relative">
        <div className="rounded-2xl h-80 w-full flex items-center justify-center">
          <Image src="/img/DSC05022.png" alt="conocenos" width={500} height={500} />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg w-64">
          <div className="text-4xl font-bold text-blue-800 mb-2">20+</div>
          <div className="text-slate-600">Años de experiencia</div>
        </div>
      </div>
    </div>

  </div>
    </section>

      {/* Doctors Section */}
      <DoctorsSection />

   {/* Services Section */}
    <section id="servicios" className="py-16 px-4 bg-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-12">
      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Nuestros Servicios</Badge>
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Servicios Especializados</h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Ofrecemos una amplia gama de servicios de patología y biología molecular
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link href="/servicios" className="cursor-pointer h-full">
        <Card className="hover:shadow-lg transition-shadow border-blue-100 h-full flex flex-col">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-blue-800 min-h-[3.5rem]">Inmunohistoquímica</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="text-slate-600 mb-4 flex-grow text-justify">
              Técnica esencial para detectar antígenos específicos en tejidos mediante anticuerpos, permitiendo
              diagnósticos precisos y decisiones terapéuticas.
            </p>
            <Badge variant="secondary" className="w-fit">250+ Anticuerpos</Badge>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button variant="link" className="text-blue-600 p-0">
              Ver más <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </Link>

      <Link href="/servicios" className="cursor-pointer h-full">
        <Card className="hover:shadow-lg transition-shadow border-blue-100 h-full flex flex-col">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-blue-800 min-h-[3.5rem]">Patología Quirúrgica y Hematopatología.</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="text-slate-600 mb-4 flex-grow text-justify">
              Estudiamos tejidos obtenidos durante distintos procedimientos quirúrgicos para diagnosticar enfermedades.
            </p>
            <Badge variant="secondary" className="w-fit">48 a 10 días hábiles</Badge>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button variant="link" className="text-blue-600 p-0">
              Ver más <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </Link>

      <Link href="/servicios" className="cursor-pointer h-full">
        <Card className="hover:shadow-lg transition-shadow border-blue-100 h-full flex flex-col">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FlaskConical className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-blue-800 min-h-[3.5rem]">Biología Molecular</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="text-slate-600 mb-4 flex-grow text-justify">
              Estudios genéticos del ADN y ARN para diagnóstico de enfermedades congénitas, infecciosas y
              neoplásicas mediante FISH, RT-PCR y NGS.
            </p>
            <Badge variant="secondary" className="w-fit">Tecnología NGS</Badge>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button variant="link" className="text-blue-600 p-0">
              Ver más <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </Link>

      <Card className="hover:shadow-lg transition-shadow border-blue-100 h-full flex flex-col">
        <CardHeader>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-blue-800 min-h-[3.5rem]">Interconsulta de Casos</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="text-slate-600 mb-4 flex-grow text-justify">
            Ponemos a disposición la experiencia de nuestra red médica en distintos campos de la patología para
            casos complejos.
          </p>
          <Badge variant="secondary" className="w-fit">Red Internacional</Badge>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-blue-100 h-full flex flex-col">
        <CardHeader>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-blue-800 min-h-[3.5rem]">Estudios Transoperatorios</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="text-slate-600 mb-4 flex-grow text-justify">
            Apoyo durante procedimientos quirúrgicos con consultas en tiempo real. Servicio programado con 24
            horas de anticipación.
          </p>
          <Badge variant="secondary" className="w-fit">Tiempo Real</Badge>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-blue-100 h-full flex flex-col">
        <CardHeader>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-blue-800 min-h-[3.5rem]">Educación</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="text-slate-600 mb-4 flex-grow text-justify">
            Programas de Alta Especialidad en Hematopatología e Inmunohistoquímica, y rotaciones para Médicos
            Residentes.
          </p>
          <Badge variant="secondary" className="w-fit">educacion@picpatologia.com</Badge>
        </CardContent>
      </Card>
    </div>
  </div>
   </section>

      {/* Quality Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Proceso de Calidad Integral</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Evaluación Especializada de Cada Muestra
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Integramos la Patología y la Biología Molecular de manera que cada muestra recibida es evaluada por un
              patólogo especialista para garantizar la máxima precisión diagnóstica
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center pt-9 border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">1. Recepción y Procesamiento</CardTitle>
              </CardHeader>
         
            </Card>

            <Card className="text-center pt-9 border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">2. Revisión por el especialista</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-red-800">3. Realización de estudios de extensión para apoyo o confirmación diagnóstica</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target  className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">4. Interpretación y diagnóstico final.                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-slate-800 to-blue-900 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">"Excelencia y Precisión"</h3>
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                Nuestro proceso garantiza que todo el abordaje del caso esté supervisado por especialistas, eliminando
                costos y tiempos de traslado a otros laboratorios dentro o fuera del país
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">Alta Calidad</div>
                  <div className="text-blue-200 text-sm">Estándares internacionales más exigentes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">Costos Accesibles</div>
                  <div className="text-blue-200 text-sm">Precios competitivos en el mercado</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">Menor Tiempo</div>
                  <div className="text-blue-200 text-sm">Respuesta rápida y eficiente</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

   

      {/* Articles Section */}
      <section id="blog" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Conocimiento</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Blog</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mantente actualizado con las últimas investigaciones y avances en patología
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-slate-800 min-h-[3rem] text-left">Avances en Inmunohistoquímica</CardTitle>
                <CardDescription className="min-h-[2.5rem]">Nuevas técnicas y marcadores para diagnósticos más precisos</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" size="sm">
                  Leer Más
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-slate-800 min-h-[3rem] text-left">Biología Molecular en Oncología</CardTitle>
                <CardDescription className="min-h-[2.5rem]">Aplicaciones de NGS en el diagnóstico de cáncer</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" size="sm">
                  Leer Más
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-slate-800 min-h-[3rem] text-left">Hematopatología Moderna</CardTitle>
                <CardDescription className="min-h-[2.5rem]">Enfoques actuales en el diagnóstico hematológico</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" size="sm">
                  Leer Más
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-slate-800 min-h-[3rem] text-left">Citopatología Avanzada</CardTitle>
                <CardDescription className="min-h-[2.5rem]">Técnicas modernas en diagnóstico citológico</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" size="sm">
                  Leer Más
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-slate-800 min-h-[3rem] text-left">Patología Digital</CardTitle>
                <CardDescription className="min-h-[2.5rem]">La revolución digital en el diagnóstico patológico</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" size="sm">
                  Leer Más
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-slate-800 min-h-[3rem] text-left">Medicina de Precisión</CardTitle>
                <CardDescription className="min-h-[2.5rem]">Personalización del tratamiento oncológico</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" size="sm">
                  Leer Más
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Contacto</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Estamos aquí para apoyarte con nuestros servicios especializados
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <h3 className="font-semibold text-lg mb-2">Correo Electrónico</h3>
                    <p className="text-blue-100">info@picpatologia.com</p>
                  
                  </div>
                </div>
                <Link href="https://wa.me/5619852072">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                    <p className="text-blue-100">56 1985 2072</p>
                  </div>
                </div></Link>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <h3 className="font-semibold text-lg mb-2">Teléfonos</h3>
                    <div className="space-y-1 text-blue-100">
                      <p>55 5254 3827</p>
                      <p>55 5531 9880</p>
                      <p>55 5250 5478</p>
                      <p>55 5250 6455</p>
                    </div>
                  </div>
                </div>

                  

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <h3 className="font-semibold text-lg mb-2">Horarios</h3>
                    <div className="text-blue-100 space-y-1">
                      <p>Lunes a Viernes: 7:30 AM - 8:30 PM</p>
                      <p>Sábado: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                    <p className="text-blue-100">
                      Tennyson 360, Colonia Polanco
                      <br />
                      Del. Miguel Hidalgo, CP 11550
                      <br />
                      Ciudad de México
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="tu@email.com"
                  />
                </div>
                <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}
