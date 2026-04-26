import { FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contato" className="mt-0 bg-[#0f172a] py-16 text-gray-300 flex flex-col items-center">
      <div className="section-container grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white">JP Tecidos</h2>
          <p className="mt-2 text-sm text-gray-400">
            Tecidos de qualidade para moda, artesanato e decoração.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white">Contato</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-300 inline-flex flex-col items-center md:items-start">
            <li className="flex items-center gap-2">
              <FaPhone /> (85) 98566-1823
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Rua Raimundo Neri, 567 - Parque São José, Fortaleza - CE, 60730-220
            </li>
            <li className="flex items-center gap-2">
              <FaClock /> Seg - Sex: 8h às 17h
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white">Siga-nos</h3>
          <div className="mt-2 flex gap-4 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5585985661823"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="section-container mt-8 border-t border-gray-700 px-4 pt-4 text-center text-sm text-gray-400 md:px-6">
        © 2025 JP Tecidos. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
