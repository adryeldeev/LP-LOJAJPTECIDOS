import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Estatisticas from "./Components/Estatisticas/Estatisticas"
import Sobre from "./Components/Sobre/Sobre"
import Servicos from "./Components/Servicos/Servicos"
import Depoimentos from "./Components/Depoimentos/Depoimentos"
import Localizacao from "./Components/Localizacao/Localizacao"
import Footer from "./Components/Footer/Footer"
import PorQueEscolher from "./Components/PorqueEscolher/PorqueEscolher"
import BotaoWhatsapp from "./Components/BotaoWhatsapp/BotaoWhtasapp"
import Beneficios from "./Components/Beneficios/Beneficios"

function App() {
  return (
    <>
      <Nav/>

      <div className="relative">
        <Header/>

        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full flex justify-center 
                md:absolute md:left-1/2 md:-bottom-10 md:transform md:-translate-x-1/2
                relative md:relative">
          <Estatisticas />
        </div>
      </div>

      <Sobre/>
      <Servicos/>
      <Depoimentos/>
      <Beneficios/>
      <Localizacao/>
      <PorQueEscolher/>

      {/* Botão WhatsApp visível antes do footer */}

      <Footer/>
     {/* Botão flutuante de WhatsApp no canto inferior esquerdo */}
<div className="fixed bottom-5 right-5 z-50">
  <BotaoWhatsapp />
</div>
    </>
  )
}

export default App
