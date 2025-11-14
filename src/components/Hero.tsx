import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const numberWhats = '5585985661823';
  const linkWhatsapp = `https://wa.me/${numberWhats}?text=${encodeURIComponent('Olá! Gostaria de mais informações.')}`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761682719790-4e0b38ed5beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjByb2xscyUyMHRleHRpbGV8ZW58MXx8fHwxNzYzMDg3MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tecidos"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-block text-orange-500 uppercase tracking-wider mb-4">
            Qualidade Premium
          </span>
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Tecidos de{' '}
            <span className="text-orange-500">Qualidade</span>{' '}
            para seu Negócio
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Rolos, retalhos e algodãozinho com os melhores preços do mercado. 
            Sua confecção merece o melhor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors group"
            >
              Ver Produtos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href={linkWhatsapp}
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
