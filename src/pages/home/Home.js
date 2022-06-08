import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { Container } from './../../components/Container';
import { Title } from './../../components/Title';
import { Button } from './../../components/Button';

function Home() {
    return (
        <Container>
            <Title> 1. css puro</Title>

            <Buttons>
                <Link to="/transitions">
                    <Button color='#aaccdd'>
                        Transition
                    </Button>
                </Link>
                <Link to="/transforms">
                    <Button color='#aaccdd'>
                        Transform
                    </Button>
                </Link>
                <Link to="/ideas-css">
                    <Button color='#aaccdd'>
                        Ideias e exemplos
                    </Button>
                </Link>
            </Buttons>

            <Title> 2. bibliotecas</Title>

            <Buttons>
                <Link to="/spring">
                    <Button color='#aaccdd'>
                        React Spring
                    </Button>
                </Link>
            </Buttons>
        </Container>
    )
}

export default Home;

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
`;