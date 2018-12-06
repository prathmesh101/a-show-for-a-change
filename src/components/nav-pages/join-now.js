import React from 'react';
import '../../assets/css/join-now.css';
import { Link } from 'react-router-dom';

const JoinNow = () => {
    return (
        <div>
        <div className="join-now text-center">
                        <p id="headerText">Watch. Learn. Give.</p>
                        <p id="headerParagraph">Sage Ape offers a growing array of socially and environmentally responsible short films, and allows you to donate to the causes closest to your heart.</p>
                        <div className="div-buttonWatchFree">
                            <a href="/sign-up"><button id="buttonGreen">WATCH FREE FOR 30 DAYS</button></a>
                        </div>
                        
                        
                    </div>          

        </div>
    )
}

export default JoinNow;

