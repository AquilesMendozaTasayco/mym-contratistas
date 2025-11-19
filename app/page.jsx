"use client";
import Image from "next/image";
import { useState } from "react";

// ICONOS
import { FiTool, FiCamera } from "react-icons/fi";
import { MdPlumbing, MdElectricalServices } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { FaSnowflake } from "react-icons/fa";

export default function Home() {
  const slides = ["/obre2.jpg","/obre11.jpg", "/obre3.jpg"];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="w-full">

      {/* HERO SLIDER */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <Image
          key={slides[current]}
          src={slides[current]}
          fill
          alt="Hero M&M"
          className="object-cover brightness-[0.25] transition-all duration-700"
        />

        {/* Degradado */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/90 to-transparent"></div>

        {/* Texto */}
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24 text-white z-20">
          <span className="bg-yellow-500 text-black px-4 py-1 font-semibold text-sm w-max mb-4">
            SERVICIO DE PRIMERA
          </span>

          <h2 className="text-2xl md:text-4xl font-light tracking-wide">
            CUANDO EL SERVICIO IMPORTA
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold mt-2 max-w-3xl leading-tight">
            TU MEJOR OPCIÓN ES M&M CONTRATISTAS GENERALES
          </h1>

          <a
            href="#servicios"
            className="mt-6 border border-yellow-500 text-yellow-500 px-6 py-3 font-semibold hover:bg-yellow-500 hover:text-black transition w-max"
          >
            CONOCE MÁS
          </a>
        </div>

        {/* Botones */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-30"
        >
          ❮
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-30"
        >
          ❯
        </button>
      </section>

      {/* FRANJA AMARILLA */}
      <div className="w-full bg-white flex justify-center relative z-40">
        <div className="bg-yellow-500 w-[92%] md:w-[75%] py-6 px-8 flex flex-col md:flex-row justify-between items-center -mt-10 shadow-xl">
          <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide text-center md:text-left">
            ENTENDEMOS TUS NECESIDADES EN CONSTRUCCIÓN
          </h3>

          <a
            href="https://wa.me/51900000000"
            target="_blank"
            className="mt-4 md:mt-0 bg-[#1F232B] hover:bg-black text-white px-6 py-3 font-semibold rounded-sm transition"
          >
            SOLICITAR COTIZACIÓN
          </a>
        </div>
      </div>

      {/* LO QUE HACEMOS */}
      <section id="servicios" className="py-24 px-10 md:px-24 bg-white text-center text-gray-900">
        
        <h4 className="tracking-widest uppercase text-gray-500">
          Somos especialistas en
        </h4>

        <h2 className="text-4xl font-bold mt-2 uppercase flex items-center justify-center gap-3 text-yellow-500">
          <LuConstruction size={40} className="text-yellow-500" />
          LO QUE HACEMOS
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16 items-start">

          {/* COLUMNA IZQ */}
          <div className="flex flex-col gap-10 text-left">

            {/* Construcción */}
            <div className="flex items-start gap-4">
              <LuConstruction size={45} className="text-yellow-500" />
              <div>
                <h3 className="font-bold text-lg uppercase">Construcción general</h3>
                <p className="text-gray-600 text-sm">
                  Proyectos residenciales, comerciales e industriales.
                </p>
              </div>
            </div>

            {/* Remodelaciones */}
            <div className="flex items-start gap-4">
              <FiTool size={45} className="text-yellow-500" />
              <div>
                <h3 className="font-bold text-lg uppercase">Remodelaciones</h3>
                <p className="text-gray-600 text-sm">
                  Ampliaciones y renovación de espacios.
                </p>
              </div>
            </div>

            {/* Eléctricas */}
            <div className="flex items-start gap-4">
              <MdElectricalServices size={45} className="text-yellow-500" />
              <div>
                <h3 className="font-bold text-lg uppercase">Instalaciones eléctricas</h3>
                <p className="text-gray-600 text-sm">
                  Sistemas eléctricos residenciales e industriales.
                </p>
              </div>
            </div>

          </div>

          {/* IMAGEN CENTRAL (VERSION GRANDE + SOMBRA PERFECTA) */}
          <div className="flex justify-center relative">

            {/* Imagen grande */}
            <div className="w-[330px] h-[430px] relative z-20">
              <Image
                src="/obrero1.png"
                fill
                className="object-contain"
                alt="Operario"
              />
            </div>

            {/* SOMBRA OVALADA EXACTA */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                            w-[260px] h-[40px] bg-black/30 blur-3xl rounded-full z-10">
            </div>

          </div>

          {/* COLUMNA DERECHA */}
          <div className="flex flex-col gap-10 text-left">

            {/* Sanitarias */}
            <div className="flex items-start gap-4">
              <MdPlumbing size={45} className="text-yellow-500" />
              <div>
                <h3 className="font-bold text-lg uppercase">Instalaciones sanitarias</h3>
                <p className="text-gray-600 text-sm">
                  Redes de agua, desagüe y sistemas hidráulicos.
                </p>
              </div>
            </div>

            {/* CCTV */}
            <div className="flex items-start gap-4">
              <FiCamera size={45} className="text-yellow-500" />
              <div>
                <h3 className="font-bold text-lg uppercase">CCTV y alarmas</h3>
                <p className="text-gray-600 text-sm">
                  Sistemas de videovigilancia y seguridad.
                </p>
              </div>
            </div>

            {/* Aire */}
            <div className="flex items-start gap-4">
              <FaSnowflake size={45} className="text-yellow-500" />
              <div>
                <h3 className="font-bold text-lg uppercase">Aire acondicionado</h3>
                <p className="text-gray-600 text-sm">
                  Instalación y mantenimiento de equipos.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
