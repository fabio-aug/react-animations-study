import React from 'react';
import styled from 'styled-components';

import { Container } from './../../components/Container';
import { Title } from './../../components/Title';
import AnimationBall from './components/AnimationBall';

function Transitions() {

    const timingFunctions = [
        'linear',
        'ease',
        'ease-in',
        'ease-in-out',
        'ease-out',
        'steps(5, end)',
        'steps(3, start)',
        'steps(4)',
        'cubic-bezier(0.1, -0.6, 0.2, 0)',
        'cubic-bezier(0, 1.1, 0.8, 4)',
    ]

    return (
        <Container>
            <Title>
                Transitions
            </Title>

            <ul>
                <li>
                    transition-property: Define a propriedade que quer colocar a animação
                </li>

                <li>
                    transition-timing-function: Velocidade da transição (<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function'>mais detalhes</a>)
                </li>

                <li>
                    transition-duration: O tempo de duração que demora pra efetuar a animação
                </li>

                <li>
                    transition-delay: Tempo após efetuada alguma ação até começar o efeito
                </li>
            </ul>

            <TransitionExample />

            <TimingFunctionExample>
                {timingFunctions.map((timingFunction, idx) => (
                    <AnimationBall key={idx} name={timingFunction} />
                ))}
            </TimingFunctionExample>
        </Container>
    )
}

export default Transitions;

const TransitionExample = styled.div`
    cursor: pointer;
    margin: 30px;
    width: 150px;
    height: 150px;
    background-color: #000;
    border: 3px solid #ff0000;

    //transition-property: background-color;
    //transition-timing-function: ease;
    //transition-duration: 1s;
    //transition-delay: 0s;

    //transition: <property> <duration> <timing-function> <delay>, <property> <duration> <timing-function> <delay>;

    //transition: <property> <duration> <timing-function> <delay>;

    transition: all 1s ease 0s;

    &:hover {
        background-color: #ff0000;
        border: 3px solid #000;
    }
`

const TimingFunctionExample = styled.div`
    width: 30%;
`