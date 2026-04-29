import mapaGlobal from '../../assets/Img/mapaGlobal.png'

const Localizacao = () => {
  return (
    <section id='localizacao' className='page-section'>
      <div className='section-container relative overflow-hidden rounded-3xl bg-[#0d1733]'>
        <div
          className='absolute inset-0 bg-center bg-cover opacity-15'
          style={{ backgroundImage: `url(${mapaGlobal})` }}
        />

        <div className='relative z-10 flex flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 md:py-12'>
          <div className='w-full text-center text-white md:text-left'>
            <h2 className='section-title mx-auto max-w-4xl text-white md:mx-0'>
              A JP Tecidos já ajudou mais de 1200 fabricantes e marcas em todo o Ceará a tomar a melhor decisão têxtil.
            </h2>
            <div className='mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10'>
              <p className='section-text text-gray-100 md:max-w-2xl'>
                Está com dificuldades para tomar uma decisão?
                <br />
                Ligue para (85) 98566-1823. Nossos especialistas terão prazer em ajudá-lo gratuitamente.
              </p>

              <a
                href={(window as { WA_LINK?: string }).WA_LINK}
                target='_blank'
                rel='noopener noreferrer'
                className='mx-auto inline-flex w-fit items-center justify-center rounded-full bg-[#ff6a1a] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#ff7e38] md:mx-0 md:text-base'
              >
                Falar com um especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Localizacao