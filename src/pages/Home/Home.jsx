import {} from "react"
import Header from "../../components/Header/Header";
import Raia from '../../assets/raia.svg'
import Baleia from '../../assets/baleia.svg'
import './Home.scss'

function Home() {
    return (
        <>
        <main>
            <div className="main-container">
                <Header />
                <div className="main-container-content">
                    <h1>VEJA AS ATUALIZAÇÕES<br /> SOBRE O OCEANO</h1>
                    <p>Bem-vindo ao Ocean Watch, um projeto inovador dedicado à proteção e<br /> preservação dos nossos oceanos. Utilizando a mais avançada tecnologia<br /> de Inteligência Artificial, o Ocean Watch tem como objetivo monitorar<br /> de forma contínua e precisa a saúde dos ecossistemas marinhos.</p>
                    <button className="more-btn"> Saiba Mais</button>
                    <img src={Raia} className="raia"/>
                    <img src={Baleia} className="baleia"/>
                </div>
            </div>
        </main>
        </> 
    )
}

export default Home;