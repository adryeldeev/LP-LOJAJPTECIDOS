import { Wind, ShieldCheck, Droplets, Scissors } from "lucide-react"

export default function BeneficiosTecido() {
  const beneficios = [
    {
      icon: <Wind className="w-8 h-8 text-sky-500" />,
      titulo: "Conforto e Respiração",
      descricao:
        "Com 86% de algodão, o tecido permite que a pele respire, proporcionando conforto mesmo em longos períodos de uso.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      titulo: "Durabilidade e Resistência",
      descricao:
        "A mistura de poliéster e algodão garante um jeans resistente, que mantém a forma e a cor mesmo após várias lavagens.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-400" />,
      titulo: "Fácil de Lavar",
      descricao:
        "Acabamento enzimado e toque suave que facilita a manutenção — não desbota e seca rapidamente.",
    },
    {
      icon: <Scissors className="w-8 h-8 text-amber-500" />,
      titulo: "Caimento e Elasticidade",
      descricao:
        "O 1% de elastano oferece o toque de flexibilidade ideal, dando ótimo caimento em calças, jaquetas e saias.",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Benefícios do Nosso Tecido
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Cada metro do nosso tecido foi pensado para oferecer <strong>qualidade</strong>, <strong>conforto</strong> e <strong>durabilidade</strong>.
        O resultado? Peças com acabamento impecável e toque premium.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {beneficios.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{item.titulo}</h3>
            <p className="text-gray-600 text-sm">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
