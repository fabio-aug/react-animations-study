import React, { useState } from 'react';
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

function AnimatedControl() {
    const controls = useAnimation()
    const [count, setCount] = useState(0)

    function action() {
        if (count === 0) {
            controls.start({
                rotate: 0,
                scale: 1,
                borderRadius: '0%',
                height: '300px',
                width: '300px',
                backgroundColor: "#fa0",
                opacity: 1,
                transition: {
                    duration: 3
                },
            });
            setCount(1);
        } else if(count === 1) {
            setCount(2);
            controls.start({
                scale: [0.5, 0.8, 0.5, 0.8, 0.5, 0.8, 0.5],
                rotate: [0, 135, 270, 135, 0],
                borderRadius: ["70%", "90%", "10%", "50%", "40%"],
                backgroundColor: ["#fa0", '#99aa00', 'rgb(209,27,64)', 'rgba(25,255,255,0.8)', 'rgba(25,255,255,0.4)'],
                transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 5
                },
            });
        } else {
            controls.start({
                rotate: 0,
                scale: 1,
                borderRadius: '0%',
                height: '0px',
                width: '0px',
                backgroundColor: "#aaf",
                opacity: 0,
                transition: {
                    duration: 3
                },
            });
            setCount(0);
        }
    }

    return (
        <Box>
            AnimatedControl

            <Button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => action()}
            >
                Botão
            </Button>

            count {count}

            <motion.div animate={controls} />
        </Box>
    )
}

export default AnimatedControl;

const Box = styled.div`
    width: 100%;
    height: 500px;
    background-color: #fff;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Button = styled(motion.button)`
    height: 30px;
    width: 80px;
    border-radius: 10%;
    background-color: white;
    color: black;
    font-size: 20px;
    cursor: pointer;
    background-color: blue;
    background-image: radial-gradient(circle at 10px 10px, rgba(25,255,255,0.8),rgba(25,255,255,0.4));
`;