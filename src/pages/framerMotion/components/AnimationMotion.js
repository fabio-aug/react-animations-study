import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

function AnimationMotion() {
    return (
        <Box>
            <Square
                animate={{
                    scale: [0.8, 1, 1.2, 1, 0.8],
                    rotate: [0, 135, 270, 135, 0],
                    borderRadius: ["10%", "20%", "50%", "20%", "10%"],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 5
                }}
            />
        </Box>
    )
}

export default AnimationMotion;

const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
`

const Square = styled(motion.div)`
    width: 200px;
    height: 200px;

    background-color: blue;
    background-image: radial-gradient(circle at 10px 10px, rgba(25,255,255,0.8),rgba(25,255,255,0.4));
`