import React from 'react';

import '../../../assets/css/navigation/sidenav.css';

function SideNav (props){

    let sideNavClasses = 'sideNav';
    if(props.open){
        sideNavClasses = 'sideNav open';
    }

    return (
        <nav className = {sideNavClasses}>
            <ul>
                <li><a href="#">one</a></li>
                <li><a href="#">two</a></li>
                <li><a href="#">three</a></li>
            </ul>
        </nav>
    );
}

export default SideNav;
