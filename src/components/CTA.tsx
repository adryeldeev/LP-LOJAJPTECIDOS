import { Phone, Mail, MessageCircle } from 'lucide-react';
import logo from '../assets/0c69b4a87932b693dccdb44bae659e925978ab29.png';

export function CTA() {
  const numberTel = '+5585985661823';
  const numberWhats = '5585985661823';
  const linkWhatsapp = `https://wa.me/${numberWhats}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')}`;
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #FF8C42 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 md:p-16 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="JP Tecidos" className="h-16" />
          </div>

          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Pronto para Fazer seu Pedido?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Entre em contato conosco e descubra as melhores ofertas em tecidos 
            de qualidade para seu negócio.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone */}
            <a
              href={`tel:${numberTel}`}
              className="bg-white text-gray-900 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Phone className="mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-sm text-gray-600 mb-1">Ligue agora</div>
              <div className="text-lg">(85) 985661823</div>
            </a>

            {/* WhatsApp */}
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <MessageCircle className="mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-sm text-gray-600 mb-1">WhatsApp</div>
              <div className="text-lg">(85)985661823</div>
            </a>

            {/* Email */}
            <a
              href="mailto:contato@jptecidos.com.br"
              className="bg-white text-gray-900 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Mail className="mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-sm text-gray-600 mb-1">E-mail</div>
              <div className="text-lg">jptecidos1@gmail.com</div>
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="mt-12">
            <a
              href="#produtos"
              className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ver Catálogo Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
