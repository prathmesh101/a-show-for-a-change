import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/film-festival.css';
import filmFestival from '../../assets/img/film-festival.jpg';

const FilmFestival = () => {
    return (
        <div>
            <div>
            <h1>A Show For A Change Film Festival</h1>
            <img className="film-fest-img" src={filmFestival}/>
            <button className="btn proj-btn">
                Submit Your Project
            </button>
            </div>
            <p>
                Our unique, year-round film festival celebrates socially conscious content that inspires, illuminates, and engages audiences in the transformative power of story.

            </p>
            <p>
                At A Show For A Change, we believe that the best films provoke us to think, feel, connect, and act. We are impatient advocates for change, brave artists for good, and fierce champions for building a better world - and our festival celebrates these values in action.
            </p>

            <p>We are now accepting short and feature films, webseries and webisodes, and virtual reality projects for consideration that have a socially conscious message and the potential for substantial social impact, in addition to being compelling visual works on their own. Each month, we will recognize extraordinary projects that have human rights, animal rights, and environmental protection themes, and we will partner selected filmmakers with leading non-profit organizations making a difference in these areas.</p>
            <p>We are also pleased to offer all entrants to our festival <strong>exclusive distribution opportunities</strong>. Each month, our filmmakers will have the opportunity for worldwide distribution on all digital platforms, inflight film distribution, global exposure, and access to featured film festivals. Send us an email to learn more after applying to our festival.</p>  
            <p>With an affordable and accessible festival model designed to maximize exposure and social impact, we encourage filmmakers of all backgrounds and experience levels to apply to our festival each month. We look forward to reviewing your projects!</p>

        </div>
    )
}

export default FilmFestival;
