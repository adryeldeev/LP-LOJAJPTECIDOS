import tempo from '../../assets/Img/hourglass.png'
import apertoDeMao from '../../assets/Img/aperto-de-mao.png'
import caixa from '../../assets/Img/caixa.png'

const Estatisticas = () => {
  return (
    <div className="section-container w-full rounded-3xl border border-[#f0f0f0] bg-white px-8 py-10 shadow-none md:px-14">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        <div className="flex flex-col items-center text-center">
          <img src={tempo} alt="" className="w-12 opacity-80" />
          <span className="mt-4 text-[15px] tracking-wide text-[#374151]">+20 anos de mercado</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src={apertoDeMao} alt="" className="w-12 opacity-80" />
          <span className="mt-4 text-[15px] tracking-wide text-[#374151]">+50 clientes satisfeitos</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src={caixa} alt="" className="w-12 opacity-80" />
          <span className="mt-4 text-[15px] tracking-wide text-[#374151]">
            +1.000.000m de tecidos entregues
          </span>
        </div>
      </div>
    </div>
  )
}

export default Estatisticas