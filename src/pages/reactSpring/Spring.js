import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Subtitle } from '../../components/Subtitle';
import { Title } from '../../components/Title';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Face from './components/Face';
import Hand from './components/Hand';
import Box1 from './components/movimentBoxes/Box1';
import Box2 from './components/movimentBoxes/Box2';
import NumberGradient from './components/NumberGradient';
import Sequence from './components/Sequence';
import Square from './components/squares/Square';
import Square2 from './components/squares/Square2';
import SquareCentral from './components/squares/SquareCentral';
import SquareVertical1 from './components/squares/SquareVertical1';
import SquareVertical2 from './components/squares/SquareVertical2';
import { EmojisContainer, HeaderContainer, MovimentContainer, SquareContainer } from './components/StyledComponents';
import TextSpring from './components/TextSpring';

export default function Spring() {
    const [show, setShow] = useState(true);

    const transition = useTransition(show, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <Container>
            <Title>Spring</Title>
            <Subtitle>This library animates outside React (for performance reasons). Your view has to know how to handle the animated props you pass to it. This is what animated is there for, it extends native elements to receive animated values.</Subtitle>

            <HeaderContainer >
                <div>
                    <Component1 />
                    <Component2 />
                </div>
                <Component4 />
            </HeaderContainer>

            <Button onClick={() => setShow(!show)}>
                Component3
            </Button>
            {transition(({ opacity }, item) => 
                item && (
                    <animated.div
                    style={{
                        opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                    }}>
                    
                        <Component3 />
                    </animated.div>
                )
            )}

            <EmojisContainer>
                <Hand/>
                
                <Face/>

                <Sequence/>
            </EmojisContainer>

            <SquareContainer>
                <SquareVertical1/>
                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: 360}}>
                        <Square/>
                        <Square/>
                    </div>
                    <div style={{display: 'flex'}}>
                        <SquareCentral/>
                        <SquareCentral/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Square2/>
                        <Square2/>
                    </div>
                </div>
                <SquareVertical2/>
            </SquareContainer>

            <SquareContainer>
                <TextSpring/>
                <NumberGradient/>
            </SquareContainer>

            <MovimentContainer>
                <Box1/>
                <Box2/>
            </MovimentContainer>
        </Container>
    )
}
