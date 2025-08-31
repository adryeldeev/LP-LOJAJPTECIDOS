import React from 'react'
import tempo from '../../assets/Img/hourglass.png'
import apertoDeMao from '../../assets/Img/aperto-de-mao.png'
import caixa from '../../assets/Img/caixa.png'

const Estatisticas = () => {
  return (

      <div className="w-full md:w-[70%] lg:w-[70%] mx-auto bg-white 
                 flex flex-col md:flex-row justify-between items-center gap-6 
                shadow-lg rounded-2xl px-8  z-20">
        <div className="flex flex-col items-center text-center">
          <img src={tempo} alt="" className="w-12" />
          <span className="mt-2 text-sm md:text-base">+20 anos de mercado</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src={apertoDeMao} alt="" className="w-12" />
          <span className="mt-2 text-sm md:text-base">+50 clientes satisfeitos</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src={caixa} alt="" className="w-12 " />
          <span className="mt-2 text-sm md:text-base">
            +1000.000m de <br /> tecidos entregues
          </span>
        </div>
      </div>
  )
}

export default Estatisticas