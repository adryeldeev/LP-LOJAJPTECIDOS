import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Estatisticas from "./Components/Estatisticas/Estatisticas"
import Sobre from "./Components/Sobre/Sobre"
import Servicos from "./Components/Servicos/Servicos"
import Especialista from "./Components/Especialista/Especialista"
import Depoimentos from "./Components/Depoimentos/Depoimentos"
import Localizacao from "./Components/Localizacao/Localizacao"
import Footer from "./Components/Footer/Footer"
import PorQueEscolher from "./Components/PorqueEscolher/PorqueEscolher"

function App() {
  return (
    <>
      <Nav/>

      <div className="relative md:pb-20">
        <Header/>

        <div className="absolute bottom-0 left-1/2 z-20 flex w-full -translate-x-1/2 translate-y-1/2 justify-center px-4">
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
      </main>
      {/* <Newlestter/> */}
      <Footer/>
    </>
  )
}

export default App
