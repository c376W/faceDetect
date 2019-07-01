import React from 'react';
import './ImageSearchBar.css';

const ImageSearchBar=(props)=>{
    return (
        <div className='searchP'>
            <p style={{textAlign:'center'}}>This brain can detect the human faces in your photos.</p>
            <div className='search pa4 br3 shadow-5'>
                <input className='searchbar' onChange={props.onURLChange}/>
                <a onClick={props.onButton}className="btn f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black shadow-5" href="#0">Detect</a>
            </div>
        </div>
    );
};

export default ImageSearchBar;