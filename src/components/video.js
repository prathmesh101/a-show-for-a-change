
import React from 'react';
import { Link } from 'react-router-dom';

const Partners = () => {
    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <div className="row">
                <div className="col-sm-12">
                    <video width="100%" height="100%" controls>
                        {/* <source src='rtmp://svwcemwuccxl1.cloudfront.net/cfx/st/hurry.mp4' type='video/mp4' /> */}
                        <source src='http://dl1cz9lqgee4z.cloudfront.net/Cumplaneara.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Partners;


