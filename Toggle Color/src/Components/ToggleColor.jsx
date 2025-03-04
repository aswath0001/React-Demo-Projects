import { useState } from 'react';
import '../index.css';

const ToggleColor = () => {
    const[backgroundColor,setBackgroundColor] = useState ('white')
    const[textColour,setTextColour] = useState('#1b1b1b')
    const[buttonStyle,setButtonStyle] = useState('white')

    const handleClick = () => {
        setBackgroundColor (backgroundColor ==='white' ? '#1b1b1b':'white')
        setTextColour (textColour === '#1b1b1b' ? '#ffa31a':'#1b1b1b')
        setButtonStyle (backgroundColor === 'white' ? '#1b1b1b':'white')
    }

  return (
    <div style={{backgroundColor,color: textColour}}>
        <button onClick={handleClick}
         style={{
            buttonStyle ,
             color:textColour,
             border:`2px solid ${textColour}`,
    }}>
        {backgroundColor ===  '1b1b1b' ? 'Black Theme' :'White Theme'}
    </button>
    <section className='content'>
     <h1>welcome to <br/>
     Real world...
     </h1>
    </section>
    </div>
    
  )
};

export default ToggleColor