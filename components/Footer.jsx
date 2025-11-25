"use client";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full font-[Montserrat]">

      {/* BLOQUE NEGRO PRINCIPAL */}
      <div className="w-full bg-[#0E0F12] text-white py-16 px-10 md:px-24 grid md:grid-cols-3 gap-16">

        {/* ABOUT */}
        <div>
          <h3 className="uppercase text-sm tracking-widest font-semibold border-l-4 border-yellow-500 pl-3 mb-6">
            Sobre Nosotros
          </h3>

          {/* LOGO */}
          <div className="w-40 h-auto mb-4">
            {/* <Image src="/logo-mym.png" width={150} height={50} alt="M&M" /> */}
          </div>

          <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
            M&M Contratistas Generales es una empresa peruana especializada en 
            construcción, remodelaciones, ampliaciones, instalaciones eléctricas, 
            sanitarias, CCTV y aire acondicionado. Brindamos soluciones integrales 
            con calidad, seguridad y cumplimiento.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-5 text-gray-300 text-lg mt-6">
            <a href="https://www.facebook.com/mym.contratistas.pe/" className="hover:text-yellow-500 transition"><FaFacebookF /></a>
            <a href="https://www.instagram.com/mymconstructora/?hl=es-la" className="hover:text-yellow-500 transition"><FaInstagram /></a>
            <a href="https://wa.me/51924435338" target="_blank" className="hover:text-yellow-500 transition"><FaWhatsapp /></a>
          </div>
        </div>

        {/* WORKING HOURS */}
        <div>
          <h3 className="uppercase text-sm tracking-widest font-semibold border-l-4 border-yellow-500 pl-3 mb-6">
            Horarios de Atención
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Atendemos los 7 días de la semana en horario flexible.  
            Para emergencias, puedes escribirnos directamente por WhatsApp.
          </p>

          <ul className="mt-6 text-sm text-gray-300">
            <li className="flex justify-between border-b border-gray-800 py-2">
              <span>Lunes - Viernes:</span>
              <span>09:00 - 18:00</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 py-2">
              <span>Sábado:</span>
              <span>09:00 - 14:00</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 py-2">
              <span>Domingos y feriados:</span>
              <span>Cerrado</span>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="uppercase text-sm tracking-widest font-semibold border-l-4 border-yellow-500 pl-3 mb-6">
            Nuestros Servicios
          </h3>

          <ul className="text-gray-300 text-sm flex flex-col gap-3">

            <li className="border-b border-gray-800 pb-2 hover:text-yellow-500 cursor-pointer transition">
              Construcción General
            </li>

            <li className="border-b border-gray-800 pb-2 hover:text-yellow-500 cursor-pointer transition">
              Remodelaciones
            </li>

            <li className="border-b border-gray-800 pb-2 hover:text-yellow-500 cursor-pointer transition">
              Instalaciones Eléctricas
            </li>

            <li className="border-b border-gray-800 pb-2 hover:text-yellow-500 cursor-pointer transition">
              Instalaciones Sanitarias
            </li>

            <li className="border-b border-gray-800 pb-2 hover:text-yellow-500 cursor-pointer transition">
              CCTV y Alarmas
            </li>

            <li className="border-b border-gray-800 pb-2 hover:text-yellow-500 cursor-pointer transition">
              Aire Acondicionado
            </li>

          </ul>
        </div>
      </div>

      {/* FRANJA AMARILLA INFERIOR */}
      <div className="w-full bg-yellow-500 py-4 px-10 md:px-24 flex justify-between items-center text-sm font-medium">

        <p className="text-black">
          Copyright © {new Date().getFullYear()} — M&M Contratistas Generales — Todos los derechos reservados.
        </p>

        {/* MENÚ INFERIOR */}
        <div className="hidden md:flex gap-6 text-black">
          <a href="/nosotros" className="hover:underline">Nosotros</a>
          <a href="/servicios" className="hover:underline">Servicios</a>
          <a href="/proyectos" className="hover:underline">Proyectos</a>
          <a href="/contacto" className="hover:underline">Contacto</a>
        </div>
      </div>

      {/* BOTÓN SUBIR */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded shadow-lg transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
