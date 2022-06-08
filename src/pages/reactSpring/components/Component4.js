import React, { useState } from 'react'
import { config, useSpring, useTransition } from 'react-spring'
import { TextContainer4 } from './TextContainer';

export default function Component4() {
    const [show, set] = useState(true);

    const transitions = useTransition(show, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
        onRest: () => set(!show),
      })

    return transitions((styles, item) => item &&
        <TextContainer4 style={styles}>
            <h1>Component4</h1>
            <p>lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w</p>
        </TextContainer4>
        
    )
    
}
