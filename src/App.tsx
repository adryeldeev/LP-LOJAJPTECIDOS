import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Estatisticas from "./Components/Estatisticas/Estatisticas"
import Sobre from "./Components/Sobre/Sobre"
import Servicos from "./Components/Servicos/Servicos"
import Especialista from "./Components/Especialista/Especialista"
import Depoimentos from "./Components/Depoimentos/Depoimentos"
import CTA from "./Components/CTA/CTA"
import Localizacao from "./Components/Localizacao/Localizacao"
import Footer from "./Components/Footer/Footer"
import PorQueEscolher from "./Components/PorqueEscolher/PorqueEscolher"

import { FaWhatsapp } from 'react-icons/fa'

function App() {
  return (
    <>
      <Nav/>

      <div className="relative md:pb-24">
        <Header/>

        <div className="mt-6 px-4 md:absolute md:bottom-0 md:left-1/2 md:z-20 md:flex md:w-full md:-translate-x-1/2 md:translate-y-1/2 md:justify-center md:px-4">
          <Estatisticas />
        </div>
      </div>

      <main className="flex flex-col">
        <Sobre />
        <Servicos/>
        <Especialista/>
        <Localizacao/>
        <PorQueEscolher/>
        <Depoimentos/>
        <CTA/>
      </main>
      {/* <Newlestter/> */}
      <Footer/>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5585985661823"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1ebe5a]"
        aria-label="Falar pelo WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  )
}

export default App
