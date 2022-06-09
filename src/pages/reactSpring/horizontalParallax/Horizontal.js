import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Container } from '../../../components/Container'
import ParallaxHeader from '../components/ParallaxHeader'

import Jett from './../../../images/jett.png';
import Phoenix from './../../../images/phoenix.png';
import Chorando from './../../../images/chorando.png';
import Rindo from './../../../images/rindo.png';
import { Button } from '../../../components/Button';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


export default function Horizontal() {
    const ref = useRef();

    const propsHeader = useSpring({ 
        from: { y: -500 },
        to: { y: 0 }, 
    })

    const propsSubtitle = useSpring({ 
        from: { y: 500 },
        to: { y: 0 }, 
    })

    return (
        <Container>
            <Parallax pages={6} style={{ top: '0', left: '0' }} ref={ref} horizontal>
                <ParallaxLayer sticky={{ start: 0, end: 5 }}>
                    <ParallaxHeader/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={1}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" , fontSize: 100 }}>
                    <animated.p style={propsHeader}>Scroll down</animated.p>
                    <animated.p style={propsSubtitle}>Amazing Experience with Parallax</animated.p>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.9}
                    speed={0.8}
                    style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <img src={Jett} width={600} alt="jett" height={500}/>
                        <ParallaxLayer
                            offset={0.3}
                            speed={0.6}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 40 }}> 
                                <h3>Não cai no falso png 😎</h3>
                        </ParallaxLayer>
                        <img src={Phoenix} alt="phoenix" width={600} height={500}/>
                </ParallaxLayer>
                
                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d', width: "100%", height: "100%" }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        color: 'white',
                    }}>
                    <h4 style={{fontSize: 40, fontFamily: 'Roboto'}}>Escale seu time para os campeonatos</h4>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '1.25rem',
                            height: '10rem',
                            width: '25%',
                            textAlign: 'center',
                            borderRadius: '10px',
                        }}>
                            <Button color='#aaccdd' onClick={() => ref.current.scrollTo(0)}>
                                Ir para o topo
                            </Button>
                        </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#DB0D54', height: '100%', width: "100%" }} />

                <ParallaxLayer offset={3} speed={2} style={{ backgroundColor: '#F21BAE', height: '100%', width: "100%" }} />

            </Parallax>
        </Container>
    )
}
