import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/0c69b4a87932b693dccdb44bae659e925978ab29.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const numberWhats = '5585985661823';
  const linkWhatsapp = `https://wa.me/${numberWhats}`;

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img src={logo} alt="JP Tecidos" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Faça seu Pedido
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-orange-500 py-3 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors mt-4 text-center"
            >
              Faça seu Pedido
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
