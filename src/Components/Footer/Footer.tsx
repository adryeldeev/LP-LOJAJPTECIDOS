import React from "react";
import { FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Identidade */}
        <div>
          <h2 className="text-white text-2xl font-bold">JP Tecidos</h2>
          <p className="text-sm mt-2">
            Tecidos de qualidade para moda, artesanato e decoração.
          </p>
        </div>
        
        {/* Contato */}
        <div>
          <h3 className="text-white text-lg font-medium">Contato</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> (85) 99999-9999
            </li>
            
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Rua Raimundo neri, 567 - Parque são josé, Fortaleza - CE, 60730-220
            </li>
            <li className="flex items-center gap-2">
              <FaClock /> Seg - Sex: 8h às 17h
            </li>
          </ul>
        </div>
        
        {/* Redes Sociais */}
        <div>
          <h3 className="text-white text-lg font-medium">Siga-nos</h3>
          <div className="flex gap-4 mt-2 text-2xl">
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Linha final */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 JP Tecidos. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
