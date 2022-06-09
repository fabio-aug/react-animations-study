import React from 'react';
import { animated, easings, useSpring } from 'react-spring';

export default function SquareCentral() {
	const { background, rotateZ, scale } = useSpring({
		from: {
			background: '#F2B705',
			rotateZ: 0,
			scale: 1
		},
		to: {
			background: '#BF3604',
			rotateZ: 180,
			scale: 0.5
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