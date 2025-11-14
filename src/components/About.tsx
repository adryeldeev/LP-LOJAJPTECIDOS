import { Award, TrendingUp, Users, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '15+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '500+' },
    { icon: TrendingUp, label: 'Produtos Vendidos', value: '10mil+' },
    { icon: Heart, label: 'Avaliação', value: '5.0' },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-500/20 rounded-lg blur-xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwaW5kdXN0cnklMjB3YXJlaG91c2V8ZW58MXx8fHwxNzYzMTM0MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="JP Tecidos warehouse"
              className="relative rounded-lg shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-orange-500 uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl text-white mt-4 mb-6">
              Tradição e Qualidade em Tecidos
            </h2>
            <p className="text-gray-300 mb-6">
              A JP Tecidos é referência no mercado de tecidos há mais de 15 anos. 
              Oferecemos uma ampla variedade de produtos com qualidade superior 
              e preços competitivos.
            </p>
            <p className="text-gray-300 mb-8">
              Nossa missão é fornecer os melhores tecidos para confecções, 
              artesãos e indústrias, garantindo satisfação e excelência em 
              cada produto entregue.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors"
                  >
                    <Icon className="text-orange-500 mb-3" size={32} />
                    <div className="text-3xl text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
