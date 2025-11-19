"use client";
import Image from "next/image";
import { useState } from "react";

const categories = [
  "Todos",
  "Construcción",
  "Sanitarios",
  "Eléctricos",
  "Bombas / Cisternas",
  "CCTV",
  "Aire Acondicionado",
];

const servicios = [
  { title: "Pintura en General", category: "Construcción", img: "/servicios/pintura.avif" },
  { title: "Instalaciones Sanitarias", category: "Sanitarios", img: "/servicios/sanitarios.webp" },
  { title: "Instalación de Tanques", category: "Bombas / Cisternas", img: "/servicios/tanques.png" },
  { title: "Instalación de Electrobombas", category: "Bombas / Cisternas", img: "/servicios/electrobomba.jpg" },
  { title: "Instalaciones Eléctricas", category: "Eléctricos", img: "/servicios/electricos.webp" },
  { title: "Sistemas de Aire Acondicionado", category: "Aire Acondicionado", img: "/servicios/aire.webp" },
  { title: "Instalación de CCTV", category: "CCTV", img: "/servicios/cctv.jpg" },
  { title: "Cerco Eléctrico", category: "Eléctricos", img: "/servicios/cerco.jpg" },
  { title: "Pozo a Tierra", category: "Eléctricos", img: "/servicios/pozo.jpg" },
];

export default function GaleriaServicios() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? servicios : servicios.filter(s => s.category === filter);

  return (
    <div className="w-full font-[Montserrat] bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center">
        <Image
          src="/obre3.jpg"
          fill
          className="object-cover brightness-[0.35]"
          alt="Galería"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="text-center z-20">
          <h1 className="text-white font-extrabold text-5xl md:text-6xl uppercase tracking-wide">
            Galería de Servicios
          </h1>

          <div className="w-full flex justify-center mt-4">
            <div className="w-24 h-[3px] bg-yellow-500" />
          </div>
        </div>
      </section>

      {/* TÍTULO */}
      <section className="py-16 text-center px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold uppercase">
          Nuestro Trabajo en Imágenes
        </h2>

        <div className="w-20 h-[3px] bg-yellow-500 mx-auto mt-3" />

        <p className="text-gray-600 mt-5 leading-relaxed">
          Observa nuestros servicios realizados: instalaciones, mejoras,
          mantenimiento y remodelaciones. Calidad y profesionalismo en cada imagen.
        </p>
      </section>

      {/* FILTROS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 text-xs md:text-sm font-bold uppercase border
              transition-all duration-200
              ${filter === cat 
                ? "bg-yellow-500 text-black border-yellow-500" 
                : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALERÍA */}
      <section className="px-10 md:px-24 pb-20">
        <div className="grid md:grid-cols-3 gap-6">

          {filtered.map((item, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded shadow-lg"
            >
              {/* Imagen */}
              <Image
                src={item.img}
                width={600}
                height={450}
                alt={item.title}
                className="object-cover w-full h-[260px] group-hover:scale-110 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="
                absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6
              ">
                <h3 className="text-yellow-400 text-lg font-extrabold uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-xs uppercase tracking-wide">{item.category}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* BOTÓN FINAL */}
      <div className="text-center pb-20">
        <a
          href="/servicios"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 font-extrabold uppercase tracking-wide rounded-sm transition"
        >
          Ver todos los servicios
        </a>
      </div>
    </div>
  );
}
