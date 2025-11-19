"use client";
import Image from "next/image";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaCheckCircle,
  FaUsers,
  FaHistory,
  FaAward,
  FaRocket
} from "react-icons/fa";

export default function Nosotros() {
  const valores = [
    {
      icon: <FaHandshake size={50} />,
      title: "Compromiso",
      text: "Nos enfocamos en cumplir cada proyecto con responsabilidad.",
    },
    {
      icon: <FaCheckCircle size={50} />,
      title: "Calidad",
      text: "Trabajamos con estándares profesionales y materiales certificados.",
    },
    {
      icon: <FaUsers size={50} />,
      title: "Trabajo en equipo",
      text: "Coordinación profesional para lograr resultados sobresalientes.",
    },
    {
      icon: <FaHistory size={50} />,
      title: "Experiencia",
      text: "8 años ejecutando proyectos de construcción y mantenimiento.",
    },
  ];

  return (
    <div className="w-full font-[Montserrat] bg-white text-gray-900">

      {/* HERO SUPERIOR MEJORADO */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/obre11.jpg"
          fill
          className="object-cover brightness-[0.30] scale-110 transition-transform duration-1000"
          alt="Equipo de trabajo"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

        <div className="relative text-center z-20 px-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-6 drop-shadow-2xl">
            Sobre Nosotros
          </h1>
          <div className="w-32 h-1.5 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-lg">
            Construyendo confianza, creando espacios
          </p>
        </div>
      </section>

      {/* QUIÉNES SOMOS MEJORADO */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* TÍTULO MEJORADO */}
          <div className="mb-16 text-center">
            <span className="text-yellow-500 font-semibold tracking-widest text-sm uppercase inline-flex items-center gap-2 mb-3">
              <FaAward className="w-4 h-4" />
              NUESTRA EMPRESA
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase mt-2">
              Quiénes <span className="text-yellow-500">Somos</span>
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          {/* CONTENIDO MEJORADO */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* TEXTO MEJORADO */}
            <div className="space-y-6">
              <div className="p-6 bg-yellow-500/5 rounded-2xl border-l-4 border-yellow-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Somos <strong className="text-gray-900 font-bold">M&M Contratistas Generales</strong>, 
                  una empresa peruana dedicada a la construcción, remodelación y soluciones 
                  integrales para viviendas, comercios e industrias.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Desde el <strong className="text-gray-800">2016</strong> ejecutamos proyectos con responsabilidad, seguridad y excelencia 
                  en cada detalle. Nuestro compromiso es brindar resultados duraderos y de alto nivel.
                </p>
              </div>

              {/* ESTADÍSTICAS */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-lg border">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">8+</div>
                  <div className="text-sm font-semibold text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg border">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">100+</div>
                  <div className="text-sm font-semibold text-gray-600">Proyectos Completados</div>
                </div>
              </div>
            </div>

            {/* IMAGEN MEJORADA */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[550px] h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/o4.jpg"
                  fill
                  alt="Foto de trabajadores"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* DECORACIÓN */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-500 rounded-full opacity-10"></div>
              </div>

              {/* EFECTO DE SOMBRA */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-yellow-500/10 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN – VISIÓN MEJORADO */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* MISIÓN MEJORADA */}
            <article className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500/10 p-4 rounded-2xl">
                  <FaBullseye size={42} className="text-yellow-500" />
                </div>
                <h3 className="text-3xl font-bold uppercase text-gray-800">Nuestra Misión</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed pl-4 border-l-4 border-yellow-500">
                Brindar soluciones de construcción eficientes, seguras y de alta calidad, 
                garantizando el cumplimiento de plazos y la satisfacción total del cliente.
              </p>
            </article>

            {/* VISIÓN MEJORADA */}
            <article className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500/10 p-4 rounded-2xl">
                  <FaEye size={42} className="text-yellow-500" />
                </div>
                <h3 className="text-3xl font-bold uppercase text-gray-800">Nuestra Visión</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed pl-4 border-l-4 border-yellow-500">
                Ser una de las empresas más confiables del país, reconocida por innovación, 
                calidad y responsabilidad en cada proyecto.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VALORES CORPORATIVOS MEJORADO */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ENCABEZADO MEJORADO */}
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold tracking-widest text-sm uppercase inline-flex items-center gap-2 mb-3">
              <FaRocket className="w-4 h-4" />
              LO QUE NOS DEFINE
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase">
              Nuestros <span className="text-yellow-500">Valores</span>
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          {/* GRID DE VALORES MEJORADO */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((item, index) => (
              <article
                key={index}
                className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-yellow-500/30 
                         shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
              >
                <div className="bg-yellow-500/10 p-4 rounded-2xl inline-flex group-hover:bg-yellow-500/20 
                              group-hover:scale-110 transition-all duration-300 mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl uppercase mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA MEJORADA */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-tr from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <span className="text-yellow-500 font-semibold tracking-widest text-sm uppercase inline-flex items-center gap-2 mb-3">
                <FaHistory className="w-4 h-4" />
                NUESTRO LEGADO
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
                Nuestra <span className="text-yellow-500">Historia</span>
              </h2>
              <div className="w-20 h-1.5 bg-yellow-500 mx-auto mt-4"></div>
            </div>

            <div className="bg-yellow-500/5 rounded-2xl p-8 border-l-4 border-yellow-500">
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                M&M Contratistas Generales inició actividades en <strong className="text-gray-900">2016</strong> brindando soluciones de 
                construcción y remodelación. Hoy hemos ampliado nuestro equipo, infraestructura 
                y alcance, convirtiéndonos en una opción sólida y profesional en el mercado peruano.
              </p>
            </div>

            {/* LÍNEA DE TIEMPO SIMPLIFICADA */}
            <div className="flex justify-center items-center gap-8 mt-12">
              <div className="text-center">
                <div className="bg-yellow-500 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-lg mb-2">
                  2016
                </div>
                <div className="text-sm font-semibold text-gray-600">Fundación</div>
              </div>
              <div className="w-20 h-1 bg-yellow-500/30 rounded-full"></div>
              <div className="text-center">
                <div className="bg-yellow-500 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-lg mb-2">
                  2024
                </div>
                <div className="text-sm font-semibold text-gray-600">Actualidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}