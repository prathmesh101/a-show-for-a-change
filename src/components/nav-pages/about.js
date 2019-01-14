import React from 'react';
import { Link } from 'react-router-dom';
import alex from '../../assets/img/emp-imgs/alex.jpg';
import daniel from '../../assets/img/emp-imgs/daniel.jpg';
import jared from '../../assets/img/emp-imgs/jared.jpg';
import prathmesh from '../../assets/img/emp-imgs/prathmesh.jpg';
import sivak from '../../assets/img/emp-imgs/sivak.jpg';
import aboutImg from '../../assets/img/about-us-img.jpg';

import '../../assets/css/about.css';

const employees = [
    {
        name: 'Jared Milrad, J.D.,M.S.',
        position: 'FOUNDER AND PRESIDENT',
        blurb: "Jared Milrad is a seasoned entrepreneurial leader adept at launching innovative projects and achieving tangible results. An accomplished filmmaker, advocate, and entrepreneur with more than 10 million views worldwide, Jared worked for President Barack Obama and served in The White House, founded a nationally recognized non-profit organization supported by Warren Buffett's family foundation, and appeared in Hillary Clinton's historic presidential campaign commercials ('Getting Started, ' 'Equal'). He has been profiled by dozens of media outlets around the world, including The New York Times, The Chicago Tribune, BBC News, The Guardian, The Times of London, TIME, MSNBC, CBS, NBC, and ABC News.Jared received performance training at the prestigious The Second City Chicago and the Howard Fine Acting Studio in Hollywood. He is a proud member of the Screen Actors Guild and AFTRA (SAG-AFTRA) and Summit Series, a curated community of creative entrepreneurs and innovators.Jared holds a law degree from Northeastern University School of Law, a graduate degree from Tufts University, and an undergraduate degree with highest honors from North Carolina State University. Jared lives in Long Beach, CA, where he was a first-time candidate for City Council in 2018. Jared and his husband, Nate, are proud parents of their adopted dog, Oliver."
    },
    {
        name: 'Daniel Yeh',
        position: 'CHIEF MARKETING AND BUSINESS DEVELOPMENT OFFICER',
        blurb: "Daniel Yeh is a seasoned professional and entrepreneur with extensive domestic and international business experience. Daniel knows what it takes to build a successful company. He has been associated with multiple successful companies - MySimon, MySpace, and Fandango are just a few. Daniel is an activist and philanthropist. He believes strongly in doing charitable deeds to make our world a better place. His contributions include building and funding a clean water well in Ghana and reducing child mortality by providing nutrition and immunization to those in need. Daniel is a proud UCLA Bruin who enjoys running and traveling. He looks forward to the next adventure with his wife and son."
    },
    {
        name: 'David Martinez',
        position: 'SENIOR DESIGNER',
        blurb: "David Martinez is a seasoned creative who has designed for a variety of startups and local government. He has worked for many notable entities including: Silicon Grail (acquired by Apple), Prosum Information Technology (started their web design team), Dynamics Direct (built multimedia campaigns for fortune 500 companies), Legalzoom (first resident designer), GameFly (designed emails and landing pages), Pictage (optimized their software subscription service), HarborFreight.com (eCommerce redesign and UX), Velocify.com (lead management and UX) and iRise.com (prototyping and UX). Then he went on to consult with the City of Los Angeles helping them redesign legacy software for Building and Safety, and most recently contracted with Cloud Cover Music to enhance their acquisition strategies. David now finds himself helping Nonprofits and For-Profits with the goals of social good, justice and improving the health of the planet. David resides in Long Beach, CA with his wife, two children and dog Sugar. Outside of raising his family, he enjoys mentoring designers and UX professionals through Facebook’s Designers Guild, guest lecturing at LATTC’s Visual Communications Program and renovating his home."
    },
    {
        name: 'Sivak Khodaverdian',
        position: 'BACK-END DEVELOPER',
        blurb: "Sivak Khodaverdian has been involved in web development for the last 7 years. He enjoys programming in new technologies and creating systems that are useful and easy to use. In addition to software development, Sivak is passionate about social issues and interested to find out how to best help the disenfranchised so that they also benefit from a society's progress. He holds a B.S. in Computer Science from San Francisco State University."
    },
    {
        name: 'Prathmesh Pardiye',
        position: 'FRONT-END DEVELOPER/DESIGNER',
        blurb: "A creator with a passion to develop dynamic websites and android applications. Prath enjoys technology. Prath tries to put himself into places where he is a little fish in a big pond; he’s always learning. Born in Mumbai, India (also called as “Land of Bollywood”), Prath earned a Bachelors of Engineering in Computer Science from Mumbai University. Prath worked as a front-end developer in a digital marketing firm and created dynamic websites for various clients and small companies in India. Prath wanted to gain proficiency in Full Stack and Android Development, so he moved to California and graduated with a Master's Degree in Computer Science. Pursuing blogging as a hobby, Prath has written blogs regarding lifestyle and web development. He loves watching movies, short films or web series with a social message. Prath enjoys playing team sports like soccer, badminton and online team sports like Counter-Strike, DOTA, Fortnite, because he believes in growing together."
    },
    {
        name: 'Alia Wilkinson',
        position: 'BACK-END DEVELOPER',
        blurb: "Alia Wilkinson is a tenacious software developer. An accomplished leader, creator, and team member who has successfully helped to increase revenue on multiple small teams, Alia worked for several large telecommunications companies as a design engineer before heading to Colombia to teach English in a disadvantaged public school. Since returning, she has pursued a full time career in software development, building full stack projects for radio stations, authors, and other small businesses. She has a blog where she mostly covers tech events in Southern California and Travel called aliarightnow.com. She also makes tutorials for achieving stunning make up looks using cruelty free cosmetics under the handle 'cosmicspaceadventure'. Alia received her degrees in Science, Technology, and Society (STS) and Geographic Information Systems (GIS) at Cal Poly, as well as completed an accelerated Computer Science program at Learning Fuze in Irvine, California. She is a proud member of the honor society for National Leadership and Success, Society of Women Engineers (SWE), and likes to volunteer for Habitat for Humanity in her spare time. A San Diego native, Alia now lives in Anaheim, CA, with her partner, Christian, and their two computers. "
    },
    {
        name: 'Alex Choi',
        position: 'JUNIOR FRONT-END DEVELOPER/DESIGNER',
        blurb: "Alex Choi is a front-end specialist on a mission to promote effective altruism. He lives to learn new skills while tackling complex challenges. With his past startup experiences in content marketing, Alex understands how to effectively capture an audience's attention and deliver a clear message in an increasingly distracting world. Alex currently resides in sunny Los Angeles. If he's not hunched over his laptop you can probably catch him shooting some hoops or listening to music."
    }
]

const About = () => {
    const employeesProfiles = employees.map((employee, index) => {
        return (
            <div key={index} className="employee-cont">
                <h3>{employee['name']}</h3>
                <div className="person-cont">

                    <img src={employee['img']} />

                </div>
                <p>
                    {employee['blurb']}
                </p>
            </div>
        )
    });

    return (


        <div className="row">

            <div className="about-header col-xs-12">
                <div className="header-about-info">
                    <h1 className="header-text">Who are we ?</h1>
                    <h5 className="header-para">A Show For A Change is a socially conscious entertainment company that changes the world through the power of story.<br/> We believe that by learning about the world around us and giving audiences the tools to act, we can make the world a better place</h5>
                </div>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <circle fill="white" cx="0" cy="100" r="100" />
                        <circle fill="white" cx="200" cy="100" r="100" />
                      </svg>


            </div>

  <div id="about" className="about-area area-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline text-center">
            <h2>About us</h2>
          </div>
        </div>
      </div>
      <div className="row about-us-content">

        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="well-left">
            <div className="single-well">

                                  <img src={aboutImg} alt="" className="about-img"/>

            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="well-middle">
            <div className="single-well">

                <h4 className="sec-head">What we do ?</h4>

              <p>
Through exclusive partnerships with filmmakers, influencers, non-profits, and brands, we create and curate meaningful, impactful films and series on a mobile platform that inspires change - and we give audiences the tools to make a difference. By donating, volunteering, and supporting independent filmmakers, our engaged audience unlocks the power of story to accelerate charitable giving and global impact.
              </p>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>







    <div className="employees">
                <h2>Meet our Team</h2>
                {employeesProfiles}
            </div>
        </div>



    )
}

export default About;
/* Frame */