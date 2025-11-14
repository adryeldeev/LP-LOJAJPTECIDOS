import { Package, Scissors, Cloud } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';


export function Products() {
  const numberWhats = '5585985661823';
  const linkWhatsapp = `https://wa.me/${numberWhats}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos.')}`;

  const products = [
    {
      icon: Package,
      title: 'Rolos de Tecido',
      description: 'Rolos completos de diversos tipos de tecidos com as melhores condições do mercado.',
      features: [
        'Jeans premium',
        'Algodão 100%',
        'Malhas diversas',
        'Tecidos especiais',
      ],
      image: 'https://images.unsplash.com/photo-1761682719790-4e0b38ed5beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjByb2xscyUyMHRleHRpbGV8ZW58MXx8fHwxNzYzMDg3MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Scissors,
      title: 'Retalhos',
      description: 'Retalhos de qualidade para artesanato, patchwork e projetos diversos.',
      features: [
        'Diversos tamanhos',
        'Cores variadas',
        'Ótimo custo-benefício',
        'Qualidade garantida',
      ],
      image: 'https://images.unsplash.com/photo-1731275668160-f18f97c6faac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZhYnJpYyUyMHRleHR1cmV8ZW58MXx8fHwxNzYzMTM0MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Cloud,
      title: 'Algodãozinho',
      description: 'Algodãozinho macio e versátil para enchimentos e aplicações diversas.',
      features: [
        'Alta maciez',
        'Hipoalergênico',
        'Diversas gramaturas',
        'Uso versátil',
      ],
      image: 'https://images.unsplash.com/photo-1647418426445-78d256171093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBmYWJyaWMlMjBtYXRlcmlhbHxlbnwxfHx8fDE3NjMwOTEyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase tracking-wider">
            Nossos Produtos
          </span>
          <h2 className="text-4xl md:text-5xl text-white mt-4 mb-6">
            Ampla Variedade de Tecidos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com os melhores produtos do mercado, sempre com qualidade 
            garantida e preços competitivos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="text-orange-500" size={40} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-3">{product.title}</h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={linkWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-orange-500 transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
