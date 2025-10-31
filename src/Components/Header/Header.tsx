import { FaWhatsapp } from "react-icons/fa";
import tecidoImg from '../../assets/Img/image1.png'
import vector from '../../assets/Img/Vector1.png'


const Header = () => {
  const numero = "+5585985661823"; // coloque o número com DDI + DDD, ex: 55 11 91234-5678
  const mensagem = "Olá! Gostaria de mais informações."; // mensagem inicial

  const linkWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <header className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full relative">
        
        {/* Lado esquerdo */}
        <div className="relative flex items-center justify-center ">
          {/* Vector de fundo */}
          <img 
            src={vector} 
            alt="Vector decorativo" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Texto por cima */}
          <div className="relative z-10 flex flex-col justify-center items-start px-6 md:px-12 py-12 text-white">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Tecidos Jeans de Qualidade <br /> para Sua Confecção
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-300 max-w-md">
              Há mais de 20 anos fornecendo jeans, retalhos e algodãozinho em Fortaleza.
            </p>
            <a href={linkWhatsapp} className="cursor-pointer mt-6 flex items-center gap-2 bg-[#FC6E20] text-white font-medium px-6 py-3 rounded-full hover:bg-[#e55d15] transition">
              Peça um orçamento
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Lado direito */}
        <div className="flex justify-center items-center p-6">
          <img 
            src={tecidoImg} 
            alt="Rolos de tecido jeans" 
            className="w-full max-w-sm rounded-2xl object-cover"
          />
        </div>
      </div>

     
    </header>
  )
}

export default Header
