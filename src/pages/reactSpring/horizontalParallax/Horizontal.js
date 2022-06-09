import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.css'


export default function Horizontal() {
    const parallax = useRef(null)

    function scroll(to) {
        if (parallax.current) {
            parallax.current.scrollTo(to)
        }
    }

    
    function Page ({offset, gradient, onClick}) {
        console.log(offset)
        console.log(gradient)
        console.log(onClick)
        return (
            <>
                <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
                    <div style={{backgroundColor: '#20232f', clipPath: 'polygon(20% 0, 70% 0, 50% 100%, 0% 100%)'}} />
                </ParallaxLayer>
            
                <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
                    <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
                </ParallaxLayer>
            
                <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
                    <span>0{offset + 1}</span>
                </ParallaxLayer>
            </>
        )
    }

    return (
        <div style={{ background: '#dfdfdf' }}>
            <Parallax ref={parallax} pages={3} horizontal style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}
            >
                <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
                <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
                <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
            </Parallax>
        </div>
    )
}
