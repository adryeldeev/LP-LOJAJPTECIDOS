import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Estatisticas from "./Components/Estatisticas/Estatisticas"
import Sobre from "./Components/Sobre/Sobre"
import Servicos from "./Components/Servicos/Servicos"
import Depoimentos from "./Components/Depoimentos/Depoimentos"
import Localizacao from "./Components/Localizacao/Localizacao"
import Newlestter from "./Components/Newlestter/Newlestter"
import Footer from "./Components/Footer/Footer"
import PorQueEscolher from "./Components/PorqueEscolher/PorqueEscolher"

function App() {
  return (
    <>
      <Nav/>

      {/* Container relativo para sobreposição */}
      <div className="relative">
        <Header/>

        {/* Estatísticas absolutas em cima do Header */}
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full flex justify-center 
                md:absolute md:left-1/2 md:-bottom-10 md:transform md:-translate-x-1/2
                relative md:relative">
          <Estatisticas />
        </div>
      </div>

      <Sobre/>
      <Servicos/>
      <Depoimentos/>
      <Localizacao/>
      <PorQueEscolher/>
      <Newlestter/>
      <Footer/>
    </>
  )
}

export default App
