import React, { useRef, useState, useEffect } from 'react';
import './About.scss'
import Header from '../../components/Header/Header'

import Left from '../../assets/sendleft.svg'
import Right from '../../assets/sendright.svg'

import Acidez from '../../assets/acidez.svg'
import Agua from '../../assets/agua.svg'
import Clima from '../../assets/clima.svg'
import Habitat from '../../assets/habitat.svg'
import Poluicao from '../../assets/poluicao.svg'
import Peixes from '../../assets/peixes.svg'

function About() {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1); // Start with the second card active

    useEffect(() => {
        const handleResize = () => {
            centerActiveCard();
        };

        window.addEventListener('resize', handleResize);
        centerActiveCard(); // Center the active card on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [activeIndex]);

    const centerActiveCard = () => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.children[0].offsetWidth;
            const scrollPos = cardWidth * (activeIndex - 1);
            carouselRef.current.scrollTo({
                left: scrollPos,
                behavior: 'smooth'
            });
        }
    };

    const scrollLeft = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const scrollRight = () => {
        if (activeIndex < 5) { // assuming you have 6 cards
            setActiveIndex(activeIndex + 1);
        }
    };

    return (
        <main>
            <div className="main-container">
                <Header />
                <div className="main-container-content">
                    <div className='main-container-content-carousel'>
                        <img src={Left} className="arrow" onClick={scrollLeft} alt="left arrow" />
                        <div className='carousel' ref={carouselRef}>
                            <div className={`card ${activeIndex === 0 ? 'active' : ''}`}>
                                <img src={Poluicao} className="img-card" />
                                <div className='text-content'>
                                    <h2>Monitoramento da Poluição</h2>
                                    <p id='text-card'>Detectamos e mapeamos áreas afetadas por poluentes, incluindo plásticos, produtos químicos e derramamentos de óleo, ajudando na resposta rápida e eficaz a desastres ambientais.</p>
                                </div>
                            </div>
                            <div className={`card ${activeIndex === 1 ? 'active' : ''}`}>
                                <img src={Peixes} className="img-card" />
                                <div className='text-content'>
                                    <h2>Migração de Peixes</h2>
                                    <p id='text-card'>Rastreamos os padrões migratórios de várias espécies de peixes, fornecendo informações essenciais para a conservação da biodiversidade marinha e a sustentabilidade das pescas.</p>
                                </div>
                            </div>
                            <div className={`card ${activeIndex === 2 ? 'active' : ''}`}>
                                <img src={Agua} className="img-card" />
                                <div className='text-content'>
                                    <h2>Qualidade da Água</h2>
                                    <p id='text-card'>Medimos parâmetros como pH, temperatura, salinidade e níveis de oxigênio, permitindo avaliar a qualidade da água e identificar mudanças que possam afetar a vida marinha.</p>
                                </div>
                            </div>
                            <div className={`card ${activeIndex === 3 ? 'active' : ''}`}>
                                <img src={Habitat} className="img-card" />
                                <div className='text-content'>
                                    <h2>Corais e Habitats</h2>
                                    <p id='text-card'>Monitoramos a saúde dos recifes de corais e outros habitats críticos, detectando sinais de branqueamento e degradação para promover ações de conservação.</p>
                                </div>
                            </div>
                            <div className={`card ${activeIndex === 4 ? 'active' : ''}`}>
                                <img src={Acidez} className="img-card" />
                                <div className='text-content'>
                                    <h2>Níveis de Acidez</h2>
                                    <p id='text-card'>Acompanhamos a acidificação dos oceanos, um problema crescente causado pelo aumento das emissões de CO2, e seus impactos nos ecossistemas marinhos.</p>
                                </div>
                            </div>
                            <div className={`card ${activeIndex === 5 ? 'active' : ''}`}>
                                <img src={Clima} className="img-card" />
                                <div className='text-content'>
                                    <h2>Mudanças Climáticas</h2>
                                    <p id='text-card'>Analisamos os efeitos das mudanças climáticas, como o aumento do nível do mar e a variação das correntes oceânicas, para entender seu impacto global.</p>
                                </div>
                            </div>
                        </div>
                        <img src={Right} className="arrow" onClick={scrollRight} alt="right arrow" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
