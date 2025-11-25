"use client";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <div className="w-full font-[Montserrat] bg-white text-gray-900">

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/obre2.jpg"
          fill
          className="object-cover brightness-[0.35] scale-105 transition-transform duration-700"
          alt="Contacto M&M"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-20 px-4"
        >
          <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-4 drop-shadow-2xl">
            Contáctanos
          </h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-lg">
            Transformamos tus ideas en realidad
          </p>
        </motion.div>
      </motion.section>

      <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 leading-tight">
                Estamos para<br /><span className="text-yellow-500">ayudarte</span>
              </h2>
              <div className="w-24 h-[4px] bg-yellow-500 mb-8"></div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
              Si deseas una cotización, una visita técnica o más información sobre
              nuestros servicios, comunícate con nosotros. ¡Te responderemos lo antes posible!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                <div className="bg-yellow-500/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <FaPhoneAlt className="text-yellow-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase text-gray-800 mb-1">Teléfono</h4>
                  <p className="text-gray-600 text-lg">(+51) 924 435 338</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                <div className="bg-yellow-500/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <FaEnvelope className="text-yellow-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase text-gray-800 mb-1">Correo</h4>
                  <p className="text-gray-600 text-lg">informes@mymcontratistas.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                <div className="bg-yellow-500/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <FaMapMarkerAlt className="text-yellow-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase text-gray-800 mb-1">Dirección</h4>
                  <p className="text-gray-600 text-lg">Lima, Perú – Atendemos a todo Lima Metropolitana</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                <div className="bg-yellow-500/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <FaClock className="text-yellow-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase text-gray-800 mb-1">Horario</h4>
                  <p className="text-gray-600 text-lg">Lunes a Sábado: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white border rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-500 p-2 rounded-lg">
                <FaPaperPlane className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase">Envíanos un mensaje</h3>
            </div>
            <div className="w-20 h-[3px] bg-yellow-500 mb-8"></div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                />

                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                />
              </div>

              <input
                type="text"
                placeholder="Número de teléfono"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
              />

              <textarea
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows={5}
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3 group"
              >
                <span>Enviar mensaje</span>
                <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[500px] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.543563180875!2d-77.042793!3d-12.063198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c7f64f7f87%3A0x4d04f5b5b0da41da!2sLima%20Peru!5e0!3m2!1ses!2spe!4v0000000000"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </motion.section>
    </div>
  );
}
