
import React from 'react';
import Typist from 'react-typist';



export default function TypistAnimate() {
    const cursor = {
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000,
    }
    // let counter=0
    
    
    // const [Printit, setPrintit] = useState("")
  
        // let Message = ["grow your business.", "look sexy online.", "outrank the competition.", "create badass content.", "generate more leads.", "optimize conversions."]
        
       

  
        
            
          

 function Typing() {
       

        return (
            <div>
                <Typist className="Animate" cursor={cursor}>
                    <span>grow your business.</span>
                    <Typist.Backspace count={19} delay={1200} />
                    <span>look sexy online.</span>
                    <Typist.Backspace count={19} delay={1200} />
                    <span>outrank the competition.</span>
                    <Typist.Backspace count={24} delay={1200} />
                    <span>create badass content.</span>
                    <Typist.Backspace count={24} delay={1200} />
                    <span>generate more leads.</span>
                    <Typist.Backspace count={24} delay={1200} />
                    <span>optimize conversions.</span>
                    <Typist.Backspace count={24} delay={1200} />
                    <span>grow your business.</span>
                    <Typist.Backspace count={19} delay={1200} />
                    <span>look sexy online.</span>
                    <Typist.Backspace count={19} delay={1200} />
                    <span>outrank the competition.</span>
                    <Typist.Backspace count={24} delay={1200} />
                    <span>create badass content.</span>
                    <Typist.Backspace count={24} delay={1200} />
                    <span>generate more leads.</span>
                    <Typist.Backspace count={24} delay={1200} />
                    <span>optimize conversions.</span>
                    <Typist.Backspace count={24} delay={1200} />
                </Typist>
            </div>
        )
    
    }



    return (
        <Typing />
    );
}