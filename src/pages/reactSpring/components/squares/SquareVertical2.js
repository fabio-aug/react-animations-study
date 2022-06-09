import React from 'react';
import { animated, easings, useSpring } from 'react-spring';

export default function SquareVertical2() {
    const { background, rotateZ, scale, marginTop } = useSpring({
        from: {
            background: '#8463E8',
            rotateZ: 0,
            scale: 0.5,
            marginTop: 0,
        },
        to: {
            background: '#1DFF3E',
            rotateZ: -225,
            scale: 1,
            marginTop: 200,
        },
        config: {
            duration: 2000,
            easing: easings.easeInOutElastic,
        },
        loop: { reverse: true },
    })

    return (
        <animated.div
            style={{ background, width: 120, height: 120, borderRadius: 16, rotateZ, scale, marginTop }}
        />
    )
}