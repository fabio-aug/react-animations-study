import React from 'react';
import styled from 'styled-components';

function AnimationBall({ name }) {
    return (
        <>
            <b>{name}</b>
            <Rail animationFunction={name}>
                <div className='ball' />
            </Rail>
        </>
    )
}

export default AnimationBall;

const Rail = styled.div`
    position: relative;
    height: 100px;

    @keyframes move-right {
        from {
            left: 0%;
        }
        to {
            left: 100%;
        }
    }

    .ball {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: blue;
        background-image: radial-gradient(circle at 10px 10px, rgba(25,255,255,0.8),rgba(25,255,255,0.4));
        border-radius: 50%;
        top: 25px;
        animation: 1.5s infinite alternate;
        animation-name: move-right;

        animation-timing-function: ${({ animationFunction }) => animationFunction};
    }
`;