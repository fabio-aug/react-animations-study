import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from './../../components/Container';
import { Title } from './../../components/Title';
import { Button } from './../../components/Button';

function Home() {
    return (
        <Container>
            <Title> 1. css</Title>

            <Buttons>
                <Link to="/transitions">
                    <Button color='#aaaaff'>
                        Transition
                    </Button>
                </Link>
                <Link to="/transforms">
                    <Button color='#aaaaff'>
                        Transform
                    </Button>
                </Link>
                <Link to="/ideas-css">
                    <Button color='#aaaaff'>
                        Ideias e exemplos
                    </Button>
                </Link>
            </Buttons>

            <Title> 2. Animations</Title>

            <Buttons>
                <Link to="/spring">
                    <Button color='#aaffaa'>
                        React Spring
                    </Button>
                </Link>
                <Link to="/framer-motion">
                    <Button color='#aaffaa'>
                        Framer Motion
                    </Button>
                </Link>
            </Buttons>

            <Title> 3. Parallax</Title>

            <Buttons>
                <Link to="/react-parallax">
                    <Button color='#ffaaaa'>
                        React Parallax
                    </Button>
                </Link>
                <Link to="/react-scroll-parallax">
                    <Button color='#ffaaaa'>
                        React Scroll Parallax
                    </Button>
                </Link>
                <Link to="/react-spring-parallax">
                    <Button color='#ffaaaa'>
                        React Spring Parallax
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