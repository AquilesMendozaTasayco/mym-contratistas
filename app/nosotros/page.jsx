"use client";
import Image from "next/image";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaCheckCircle,
  FaUsers,
  FaHistory,
} from "react-icons/fa";

export default function Nosotros() {
  const valores = [
    {
      icon: <FaHandshake size={45} />,
      title: "Compromiso",
      text: "Nos enfocamos en cumplir cada proyecto con responsabilidad.",
    },
    {
      icon: <FaCheckCircle size={45} />,
      title: "Calidad",
      text: "Trabajamos con estándares profesionales y materiales certificados.",
    },
    {
      icon: <FaUsers size={45} />,
      title: "Trabajo en equipo",
      text: "Coordinación profesional para lograr resultados sobresalientes.",
    },
    {
      icon: <FaHistory size={45} />,
      title: "Experiencia",
      text: "8 años ejecutando proyectos de construcción y mantenimiento.",
    },
  ];

  return (
    <div className="w-full font-[Montserrat] bg-white text-gray-900">

      {/* HERO SUPERIOR */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <Image
          src="/obre11.jpg"
          fill
          className="object-cover brightness-[0.30]"
          alt="Equipo de trabajo"
          priority
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative text-white text-5xl md:text-6xl font-extrabold uppercase tracking-wide z-20 drop-shadow-lg text-center px-4">
          Sobre Nosotros
        </h1>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-24 px-4 md:px-24">

        {/* TÍTULO IZQUIERDA */}
        <div className="mb-12 text-left max-w-6xl mx-auto">
          <span className="text-yellow-500 font-semibold tracking-wider text-sm uppercase">
            Nuestra Empresa
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mt-2">
            Quiénes Somos
          </h2>

          <div className="w-20 h-1 bg-yellow-500 mt-3"></div>
        </div>

        {/* TEXTO IZQUIERDA + IMAGEN DERECHA */}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* TEXTO */}
          <div className="text-left">
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Somos <strong className="text-gray-800">M&M Contratistas Generales</strong>, 
              una empresa peruana dedicada a la construcción, remodelación y soluciones 
              integrales para viviendas, comercios e industrias.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Desde el 2016 ejecutamos proyectos con responsabilidad, seguridad y excelencia 
              en cada detalle. Nuestro compromiso es brindar resultados duraderos y de alto nivel.
            </p>
          </div>

          {/* IMAGEN MÁS GRANDE */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[520px] h-[380px] md:h-[420px] rounded-2xl overflow-hidden border-2 border-yellow-500/40 shadow-2xl">
              <Image
                src="/o4.jpg"
                fill
                alt="Foto de trabajadores"
                className="object-cover"
              />
            </div>

            {/* SOMBRA DIFUSA */}
            <div
              className="absolute bottom-[-20px] right-1/2 translate-x-1/2 md:right-0 md:translate-x-10
              w-[350px] h-[60px] bg-black/10 blur-3xl rounded-full"
            ></div>
          </div>

        </div>
      </section>

      {/* MISIÓN – VISIÓN */}
      <section className="py-24 px-4 md:px-24 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

          <article>
            <div className="flex items-center gap-4 mb-4">
              <FaBullseye size={42} className="text-yellow-500" />
              <h3 className="text-3xl font-bold uppercase">Nuestra Misión</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Brindar soluciones de construcción eficientes, seguras y de alta calidad, 
              garantizando el cumplimiento de plazos y la satisfacción total del cliente.
            </p>
          </article>

          <article>
            <div className="flex items-center gap-4 mb-4">
              <FaEye size={42} className="text-yellow-500" />
              <h3 className="text-3xl font-bold uppercase">Nuestra Visión</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ser una de las empresas más confiables del país, reconocida por innovación, 
              calidad y responsabilidad en cada proyecto.
            </p>
          </article>

        </div>
      </section>

      {/* VALORES CORPORATIVOS */}
      <section className="py-24 px-4 md:px-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
          Nuestros Valores
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          {valores.map((item, index) => (
            <article
              key={index}
              className="p-6 md:p-8 border rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all bg-white"
            >
              <div className="text-yellow-500 mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl uppercase mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-24 px-4 md:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
            Nuestra Historia
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mt-3"></div>

          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mt-6">
            M&M Contratistas Generales inició actividades en 2016 brindando soluciones de 
            construcción y remodelación. Hoy hemos ampliado nuestro equipo, infraestructura 
            y alcance, convirtiéndonos en una opción sólida y profesional en el mercado peruano.
          </p>
        </div>
      </section>

    </div>
  );
}
