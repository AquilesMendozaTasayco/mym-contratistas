"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { LuConstruction } from "react-icons/lu";
import { FiTool, FiCamera } from "react-icons/fi";
import { MdElectricalServices, MdPlumbing } from "react-icons/md";
import { FaWater, FaBolt, FaShieldAlt, FaSnowflake, FaHandHoldingUsd, FaHeadset } from "react-icons/fa";
import { GiWaterTank, GiElectric } from "react-icons/gi";
import { TbBrandAirtable, TbBuildingTunnel } from "react-icons/tb";
import { RiDoorOpenFill } from "react-icons/ri";

export default function Servicios() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  const servicios = [
    { icon: <FiTool size={54} />, title: "Pintura en general", text: "Acabados profesionales para interiores y exteriores." },
    { icon: <MdPlumbing size={54} />, title: "Instalaciones sanitarias", text: "Redes de agua, desagüe y sistemas hidráulicos." },
    { icon: <GiWaterTank size={54} />, title: "Instalación de tanques y cisternas", text: "Montaje y mantenimiento de tanques elevados." },
    { icon: <FaWater size={54} />, title: "Instalación de electrobombas", text: "Bombas de presión, succión y sistemas hidráulicos." },
    { icon: <MdElectricalServices size={54} />, title: "Instalaciones eléctricas", text: "Sistemas eléctricos residenciales e industriales." },
    { icon: <FaSnowflake size={54} />, title: "Aire acondicionado", text: "Instalación y mantenimiento de equipos Split y VRF." },
    { icon: <RiDoorOpenFill size={54} />, title: "Video portero / Intercomunicador", text: "Chapa eléctrica, intercomunicadores y accesos." },
    { icon: <FiCamera size={54} />, title: "CCTV y alarmas", text: "Cámaras, sensores y sistemas antirrobo." },
    { icon: <GiElectric size={54} />, title: "Cerco eléctrico", text: "Instalación de cercos de seguridad perimetrales." },
    { icon: <TbBuildingTunnel size={54} />, title: "Construcción de pozo a tierra", text: "Pozos certificados para sistemas eléctricos." },
    { icon: <LuConstruction size={54} />, title: "Puertas automáticas", text: "Instalación de motores para puertas corredizas y más." },
    { icon: <TbBrandAirtable size={54} />, title: "Estructuras metálicas", text: "Fabricación y montaje de estructuras de acero." },
  ];

  const beneficios = [
    { icon: <FaShieldAlt className="w-6 h-6" />, text: "Garantía en todos nuestros trabajos" },
    { icon: <FaHandHoldingUsd className="w-6 h-6" />, text: "Precios competitivos y transparentes" },
    { icon: <FaHeadset className="w-6 h-6" />, text: "Soporte técnico especializado" },
    { icon: <FaBolt className="w-6 h-6" />, text: "Respuesta rápida y eficiente" }
  ];

  return (
    <div className="w-full font-[Montserrat] bg-white text-gray-900">

      <motion.section
        variants={fade}
        initial="hidden"
        animate="show"
        className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden"
      >
        <Image src="/obre3.jpg" fill className="object-cover brightness-[0.35] scale-105" alt="Servicios M&M" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

        <motion.div variants={fadeUp} className="relative text-center z-20 px-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-6 drop-shadow-2xl">
            Nuestros Servicios
          </h1>
          <div className="w-32 h-1.5 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-lg">
            Soluciones integrales para construcción y mantenimiento
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-8 text-center bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <span className="text-yellow-500 font-semibold tracking-widest text-sm uppercase inline-flex items-center gap-2 mb-3">
            <LuConstruction className="w-4 h-4" />
            LO QUE HACEMOS
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold uppercase">
            ¿Qué <span className="text-yellow-500">Ofrecemos</span>?
          </h2>

          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-4 mb-8"></div>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Brindamos soluciones completas en construcción, instalaciones técnicas
            y mantenimiento especializado.
          </p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {beneficios.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <div className="bg-yellow-500/10 p-2 rounded-lg">{b.icon}</div>
                <span className="text-sm font-semibold text-gray-700">{b.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="px-6 md:px-8 pb-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicios.map((srv, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-yellow-500/30 
                shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center
                relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/5 rounded-full -translate-y-10 translate-x-10 
                group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="bg-yellow-500/10 p-5 rounded-2xl inline-flex group-hover:bg-yellow-500/20 
                  group-hover:scale-110 transition-all duration-300 mb-6">
                    {srv.icon}
                  </div>

                  <h3 className="text-xl font-bold uppercase mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{srv.text}</p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-3xl border border-yellow-500/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-gray-800">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Contáctanos para una consulta personalizada.
            </p>

            <Link href="/contacto">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-3">
                <FaHeadset className="w-5 h-5" />
                Consultar servicio personalizado
              </button>
            </Link>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
