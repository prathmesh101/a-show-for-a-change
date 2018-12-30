import React from 'react';

import '../../../assets/css/navigation/backdrop.css';

function Backdrop(props){
    return (
        <div className = "backdrop" onClick = {props.backDropClick}></div>
    );
}

export default Backdrop;