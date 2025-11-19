"use client";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contacto() {
  return (
    <div className="w-full font-[Montserrat] bg-white text-gray-900">

      {/* HERO SUPERIOR */}
      <section className="relative h-[55vh] w-full flex items-center justify-center">
        <Image
          src="/obre2.jpg"
          fill
          className="object-cover brightness-[0.35]"
          alt="Contacto M&M"
        />
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="relative text-white text-5xl md:text-6xl font-extrabold uppercase tracking-wide z-20 drop-shadow-lg">
          Contáctanos
        </h1>
      </section>

      {/* INFO DE CONTACTO */}
      <section className="py-20 px-10 md:px-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          {/* INFORMACIÓN */}
          <div>
            <h2 className="text-4xl font-extrabold uppercase mb-6">
              Estamos para ayudarte
            </h2>
            <div className="w-24 h-[4px] bg-yellow-500 mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Si deseas una cotización, una visita técnica o más información sobre
              nuestros servicios, comunícate con nosotros. ¡Te responderemos lo antes posible!
            </p>

            <div className="flex flex-col gap-6">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-yellow-500 w-7 h-7" />
                <div>
                  <h4 className="text-lg font-bold uppercase">Teléfono</h4>
                  <p>(+51) 900 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-yellow-500 w-7 h-7" />
                <div>
                  <h4 className="text-lg font-bold uppercase">Correo</h4>
                  <p>contacto@mym.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-yellow-500 w-7 h-7" />
                <div>
                  <h4 className="text-lg font-bold uppercase">Dirección</h4>
                  <p>Lima, Perú – Atendemos a todo Lima Metropolitana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-yellow-500 w-7 h-7" />
                <div>
                  <h4 className="text-lg font-bold uppercase">Horario</h4>
                  <p>Lunes a Sábado: 8:00 AM – 6:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* FORMULARIO */}
          <div className="bg-white border rounded-xl shadow-lg p-10">
            <h3 className="text-2xl font-extrabold uppercase mb-4">Envíanos un mensaje</h3>
            <div className="w-20 h-[3px] bg-yellow-500 mb-8"></div>

            <form className="flex flex-col gap-5">

              <input
                type="text"
                placeholder="Tu nombre completo"
                className="border p-4 rounded-md focus:outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="border p-4 rounded-md focus:outline-none focus:border-yellow-500"
              />

              <input
                type="text"
                placeholder="Número de teléfono"
                className="border p-4 rounded-md focus:outline-none focus:border-yellow-500"
              />

              <textarea
                placeholder="Cuéntanos cómo podemos ayudarte"
                rows={5}
                className="border p-4 rounded-md focus:outline-none focus:border-yellow-500"
              />

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md transition"
              >
                Enviar mensaje
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* MAPA GOOGLE */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.543563180875!2d-77.042793!3d-12.063198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c7f64f7f87%3A0x4d04f5b5b0da41da!2sLima%20Peru!5e0!3m2!1ses!2spe!4v0000000000"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}
