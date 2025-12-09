import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AvisoDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto max-w-4xl py-24 px-4">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Aviso de Privacidad</h1>
        <div className="prose prose-slate max-w-none bg-white p-8 rounded-xl shadow-sm text-slate-600">
          <p className="mb-4">
            <strong>PATOLOGÍA, INMUNOHISTOQUÍMICA Y CITOPATOLOGÍA S.C. (PIC)</strong>, con domicilio en Tennyson 360, Colonia Polanco, Alcaldía Miguel Hidalgo, C.P. 11550, Ciudad de México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
          </p>
          
          <h2 className="text-xl font-semibold text-slate-800 mt-6 mb-3">¿Para qué fines utilizaremos sus datos personales?</h2>
          <p className="mb-4">
            Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Proveer los servicios de diagnóstico patológico, inmunohistoquímico y molecular solicitados.</li>
            <li>Integrar su expediente clínico.</li>
            <li>Facturación y cobro de servicios.</li>
            <li>Contactarlo para entrega de resultados o seguimiento médico.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-800 mt-6 mb-3">¿Qué datos personales utilizaremos para estos fines?</h2>
          <p className="mb-4">
            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Datos de identificación (Nombre, edad, fecha de nacimiento).</li>
            <li>Datos de contacto (Teléfono, correo electrónico, domicilio).</li>
            <li>Datos fiscales (RFC, domicilio fiscal).</li>
            <li>Datos sensibles relacionados con su estado de salud y antecedentes clínicos.</li>
          </ul>

          <p className="mt-8 text-sm text-slate-500">
            Última actualización: Diciembre 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
