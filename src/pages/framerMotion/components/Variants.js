import React from 'react';
import { motion } from "framer-motion"

function Variants() {
    const width = window.innerWidth;

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const variants = {
        initial: {
            opacity: 0,
            x: width
        },
        animate: {
            opacity: 1,
            x: 0
        },
    }

    return (
        <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {numbers.map((num, i) => (
                <motion.li
                    key={i}
                    custom={i}
                    variants={variants}
                    initial={'initial'}
                    animate={'animate'}
                    transition={{
                        type: "spring",
                        delay: i * 0.3,
                        stiffness: 50
                        //duration: 1
                    }}
                >
                    {num}
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default Variants;