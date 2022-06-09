import React from 'react';
import styled from 'styled-components';

import Jett1 from './../../../images/jett1.gif';

function FloatingCSS() {
    return (
        <Floating>
            <img src={Jett1} className='floating' alt='Jett knife' />
        </Floating>
    )
}

export default FloatingCSS;

const Floating = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;

    .floating { 
        //animation-name: floating;
        //animation-duration: 3s;
        //animation-timing-function: ease-in-out;
        //animation-iteration-count: infinite;

        animation: floating 3s ease-in-out infinite;
        margin-left: 30px;
        margin-top: 5px;

        transition: transform 1s;
    }

    @keyframes floating {
        0% {
            transform: translateY(0px);
        }
        50%  {
            transform: translateY(15px);
        }
        100%   {
            transform: translateY(-0px);
        }
    }
`;