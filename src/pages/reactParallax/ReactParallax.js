import React from 'react';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';

import { Container } from '../../components/Container';
import { Title } from '../../components/Title';

import Jett from './../../images/jett.png';
import Phoenix from './../../images/phoenix.png';

function ReactParallax() {
    return (
        <Container>
            <Title> React - Parallax </Title>

            <LayoutParallax>
                <ParallaxBox
                    blur={10}
                    bgImage="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    bgImageAlt="the cat"
                    strength={200}
                >
                    Content goes here. Parallax height grows with content height.
                </ParallaxBox>

                <ParallaxBox
                    strength={200}
                >
                    <Background className="custom-bg">
                        <img
                            alt='teste'
                            src='https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        />
                    </Background>
                </ParallaxBox>

                <ParallaxBox
                    blur={{ min: -15, max: 15 }}
                    bgImage={'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    bgImageAlt="the dog"
                    strength={-200}
                >
                    <ParallaxComp>
                        <img src={Jett} width={600} alt="jett" height={500} />
                        <Parallax
                            strength={200}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 40 }}
                        >
                            <h3>Não cai no falso png 😎</h3>
                        </Parallax>
                        <img src={Phoenix} alt="phoenix" width={600} height={500} />
                    </ParallaxComp>
                </ParallaxBox>
            </LayoutParallax>
        </Container>
    )
}

export default ReactParallax;

const LayoutParallax = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ParallaxBox = styled(Parallax)`
    min-height: 500px;
`;

const ParallaxComp = styled(Parallax)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
`;