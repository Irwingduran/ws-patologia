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
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import DoctorsSection from "@/components/doctors-section"
import VimeoPlayer from "@/components/vimeo-player"
import WhyChooseUs from "@/components/why-choose-us"
import { useState, useEffect } from "react"

export default function PathologyWebsite() {
  // Estado para el carrusel de reviews
  const [currentReview, setCurrentReview] = useState(0)

  // Datos de las reviews (simuladas - deberías reemplazar con datos reales de Google Business)
  const googleReviews = [
    {
      id: 1,
      name: "Dr. Javier Rodríguez",
      rating: 5,
      date: "Hace 2 semanas",
      comment: "Excelente servicio y diagnóstico preciso. El equipo de PIC es muy profesional y los resultados son confiables. Los recomiendo ampliamente.",
      avatar: "JR",
    },
    {
      id: 2,
      name: "Clínica San Ángel",
      rating: 5,
      date: "Hace 1 mes",
      comment: "Llevamos años trabajando con PIC y siempre han demostrado ser los mejores en patología. Su atención y precisión son incomparables.",
      avatar: "CS",
    },
    {
      id: 3,
      name: "Dra. María González",
      rating: 5,
      date: "Hace 3 semanas",
      comment: "La Dra. Zárate y su equipo son excepcionales. Sus diagnósticos han sido cruciales para el tratamiento de mis pacientes. Servicio de primera.",
      avatar: "MG",
    },
    {
      id: 4,
      name: "Hospital Central",
      rating: 5,
      date: "Hace 2 meses",
      comment: "El laboratorio PIC es nuestro proveedor principal para estudios especializados. Calidad, puntualidad y profesionalismo siempre.",
      avatar: "HC",
    },
    {
      id: 5,
      name: "Dr. Carlos Méndez",
      rating: 5,
      date: "Hace 1 semana",
      comment: "La biología molecular que realizan es de vanguardia. Han detectado mutaciones que otros laboratorios pasaron por alto. Excelente trabajo.",
      avatar: "CM",
    },
    {
      id: 6,
      name: "Instituto Oncológico",
      rating: 5,
      date: "Hace 3 meses",
      comment: "Su expertise en inmunohistoquímica nos ha permitido personalizar tratamientos con mayor precisión. Socios estratégicos en oncología.",
      avatar: "IO",
    },
  ]

  // Función para cambiar al siguiente review
  const nextReview = () => {
    setCurrentReview((prev) => (prev === googleReviews.length - 1 ? 0 : prev + 1))
  }

  // Función para cambiar al review anterior
  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1))
  }

  // Auto-rotación del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentReview])

  // Función para renderizar estrellas
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
        />
      ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: "Source Sans Pro Bold, Arial, Helvetica, sans-serif" }}>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* About Section */}
      <section id="conocenos" className="py-16 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-blue-600/20" style={{ fontFamily: "Dogma Bold, Arial, Helvetica, sans-serif" }}>
              <Award className="w-4 h-4 text-yellow-600" />
              <span className="text-blue-800 font-medium" style={{ fontFamily: "Dogma Bold, Arial, Helvetica, sans-serif" }}>
                Líderes en Patología
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Sobre Nosotros</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Más de dos décadas de excelencia en diagnóstico patológico especializado</p>
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
                <span className="font-semibold text-blue-700"> Dra. Alejandra Zárate Osorno</span>, quien con su visión y expertise estableció los más altos estándares de calidad en diagnóstico patológico.
              </p>
              <p className="text-slate-600 mb-4 text-justify">
                Actualmente, bajo la dirección del
                <span className="font-semibold text-blue-700"> Dr. Adrián Alejandro Carballo Zárate</span>.
              </p>
              <p className="text-slate-600 text-justify">
                Nuestro compromiso es integrar la Anatomía Patológica y la Biología Molecular para ofrecer una amplia variedad de estudios especializados que proporcionan información precisa para definir diagnóstico, pronóstico, tratamiento y monitoreo de manera personalizada.
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Ofrecemos una amplia gama de servicios de patología y biología molecular</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/catalogo/CatalogoIHQ.pdf" target="_blank" className="cursor-pointer h-full">
              <Card className="hover:shadow-lg transition-shadow border-blue-100 h-full flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800 min-h-[3.5rem]">Inmunohistoquímica</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-slate-600 mb-4 flex-grow text-justify">
                    Técnica esencial para detectar antígenos específicos en tejidos mediante anticuerpos, permitiendo diagnósticos precisos y decisiones terapéuticas.
                  </p>
                  <Badge variant="secondary" className="w-fit">
                    250+ Anticuerpos
                  </Badge>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="link" className="text-blue-600 p-0">
                    Ver Catálogo <ArrowRight className="ml-2 h-4 w-4" />
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
                  <p className="text-slate-600 mb-4 flex-grow text-justify">Estudiamos tejidos obtenidos durante distintos procedimientos quirúrgicos para diagnosticar enfermedades.</p>
                  <Badge variant="secondary" className="w-fit">
                    48 horas a 10 días hábiles
                  </Badge>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="link" className="text-blue-600 p-0">
                    Ver más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link href="/catalogo/CatalogoBM.pdf" target="_blank" className="cursor-pointer h-full">
              <Card className="hover:shadow-lg transition-shadow border-blue-100 h-full flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FlaskConical className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800 min-h-[3.5rem]">Biología Molecular</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-slate-600 mb-4 flex-grow text-justify">
                    Estudios genéticos del ADN y ARN para diagnóstico de enfermedades congénitas, infecciosas y neoplásicas mediante FISH, RT-PCR y NGS.
                  </p>
                  <Badge variant="secondary" className="w-fit">
                    Tecnología NGS
                  </Badge>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="link" className="text-blue-600 p-0">
                    Ver Catálogo <ArrowRight className="ml-2 h-4 w-4" />
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
                  Ponemos a disposición la experiencia de nuestra red médica en distintos campos de la patología para casos complejos.
                </p>
                <Badge variant="secondary" className="w-fit">
                  Red Internacional
                </Badge>
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
                  Apoyo durante procedimientos quirúrgicos con consultas en tiempo real. Servicio programado con 24 horas de anticipación.
                </p>
                <Badge variant="secondary" className="w-fit">
                  Tiempo Real
                </Badge>
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
                  Programas de Alta Especialidad en Hematopatología e Inmunohistoquímica, y rotaciones para Médicos Residentes.
                </p>
                <Badge variant="secondary" className="w-fit">
                  educacion@picpatologia.com
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section id="ubicacion" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Ubicación</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Nuestra Ubicación</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Visítanos en nuestra sede principal en Polanco, Ciudad de México</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Cómo Llegar</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-700">Dirección:</p>
                      <p className="text-slate-600">Tennyson 360, Colonia Polanco</p>
                      <p className="text-slate-600">Del. Miguel Hidalgo, CP 11550</p>
                      <p className="text-slate-600">Ciudad de México</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-700">Horarios de Atención:</p>
                      <p className="text-slate-600">Lunes a Viernes: 7:30 AM - 8:30 PM</p>
                      <p className="text-slate-600">Sábado: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
                <Link href="https://maps.app.goo.gl/DJt4K1Y7iPBAGwe4A" target="_blank">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver en Google Maps
                  </Button>
                </Link>
              </div>
              <div className="h-96 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.888244552309!2d-99.19365942464807!3d19.426209940785305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f8c7c9f5a1%3A0x900d0285d6880c3b!2sTennyson%20360%2C%20Polanco%2C%20Polanco%20V%20Secc%2C%20Miguel%20Hidalgo%2C%2011550%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1709845678906!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación PIC Patología"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="testimonios" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Testimonios</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Opiniones de Nuestros Clientes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Lo que dicen los profesionales de la salud sobre nuestros servicios</p>
          </div>

          <div className="relative">
            {/* Carrusel de Reviews */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="relative h-[400px] flex items-center justify-center p-8">
                {/* Review actual */}
                <div key={googleReviews[currentReview].id} className="text-center max-w-3xl mx-auto animate-fadeIn">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 text-xl font-bold">
                        {googleReviews[currentReview].avatar}
                      </div>
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center gap-1">{renderStars(googleReviews[currentReview].rating)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{googleReviews[currentReview].name}</h3>
                    <p className="text-slate-500 text-sm mb-6">{googleReviews[currentReview].date}</p>
                  </div>
                  <Quote className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <p className="text-lg text-slate-600 italic mb-8">{googleReviews[currentReview].comment}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Google Reviews
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      ★ 5.0 Rating
                    </Badge>
                  </div>
                </div>

                {/* Controles del carrusel */}
                <button
                  onClick={prevReview}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors z-10"
                  aria-label="Review anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-blue-600" />
                </button>
                <button
                  onClick={nextReview}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors z-10"
                  aria-label="Siguiente review"
                >
                  <ChevronRight className="w-6 h-6 text-blue-600" />
                </button>
              </div>

              {/* Indicadores */}
              <div className="flex justify-center gap-2 pb-8">
                {googleReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentReview ? "bg-blue-600 w-6" : "bg-blue-200"}`}
                    aria-label={`Ir al review ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Enlace a Google Reviews */}
            <div className="text-center mt-8">
              <Link href="https://maps.app.goo.gl/DJt4K1Y7iPBAGwe4A" target="_blank">
                <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                  <Star className="mr-2 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  Ver más opiniones en Google
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Contacto</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Estamos aquí para apoyarte con nuestros servicios especializados</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div style={{ fontFamily: "Source Sans Pro Bold, Arial, Helvetica, sans-serif" }}>
                    <h3 className="font-semibold text-lg mb-2">Correo Electrónico</h3>
                    <p className="text-blue-100">info@picpatologia.com</p>
                  </div>
                </div>
                <Link href="https://wa.me/5619852072">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div style={{ fontFamily: "Source Sans Pro Bold, Arial, Helvetica, sans-serif" }}>
                      <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                      <p className="text-blue-100">56 1985 2072</p>
                    </div>
                  </div>
                </Link>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div style={{ fontFamily: "Source Sans Pro Bold, Arial, Helvetica, sans-serif" }}>
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
                  <div style={{ fontFamily: "Source Sans Pro Bold, Arial, Helvetica, sans-serif" }}>
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
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div style={{ fontFamily: "Source Sans Pro Bold, Arial, Helvetica, sans-serif" }}>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div style={{ fontFamily: "Source Sans Pro Bold, Arial, Helvetica, sans-serif" }}>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                <div style={{ fontFamily: "Source Sans Pro Bold, Arial, Helvetica, sans-serif" }}>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="tu@email.com"
                  />
                </div>
                <div style={{ fontFamily: "Source Sans Pro Bold, Arial, Helvetica, sans-serif" }}>
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
```
