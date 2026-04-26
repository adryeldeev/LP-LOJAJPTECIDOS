import { useState } from "react";
import logoJPTecidos from '../../assets/Img/logoJPTecidos.png'
import { BsTelephone } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi"; // ícones hambúrguer e X

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0f172a] flex flex-col items-center">
      <div className="section-container relative flex items-center justify-between px-4 py-5 md:px-8">
        <img
          src={logoJPTecidos}
          alt="logo da loja"
          className="h-11 w-auto"
        />

        <ul className="hidden md:flex flex-1 justify-center gap-7 text-[14px] font-normal tracking-wide uppercase text-gray-300">
          <li><a className="transition hover:text-[#FC6E20]" href='#inicio'>Início</a></li>
          <li><a className="transition hover:text-[#FC6E20]" href='#sobre'>Sobre</a></li>
          <li><a className="transition hover:text-[#FC6E20]" href='#produtos'>Produtos</a></li>
          <li><a className="transition hover:text-[#FC6E20]" href='#especialista'>Especialista</a></li>
          <li><a className="transition hover:text-[#FC6E20]" href='#localizacao'>Localização</a></li>
          <li><a className="transition hover:text-[#FC6E20]" href='#pilares'>Pilares</a></li>
          <li><a className="transition hover:text-[#FC6E20]" href='#depoimentos'>Depoimentos</a></li>
        </ul>

        <a href="#contato" className="hidden md:flex items-center gap-2 rounded-full bg-[#FC6E20] px-4 py-2 text-white transition hover:bg-[#e55d15]">
          Contato
          <BsTelephone className="text-white text-lg" />
        </a>

        <button
          className="md:hidden cursor-pointer text-3xl text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {menuOpen && (
          <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-2xl border border-gray-700 bg-[#0f172a] p-4 shadow-lg md:hidden">
            <div className="flex flex-col items-start gap-4 text-gray-300">
              <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
              <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
              <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
              <a href="#especialista" onClick={() => setMenuOpen(false)}>Especialista</a>
              <a href="#localizacao" onClick={() => setMenuOpen(false)}>Localização</a>
              <a href="#pilares" onClick={() => setMenuOpen(false)}>Pilares</a>
              <a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a>
              <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>

              <a href="#contato" className="mt-1 flex items-center gap-2 rounded-full bg-[#FC6E20] px-4 py-2 text-white" onClick={() => setMenuOpen(false)}>
                Entre em contato
                <BsTelephone className="text-white text-lg" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav;
