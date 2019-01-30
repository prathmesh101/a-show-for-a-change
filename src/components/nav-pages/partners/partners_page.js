import React, { Component } from 'react';
import BlockOdd from './p_block-odd';
import '../../../assets/css/partners/partners_page.css';
import caf from '../../../assets/img/partners/logos/CAF-logo.png';
import cf from '../../../assets/img/partners/logos/CV-logo.png';
import fd from '../../../assets/img/partners/logos/FD-logo.png';
import rescue from '../../../assets/img/partners/logos/IRC-logo.png';
import block1 from '../../../assets/img/partners/logos/block_img-1.jpg';
import block2 from '../../../assets/img/partners/logos/block_img-2.jpg';
import block3 from '../../../assets/img/partners/logos/block_img-3.jpg';
import block4 from '../../../assets/img/partners/logos/block_img-4.jpg';

class Partners extends Component {
    constructor(props){
        super(props);

        this.info = [
            {
                id: 1,
                name: 'Challenged Athletes Foundation',
                img: caf,
                info: 'The Challenged Athletes Foundation (CAF) provides opportunities and support to people with physical challenges, so they can pursue active lifestyles through physical fitness and competitive athletics. CAF believes that involvement in sports at any level increases self-esteem, encourages independence and enhances quality of life.',
                background: block1
            },
            {
                id: 2,
                name: 'Covenant House',
                img: cf,
                info: 'Covenant House provides housing and supportive services to youth facing homelessness. We help young people transform their lives and put them on a path to independence.',
                background: block2
            },
            {
                id: 3,
                name: 'First Descents',
                img: fd,
                info: 'First Descents provides life-changing, outdoor adventures for young adults impacted by cancer.',
                background: block3
            },
            {
                id:4,
                name: 'International Rescue Committee',
                img: rescue,
                info: 'IRC helps people whose lives and livelihoods are shattered by conflict and disaster to survive, recover and gain control of their future.',
                background: block4
            }
        ];
    }
    render(){

        const renderBlock = this.info.map((item, index) => {
            const { img, info, background } = item;
            return(
                <BlockOdd key={index} logo={img} text={info} backImg={background} num = {index} />
            );
            
        });

        return (
            <div className = "partners d-flex flex-column align-items-center">
                <div className="header">
                    <h1>Get to know our partnets</h1>

                    <p className="partner_desc">
                        <span>Movikarma strives to connect and develop long-term relationships with</span>
                        <span>non-profit partners, private foundations and other funders who share our</span>
                        <span>commitment to improving the world thourhg the power of story.</span>
                    </p>
                </div>
                {renderBlock}
            </div>
        );
    }
}

export default Partners;