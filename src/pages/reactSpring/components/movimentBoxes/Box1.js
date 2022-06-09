import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'

export default function Box1() {
    const n = useRef(0)

    const { innerWidth: width } = window;

    const styles = useSpring({
        loop: () => 5 > n.current++,
        from: { x: -150 },
        to: { x: width },
        config: {
            duration: 2000
        }
    })

    return (
        <animated.div
            style={{
                width: 160,
                marginTop: 20,
                height: 160,
                backgroundColor: '#46e891',
                borderRadius: 16,
                ...styles,
            }}
        />
    )
}