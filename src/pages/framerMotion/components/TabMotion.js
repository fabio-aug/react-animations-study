import React, { useState } from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

function TabMotion() {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabsData = [
        { id: 0, icon: '☕', text: 'Café' },
        { id: 1, icon: '🍌', text: 'Banana' },
        { id: 2, icon: '🧁', text: 'Bolinho' },
    ]

    return (
        <Box whileHover={{ scale: 1.1 }}>
            <nav>
                <ul>
                    {tabsData.map((item) => (
                        <li
                            key={item.id}
                            className={item.id === selectedTab ? "selected" : ""}
                            onClick={() => setSelectedTab(item.id)}
                        >
                            {`${item.icon} ${item.text}`}
                            {item.id === selectedTab ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={tabsData[selectedTab].id}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {tabsData[selectedTab].icon}
                    </motion.div>
                </AnimatePresence>
            </main>
        </Box>
    )
}

export default TabMotion;

const Box = styled(motion.div)`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 480px;
    height: 360px;
    border-radius: 10px;
    background: white;
    overflow: hidden;
    box-shadow: 0 5px 5px 5px;
    display: flex;
    flex-direction: column;

    nav {
        background: #fdfdfd;
        padding: 5px 5px 0;
        border-radius: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid #eeeeee;
        height: 44px;
    }

    .tabs {
        flex-grow: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        flex-wrap: nowrap;
        width: 100%;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 128px;
        flex-grow: 1;
        user-select: none;
    }

    ul,
    li {
        list-style: none;
        padding: 0;
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 14px;
    }

    ul {
        display: flex;
        width: 100%;
    }

    li {
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
        padding: 10px 15px;
        position: relative;
        background: white;
        cursor: pointer;
        height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        min-width: 0;
        position: relative;
        user-select: none;
    }

    .underline {
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--accent);
    }

    li.selected {
        background: #eee;
    }

    li button {
        width: 20px;
        height: 20px;
        border: 0;
        background: #fff;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        stroke: #000;
        margin-left: 10px;
        cursor: pointer;
        flex-shrink: 0;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 300px;
        background: #fff;
    }

    .add-item {
        width: 30px;
        height: 30px;
        background: #eee;
        border-radius: 50%;
        border: 0;
        cursor: pointer;
        align-self: center;
    }

    .add-item:disabled {
        opacity: 0.4;
        cursor: default;
        pointer-events: none;
    }
`;