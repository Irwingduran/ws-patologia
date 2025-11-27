export interface Doctor {
  id: string;
  name: string;
  title: string;
  position: string;
  image: string;
  specialties: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
  experience: {
    position: string;
    institution: string;
    period: string;
  }[];
  certifications?: string[];
  skills?: string[];
  languages?: string[];
  contact: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

export const doctors: Doctor[] = [
  {
    id: "adrian-carballo",
    name: "Dr. Adrián Alejandro Carballo Zárate",
    title: "Médico Patólogo",
    position: "Encargado del Departamento de Patología del Hospital Español",
    image: "/docs/Adrian.png",
    specialties: ["Hematopatología", "Patología Quirúrgica", "Inmunohistoquímica"],
    education: [
      {
        degree: "Postdoctorado en Hematopatología",
        institution: "MD Anderson Cancer Center, Houston TX",
        period: "Octubre 2014 - Septiembre 2016"
      },
      {
        degree: "Curso de Alta Especialidad en Inmunohistoquímica aplicada a la Patología Quirúrgica",
        institution: "Hospital Español de México (UNAM)",
        period: "Marzo 2012 - Febrero 2013"
      },
      {
        degree: "Especialidad en Patología Quirúrgica",
        institution: "Hospital de Especialidades Dr. Antonio Fraga Mouret, CMN La Raza (UNAM)",
        period: "Marzo 2009 - Febrero 2012"
      },
      {
        degree: "Médico Cirujano y Partero",
        institution: "Universidad Anáhuac Norte",
        period: "2003 - 2009"
      }
    ],
    experience: [
      {
        position: "Coordinador General y Patólogo en Jefe",
        institution: "PIC (Patología Inmunohistoquímica y Citopatología, S.C.)",
        period: "Agosto 2022 - Presente"
      },
      {
        position: "Patólogo Quirúrgico Adscrito",
        institution: "Departamento de Patología del Hospital Español de México",
        period: "Abril 2017 - Marzo 2024"
      },
      {
        position: "Profesor Titular del curso de Patología General",
        institution: "Universidad Westhill",
        period: "Julio 2017 - Mayo 2020"
      },
      {
        position: "Patólogo Quirúrgico Asociado",
        institution: "PIC (Patología Inmunohistoquímica y Citopatología, S.C.)",
        period: "Enero 2017 - Agosto 2022"
      }
    ],
    certifications: [
      "Beca/apoyo económico para cursar 'Postdoctoral Fellowship in Hematopathology' en MD Anderson Cancer Center (2014-2016)"
    ],
    languages: ["Español (nativo)", "Inglés 90%"],
    contact: {
      phone: "(52) 55 2767 7554",
      email: "adrian_alejandroc@hotmail.com",
      address: "Tennyson #346, depto 202, Colonia Polanco, Miguel Hidalgo, Ciudad de México, CP 11550"
    }
  },
  {
    id: "stephanie-escobar",
    name: "Dra. Stephanie Escobar Muñoz",
    title: "Médico Patólogo",
    position: "Especialista en Anatomía Patológica e Inmunohistoquímica",
    image: "/placeholder-user.jpg",
    specialties: ["Anatomía Patológica", "Inmunohistoquímica", "Citopatología"],
    education: [
      {
        degree: "Alta Especialidad en Inmunohistoquímica en la Patología Quirúrgica",
        institution: "Hospital Español de México (UNAM)",
        period: "2020 - 2021"
      },
      {
        degree: "Especialidad en Anatomía Patológica",
        institution: "Hospital General Dr. Manuel Gea González (UNAM)",
        period: "2017 - 2020"
      },
      {
        degree: "Licenciatura en Médico Cirujano",
        institution: "UNAM, Ciudad Universitaria",
        period: "2008 - 2020"
      }
    ],
    experience: [
      {
        position: "Médico Patólogo",
        institution: "PIC (Patología Inmunohistoquímica y Citopatología, S.C.)",
        period: "2021 - Presente"
      }
    ],
    certifications: [
      "Primera certificación en anatomía patológica (Febrero 2020)",
      "Segunda recertificación en anatomía patológica (Febrero 2025)"
    ],
    skills: [
      "Diagnósticos precisos en biopsias y citologías",
      "Transoperatorios",
      "Examen microscópico con tinciones especiales e inmunohistoquímica",
      "Trabajo en equipo e individual",
      "Gestión de muestras",
      "Capacidad de análisis",
      "Evaluación del paciente"
    ],
    languages: ["Español", "Inglés B2"],
    contact: {
      phone: "55 5454 6964",
      email: "dra.stephan.em@picpatologia.com",
      address: "Av. Insurgentes Sur #4411, Col. Tlalcoligia, Alcaldía Tlalpan, CDMX, CP 14430"
    }
  },
  {
    id: "ayami-ogata",
    name: "Dra. Ayami Ogata Medel",
    title: "Médico Cirujano",
    position: "Patólogo adscrito al Laboratorio PIC",
    image: "/placeholder-user.jpg",
    specialties: [
      "Patología Quirúrgica",
      "Inmunohistoquímica",
      "Citopatología",
      "Biología Molecular"
    ],
    education: [
      {
        degree: "Curso de Alta Especialidad en Inmunohistoquímica de la Patología Quirúrgica",
        institution: "Hospital Español",
        period: "Marzo 2020 - Febrero 2021"
      },
      {
        degree: "Curso de Alta Especialidad de Citopatología",
        institution: "Hospital General de México Dr. Eduardo Liceaga",
        period: "Marzo 2019 - Febrero 2020"
      },
      {
        degree: "Curso de Entrada Directa en Anatomía Patológica",
        institution: "Centro Médico Nacional 20 de Noviembre",
        period: "Enero 2016 - 2019"
      },
      {
        degree: "Médica Cirujana",
        institution: "Universidad Veracruzana",
        period: "Agosto 2007 - Julio 2012"
      }
    ],
    experience: [
      {
        position: "Médico Patólogo Adscrito",
        institution: "Laboratorio PIC (Patología quirúrgica, Inmunohistoquímica, Biología molecular, FISH, PCR y Secuenciación)",
        period: "2021 - Presente"
      },
      {
        position: "Médico Interno de Pregrado",
        institution: "Centro de Especialidades Médicas del Estado de Veracruz Dr. Rafael Lucio",
        period: "Enero 2013 - Diciembre 2013"
      }
    ],
    certifications: [
      "Cédula de Especialidad en Anatomía Patológica (UNAM) No. 11771534 (2019)",
      "Certificado como Especialista en Anatomía Patológica (Consejo Mexicano de Anatomopatólogos) No. 1808 (2019)",
      "Intercambio Profesional en Departamento de Cardiología, Hospital de La Timone, Marsella, Francia (2012)"
    ],
    languages: ["Español", "Inglés"],
    contact: {
      phone: "2281240513",
      email: "ayami88@hotmail.com",
      address: "Río Nilo 13-103, Colonia Cuauhtémoc, Ciudad de México, CP 06500"
    }
  },
  {
    id: "socrates-garcia",
    name: "Dr. Sócrates García Gutiérrez",
    title: "Médico Patólogo",
    position: "Especialista en Hematopatología y Patología Molecular",
    image: "/docs/Socrates.png",
    specialties: [
      "Hematopatología",
      "Patología Molecular en Oncología",
      "Citopatología",
      "Inmunohistoquímica"
    ],
    education: [
      {
        degree: "Curso de Alta Especialidad en Hematopatología",
        institution: "Hospital Español",
        period: "2019 - 2020"
      },
      {
        degree: "Curso en Patología Molecular en Oncología",
        institution: "Instituto Roche",
        period: "2015 - 2016"
      },
      {
        degree: "Curso de Alta Especialidad en Citopatología",
        institution: "Hospital General Dr. Manuel Gea González (UNAM)",
        period: "2014 - 2015"
      },
      {
        degree: "Curso de Alta Especialidad en Inmunohistoquímica en la Patología Quirúrgica",
        institution: "Hospital Español de México (UNAM)",
        period: "2013 - 2014"
      },
      {
        degree: "Especialidad en Anatomía Patológica",
        institution: "Hospital de Especialidades UMAE, CMN La Raza (UNAM)",
        period: "2010 - 2013"
      },
      {
        degree: "Médico Cirujano",
        institution: "Universidad Autónoma de Tlaxcala",
        period: "2003 - 2010"
      }
    ],
    experience: [
      {
        position: "Médico Patólogo",
        institution: "Laboratorio de Patología, Inmunohistoquímica y Citopatología, Hospital de Especialidades, UMAE CMN La Raza",
        period: "2013 - Presente"
      }
    ],
    certifications: [
      "Re-certificación por el Consejo Mexicano de Médicos Anatomopatólogos, A.C. No. 1424",
      "Cédula de Especialidad en Anatomía Patológica No. 8404241",
      "Cédula Profesional de Médico Cirujano No. 6313295"
    ],
    languages: ["Español"],
    contact: {
      phone: "",
      email: "",
      address: ""
    }
  }
];
