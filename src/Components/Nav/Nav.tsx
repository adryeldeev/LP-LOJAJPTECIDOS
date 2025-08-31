import { useState } from "react";
import logoJPTecidos from '../../assets/Img/logoJPTecidos.png'
import { BsTelephone } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi"; // ícones hambúrguer e X

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-40 py-4 shadow-md bg-[#212529] relative">
      {/* Logo */}
      <img 
        src={logoJPTecidos} 
        alt="logo da loja" 
        className="h-12 w-auto" 
      />

      {/* Links - Desktop */}
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li className="hover:text-[#FC6E20] cursor-pointer no-underline"><a href='#inicio'>Início</a></li>
        <li className="hover:text-[#FC6E20] cursor-pointer no-underline"><a href='#produtos'>Produtos</a></li>
        <li className="hover:text-[#FC6E20] cursor-pointer no-underline"><a href='#sobre'>Sobre</a></li>
        <li className="hover:text-[#FC6E20] cursor-pointer no-underline"><a href='#contato'>Contato</a></li>
      </ul>

      {/* Botão contato - Desktop */}
      <div className="hidden md:flex items-center gap-2">
        <button className="flex cursor-pointer items-center gap-2 bg-[#FC6E20] text-white px-4 py-2 rounded-lg hover:bg-[#e55d15] transition">
          Entre em contato
          <BsTelephone className="text-white text-lg" />
        </button>
      </div>

      {/* Ícone hambúrguer - Mobile */}
      <button 
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#212529] flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <a href="#inicio" className="text-white hover:text-[#FC6E20]" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#produtos" className="text-white hover:text-[#FC6E20]" onClick={() => setMenuOpen(false)}>Produtos</a>
          <a href="#sobre" className="text-white hover:text-[#FC6E20]" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#contato" className="text-white hover:text-[#FC6E20]" onClick={() => setMenuOpen(false)}>Contato</a>

          <button className="flex cursor-pointer items-center gap-2 bg-[#FC6E20] text-white px-4 py-2 rounded-lg hover:bg-[#e55d15] transition">
            Entre em contato
            <BsTelephone className="text-white text-lg" />
          </button>
        </div>
      )}
    </nav>
  )
}

export default Nav;
