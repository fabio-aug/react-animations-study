import React from 'react'
import { useSpring } from 'react-spring'
import { NumberContainer, TextContainer1 } from './StyledComponents';

export default function Component1() {

    const props = useSpring({ 
        from: { opacity: 0, marginTop: -500 },
        to: { opacity: 1, marginTop: 0 }, 
    })

    const props2 = useSpring({ 
        from: { number: 1 },
        number: 10,
        config: { duration: 10000 }
    })

    return (
        <TextContainer1 style={props}>
            <h1>Component1</h1>
            <p>lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w</p>
            <NumberContainer>{props2.number.to(number => Math.floor(number))}</NumberContainer>
        </TextContainer1>
    )
}
