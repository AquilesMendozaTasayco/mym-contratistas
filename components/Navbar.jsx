"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full font-[Montserrat]"
    >
      <div className="w-full bg-white py-5 px-6 md:px-16 flex items-center justify-between border-b border-gray-200">
        
        <div className="flex items-center gap-3">
          <div className="w-32 h-auto">
            <Image src="/logo.png" width={130} height={40} alt="M&M" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-12 text-sm text-gray-800">
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-gray-500">Llámanos</span>
            <span className="font-semibold">(+51) 974-664-904</span>
          </div>

          <div className="w-px bg-gray-300 h-10"></div>

          <div className="flex flex-col leading-tight">
            <span className="text-xs text-gray-500">Email</span>
            <span className="font-semibold">informes@mymcontratistas.com</span>
          </div>

          <div className="w-px bg-gray-300 h-10"></div>

          <div className="flex flex-col leading-tight max-w-[260px]">
            <span className="text-xs text-gray-500">Dirección</span>
            <span className="font-semibold leading-snug">
              Calle Tegucigalpa N° 118  
              Urb. Santa Patricia – La Molina – Lima
            </span>
          </div>
        </div>

        <a
          href="https://wa.me/51924435338"
          target="_blank"
          className="hidden md:block bg-[#F5A623] hover:bg-[#e0941f] text-white px-6 py-3 font-semibold rounded-sm transition"
        >
          Solicitar Cotización
        </a>

        <button
          className="block md:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className="w-full bg-[#1F232B] text-white py-4 px-6 md:px-16 flex items-center justify-between shadow">

        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-wide font-semibold">
          <li className="hover:text-yellow-500 transition"><Link href="/">Inicio</Link></li>
          <li className="hover:text-yellow-500 transition"><Link href="/nosotros">Nosotros</Link></li>
          <li className="hover:text-yellow-500 transition"><Link href="/servicios">Servicios</Link></li>
          <li className="hover:text-yellow-500 transition"><Link href="/galeria">Galería</Link></li>
          <li className="hover:text-yellow-500 transition"><Link href="/contacto">Contacto</Link></li>
        </ul>

        <div></div>
      </nav>

      {open && (
        <div className="md:hidden bg-[#1F232B] text-white px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-wide font-semibold shadow-lg">
          <a href="/" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Inicio</a>
          <a href="/nosotros" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Nosotros</a>
          <a href="/servicios" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Servicios</a>
          <a href="/galeria" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Galería</a>
          <a href="/contacto" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Contacto</a>

          <a
            href="https://wa.me/51924435338"
            target="_blank"
            className="mt-4 bg-[#F5A623] hover:bg-[#e0941f] text-white py-3 text-center font-semibold rounded-sm transition"
          >
            Solicitar Cotización
          </a>
        </div>
      )}
    </motion.header>
  );
}
