import React, { useState } from 'react';
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";

function DotsMotion() {
    const [selected, setSelected] = useState(4);

    const colorData = [
        { id: 1, color: "#ff0055" },
        { id: 2, color: "#0099ff" },
        { id: 3, color: "#22cc88" },
        { id: 4, color: "#ffaa00" },
    ]

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 30
    };

    function Item({ color, isSelected, onClick }) {
        return (
            <li
                className="item"
                onClick={onClick}
                style={{ backgroundColor: color }}
            >
                {isSelected && (
                    <motion.div
                        layoutId="outline"
                        className="outline"
                        initial={false}
                        animate={{ borderColor: color }}
                        transition={spring}
                    />
                )}
            </li>
        );
    }

    return (
        <Box>
            <AnimateSharedLayout>
                <ul>
                    {colorData.map(color => (
                        <Item
                            key={color.id}
                            color={color.color}
                            isSelected={selected === color.id}
                            onClick={() => setSelected(color.id)}
                        />
                    ))}
                </ul>
            </AnimateSharedLayout>
        </Box>
    );
}

export default DotsMotion;

const Box = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 280px;
        height: 280px;
    }

    .item {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 20px;
        position: relative;
        cursor: pointer;
        flex-shrink: 0;
    }

    .outline {
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        border: 10px solid white;
        border-radius: 50%;
    }
`;