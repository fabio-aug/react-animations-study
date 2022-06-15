import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import Jett from './../../images/jett.png';
import Phoenix from './../../images/phoenix.png';
import { Container } from './../../components/Container';

function ReactScrollParallax() {
    return (
        <Container>
            <ParallaxProvider scrollAxis='vertical'>
                <ParallaxBox
                    speed={-20}
                    color="white"
                >
                    <p>Scroll down</p>
                </ParallaxBox>

                <ParallaxBox
                    speed={40}
                    color="white"
                >
                    <p>Amazing Experience with Parallax</p>
                </ParallaxBox>

                <ParallaxBox speed={0} color="aquamarine">
                    <motion.img
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        src={Jett}
                        width={600}
                        alt="jett"
                        height={500}
                    />
                    <Parallax speed={10}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 40 }}
                    >
                        <h3>Não cai no falso png 😎</h3>
                    </Parallax>
                    <motion.img
                        initial={{ opacity: 0, x: 1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        src={Phoenix}
                        alt="phoenix"
                        width={600}
                        height={500}
                    />
                </ParallaxBox>

                <ParallaxBanner
                    layers={[{
                        image: 'https://images.pexels.com/photos/8850997/pexels-photo-8850997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        speed: -20
                    }]}
                    style={{ height: '500px' }}
                >
                    <TextBanner>
                        <h3>Não cai no falso png 😎</h3>
                    </TextBanner>
                </ParallaxBanner>

                <ParallaxBanner
                    layers={[{
                        image: 'https://images.pexels.com/photos/3747156/pexels-photo-3747156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                        speed: 20
                    }]}
                    style={{ height: '500px' }}
                >
                    <TextBanner>
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
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    font-size: 100px;
`;

const TextBanner = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;