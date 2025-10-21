"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  GraduationCap,
  Briefcase,
  Award,
  Mail,
  Phone,
  MapPin,
  Languages,
  Lightbulb,
  User,
} from "lucide-react"
import { doctors, type Doctor } from "@/lib/doctors-data"

export default function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleDoctorClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setIsOpen(true)
  }

  return (
    <>
      <section id="equipo" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
              Nuestro Equipo
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
              Equipo Médico Especializado
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
              Conozca a nuestros especialistas certificados en patología con formación de excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer border-blue-100 group flex flex-col h-full"
                onClick={() => handleDoctorClick(doctor)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg text-blue-800 mb-2 min-h-[3.5rem] flex items-center justify-center" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                    {doctor.name}
                  </CardTitle>
                  <p className="text-sm text-slate-600 font-medium min-h-[2.5rem]" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    {doctor.position}
                  </p>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 justify-center mb-4 min-h-[3rem] items-start">
                    {doctor.specialties.slice(0, 2).map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                        style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}
                      >
                        {specialty}
                      </Badge>
                    ))}
                    {doctor.specialties.length > 2 && (
                      <Badge variant="secondary" className="text-xs" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                        +{doctor.specialties.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 mt-auto"
                    size="sm"
                    style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Ver Perfil Completo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedDoctor && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-6 mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-200 flex-shrink-0">
                    <Image
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-2xl text-blue-800 mb-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                      {selectedDoctor.name}
                    </DialogTitle>
                    <DialogDescription className="text-base text-slate-700" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                      {selectedDoctor.position}
                    </DialogDescription>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedDoctor.specialties.map((specialty, index) => (
                        <Badge key={index} className="bg-blue-100 text-blue-800" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <Tabs defaultValue="education" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="education" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Educación
                  </TabsTrigger>
                  <TabsTrigger value="experience" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <Briefcase className="w-4 h-4 mr-2" />
                    Experiencia
                  </TabsTrigger>
                  <TabsTrigger value="certifications" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <Award className="w-4 h-4 mr-2" />
                    Certificaciones
                  </TabsTrigger>
                  <TabsTrigger value="contact" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contacto
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="education" className="space-y-4 mt-6">
                  <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    Formación Académica
                  </h3>
                  <div className="space-y-4">
                    {selectedDoctor.education.map((edu, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-blue-800 mb-1" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                            {edu.degree}
                          </h4>
                          <p className="text-sm text-slate-600 mb-1" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                            {edu.institution}
                          </p>
                          <p className="text-xs text-slate-500" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>{edu.period}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="experience" className="space-y-4 mt-6">
                  <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Experiencia Profesional
                  </h3>
                  <div className="space-y-4">
                    {selectedDoctor.experience.map((exp, index) => (
                      <Card key={index} className="border-l-4 border-l-green-500">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-green-800 mb-1" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                            {exp.position}
                          </h4>
                          <p className="text-sm text-slate-600 mb-1" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                            {exp.institution}
                          </p>
                          <p className="text-xs text-slate-500" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>{exp.period}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="certifications" className="space-y-4 mt-6">
                  <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                    <Award className="w-5 h-5 text-blue-600" />
                    Certificaciones y Reconocimientos
                  </h3>
                  <div className="space-y-4">
                    {selectedDoctor.certifications &&
                    selectedDoctor.certifications.length > 0 ? (
                      <Card className="border-l-4 border-l-purple-500">
                        <CardContent className="pt-4">
                          <ul className="space-y-2">
                            {selectedDoctor.certifications.map((cert, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-sm text-slate-700"
                                style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}
                              >
                                <Award className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                <span>{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ) : (
                      <p className="text-slate-500" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                        No hay certificaciones registradas.
                      </p>
                    )}

                    {selectedDoctor.skills && selectedDoctor.skills.length > 0 && (
                      <>
                        <h4 className="text-md font-semibold text-slate-800 flex items-center gap-2 mt-6" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                          <Lightbulb className="w-5 h-5 text-blue-600" />
                          Habilidades y Aptitudes
                        </h4>
                        <Card className="border-l-4 border-l-orange-500">
                          <CardContent className="pt-4">
                            <div className="flex flex-wrap gap-2">
                              {selectedDoctor.skills.map((skill, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-sm"
                                  style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </>
                    )}

                    {selectedDoctor.languages &&
                      selectedDoctor.languages.length > 0 && (
                        <>
                          <h4 className="text-md font-semibold text-slate-800 flex items-center gap-2 mt-6" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                            <Languages className="w-5 h-5 text-blue-600" />
                            Idiomas
                          </h4>
                          <Card className="border-l-4 border-l-indigo-500">
                            <CardContent className="pt-4">
                              <div className="flex flex-wrap gap-2">
                                {selectedDoctor.languages.map((lang, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-sm"
                                    style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}
                                  >
                                    {lang}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </>
                      )}
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="space-y-4 mt-6">
                  <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
                    <Mail className="w-5 h-5 text-blue-600" />
                    Información de Contacto
                  </h3>
                  <Card className="border-blue-200">
                    <CardContent className="pt-6 space-y-4">
                      {selectedDoctor.contact.email && (
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-700" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                              Correo Electrónico
                            </p>
                            <a
                              href={`mailto:${selectedDoctor.contact.email}`}
                              className="text-blue-600 hover:underline"
                              style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}
                            >
                              {selectedDoctor.contact.email}
                            </a>
                          </div>
                        </div>
                      )}

                      {selectedDoctor.contact.phone && (
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-700" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                              Teléfono
                            </p>
                            <a
                              href={`tel:${selectedDoctor.contact.phone}`}
                              className="text-blue-600 hover:underline"
                              style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}
                            >
                              {selectedDoctor.contact.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      {selectedDoctor.contact.address && (
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-700 mb-1" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                              Dirección
                            </p>
                            <p className="text-slate-600" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                              {selectedDoctor.contact.address}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
