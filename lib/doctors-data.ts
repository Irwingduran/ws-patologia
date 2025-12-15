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
  publications?: string[];
}

export const doctors: Doctor[] = [
  {
    id: "adrian-carballo",
    name: "Dr. Adrián Alejandro Carballo Zárate",
    title: "Médico Patólogo",
    position: "Director General, Especialista en Anatomía Patológica, Alta especialidad en Hematopatología, Alta especialidad en Inmunohistoquímica",
    image: "/docs/Adrian.png",
    specialties: [""],
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
      "Certificado por el Consejo Mexicano de Médicos Anatomopatólogos A.C.",
      "Número de COMMAP: 1326",
      "Vigencia: 9 de Febrero 2017 - 8 de Febrero 2027"
    ],
    languages: ["Español (nativo)", "Inglés 90%"],
    publications: [
      "Barranco-Lampon G, Martinez-Castro R, Arana-Luna L, et al. First inter-institutional consensus on Chronic Myeloproliferative Neoplasms. Gaceta Médica de México. 2022;158(Supl 1): 1-10. doi: 10.24875/GMM.M22000801.",
      "Barranco-Lampon G, Martinez-Castro R, Arana-Luna L, et al. Myelofibrosis: diagnosis and treatment. Gaceta Médica de México. 2022;158(Supl 1): 26-37. doi: 10.24875/GMM.M22000804.",
      "Barranco-Lampon G, Martinez-Castro R, Arana-Luna L, et al. Pregnancy in myeloproliferative neoplasms. Gaceta Médica de México. 2022;158(Supl 1): 59-62. doi: 10.24875/GMM.M22000807.",
      "Barranco-Lampon G, Martinez-Castro R, Arana-Luna L, et al. Polycythemia vera. Gaceta Médica de México. 2022;158(Supl 1):11-16. doi: 10.24875/GMM.M22000802.",
      "Barranco-Lampon G, Martinez-Castro R, Arana-Luna L, et al. Essential thrombocythaemia. Gaceta Médica de México. 2022;158(Supl 1):17-25. doi: 10.24875/GMM.M22000803.",
      "Barranco-Lampon G, Martinez-Castro R, Arana-Luna L, et al. Transplantatiom oh hematopoietic progenitors in myelofibrosis. Gaceta Médica de México. 2022;158(Supl 1):38-44. doi: 10.24875/GMM.M22000805.",
      "Sergio Pina-Oviedo, Carlos Ortiz-Hidalgo, Adrián Alejandro Carballo-Zarate, et al. ALK-Negative Anaplastic Large Cell Lymphoma: Current Concepts and Molecular Pathogenesis of a Heterogeneous Group of Large T-Cell Lymphomas. Cancers. 2021;13(8):4667. doi: 10.3390/cancers13184667.",
      "Mark G. Evans, L. Jeffrey Medeiros, Huang-You Wang, et al. Breast implant-associated anaplastic large cell lymphoma: Clinical follow up and analysis of sequential specimens of untreated patients shows persistent or progressive disease. Mod Pathol. 2021. Online ahead of print. doi: 10.1038/s41379-021-00842-6.",
      "Ramos-Gallardo G, Vélez-Benitez E. Cuenca-Pardo J, et al. What is the Process for Breast Implant Manufacturing? Inside Eight Breast Implant Factories. Aesthetic Plast Surg. 2020;44(6):2063-2074. doi: 10.1007/s00266-020-01844-6.",
      "Marysol Macedo-Pérez, Zamira F. Barragán-Estudillo, Elizabeth Castillo-Montufar, et al. Dermatological findings in COVID-19 patients: Mexican experience. Int J of Dermatology. 2020;59(7):872-873. doi: 10.1111/ijd.14958.",
      "Maria-Isabel Caravantes-Cortes, Ernesto Roldan-Valadez, Roberto-Daniel Zwojewski-Martinez, et al. Breast Prosthesis Syndrome: Pathophisiology and Management Algorythm. Aesth Plast Surg. 2020;44(5):1423-1437. doi: 10.1007/s00266-020-01663-9.",
      "Guillermo Ramos-Gallardo, Adrian Alejandro Carballo-Zarate, Jesus Cuenca-Pardo, et al. What is the Evidence of Lymphoma in Patients with Prostheses Other Than Breast Implants?. Aesth Plast Surg. 2020;44(2):286-294. doi: 10.1007/s00266-019-01569-1.",
      "L-V. Fuentes-Ernult, P. Gálvez-Castillejos, A.A. Molina-Villena, et al. Unusual Findings in Appendicectomy: Experience in a Third Level Hospital with More than 1000 Specimens. Surgical Science. 2019;10:377-384. doi: 10.4236/ss.2019.1011042",
      "Carballo-Zarate A, Garcia-Horton A, Palma-Berre Lizbeth, et al. Distribution of Lymphomas in Mexico: A multicenter descriptive Study. Joural of Hematopathology. 2018:11:99-105. Doi: 10.1007/s12308-018-0336-0.",
      "Hidalgo-López JE, Carballo-Zarate A, Verstovsek S, et al. Bone Marrow findings in blast phase of polycythymia vera. Ann Hematol.2018,97(3):425-434. doi: 10.1007/s00277-017-3211-7.",
      "Tang G, Hidalgo-Lopez JE, Wang SA, et al. Characteristics and clinical significance of cytogenetic abnormalities in polycythemia vera. Haematologica. 2017; 102(9):1511-1518. doi: 10.3324/haematol.2017.165795.",
      "Hao S, Lin P, Medeiros JL, et al. Clinical implications of cytogenetic heteroigenety in multiple myeloma patients with TP53 deletions. Mod Pathol.2017;30(10):1378-1386. doi: 10.1038/modpathol.2017.63.",
      "Carballo-Zarate AA, Medeiros LJ, Fang L, eta al. Additional Structural Chromosomal Aberrations Are Associated with Inferior Clinical Outcome in Patients with Hyperdiploid Multiple Myeloma: a Single Institution Experience. Modern Pathol. 2017; 30(6):843-853. doi: 10.1038/modpathol.2017.3.",
      "Hidalgo-Lopez JE, Yave M, Carballo-zarate AA, et al. Donor-Derived T-Cell Large Granular Lymphocytic Leukemia in a Patient With Peripheral T-Cell Lymphoma. J Natl Compr Canc Netw. 2016, 14(8): 939-944. doi: 10.6004/jnccn.2016.0100.",
      "Carrera-Muiñoz A, Diaz-Gonzalez C, Monjes-Jones JE, et al. Tratamiento de un Adamantinoma de Fémur con Preservación de la Extremidad Inferior: Reporte de un Caso y Revisión de la Literatura. Cirugia y cirujanos. 2015,83(3):249-254. doi: 10.1016/j.circir.2015.05.011.",
      "Morales G, Páez V, García Y, et al. Caso Clínico. Colitis ulcerosa infecciosa por Aeromonas spp. Endoscopia 2014;26(1):19-22 doi:10.1016/j.endomx.2014.04.004."
    ]
  },
  {
    id: "stephanie-escobar",
    name: "Dra. Stephanie Escobar Muñoz",
    title: "Médico Patólogo",
    position: "Especialista en Anatomía Patológica, Alta especialidad en Inmunohistoquímica",
    image: "/docs/Stephanie.png",
    specialties: [""],
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
  },
  {
    id: "ayami-ogata",
    name: "Dra. Ayami Ogata Medel",
    title: "Médico Cirujano",
    position: "Especialista en Anatomía Patológica, Alta especialidad en Inmunohistoquímica, Alta especialidad en citopatología",
    image: "/docs/Ayami.png",
    specialties: [""],
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
    publications: [
      "Nuestra experiencia en un caso de absceso hipofisiario que se presentó como síndrome del seno cavernoso. Chávez López José Antonio 1 , García Cisneros Rosalina 2* , Zarate Méndez Antonio 3 , Morel Trejo Carmen 4 ,Ogata Medel Ayami 5 . archivosdeneurociencias.com Presentación del caso Vol. 21 | No. 4 | Octubre - Diciembre 2016 – 51 https://www.medigraphic.com/pdfs/arcneu/ane-2016/ane164f.pdf",
      "Neoplasia mixta neuroendócrina-no neuroendócrina de páncreas. Reporte de un caso. Dr. Sergio Hernández García, Dra. Adriana Castillo Ortega, Dr. José Alberto González, Dr. Jorge Barrón Reyes, Dr. Marvin Benavides Maruri, Dra. Ayami Ogata Medel. Centro Médico Nacional 20 de Noviembre.",
      "Presentación y publicación digital del trabajo titulado: Perfil inmunohistoquímico de casos de cáncer de mama en pacientes del sexo masculino en el Centro Médico Nacional “20 de Noviembre” en un periodo de ocho años. Presentado en el XXXI FORO DEL RESIDENTE 2018 que se llevó a cabo el sábado 8 diciembre de 2018 en el Auditorio del Servicio de Patología del Hospital General de México “Dr. Eduardo Liceaga” y desde entonces fue publicado en la página web de la Asociación. Dicha publicación está disponible para los asociados en www.ampatologia.org"
    ]
  },
  {
    id: "socrates-garcia",
    name: "Dr. Sócrates García Gutiérrez",
    title: "Médico Patólogo",
    position: "Especialista en Anatomía Patológica, Alta especialidad en Biología Molecular, Alta especialidad en Hematopatología, Alta especialidad en Inmunohistoquímica, Alta especialidad en citopatología",
    image: "/docs/Socrates.png",
    specialties: [""],
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
    publications: [
      "Eur J Haematol. 2024 Sep;113(3):321-329. doi: 10.1111/ejh.14230. Epub 2024 May 14.PMID: 38742655",
      "Viruses. 2025 Aug 21;17(8):1147. doi: 10.3390/v17081147.PMID: 40872859",
      "Ann Hematol. 2024 Apr;103(4):1317-1325. doi: 10.1007/s00277-023-05583-x. Epub 2023 Dec 13.PMID: 38091053"
    ]
  },
  {
    id: "jesus-segura",
    name: "Dr. Jesús Román Segura Rivera",
    title: "Médico Anatomopatólogo",
    position: "Alta especialidad en Hematopatología",
    image: "/docs/roman.png",
    specialties: ["Anatomía Patológica", "Hematopatología"],
    education: [
      {
        degree: "Fellowship posdoctoral de investigación, Hematopatología",
        institution: "University of Texas, MD Anderson Cancer Center, Houston, Texas, Estados Unidos",
        period: "2023-2024"
      },
      {
        degree: "Curso de alta especialidad en Hematopatología",
        institution: "Universidad Nacional Autónoma de México, Hospital Español, Ciudad de México, México",
        period: "2021-2023"
      },
      {
        degree: "Curso de especialización en Anatomía Patológica",
        institution: "Universidad Nacional Autónoma de México, Fundación Clínica Médica Sur, Ciudad de México, México",
        period: "2018-2021"
      },
      {
        degree: "Medicina",
        institution: "Universidad Autónoma de Baja California, Tijuana, Baja California, México",
        period: "2010-2018"
      }
    ],
    experience: [
      {
        position: "Anatomopatólogo / Hematopatólogo",
        institution: "Laboratorio PIC / CEPAMA, Ciudad de México, México",
        period: "2023-actualidad"
      },
      {
        position: "Médico general",
        institution: "Hospital Insurgentes Río, Tijuana, Baja California, México",
        period: "2017-2018"
      },
      {
        position: "Asistente de laboratorio",
        institution: "Patología y Citología del Río, Tijuana, Baja California, México",
        period: "2011-2018"
      }
    ],
    certifications: [
      "Cédula de especialista: 12433213",
      "Certificado COMMAP: 1908",
    ],
    languages: ["Español", "Inglés"],
    publications: [
      "Segura-Rivera, R., Dcunha, N. J., Dimopoulos, Y. P., Mundhada, A., Sainz, T. P., Kettlun, C., ... & Vega, F. (2025). The spectrum of B-cell and plasma cell proliferations in nodal T follicular helper cell lymphomas. The American Journal of Surgical Pathology, 49(3), 251-264.",
      "Segura-Rivera, R., & Pina-Oviedo, S. (2024). Marginal zone lymphoma of extranodal sites: A review with an emphasis on diagnostic pitfalls and differential diagnosis with reactive conditions. Human Pathology, 105683.",
      "Wei, Q., Fang, H., Jing, J. M., Segura-Rivera, R., Medeiros, L. J., & Wang, W. (2024). Emergence of IGH::CCND1 rearrangement and mutations in TP53, BTK, and BCL2 associated with therapy resistance in chronic lymphocytic leukemia. EJHaem, 5(6), 1265-1268.",
      "Fernández-Ferreira, R., Arroyave-Ramírez, A., Motola-Kuba, D., Alvarado-Luna, G., Mackinney-Novelo, I., & Segura-Rivera, R. (2021). Giant Benign Mammary Phyllodes Tumor: Report of a Case and Review of the Literature. Case reports in oncology, 14(1), 123-133.",
      "Fernández-Ferreira, R., Alvarado-Luna, G., Motola-Kuba, D., Mackinney-Novelo, I., Cervera-Ceballos, E. E., & Segura-Rivera, R. (2020). Intergluteal Cleft Eccrine Porocarcinoma with Metastasis to Inguinal Region and Lung: Case Report and Review of the Literature. Case Reports in Oncology, 13(3), 1463-1473.",
      "Segura-Rivera, R., Brindis-Zavaleta, M. & Ortiz-Hidalgo, C. (2020). Linfoma NK/T tipo nasal extraganglionar con expresión de CD20. Informe de un caso poco frecuente, que puede ser fuente de potencial error diagnóstico. Hematología, 21 (4): 247-252.",
      "Segura-Rivera, R., & Ortiz-Hidalgo, C. (2020). Linfoma T angioinmunoblástico. Diagnóstico histológico e inmunohistoquímico del linfoma originado de células T foliculares cooperadoras. Patología, 58, 1-12.",
      "Enríquez-Pineda, Ó. M., Segura-Rivera, J. R., Ruiz-Morales, J. M., Mendoza-Valdés, A., & Dorantes-Heredia, R. (2019). Asociación inusual de malacoplaquia y adenocarcinoma prostático. Revista Española de Patología."
    ]
  }
];
