import React from 'react';
import '../../../assets/css/partners/p_block-odd.css';
import CAF from '../../../assets/img/partners/logos/CAF-logo.png';

function BlockEven(props){
    console.log(props);

    const { backImg, logo, text} = props;


    return (
        <div className="odd container-fluid" style = {{backgroundImage: `url(${props.backImg})`}}>
            <div className="row flex-row-reverse"> {/* if even = "", odd = "flex-row-reverse"*/}
                <div className="col-sm-3">
                    <div className="img_container">
                        <img src={props.logo} alt=""/>
                    </div>
                    <div className="partner_info">
                        <p>{props.text}</p>
                        <a href="#">visit website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockEven;