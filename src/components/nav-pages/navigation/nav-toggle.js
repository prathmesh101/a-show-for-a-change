import React from 'react';

import '../../../assets/css/navigation/nav-toggle.css'

function NavToggle(props){
    console.log('props in nav toggle: ', props);

    let color = 'toggleButton__img';
    

    if (!props.top) {
        color = 'toggleButton__img color'
    }
    return (
        <button className = 'toggleButton' onClick = {props.click}>
            <span className = {color}></span>
            <span className = {color}></span>
            <span className = {color}></span>
        </button>
    );
}

export default NavToggle;