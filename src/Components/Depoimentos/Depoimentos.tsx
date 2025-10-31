import homemDeponimento from '../../assets/Img/homem-depoimento1.jpg';
import homemDeponimento2 from '../../assets/Img/homem-depoimento2.jpg';
import mulherDeponimento from '../../assets/Img/mulher-depoimento.jpg'; 

const Depoimentos = () => {
  const depoimentos  = [
    {
      nome: "Carlos S.",
      descricao: "“Excelente qualidade e ótimo atendimento. Sempre compro aqui.”",
      imagem: homemDeponimento
    },
    {
      nome: "João P.",
      descricao: "“Excelente qualidade e ótimo atendimento. Sempre compro aqui.”",
      imagem: homemDeponimento2
    },
    {
      nome: "Carla R.",
      descricao: "“Excelente qualidade e ótimo atendimento. Sempre compro aqui.”",
      imagem: mulherDeponimento
    },
  ]

  return (
    <div className="w-full bg-[#F9F9F9] py-10">
      <h2 className="text-center text-black text-lg font-semibold mb-8">
        O que nossos clientes dizem
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {depoimentos.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#212529] p-6 rounded-lg transition-all duration-300 hover:bg-orange-500 hover:text-white cursor-pointer"
          >
            {/* Círculo de avatar */}
            <img className="w-16 h-16 bg-gray-300 rounded-full mb-4 " src={item.imagem} />

            {/* Nome */}
            <h4 className="font-semibold text-white mb-2 transition-colors duration-300">
              {item.nome}
            </h4>

            {/* Descrição */}
            <span className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
              {item.descricao}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Depoimentos
