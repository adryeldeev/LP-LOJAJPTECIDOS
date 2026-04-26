import especialistaImage from '../../assets/Img/especialista.svg'

const itens = [
  {
    numero: '01',
    titulo: 'Curadoria de Materiais:',
    descricao:
      'Não entregamos apenas rolos de tecido, mas a composição exata para garantir o caimento e a durabilidade que sua marca exige.',
  },
  {
    numero: '02',
    titulo: 'Inteligência de Produção:',
    descricao:
      'Auxiliamos na escolha do tecido certo para cada tipo de maquinário e modelagem, evitando desperdícios e otimizando seu tempo de corte.',
  },
]

const Especialista = () => {
  return (
    <section id='especialista' className='page-section'>
      <div className='section-container grid grid-cols-1 items-center gap-14 rounded-3xl bg-white p-8 md:p-14 lg:grid-cols-[1.05fr_0.95fr]'>
        <div>
          <h2 className='section-title text-[#101828]'>
            Sabemos selecionar a matéria-prima ideal para a sua produção
          </h2>

          <div className='mt-8 space-y-8'>
            {itens.map((item) => (
              <div key={item.numero} className='flex items-start gap-4'>
                <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#FC6E20] text-xl font-light text-[#FC6E20]'>
                  {item.numero}
                </div>

                <div>
                  <h3 className='section-subtitle text-[#101828]'>
                    {item.titulo}
                  </h3>
                  <p className='section-text mt-2 max-w-xl text-[#4b5563]'>
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center lg:justify-end'>
          <img
            src={especialistaImage}
            alt='Especialistas avaliando materiais para produção'
            className='w-full max-w-[520px] rounded-[3rem] object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Especialista