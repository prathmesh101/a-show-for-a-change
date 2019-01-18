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
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fugiat doloremque perferendis, cupiditate quasi voluptatum?',
                background: block1
            },
            {
                id: 2,
                name: 'Covenant House',
                img: cf,
                info: 'covenant house Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sit repellendus atque',
                background: block2
            },
            {
                id: 3,
                name: 'First Descents',
                img: fd,
                info: 'first descents Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sit repellendus atque',
                background: block3
            },
            {
                id:4,
                name: 'International Rescue Committee',
                img: rescue,
                info: 'international rescue committee Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sit repellendus atque',
                background: block4
            }
        ];
    }
    render(){

        const renderBlock = this.info.map((item, index) => {
            const { img, info, background } = item;
            return(
                <BlockOdd key={index} logo={img} text={info} backImg={background} />
            );
            
        });

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
                {/*<BlockOdd background = {block1} logo = {caf} info = {this.info[0].info}/>*/}
                {renderBlock}
            </div>
        );
    }
}

export default Partners;