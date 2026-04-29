import { FaWhatsapp } from 'react-icons/fa'

const CTA = () => {
  return (
    <section className='page-section py-10 md:py-14 '>
      <div className='section-container rounded-3xl bg-[#0f172a] px-8 py-14 text-center md:px-16 md:py-20'>
        <p className='text-[13px] font-medium uppercase tracking-widest text-[#FC6E20]'>
          Consultoria sem compromisso
        </p>

        <h2 className='section-title mx-auto mt-4 max-w-3xl text-white'>
          Não sabe qual tecido é o certo para a sua produção?
        </h2>

        <p className='section-text mx-auto mt-6 max-w-2xl text-gray-300'>
          Nossa equipe tem mais de 20 anos de experiência no mercado têxtil. Uma conversa de 10 minutos pode
          evitar semanas de retrabalho — e nós sabemos exatamente o que sua confecção precisa.
        </p>

        <a
          href={(window as { WA_LINK?: string }).WA_LINK}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-10 inline-flex items-center gap-3 rounded-full bg-[#FC6E20] px-8 py-4 text-[16px] font-medium text-white transition hover:bg-[#e55d15]'
        >
          <FaWhatsapp className='text-2xl' />
          Falar com um especialista
        </a>
      </div>
    </section>
  )
}

export default CTA
