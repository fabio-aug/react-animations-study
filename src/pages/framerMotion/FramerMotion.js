import React from 'react';

import { Container } from '../../components/Container';
import { Title } from '../../components/Title';

import AnimationMotion from './components/AnimationMotion';
import SliderMotion from './components/SliderMotion';
import FloatingMotion from './components/FloatingMotion';
import TabMotion from './components/TabMotion';
import DotsMotion from './components/DotsMotion';
import Variants from './components/Variants';

function FramerMotion() {
    return (
        <Container>
            <Title> Framer Motion </Title>

            <SliderMotion />

            <FloatingMotion />

            <AnimationMotion />

            <div style={{
                display: 'flex', 
                justifyContent: 'space-evenly', 
                width: "100%", 
                marginTop: 120, 
                marginBottom: 100
            }}>
                <TabMotion />

                <DotsMotion />
            </div>

        </Container>
    )
}

export default FramerMotion;