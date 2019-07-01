import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import 'tachyons';
import brain from './brain.png';

const Logo=()=>{
    return (
        <div className='logoP'>
            <Tilt className="Tilt logo shadow-2" options={{ max : 25 }}  >
                <div className="Tilt-inner"> <img alt='logo' src={brain}/> </div>
            </Tilt>
            
        </div>
    );
};

export default Logo;