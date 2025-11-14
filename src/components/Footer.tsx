import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/0c69b4a87932b693dccdb44bae659e925978ab29.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const numberTel = '+5585985661823';
  
  const footerLinks = {
    institucional: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Produtos', href: '#produtos' },
      { label: 'Benefícios', href: '#beneficios' },
      { label: 'Contato', href: '#contato' },
    ],
    produtos: [
      { label: 'Rolos de Tecido', href: '#produtos' },
      { label: 'Retalhos', href: '#produtos' },
      { label: 'Algodãozinho', href: '#produtos' },
      { label: 'Catálogo', href: '#produtos' },
    ],
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="JP Tecidos" className="h-12 mb-4" />
            <p className="text-gray-400 mb-4">
              Tradição e qualidade em tecidos há mais de 15 anos. 
              Seu parceiro de confiança.
            </p>
            <div className="flex space-x-4">
         
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-white mb-4">Institucional</h3>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-white mb-4">Produtos</h3>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-orange-500" size={18} />
                <span>Fortaleza, CE - Brasil</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="mr-2 flex-shrink-0 text-orange-500" size={18} />
                <a href={`tel:${numberTel}`} className="hover:text-orange-500 transition-colors">
                  (85) 98566-1823
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="mr-2 flex-shrink-0 text-orange-500" size={18} />
                <a href="mailto:jptecidos1@gmail.com" className="hover:text-orange-500 transition-colors">
                  jptecidos1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} JP Tecidos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
