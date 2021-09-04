import React from 'react';

const Clock = props => {

    return  <h2>{props.tick.toLocaleTimeString()}</h2>
        
}

export default Clock;