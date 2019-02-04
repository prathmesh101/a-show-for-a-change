import React from 'react';
import { Link } from 'react-router-dom';
import nancy from '../../assets/img/emp-imgs/Nancy.jpg';
import daniel from '../../assets/img/emp-imgs/daniel.jpg';
import jared from '../../assets/img/emp-imgs/jared.jpg';
import prathmesh from '../../assets/img/emp-imgs/prathmesh.jpg';
import sivak from '../../assets/img/emp-imgs/sivak.jpg';
import aboutImg from '../../assets/img/about-us-img.jpg';
import teamPhoto from '../../assets/img/team_front_of_house.jpg';

import '../../assets/css/about.css';

const employees = [
    {
        name: 'Jared Milrad, J.D.,M.S.',
        img: jared,
        position: 'FOUNDER AND PRESIDENT',
        blurb: "Jared Milrad is a seasoned entrepreneurial leader adept at launching innovative projects and achieving tangible results. An accomplished filmmaker, advocate, and entrepreneur with more than 10 million views worldwide, Jared worked for President Barack Obama and served in The White House, founded a nationally recognized non-profit organization supported by Warren Buffett's family foundation, and appeared in Hillary Clinton's historic presidential campaign commercials ('Getting Started, ' 'Equal'). He has been profiled by dozens of media outlets around the world, including The New York Times, The Chicago Tribune, BBC News, The Guardian, The Times of London, TIME, MSNBC, CBS, NBC, and ABC News.Jared received performance training at the prestigious The Second City Chicago and the Howard Fine Acting Studio in Hollywood. He is a proud member of the Screen Actors Guild and AFTRA (SAG-AFTRA) and Summit Series, a curated community of creative entrepreneurs and innovators.Jared holds a law degree from Northeastern University School of Law, a graduate degree from Tufts University, and an undergraduate degree with highest honors from North Carolina State University. Jared lives in Long Beach, CA, where he was a first-time candidate for City Council in 2018. Jared and his husband, Nate, are proud parents of their adopted dog, Oliver."
    },
    {
        name: 'Daniel Yeh',
        img: daniel,
        position: 'CHIEF MARKETING AND BUSINESS DEVELOPMENT OFFICER',
        blurb: "Daniel Yeh is a seasoned professional and entrepreneur with extensive domestic and international business experience. Daniel knows what it takes to build a successful company. He has been associated with multiple successful companies - MySimon, MySpace, and Fandango are just a few. Daniel is an activist and philanthropist. He believes strongly in doing charitable deeds to make our world a better place. His contributions include building and funding a clean water well in Ghana and reducing child mortality by providing nutrition and immunization to those in need. Daniel is a proud UCLA Bruin who enjoys running and traveling. He looks forward to the next adventure with his wife and son."
    },
    {
        name: 'Sivak Khodaverdian',
        img: sivak,
        position: 'BACK-END DEVELOPER',
        blurb: "Sivak Khodaverdian has been involved in web development for the last 7 years. He enjoys programming in new technologies and creating systems that are useful and easy to use. In addition to software development, Sivak is passionate about social issues and interested to find out how to best help the disenfranchised so that they also benefit from a society's progress. He holds a B.S. in Computer Science from San Francisco State University."
    },
    {
        name: 'Nancy Cadena',
        img: nancy,
        position: 'Senior UI/UX Designer',
        blurb: "Nancy Cadena is a designer with over 7 years of experience in the advertisement and entertainment industry. Born in Mexico, she has worked with renowned names such as Nestlé Waters México, Salesforce, Electronic Arts and, most recently, PlayStation. You can see some of her work at nancadena.com. Nancy’s a big advocate of simple, clean, and honest user-centered design solutions. She enjoys good stories and has way too many tabs open on her browser at all times."
    },
    {
        name: 'Prathmesh Pardiye',
        img: prathmesh,
        position: 'FRONT-END DEVELOPER/DESIGNER',
        blurb: "A creator with a passion to develop dynamic websites and android applications. Prath enjoys technology. Prath tries to put himself into places where he is a little fish in a big pond; he’s always learning. Born in Mumbai, India (also called as “Land of Bollywood”), Prath earned a Bachelors of Engineering in Computer Science from Mumbai University. Prath worked as a front-end developer in a digital marketing firm and created dynamic websites for various clients and small companies in India. Prath wanted to gain proficiency in Full Stack and Android Development, so he moved to California and graduated with a Master's Degree in Computer Science. Pursuing blogging as a hobby, Prath has written blogs regarding lifestyle and web development. He loves watching movies, short films or web series with a social message. Prath enjoys playing team sports like soccer, badminton and online team sports like Counter-Strike, DOTA, Fortnite, because he believes in growing together."
    }
]

const About = () => {
    const employeesProfiles = employees.map((employee, index) => {
        return (
            <div className="div-employee">
                <div key={index} className="div-employeeContent">
                    <div className="employee-text">
                        <h3>{employee.name}</h3>
                        <h5>{employee.position}</h5>
                        <p>{employee.blurb}</p>
                    </div>
                    { index % 2 === 0 ? 
                        <img src={employee.img} className="imgEmployee"/>
                        :
                        <img src={employee.img} className="imgEmployee"/>
                    }
                </div>
            </div>
        )
    });

    return (

        <div>
            <div className="row">
                <section className="hero_poster">
                    <div><h1 className="hero_text">Movikarma works with mission-driven storytellers and charitable partners to change the world.</h1></div>
                    <div><p className="hero-subtext">Learn about us below!</p></div>
                </section>
            </div>

            <div className="row">
                <div className="employees">
                    <h2>Meet our Team</h2>
                    <div className="profiles">
                      {employeesProfiles}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
/* Frame */