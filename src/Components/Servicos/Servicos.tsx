import React from 'react'
import retalhos from '../../assets/Img/retalhos.png'
import rolos from '../../assets/Img/rolos.png'
import algodaozinho from '../../assets/Img/algodaozinho.png'

const Servicos = () => {
  const servicos = [
    {
      img: retalhos,
      titulo: "Retalhos",
      descricao: "Variedade de retalhos jeans para pequenas criações."
    },
    {
      img: rolos,
      titulo: "Rolos",
      descricao: "Rolos de jeans direto da fábrica, vendidos por metro ou kg."
    },
    {
      img: algodaozinho,
      titulo: "Algodãozinho",
      descricao: "Tecidos leves e confortáveis, perfeitos para acabamentos."
    }
  ]

  return (
    <div className="w-full bg-[#212529] py-10">
      <h2 className="text-white text-2xl font-semibold text-center mb-10">
        Nossos Serviços
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-18 max-w-6xl mx-auto px-6">
        {servicos.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <img src={item.img} alt={item.titulo} className="w-full h-66 object-cover" />

            <div className="absolute -bottom-8 left-10 flex bg-white px-4 py-3 items-start w-[90%] shadow-lg border-l-4 border-orange-500">
  <div className="flex flex-col">
    <h4 className="font-semibold">{item.titulo}</h4>
    <span className="text-sm text-gray-700">{item.descricao}</span>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicos
