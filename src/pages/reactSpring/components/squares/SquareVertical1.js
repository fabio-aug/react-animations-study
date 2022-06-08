import React from 'react';
import { animated, easings, useSpring } from 'react-spring';

export default function SquareVertical1() {
    const { background, rotateZ, scale, marginTop } = useSpring({
      from: {
        background: 'red',
        rotateZ: 0,
        scale: 1,
        marginTop: 200,
      },
      to: {
        background: 'purple',
        rotateZ: 225,
        scale: 0.5,
        marginTop: 0,
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