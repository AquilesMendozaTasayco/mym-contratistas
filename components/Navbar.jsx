import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full font-[Montserrat]">

      {/* BARRA SUPERIOR BLANCA */}
      <div className="w-full bg-white py-5 px-6 md:px-16 flex items-center justify-between border-b border-gray-200">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-32 h-auto">
            <Image src="/logo.png" width={130} height={40} alt="M&M" />
          </div>
        </div>

        {/* INFORMACIÓN SUPERIOR */}
        <div className="hidden md:flex items-center gap-12 text-sm text-gray-800">

          <div className="flex flex-col leading-tight">
            <span className="text-xs text-gray-500">Llámanos</span>
            <span className="font-semibold">(+51) 900-000-000</span>
          </div>

          <div className="w-px bg-gray-300 h-10"></div>

          <div className="flex flex-col leading-tight">
            <span className="text-xs text-gray-500">Email</span>
            <span className="font-semibold">contacto@mym.com</span>
          </div>

          <div className="w-px bg-gray-300 h-10"></div>

          <div className="flex flex-col leading-tight">
            <span className="text-xs text-gray-500">Certificación</span>
            <span className="font-semibold">ISO 9001:2017</span>
          </div>
        </div>

        {/* BOTÓN COTIZAR */}
        <a
          href="https://wa.me/51900000000"
          target="_blank"
          className="hidden md:block bg-[#F5A623] hover:bg-[#e0941f] text-white px-6 py-3 font-semibold rounded-sm transition"
        >
          Solicitar Cotización
        </a>
      </div>

      {/* MENÚ OSCURO */}
      <nav className="w-full bg-[#1F232B] text-white py-4 px-6 md:px-16 flex items-center justify-between shadow">
        
        {/* MENÚ PRINCIPAL */}
        <ul className="flex gap-10 text-sm uppercase tracking-wide font-semibold">
          <li className="hover:text-yellow-500 transition"><Link href="/">Inicio</Link></li>
          <li className="hover:text-yellow-500 transition"><Link href="/nosotros">Nosotros</Link></li>
          <li className="hover:text-yellow-500 transition"><Link href="/servicios">Servicios</Link></li>
          <li className="hover:text-yellow-500 transition"><Link href="/galeria">Galeria</Link></li>
          <li className="hover:text-yellow-500 transition"><Link href="/contacto">Contacto</Link></li>
        </ul>

        {/* VACÍO, SIN LUPA — Eliminado */}
        <div></div>
      </nav>

    </header>
  );
}
