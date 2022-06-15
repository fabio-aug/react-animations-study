import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-router-dom';

import { Container } from '../../components/Container';
import ParallaxHeader from './components/ParallaxHeader';
import Jett from './../../images/jett.png';
import Phoenix from './../../images/phoenix.png';
import Chorando from './../../images/chorando.png';
import Rindo from './../../images/rindo.png';
import { Button } from '../../components/Button';

export default function ReactSpringParallax() {
    const ref = useRef()

    return (
        <Container>
            <Parallax pages={6} style={{ top: '0', left: '0' }} ref={ref}>
                <ParallaxLayer sticky={{ start: 0, end: 4 }}>
                    <ParallaxHeader />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={2}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 100,
                    }}>
                    <p>Scroll down</p>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.2}
                    speed={1}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 100 }}>
                    <p>Amazing Experience with Parallax</p>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.9}
                    speed={0.8}
                    style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
                >
                    <img src={Jett} width={600} alt="jett" height={500} />
                    <h3>Não cai no falso png 😎</h3>
                    <img src={Phoenix} alt="phoenix" width={600} height={500} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <h4 style={{ fontSize: 40, fontFamily: 'Roboto' }}>Escale seu time para os campeonatos</h4>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#DB0D54', height: '100%' }} />

                <ParallaxLayer sticky={{ start: 1.5, end: 4 }} style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex', }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#36F21B',
                        fontSize: '1.25rem',
                        height: '10rem',
                        width: '25%',
                        textAlign: 'center',
                        borderRadius: '10px',
                        marginLeft: '15%'
                    }}>
                        <Button color='#aaccdd' onClick={() => ref.current.scrollTo(0)}>
                            Ir para o topo
                        </Button>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1.5} style={{ justifyContent: 'flex-end', alignItems: 'center', display: 'flex' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.25rem',
                        height: '10rem',
                        width: '25%',
                        backgroundColor: '#9EF8EE',
                        textAlign: 'center',
                        borderRadius: '10px',
                        marginRight: '15%'
                    }}>
                        <h2 style={{ fontSize: 20, fontFamily: "Roboto" }}>Eu NÃO estou</h2>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.9} speed={1} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginRight: '15%'
                    }}>
                        <img src={Chorando} alt="laughing" width={500} height={500} />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={2} style={{ backgroundColor: '#F21BAE', height: '100%' }} />

                <ParallaxLayer offset={3} speed={1.5} style={{ justifyContent: 'flex-end', alignItems: 'center', display: 'flex' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.25rem',
                        height: '10rem',
                        width: '25%',
                        textAlign: 'center',
                        backgroundColor: '#FA7F08',
                        borderRadius: '10px',
                        marginRight: '15%'
                    }}>
                        <h2 style={{ fontSize: 20, fontFamily: "Roboto" }}>Eu também não</h2>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3.9} speed={0.5} style={{ justifyContent: 'flex-end', alignItems: 'center', display: 'flex' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginRight: '15%'
                    }}>
                        <img src={Rindo} alt="smile" width={600} height={500} />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 5, end: 5 }} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Link to="/react-spring-parallax-horizontal">
                        <Button color='#aaccdd'>
                            Parallax horizontal
                        </Button>
                    </Link>
                </ParallaxLayer>

            </Parallax>
        </Container>
    )
}
