import React from 'react';
import styled from 'styled-components';

import { Container } from './../../components/Container';
import { Title } from './../../components/Title';

function Transform() {
    return (
        <Container>
            <Title>
                Transform
            </Title>

            <ExampleContainer>
                <div>Scale</div>
                <div>Translate X</div>
                <div>Translate Y</div>
                <div>Translate Z</div>
                <div>Rotate Z</div>
                <div>Rotate X</div>
                <div>Rotate Y</div>
                <div>Skew</div>
            </ExampleContainer>
        </Container>
    )
}

export default Transform;

export const ExampleContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    perspective: 1000px;

    div {
        height: 150px;
        width: 150px;
        background-color: #40739e;
        color: white;
        line-height: 150px;
        text-align: center;
        font-size: 24px;
        margin: 20px;
        margin-right: auto;
        margin-left: auto;

        transition: transform 1s;
    }

    & div:nth-child(1):hover {
        transform: scale(1.5);
    }
    & div:nth-child(2):hover {
        transform: translateX(320px);
    }
    & div:nth-child(3):hover {
        transform: translateY(320px);
    }
    & div:nth-child(4):hover {
        transform: translateZ(700px);
    }
    & div:nth-child(5):hover {
        transform: rotateZ(180deg);
    }
    & div:nth-child(6):hover {
        transform: rotateX(180deg);
    }
    & div:nth-child(7):hover {
        transform: rotateY(180deg);
    }
    & div:nth-child(8):hover {
        transform: skew(20deg);
    }
`;