import React from 'react';
import styled from 'styled-components';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import { Container } from './../../components/Container';
import { Title } from './../../components/Title';

import Jett from './../../images/jett.png';
import Phoenix from './../../images/phoenix.png';

function ReactScrollParallax() {
    return (
        <Container>
            <Title> React Scroll Parallax </Title>

            <ParallaxProvider scrollAxis='vertical'>
                <ParallaxBox speed={10} color="aquamarine">
                    <Test>
                        <img src={Jett} width={600} alt="jett" height={500} />
                        <Parallax speed={20}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 40 }}
                        >
                            <h3>Não cai no falso png 😎</h3>
                        </Parallax>
                        <img src={Phoenix} alt="phoenix" width={600} height={500} />
                    </Test>
                </ParallaxBox>

                <ParallaxBanner
                    layers={
                        [
                            {
                                image: 'https://images.pexels.com/photos/8850997/pexels-photo-8850997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                                speed: -10
                            },
                        ]
                    }
                    className="aspect-[2/1]"
                    style={{ height: '500px' }}
                >
                    <TextBanner className="absolute inset-0 flex items-center justify-center">
                        <h3>Não cai no falso png 😎</h3>
                    </TextBanner>
                </ParallaxBanner>
            </ParallaxProvider>
        </Container>
    )
}

export default ReactScrollParallax;

const ParallaxBox = styled(Parallax)`
    background-color: ${({ color }) => color};
    height: 500px;
    width: 100%;
`;

const Test = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: row;
`;

const TextBanner = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;