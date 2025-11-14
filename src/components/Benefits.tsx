import { DollarSign, Truck, Shield, Clock, Star, Headphones } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Preços Competitivos',
      description: 'Os melhores preços do mercado com condições especiais para grandes volumes.',
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Logística eficiente com entrega em todo o Brasil.',
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Todos os produtos passam por rigoroso controle de qualidade.',
    },
    {
      icon: Clock,
      title: 'Atendimento Ágil',
      description: 'Resposta rápida e eficiente para todas as suas necessidades.',
    },
    {
      icon: Star,
      title: 'Produtos Premium',
      description: 'Trabalhamos apenas com marcas e fornecedores renomados.',
    },
    {
      icon: Headphones,
      title: 'Suporte Dedicado',
      description: 'Equipe especializada pronta para te ajudar.',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase tracking-wider">
            Por que Escolher a JP Tecidos
          </span>
          <h2 className="text-4xl md:text-5xl text-white mt-4 mb-6">
            Benefícios Exclusivos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Oferecemos muito mais do que tecidos de qualidade. 
            Veja tudo o que você ganha ao trabalhar conosco.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-orange-500 transition-all duration-300 group"
              >
                <div className="bg-orange-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl text-orange-500 mb-2">15+</div>
            <div className="text-gray-400">Anos no Mercado</div>
          </div>
          <div>
            <div className="text-4xl text-orange-500 mb-2">500+</div>
            <div className="text-gray-400">Clientes Ativos</div>
          </div>
          <div>
            <div className="text-4xl text-orange-500 mb-2">10mil+</div>
            <div className="text-gray-400">Produtos Vendidos</div>
          </div>
          <div>
            <div className="text-4xl text-orange-500 mb-2">100%</div>
            <div className="text-gray-400">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
}
