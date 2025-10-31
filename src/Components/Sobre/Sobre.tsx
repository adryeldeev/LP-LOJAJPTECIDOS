
import imgSobre from '../../assets/Img/imgSobre.png'

const Sobre = () => {
  return (
    <div className='w-full  bg-[#F9F9F9]'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-6 md:px-40 pt-20 pb-10 gap-20'>
      <img src={imgSobre} alt="" className='w-full'/>
      <div className='flex flex-col text-left gap-5 md:gap-10'>
        <h2 className=' text-2xl font-semibold  mb-10'>Sobre Nós</h2>
        <span className='text-[#747474] w-30%'>A JP Tecidos é reconhecida em Fortaleza por fornecer jeans, retalhos e algodãozinho com qualidade e confiança. Mais do que entregar tecidos, ajudamos nossos clientes a transformar projetos em realidade, oferecendo praticidade, bom atendimento e soluções sob medida para confecções e ateliês.</span>
      </div>

      </div>

    </div>
  )
}

export default Sobre