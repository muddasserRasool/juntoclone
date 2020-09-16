import React from 'react';
import Typist from 'react-typist';


export default function TypistAnimate() {
    const cursor={
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000,
      }
      
    return (
        <div>
        <Typist className="Animate" cursor={cursor}>
            <span>Animate this text.</span>
            <Typist.Backspace count={18} delay={5200}/>
        </Typist>
        </div>
    );
}