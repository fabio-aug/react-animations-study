import React, { useState } from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"

function SliderMotion() {
    const [imgIndex, setImgIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const imgs = [
        'https://wallpaperaccess.com/full/109672.jpg',
        'https://wallpaperaccess.com/full/109666.jpg',
        'https://wallpaperaccess.com/full/23632.jpg',
        'https://wallpaperaccess.com/full/23621.jpg',
    ]

    function changeImg(directionImg) {
        if (directionImg === -1) {
            if (imgIndex === 0) {
                setImgIndex(imgs.length - 1);
            } else {
                setImgIndex(imgIndex - 1);
            }
        } else {
            if (imgIndex === imgs.length - 1) {
                setImgIndex(0);
            } else {
                setImgIndex(imgIndex + 1);
            }
        }
        setDirection(directionImg);
    }

    return (
        <Box>
            <Button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="prev"
                onClick={() => changeImg(-1)}
            >
                {'<'}
            </Button>

            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={imgs[imgIndex]}
                    src={imgs[imgIndex]}
                    custom={direction}
                    initial={{
                        translateX: direction > 0 ? 1000 : -1000,
                        opacity: 0
                    }}
                    animate={{
                        translateX: 0,
                        opacity: 1
                    }}
                    exit={{
                        translateX: direction < 0 ? 1000 : -1000,
                        opacity: 0
                    }}
                    transition={{
                        translateX: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    height={300}
                />
            </AnimatePresence>

            <Button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="next"
                onClick={() => changeImg(1)}
            >
                {'>'}
            </Button>
        </Box>
    )
}

export default SliderMotion;

const Button = styled(motion.button)`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
    color: black;
    font-size: 20px;
    position: absolute;
    z-index: 2;
`;

const Box = styled.div`
    margin-top: 10px;
    width: 50%;
    height: 500px;
    padding: 20px;
    background-color: black;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    .next {
        right: 10px;
    }

    .prev {
        left: 10px;
    }

    img {
        position: absolute;
        max-width: 100vw;
    }
`