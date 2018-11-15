import React from 'react';
import { Link } from 'react-router-dom';
import cumpleanera from '../../assets/img/project-imgs/cumpleanera.jpg';
import marriage from '../../assets/img/project-imgs/marriage.jpg';
import officeParty from '../../assets/img/project-imgs/office-party.jpg';
import hurryWait from '../../assets/img/project-imgs/hurry-wait.jpg';
import oneTwenty from '../../assets/img/project-imgs/12017.jpg';

const projInfo = [
    {
        name: "Cumpleañera", 
        writers: "WRITTEN AND DIRECTED BY JARED MILRAD", 
        img: cumpleanera, 
        synopsis: "On her thirteenth birthday, Gabriela Morales is given a magical heirloom that could change her family’s future.", starring: "Starring Amaya Guerrero, Hugo Carbajal, Addison Gibbs, Ruby Pedroza, Jared Milrad, and Daniel Peera",
        starring: "Starring Amaya Guerrero, Hugo Carbajal, Addison Gibbs, Ruby Pedroza, Jared Milrad, and Daniel Peera",
        availability: "Coming Soon!",
        videoLink: ''
    },
    {
        name: "Marriage",
        writers: "WRITTEN & DIRECTED BY JARED MILRAD",
        img: marriage,
        synopsis: "Driving separately to their cousin's wedding, two married couples have similar arguments that unearth universal truths about love, forgiveness, and commitment.",
        starring: "Starring Jared Milrad, Nathan Johnson, Kiana Madani, and Geoffrey Hymers.",
        availability: "Now Streaming on Amazon, Apple TV, Roku, and Chromecast",
        videoLink: "https://youtu.be/zT-OVd-0veY"
    },
    {
        name: "1.20.17",
        writers: "WRITTEN & DIRECTED BY JARED MILRAD",
        img: oneTwenty,
        synopsis: "After barricading themselves inside a house, three friends - Sara (Kiana Madani), Aaron (Jared Milrad), and Damon (Uche Uba) - must decide whether and how to reenter a world they fear has changed forever.",
        starring: "",
        availability: "Now Streaming: Amazon, Apple TV, Roku, and Chromecast",
        videoLink:"https://youtu.be/ocxh45xGKoQ"
    },
    {
        name: "Office Party",
        writers: "WRITTEN BY JARED MILRAD | DIRECTED BY LISA NICOLE LENNOX",
        img: officeParty,
        synopsis: "OFFICE PARTY tells the story of Tom (Josh Trant) and Jack (Jared Milrad), two co-workers tired of the same old corporate routine. Today is the day when they shake things up.",
        starring: "",
        availability: "Now Streaming: Amazon",
        videoLink: "https://youtu.be/nvMnjxz8Uwc"
    },
    {
        name: "Hurry Up and Wait",
        writers: "WRITTEN BY JARED MILRAD | DIRECTED BY SARAH FRANKE",
        img: hurryWait,
        synopsis: "Based on true stories, Hurry Up & Wait examines the intersecting lives of 8 diverse and driven young entrepreneurs trying to make it in Hollywood.",
        starring: "",
        availability: "Now Streaming: Amazon, Apple TV, Roku, and Chromecast",
        videoLink: "https://youtu.be/W2yMotKdsXs"
    }
]

const Projects = () => {
    return (
        <div>
            <h1>From short films to web series to features, we're committed to telling stories that engage, provoke, and inspire.</h1>
            <h1>Browse through our latest projects below!</h1>
        </div>
    )
}

export default Projects;
