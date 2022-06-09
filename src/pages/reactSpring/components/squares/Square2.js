import React from 'react';
import { animated, easings, useSpring } from 'react-spring';

export default function Square2() {
    const { background, rotateZ, scale } = useSpring({
        from: {
            background: '#F28705',
            rotateZ: 0,
            scale: 1
        },
        to: {
            background: '#F20587',
            rotateZ: -225,
            scale: 0.5,
        },
        config: {
            duration: 2000,
            easing: easings.easeInOutQuart,
        },
        loop: { reverse: true },
    })

    return (
        <animated.div
            style={{ background, width: 120, height: 120, borderRadius: 16, rotateZ, scale }}
        />
    )
}