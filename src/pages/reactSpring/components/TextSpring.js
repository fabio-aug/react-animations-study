import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';

export default function TextSpring() {
    const [flip, set] = useState(false)

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0, fontSize: '100px', fontFamily: "Roboto"  },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })

    return <animated.h1 style={props}>hello</animated.h1>
}