import React from 'react';
import styled from "styled-components";

export default function ParallaxHeader() {
    return (
        <header style={{ backgroundColor: 'lightblue', width: "100%", height: 60, display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
            <div>
                <h2>eDraft League</h2>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <List>
                    <Alist href='/parallax'>Home</Alist>
                </List>
                <List>
                    <Alist href='/parallax'>Perfil</Alist>
                </List>
                <List>
                    <Alist href='/parallax'>Informações</Alist>
                </List>
                <List>
                    <Alist href='/parallax'>Teste</Alist>
                </List>
                <List>
                    <Alist href='/parallax'>Sair</Alist>
                </List>
            </ul>
        </header>
    )
}

const List = styled.li`
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
    list-style: none;
    color: black;
    font-weight: bold;
    font-size: 12px;
`;

const Alist = styled.a`
    text-decoration: none;
    color: black;
`;
