import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Jett from "../../../images/jett.png"

export default function TextMotion() {
    const { innerWidth: width } = window;

    return (
        <div style={{height: 300, display: 'flex', alignItems: 'center', marginBottom: 50, justifyContent: 'center', width: "100%"}}>
            <Left
                initial={{ opacity: 0, x: -width}}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 1 }}
                
            >
                Vindo da esquerda
            </Left>
            {/* <Image 
                src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1fb651358bfe01fe/60c10342d475801b9d54fe31/TORNEIOS_DE_COMUNIDADE_VAL_CARD.jpg'
                initial={{ opacity: 0, x: width}}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 1 }}
                /> */}
            <Right
                initial={{ opacity: 0, x: width}}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                drag
                dragConstraints={{
                    top: -1,
                    left: -1,
                    right: 1,
                    bottom: 1,
                }}
            >
                Vindo da direita
            </Right>
        </div>
    )
}

const Left = styled(motion.h1)`
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin-right: 80px;
    width: 50%;
    font-family: open sans;
`;

const Right = styled(motion.div)`
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
    height: 400px;
    width: 50%;
    font-size: 40px;
    background-image: url(${Jett});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-left: 80px;
    font-family: open sans;
`;