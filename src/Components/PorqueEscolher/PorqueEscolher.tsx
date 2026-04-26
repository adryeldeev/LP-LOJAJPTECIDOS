const PorQueEscolher = () => {
  const pilares = [
    {
      percentual: '98%',
      titulo: 'de Pontualidade',
      descricao:
        'Garantia de que a produção do cliente não vai parar por falta de tecido.',
    },
    {
      percentual: '92%',
      titulo: 'de Fidelidade',
      descricao:
        'Clientes que confiam na curadoria da JP Tecidos ano após ano.',
    },
    {
      percentual: '83%',
      titulo: 'de Variedade',
      descricao:
        'Um catálogo pensado para atender desde o jeans básico até tecidos finos.',
    },
    {
      percentual: '97%',
      titulo: 'de Aprovação',
      descricao:
        'Qualidade técnica comprovada por quem entende de costura e confecção.',
    },
  ]

  return (
    <section id='pilares' className='page-section'>
      <div className='section-container rounded-3xl bg-white p-8 md:p-14'>
        <h3 className='section-title mx-auto max-w-4xl text-center text-[#111827]'>
          Por que mais de 1200 empresas confiaram em negócios com a JP Tecidos?
        </h3>

        <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4'>
          {pilares.map((pilar) => (
            <article key={pilar.titulo} className='rounded-2xl border border-[#f0f0f0] bg-white p-8 hover:shadow-sm transition hover:-translate-y-1'>
              <p className='text-6xl font-light leading-none text-[#FC6E20]'>
                {pilar.percentual}
              </p>
              <p className='mt-2 text-[20px] font-semibold leading-tight text-[#111827] md:text-[22px]'>
                {pilar.titulo}
              </p>
              <p className='mt-3 text-base leading-relaxed text-[#6b7280]'>
                {pilar.descricao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PorQueEscolher;
