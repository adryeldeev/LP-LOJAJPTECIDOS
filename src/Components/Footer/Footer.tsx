import React from "react";
import axios from "axios";
import {  FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const numero = "+5585985661823"; // coloque o número com DDI + DDD, ex: 55 11 91234-5678
  const mensagem = "Olá! Gostaria de mais informações."; // mensagem inicial

  const linkWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  const [email, setEmail] = React.useState("");
  const [error , setError] = React.useState<string | null>(null);
  const SubmitEmail = async () => {
    // Lógica para enviar o e-mail
    if(email.trim() === "") {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
    try {
      const response = await axios.post('/api/newsletter', { email })
      if (response.status === 200) {
        alert("E-mail cadastrado com sucesso!");
        setEmail("");
        setError(null); // Limpa qualquer erro anterior
      }else{
        setError('Ocorreu um erro ao cadastrar o e-mail. Tente novamente.');
      }

    } catch (error){
      console.error('Erro:', error);
      setError('Ocorreu um erro no servidor. Tente novamente.');
    }
  }


  return (
    <footer className="bg-[#212529] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Identidade */}
        <div className="flex flex-col">
          <h2 className="text-white text-2xl font-bold">JP Tecidos</h2>
          <p className="text-sm mt-2">
            Tecidos de qualidade para moda, artesanato e decoração.
          </p>
          <div className="flex flex-col  gap-10 pt-20 ">
        
        {/* Texto da esquerda */}
        <div className="flex flex-col justify-center text-white">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <span className="text-sm text-gray-300">
            Informe seu e-mail para receber todas as novidades
          </span>
        </div>

        {/* Input e botão */}
        <div className="flex gap-3 items-center">
          <input
            type="email"
            placeholder="Insira seu e-mail"
            className="flex-1 bg-white rounded-full px-5 py-3 focus:outline-none text-sm text-gray-700 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="cursor-pointer flex items-center gap-2 bg-[#f26522] hover:bg-[#d9531f] text-white text-sm font-medium px-5 py-3 rounded-full transition" onClick={() => SubmitEmail()}>
            Enviar <FaPaperPlane size={14} />
          </button>
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>
        </div>
        
        {/* Contato */}
        <div>
          <h3 className="text-white text-lg font-medium">Contato</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> (85) 98566-1823
            </li>
            
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Rua Raimundo neri, 567 - Parque são josé, Fortaleza - CE, 60730-220
            </li>
            <li className="flex items-center gap-2">
              <FaClock /> Seg - Sex: 8h às 17h
            </li>
          </ul>
        </div>
        
        {/* Redes Sociais */}
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-medium">Siga-nos</h3>
          <div className="flex gap-4 mt-2 text-2xl">
            
           
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaWhatsapp />
            </a>
           
          </div>
         
        </div>
      
      </div>

      {/* Linha final */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 JP Tecidos. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
