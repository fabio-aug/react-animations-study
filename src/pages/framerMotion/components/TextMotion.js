import React, { useState } from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export default function TextMotion() {
    const { innerWidth: width } = window;

    return (
        <div style={{height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Left
                initial={{ opacity: 0, x: -width}}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
            >
                Vindo da esquerda
            </Left>
            <Right
                initial={{ opacity: 0, x: width}}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                drag
                dragConstraints={{
                    top: -5,
                    left: -5,
                    right: 5,
                    bottom: 5,
                }}
            >
                Vindo da direita
            </Right>
        </div>
    )
}

const Left = styled(motion.h1)`
    color: black;
    font-size: 40px;
    margin-right: 80px;
    font-family: open sans;
`;

const Right = styled(motion.h1)`
    color: black;
    font-size: 40px;
    margin-left: 80px;
    font-family: open sans;
`;
