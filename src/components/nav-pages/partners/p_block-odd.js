import React from 'react';
import '../../../assets/css/partners/p_block-odd.css';
import CAF from '../../../assets/img/partners/logos/CAF-logo.png';

function BlockEven(props){
    console.log(props);
    console.log(props.var[0].name);
    return (
        <div className="odd container-fluid">
            <div className="row flex-row-reverse">
                <div className="col-sm-3">
                    <div className="img_container">
                        <img src={CAF} alt=""/>
                    </div>
                    <div className="partner_info">
                        <p>{props.var[0].info}</p>
                        <a href="#">visit website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockEven;