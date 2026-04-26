import retalhos from '../../assets/Img/retalhos.png'
import rolos from '../../assets/Img/rolos.png'
import algodaozinho from '../../assets/Img/algodaozinho.png'

const Servicos = () => {
  const servicos = [
    {
      img: retalhos,
      titulo: 'Retalhos',
      descricao: 'Curadoria de retalhos premium, ideais para prototipagem de coleções ou produções artesanais de alto valor agregado.',
    },
    {
      img: rolos,
      titulo: 'Rolos',
      descricao: 'Fornecimento em larga escala para produções contínuas. Tecidos com padronização técnica, prontos para otimizar o seu fluxo de corte e costura',
    },
    {
      img: algodaozinho,
      titulo: 'Algodãozinho',
      descricao: 'A base essencial para o desenvolvimento de moldagens e acabamentos internos que exigem toque suave e respirabilidade.',
    },
  ]

  return (
    <section id="produtos" className="page-section">
      <div className="section-container">
        <h2 className="section-title mb-12 text-center text-[#111827]">
          Nossos Produtos
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ">
          {servicos.map((item, index) => (
            <article key={index} className="overflow-hidden rounded-3xl border border-[#f0f0f0] bg-white hover:shadow-sm transition hover:-translate-y-1">
              <img src={item.img} alt={item.titulo} className="h-72 w-full object-cover" />
              <div className="p-8">
                <h3 className="section-subtitle text-[#111827]">{item.titulo}</h3>
                <p className="section-text mt-2 text-[#4b5563]">{item.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos
