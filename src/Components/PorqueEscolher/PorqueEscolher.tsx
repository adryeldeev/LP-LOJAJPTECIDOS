import React from "react";
import { FaCheck } from "react-icons/fa";
import tecidoImage from "../../assets/Img/imgSobre.png"; // substitua pelo caminho da sua imagem

const PorQueEscolher = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center gap-12">
      
      {/* Texto */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-black  mb-4">
          Por que escolher a JP Tecidos?
        </h2>
        <p className="text-gray-700 mb-6">
          Na hora de escolher rolos, malhas e algodãozinho de qualidade, é essencial contar com uma empresa que alia tradição, inovação e compromisso com a excelência. 
          Com anos de experiência no setor têxtil, a JP Tecidos se destaca pelo atendimento próximo e produtos que garantem durabilidade, conforto e beleza.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <FaCheck className="text-green-500 mt-1" />
            <span><strong>Variedade de produtos:</strong> rolos, malhas e algodãozinho para qualquer projeto</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="text-green-500 mt-1" />
            <span><strong>Qualidade garantida:</strong> tecidos resistentes, macios e duráveis</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="text-green-500 mt-1" />
            <span><strong>Atendimento especializado:</strong> ajudamos você a escolher o tecido perfeito</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="text-green-500 mt-1" />
            <span><strong>Entrega rápida e segura:</strong> recebimento dos produtos no prazo e com cuidado</span>
          </li>
        </ul>

        <div className="flex flex-wrap gap-4">
          <button className="cursor-pointer flex items-center gap-2 bg-[#f26522] hover:bg-[#d9531f] text-white text-sm font-medium px-5 py-3 rounded-full transition">
            Saiba mais
          </button>
          <button className="cursor-pointer flex items-center gap-2 bg-[#f26522] hover:bg-[#d9531f] text-white text-sm font-medium px-5 py-3 rounded-full transition">
            Faça um orçamento
          </button>
        </div>
      </div>

      {/* Imagem */}
      <div className="md:w-1/2">
        <img 
          src={tecidoImage} 
          alt="Loja JP Tecidos" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>

    </section>
  );
};

export default PorQueEscolher;
