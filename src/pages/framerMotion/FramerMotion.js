import React from 'react';

import { Container } from '../../components/Container';
import { Title } from '../../components/Title';

import AnimationMotion from './components/AnimationMotion';
import SliderMotion from './components/SliderMotion';
import FloatingMotion from './components/FloatingMotion';
import TabMotion from './components/TabMotion';
import DotsMotion from './components/DotsMotion';

function FramerMotion() {
    return (
        <Container>
            <Title> Framer Motion </Title>

            <SliderMotion />

            <FloatingMotion />

            <AnimationMotion />

            <TabMotion />

            <DotsMotion />

        </Container>
    )
}

export default FramerMotion;