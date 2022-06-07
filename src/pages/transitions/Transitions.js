import React from 'react';
import styled from 'styled-components';

import { Container } from './../../components/Container';
import { Title } from './../../components/Title';

function Transitions() {
    return (
        <Container>
            <Title>
                Transitions
            </Title>

            <ul>
                <li>
                    transition-property: Define a propriedade que quer colocar a transição
                </li>

                <li>
                    transition-timing-function: ease;
                </li>

                <li>
                    transition-duration: 1s;
                </li>

                <li>
                    transition-delay: 0s;
                </li>
            </ul>

            <TransitionExample />

            <TimingFunctionExample>
                <p> lento - rápido - lento </p>
                <div>Ease (Default)</div>

                <p> constante </p>
                <div>Linear</div>
                
                <p> lento - rápido </p>
                <div>Ease-In</div>

                <p> lento - rápido </p>
                <div>Ease-Out</div>

                <p> lento - rápido </p>
                <div>Ease-In-Out</div>
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

    //transition: <property> <duration> <timing-function> <delay>;

    transition: all 1s ease 0s;

    &:hover {
        background-color: #ff0000;
        border: 3px solid #000;
    }
`

export const TimingFunctionExample = styled.div`
    width: 960px;

    div {
        margin: 2em;
        width: 150px;
        height: 50px;
        padding: 10px 15px;
        background-color: #000;
        color: #fff;
        border-radius: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;

        transition-property: translate();
        transition-duration: 3s;
    }

    & div:nth-child(1) {
        transition-timing-function: ease;
    }

    & div:nth-child(2) {
        transition-timing-function: linear;
    }

    & div:nth-child(3) {
        transition-timing-function: ease-in;
    }

    & div:nth-child(4) {
        transition-timing-function: ease-out;
    }

    & div:nth-child(5) {
        transition-timing-function: ease-in-out;
    }

    & div:hover {
        transform: translate(900px, 0);
    }
`;