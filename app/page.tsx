import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Microscope,
  Users,
  Award,
  Stethoscope,
  FlaskConical,
  GraduationCap,
  Building2,
  CheckCircle,
  Target,
} from "lucide-react"
import Link from "next/link"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PathologyWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
      {/* Header */}
      <Navbar/>
      {/* Hero Section */}
    <Hero/>

      

      {/* About Section */}
      <section id="sobre-mi" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">¿Quiénes Somos?</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Laboratorio PIC</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Especialistas en oncología integrando Patología y Biología Molecular desde el año 2000
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-800">
                    <Users className="w-6 h-6" />
                    Nuestra Especialización
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Somos un laboratorio especializado en el área de <strong>oncología</strong>, donde integramos la
                    Patología y la Biología Molecular para ofrecer una gran gama de estudios específicos que
                    proporcionen la información necesaria para definir el diagnóstico, tratamiento y monitoreo de
                    pacientes, a fin de definir <strong>terapias de precisión</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-800">
                    <Award className="w-6 h-6" />
                    Proceso de Calidad Integral
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Una vez recibida la muestra, se efectúa su revisión por un patólogo especialista para establecer si
                    es adecuada para cada estudio solicitado, evaluando:
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Tipo de tejido según guías específicas
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Celularidad y preservación adecuadas
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Región de corte idónea para el estudio
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-800">
                    <Building2 className="w-6 h-6" />
                    Historia y Fundación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    El laboratorio <strong>PATOLOGÍA INMUNOHISTOQUÍMICA Y CITOPATOLOGÍA (PIC)</strong> fue fundado en el
                    año 2000 por la reconocida experta en Patología Oncológica a nivel nacional,{" "}
                    <strong>DRA. ALEJANDRA ZÁRATE OSORNO</strong>, con la visión de implementar en México las mejores
                    técnicas en Patología para el diagnóstico, tratamiento y monitoreo de enfermedades, especialmente en
                    cáncer.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-800">
                    <Award className="w-6 h-6" />
                    Certificaciones Internacionales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-1">Programa GCP</h4>
                      <p className="text-sm text-green-700">
                        Programa de Garantía de Calidad en Patología, reconocido por programas europeos
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-1">IQNPath</h4>
                      <p className="text-sm text-blue-700">
                        Miembro de pleno derecho de la International Quality Network in Pathology
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-800">
                    <Award className="w-6 h-6" />
                    Nuestro Lema
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white">
                    <h3 className="text-xl font-bold">"Excelencia y Precisión"</h3>
                    <p className="text-blue-100 text-sm mt-2">Nuestro compromiso con la calidad diagnóstica</p>
                  </div>
                </CardContent>
              </Card>
            </div>
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

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">1. Revisión por Especialista</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Una vez recibida la muestra, se efectúa su revisión por parte de un patólogo especialista para
                  establecer si es adecuada para cada uno de los estudios solicitados
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">2. Validación Técnica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Verificamos que el tipo de tejido sea el señalado por las guías, que tenga la celularidad y
                  preservación adecuadas, y que la región de corte sea idónea
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">3. Procesamiento Inmediato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Si la muestra es adecuada, se procesa inmediatamente. Si no es procesable, se informa de inmediato y
                  se ofrecen alternativas viables
                </p>
              </CardContent>
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

      {/* Technology and Partners Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Tecnología y Alianzas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Equipamiento de Vanguardia</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Contamos con equipamiento comparable a los mejores laboratorios de investigación clínica del país
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <FlaskConical className="w-6 h-6" />
                  Proveedores Internacionales de Prestigio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Para proporcionar y garantizar resultados de la mayor calidad en el país, utilizamos equipos y
                  reactivos de las casas comerciales de mayor reconocimiento internacional:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <strong>ILLUMINA</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <strong>PROMEGA</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <strong>SIGMA-ALDRICH</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <strong>QIAGEN</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <strong>EPPENDORF</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <strong>AVALAT</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <strong>THERMO FISHER</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <strong>CELL SOLUTIONS</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <strong>BIOSYSTEM</strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <Building2 className="w-6 h-6" />
                  Red Nacional de Clientes y Socios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Trabajamos con los principales hospitales y centros médicos del país, incluyendo:
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="grid grid-cols-1 gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Hospital Ángeles Metropolitano
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Sanatorio Español Corporativo
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Hospital Satélite
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Star Médica (5 ubicaciones)
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Hospital Asura
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Centro de Diagnóstico Patológico
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Centro de Patología Avanzada
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Grupo Oncológico de Toluca
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
                    Y más de 15 centros médicos especializados adicionales en todo México
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Evolución Tecnológica Continua</h3>
              <p className="text-blue-100 mb-6">
                Desde nuestros inicios con estudios histopatológicos que incluían inmunohistoquímica y tinciones
                especiales, hemos incorporado progresivamente análisis por inmunofluorescencia, RT-PCR, FISH y NGS,
                realizando importante inversión en equipos de las casas comerciales más reconocidas por su calidad y
                validación internacional.
              </p>
              <div className="grid md:grid-cols-5 gap-4 text-center">
                <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                  <div className="text-2xl font-bold">2000</div>
                  <div className="text-sm text-blue-200">Fundación por Dra. Zárate</div>
                </div>
                <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                  <div className="text-2xl font-bold">IHQ</div>
                  <div className="text-sm text-blue-200">Inmunohistoquímica</div>
                </div>
                <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                  <div className="text-2xl font-bold">RT-PCR</div>
                  <div className="text-sm text-blue-200">Biología Molecular</div>
                </div>
                <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                  <div className="text-2xl font-bold">FISH</div>
                  <div className="text-sm text-blue-200">Hibridación</div>
                </div>
                <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                  <div className="text-2xl font-bold">NGS</div>
                  <div className="text-sm text-blue-200">Secuenciación</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Nuestros Servicios</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Servicios Especializados</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios de patología y biología molecular
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/servicios/inmunohistoquimica" className="cursor-pointer">
              <Card className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Inmunohistoquímica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Técnica esencial para detectar antígenos específicos en tejidos mediante anticuerpos, permitiendo
                    diagnósticos precisos y decisiones terapéuticas.
                  </p>
                  <Badge variant="secondary">250+ Anticuerpos</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicios/patologia-quirurgica" className="cursor-pointer">
              <Card className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Patología Quirúrgica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Estudiamos tejidos obtenidos durante cirugía para diagnosticar enfermedades y determinar planes de
                    tratamiento. Incluye estudios transoperatorios.
                  </p>
                  <Badge variant="secondary">24h Programación</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicios/biologia-molecular" className="cursor-pointer">
              <Card className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FlaskConical className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Biología Molecular</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Estudios genéticos del ADN y ARN para diagnóstico de enfermedades congénitas, infecciosas y
                    neoplásicas mediante FISH, RT-PCR y NGS.
                  </p>
                  <Badge variant="secondary">Tecnología NGS</Badge>
                </CardContent>
              </Card>
            </Link>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Interconsulta de Casos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Ponemos a disposición la experiencia de nuestra red médica en distintos campos de la patología para
                  casos complejos.
                </p>
                <Badge variant="secondary">Red Internacional</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Estudios Transoperatorios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Apoyo durante procedimientos quirúrgicos con consultas en tiempo real. Servicio programado con 24
                  horas de anticipación.
                </p>
                <Badge variant="secondary">Tiempo Real</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Educación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Programas de Alta Especialidad en Hematopatología e Inmunohistoquímica, y rotaciones para Médicos
                  Residentes.
                </p>
                <Badge variant="secondary">educacion@picpatologia.com</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articulos" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Conocimiento</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Artículos y Recursos</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mantente actualizado con las últimas investigaciones y avances en patología
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="text-slate-800">Avances en Inmunohistoquímica</CardTitle>
                <CardDescription>Nuevas técnicas y marcadores para diagnósticos más precisos</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Leer Más
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="text-slate-800">Biología Molecular en Oncología</CardTitle>
                <CardDescription>Aplicaciones de NGS en el diagnóstico de cáncer</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Leer Más
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="text-slate-800">Hematopatología Moderna</CardTitle>
                <CardDescription>Enfoques actuales en el diagnóstico hematológico</CardDescription>
              </CardHeader>
              <CardContent>
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
                    <p className="text-blue-100 text-sm mt-1">Para educación: educacion@picpatologia.com</p>
                  </div>
                </div>

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
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                    <p className="text-blue-100">56 1985 2072</p>
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
