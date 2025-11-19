"use client";
import Image from "next/image";

// ICONOS
import { LuConstruction } from "react-icons/lu";
import { FiTool, FiCamera } from "react-icons/fi";
import { MdElectricalServices, MdPlumbing } from "react-icons/md";
import { FaWater, FaBolt, FaShieldAlt, FaSnowflake } from "react-icons/fa";
import { GiWaterTank, GiElectric } from "react-icons/gi";
import { TbBrandAirtable, TbBuildingTunnel } from "react-icons/tb";
import { RiDoorOpenFill } from "react-icons/ri";

export default function Servicios() {
  // SERVICIOS REALES DEL BROCHURE
  const servicios = [
    {
      icon: <FiTool size={50} className="text-yellow-500 mb-4" />,
      title: "Pintura en general",
      text: "Acabados profesionales para interiores y exteriores.",
    },
    {
      icon: <MdPlumbing size={50} className="text-yellow-500 mb-4" />,
      title: "Instalaciones sanitarias",
      text: "Redes de agua, desagüe y sistemas hidráulicos.",
    },
    {
      icon: <GiWaterTank size={50} className="text-yellow-500 mb-4" />,
      title: "Instalación de tanques y cisternas",
      text: "Montaje y mantenimiento de tanques elevados.",
    },
    {
      icon: <FaWater size={50} className="text-yellow-500 mb-4" />,
      title: "Instalación de electrobombas",
      text: "Bombas de presión, succión y sistemas hidráulicos.",
    },
    {
      icon: <MdElectricalServices size={50} className="text-yellow-500 mb-4" />,
      title: "Instalaciones eléctricas",
      text: "Sistemas eléctricos residenciales e industriales.",
    },
    {
      icon: <FaSnowflake size={50} className="text-yellow-500 mb-4" />,
      title: "Aire acondicionado",
      text: "Instalación y mantenimiento de equipos Split y VRF.",
    },
    {
      icon: <RiDoorOpenFill size={50} className="text-yellow-500 mb-4" />,
      title: "Video portero / Intercomunicador",
      text: "Chapa eléctrica, intercomunicadores y accesos.",
    },
    {
      icon: <FiCamera size={50} className="text-yellow-500 mb-4" />,
      title: "CCTV y alarmas",
      text: "Cámaras, sensores y sistemas antirrobo.",
    },
    {
      icon: <GiElectric size={50} className="text-yellow-500 mb-4" />,
      title: "Cerco eléctrico",
      text: "Instalación de cercos de seguridad perimetrales.",
    },
    {
      icon: <TbBuildingTunnel size={50} className="text-yellow-500 mb-4" />,
      title: "Construcción de pozo a tierra",
      text: "Pozos certificados para sistemas eléctricos.",
    },
    {
      icon: <LuConstruction size={50} className="text-yellow-500 mb-4" />,
      title: "Puertas automáticas",
      text: "Instalación de motores para puertas corredizas y más.",
    },
    {
      icon: <TbBrandAirtable size={50} className="text-yellow-500 mb-4" />,
      title: "Estructuras metálicas",
      text: "Fabricación y montaje de estructuras de acero.",
    },
  ];

  return (
    <div className="w-full font-[Montserrat] bg-white text-gray-900">

      {/* HERO SUPERIOR */}
      <section className="relative h-[55vh] w-full flex items-center justify-center">
        <Image
          src="/obre3.jpg"
          fill
          className="object-cover brightness-[0.35]"
          alt="Servicios M&M"
        />
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="relative text-white text-5xl md:text-6xl font-extrabold uppercase tracking-wide z-20 drop-shadow-lg">
          Nuestros Servicios
        </h1>
      </section>

      {/* INTRO */}
      <section className="py-20 px-10 md:px-24 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
          ¿Qué ofrecemos?
        </h2>
        <div className="w-24 h-[4px] bg-yellow-500 mx-auto mt-3"></div>

        <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-lg leading-relaxed">
          Brindamos soluciones completas en construcción, instalaciones técnicas
          y mantenimiento especializado, con altos estándares de calidad.
        </p>
      </section>

      {/* GRID SERVICIOS */}
      <section className="px-10 md:px-24 pb-28">
        <div className="grid md:grid-cols-3 gap-12">

          {servicios.map((srv, i) => (
            <div
              key={i}
              className="p-10 border rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all bg-white"
            >
              {srv.icon}
              <h3 className="text-2xl font-bold uppercase mb-3">{srv.title}</h3>
              <p className="text-gray-600 leading-relaxed">{srv.text}</p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
