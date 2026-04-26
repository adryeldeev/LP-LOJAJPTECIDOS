import imgSobre from '../../assets/Img/imgSobre.png'

const Sobre = () => {
  return (
    <section id='sobre' className='page-section py-10 md:py-14'>
      <div className='section-container grid grid-cols-1 items-center gap-14 rounded-3xl bg-white p-8 md:grid-cols-2 md:p-14'>
        <img src={imgSobre} alt='' className='mx-auto w-full rounded-2xl object-cover' />
        <div className='flex flex-col gap-6 text-center md:text-left'>
          <h2 className='section-title text-[#111827]'>
            Sobre Nós
          </h2>
          <p className='section-text text-[#4b5563]'>
            A JP Tecidos não apenas fornece insumos; nós entregamos a base técnica para o sucesso da indústria têxtil em Fortaleza. Com uma curadoria rigorosa de jeans, retalhos e algodãozinho, atuamos como parceiros estratégicos de confecções e ateliês. Nosso compromisso é garantir que cada rolo entregue potencialize a eficiência da sua produção e a qualidade final de cada peça, transformando desafios técnicos em soluções sob medida.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sobre