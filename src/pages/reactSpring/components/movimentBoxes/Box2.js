import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Box2() {
    const { innerWidth: width } = window;

    const styles = useSpring({
      loop: { reverse: true },
      from: { x: 0 },
      to: { x: width - 225 },
    })
  
    return (
      <animated.div
        style={{
          width: 160,
          height: 160,
          marginTop: 20,
          backgroundColor: '#46e891',
          borderRadius: 16,
          ...styles,
        }}
      />
    )
  }