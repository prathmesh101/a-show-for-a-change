import React from 'react';
import '../../../assets/css/partners/p_block-odd.css';

function BlockEven(props){
    // console.log(props);

    const { backImg, logo, text, num} = props;

    const reverse = (num % 2 !== 0) ? "row flex-row-reverse": "row";


    return (
        <div className="odd container-fluid" style = {{backgroundImage: `url(${backImg})`}}>
            <div className={reverse}>
                <div className="col-sm-3">
                    <div className="img_container mb-5">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="partner_info">
                        <p className="partner_desc">{text}</p>
                        <a href="#">visit website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockEven;