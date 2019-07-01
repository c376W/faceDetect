import React from 'react';
import './Face.css';

const Face=(props)=>{
    return (
        <div className='imageP'>
            <img id='inputimage' className='image' alt='faces' src={props.imageURL}/>
        </div>

    );
};

export default Face;