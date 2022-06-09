import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';

export default function NumberGradient() {
    const [flip, set] = useState(false)
    const { number, fontSize, fontFamily } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 0, fontSize: '100px', fontFamily: "Roboto" },
        number: 1,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })

    return <animated.div style={{fontFamily, fontSize}}>{number.to(n => n.toFixed(2))}</animated.div>
}