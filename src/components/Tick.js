import React from 'react';

const Tick = () => {
    
    const element = new Date().toLocaleTimeString();

    return <h2>It's {element}.</h2>
}

export default Tick;