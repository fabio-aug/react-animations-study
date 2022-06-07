import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { Container } from './../../components/Container';
import { Title } from './../../components/Title';
import { Button } from './../../components/Button';

function Home() {

    useEffect(() => {
        console.log('salve');
    }, [])

    return (
        <Container>
            <Title> 1. css puro</Title>

            <Buttons>
                <Link to="/transitions">
                    <Button color='#aaccdd'>
                        Rotações
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