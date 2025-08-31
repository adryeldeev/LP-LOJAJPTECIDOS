import React from 'react'
import mapaLocalizacao from '../../assets/Img/MapaFundoRemovido.png'
const Localizacao = () => {
  return (
   <div className='w-full py-10'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-80 max-w-6xl mx-auto px-6 bg-[#212529] rounded-lg py-5'>
      <div className='flex flex-col justify-center'>
      <h4 className='font-semibold text-white mb-2 transition-colors duration-300'>
      Atendemos Sua Região
      </h4>
      <span className='text-sm text-white '>Nossa loja está localizada em Fortaleza, atendendo toda a região com qualidade e confiança</span>

      </div>
      <img src={mapaLocalizacao} alt="" className='w-full max-w-sm rounded-2xl object-cover' />
    </div>

   </div>
  )
}

export default Localizacao