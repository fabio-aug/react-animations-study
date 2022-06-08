import React from 'react'
import { useSpring } from 'react-spring'
import { TextContainer2 } from './TextContainer';

export default function Component2() {
    const props = useSpring({ 
        from: { opacity: 0 },
        to: { opacity: 1 }, 
        config: { delay: 1000, duration: 2000 }
    })

    return (
        <TextContainer2 style={props}>
            <h1>Component2</h1>
            <p>lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w</p>
        </TextContainer2>
    )
}
