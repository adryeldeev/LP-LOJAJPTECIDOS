const Depoimentos = () => {
  const depoimentos = [
    {
      nome: 'Maria S',
      descricao: '“Excelente qualidade e ótimo atendimento. Sempre compro aqui.”',
    },
    {
      nome: 'João P.',
      descricao: '“Ótimo atendimento e produtos de qualidade. Recomendo!”',
    },
    {
      nome: 'Carla R.',
      descricao: '“Me ajudou muito a encontrar o que eu precisava.”',
    },
  ]

  return (
    <section id="depoimentos" className="page-section">
      <div className="section-container">
        <h2 className="section-title mb-8 text-center text-[#111827]">
          O que nossos clientes dizem
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {depoimentos.map((item, index) => (
            <article
              key={index}
              className="rounded-3xl border border-[#f0f0f0] bg-white p-10 text-center transition hover:-translate-y-1"
            >
              <p className="mb-6 text-5xl font-light leading-none text-[#FC6E20]">&ldquo;</p>
              <p className="text-[17px] leading-loose text-[#4b5563] italic">
                {item.descricao.replace(/"/g, '')}
              </p>
              <h3 className="mt-6 text-[16px] font-medium tracking-wide text-[#111827]">
                {item.nome}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
