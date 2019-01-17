import React, { Component } from 'react';
import BlockOdd from './p_block-odd';
import '../../../assets/css/partners/partners_page.css';

class Partners extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className = "partners d-flex flex-column align-items-center">
                <div className="header">
                    <h1>Get to know our partnets</h1>
                    <p>
                        <span>Sage Ape strives to connect and develop long-term relationships with</span>
                        <span>non-profit partners, private foundations and other funders who share our</span>
                        <span>commitment to improving the world thourhg the power of story.</span>
                    </p>
                </div>
                <BlockOdd/>
            </div>
        );
    }
}

export default Partners;