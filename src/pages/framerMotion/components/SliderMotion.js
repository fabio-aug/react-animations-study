import React, { useState } from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"

function SliderMotion() {
    const [imgIndex, setImgIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    //'https://wallpaperaccess.com/full/109672.jpg',
    //'https://wallpaperaccess.com/full/109666.jpg',
    //'https://wallpaperaccess.com/full/23632.jpg',
    //'https://wallpaperaccess.com/full/23621.jpg',

    const imgs = [
        'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1fb651358bfe01fe/60c10342d475801b9d54fe31/TORNEIOS_DE_COMUNIDADE_VAL_CARD.jpg',
        'https://www.gamereactor.pt/media/16/blastrevealplayer_2281643b.jpg',
        'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd2aa3a9a266412f2/60c101b11b32a31d5305c22d/TORNEIOS-DE-COMUNIDADE-BANNER-SITE_TFT.jpg',
        'https://business-portal-bucket.s3.amazonaws.com/media/images/WePlay_AniMajor_1920x1080.original.jpg',
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
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
                    height={550}
                    width={"100%"}
                />
            </AnimatePresence>

            <Button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
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
    height: 80px;
    width: 30px;
    border-radius: 10%;
    background-color: white;
    color: black;
    font-size: 20px;
    position: absolute;
    cursor: pointer;
    z-index: 2;
`;

const Box = styled.div`
    margin-top: 10px;
    border-radius: 10px;
    border: 2px solid black;
    width: 60%;
    height: 550px;
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