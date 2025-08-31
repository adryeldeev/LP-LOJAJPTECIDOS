import React from 'react';
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="w-full bg-[#3f4346] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-42 py-12">
        
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
          />
          <button className="cursor-pointer flex items-center gap-2 bg-[#f26522] hover:bg-[#d9531f] text-white text-sm font-medium px-5 py-3 rounded-full transition">
            Enviar <FaPaperPlane size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
