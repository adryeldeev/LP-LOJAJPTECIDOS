import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const BotaoWhatsapp = () => {
  const numero = "5599999999999"; // coloque o número com DDI + DDD, ex: 55 11 91234-5678
  const mensagem = "Olá! Gostaria de mais informações."; // mensagem inicial

  const linkWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <a
      href={linkWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out"
    >
      <FaWhatsapp size={24} />
      Fale Conosco
    </a>
  );
};

export default BotaoWhatsapp;
