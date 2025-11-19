"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilter, FaArrowRight, FaEye, FaSearch, FaTimes } from "react-icons/fa";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  const filtered = servicios.filter(item => {
    const matchesCategory = filter === "Todos" || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full font-[Montserrat] bg-white text-gray-900">

      <motion.section
        variants={fade}
        initial="hidden"
        animate="show"
        className="relative h-[55vh] flex items-center justify-center overflow-hidden"
      >
        <Image src="/obre3.jpg" fill className="object-cover brightness-[0.35] scale-105" alt="Galería" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

        <motion.div variants={fadeUp} className="text-center z-20 px-4">
          <h1 className="text-white font-extrabold text-5xl md:text-7xl uppercase tracking-wider mb-6 drop-shadow-2xl">
            Galería de Servicios
          </h1>
          <div className="w-32 h-1.5 bg-yellow-500 mx-auto mb-6" />
          <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-lg">
            Descubre nuestro trabajo en imágenes
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 text-center px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <span className="text-yellow-500 font-semibold tracking-widest text-sm uppercase inline-flex items-center gap-2 mb-3">
            <FaEye className="w-4 h-4" />
            NUESTRO TRABAJO
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold uppercase">
            Trabajo en <span className="text-yellow-500">Imágenes</span>
          </h2>

          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-4 mb-8" />

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Observa nuestros servicios realizados con los más altos estándares de calidad.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mb-16 bg-white py-8"
      >
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Buscar servicios por nombre o categoría..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 text-gray-700 placeholder-gray-500"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <FaTimes className="text-gray-400 hover:text-gray-600 w-5 h-5 transition-colors" />
                </button>
              )}
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <FaFilter className="text-yellow-500 w-4 h-4" />
            <span className="text-yellow-500 font-semibold tracking-widest text-sm uppercase">
              Filtrar por categoría
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 text-sm font-bold uppercase transition-all duration-300 rounded-xl border-2 flex items-center gap-2 min-w-[120px] justify-center ${
                  filter === cat
                    ? "bg-yellow-500 border-yellow-500 text-black shadow-lg transform scale-105"
                    : "border-gray-300 text-gray-700 hover:border-yellow-400 hover:text-gray-900 hover:bg-yellow-500/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <span className="text-gray-500 text-sm font-semibold">
              Mostrando {filtered.length} de {servicios.length} proyectos
              {searchTerm && ` para "${searchTerm}"`}
            </span>
          </motion.div>

          <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-8 mx-auto max-w-4xl" />
        </div>
      </motion.section>

      <section className="px-6 md:px-8 pb-20 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-80 overflow-hidden">
                <Image src={item.img} fill alt={item.title} className="object-cover group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="bg-yellow-500 text-black text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-3 self-start">
                    {item.category}
                  </div>
                  <h3 className="text-white text-xl font-extrabold uppercase mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <span>Click para ampliar</span>
                    <FaEye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold text-gray-800 uppercase mb-1">{item.title}</h3>
                <span className="text-yellow-500 text-sm font-semibold uppercase">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No se encontraron proyectos</h3>
            <p className="text-gray-500">
              {searchTerm ? `No hay resultados para "${searchTerm}".` : "Intenta otra categoría o vuelve a Todos"}
            </p>

            {(searchTerm || filter !== "Todos") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilter("Todos");
                }}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Mostrar todos los proyectos
              </button>
            )}
          </motion.div>
        )}
      </section>

      {selectedImage && (
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-500 transition-colors z-10"
            >
              <FaTimes className="w-8 h-8" />
            </button>

            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden bg-white">
              <Image src={selectedImage.img} fill alt={selectedImage.title} className="object-contain" />
            </div>

            <div className="bg-white rounded-b-2xl p-6">
              <div className="bg-yellow-500 text-black text-sm font-bold uppercase px-4 py-1 rounded-full inline-block mb-3">
                {selectedImage.category}
              </div>
              <h3 className="text-2xl font-extrabold uppercase text-gray-800 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">Servicio profesional realizado con los más altos estándares de calidad</p>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center pb-20 bg-gradient-to-t from-white to-gray-50"
      >
        <a
          href="/servicios"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 group"
        >
          <span>Ver todos los servicios</span>
          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>

        <p className="text-gray-500 mt-6 text-sm max-w-md mx-auto">
          Descubre nuestra completa gama de servicios profesionales
        </p>
      </motion.div>
    </div>
  );
}
