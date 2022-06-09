import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion"
import Jett1 from './../../../images/jett1.gif';

function FloatingMotion() {
    return (
        <Box>
            <Floating
                key={Jett1}
                src={Jett1}
                animate={{ translateY: [0, 15] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2
                }}
            />
        </Box>
    )
}

export default FloatingMotion;

const Floating = styled(motion.img)`
    border-radius: 20px;
`;

const Box = styled.div`
    margin-top: 20px;
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
`;