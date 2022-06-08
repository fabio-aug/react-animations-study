import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';

export default function Hand() {
    const [show, set] = useState(true)

    const transitions = useTransition(show, {
        from: { opacity: 0 },
        enter: { opacity: 1, width: 100 },
        leave: { opacity: 0 },
        delay: 200,
        config: config.molasses,
        onRest: () => set(!show), 
    })

    return transitions(
        (styles, item) => item && <animated.div style={styles}>✌️</animated.div>
    )
}