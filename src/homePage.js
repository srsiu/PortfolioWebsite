import React, { Component } from 'react';
import './homePage.css';
import Button from "./Button";
import Button2 from "./Button2";

import SimpleSlider from "./SimpleSlider";
import PortraitSlider from "./PortraitSlider";


class HomePage extends Component{
    render(){
        return(
            <div>
                <SimpleSlider/>
                <div className="container-fluid">
                    <div className="row jumbotron">
                       <div className="col-xs-12 col-md-9">
                           <p className="short-intro-font">
                               Welcome to my portfolio! I'm a software engineer from the San Francisco Bay Area.  I love
                               to work on websites, mobile apps, and everything in between. Feel free to
                               connect with me at srsiu@uci.edu
                           </p>
                       </div>
                        <div className="col-xs-12 col-md-3">
                            <Button2 button_text={"Connect With Me"} link_text={"/contact"}/>
                        </div>
                        <hr className="my-4"></hr>
                    </div>
                    <div className="container-fluid padding">
                        <div className="row padding">
                            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-9">
                                <p className="about-me-header">About Me</p>
                                <br/>
                                <p className="about-me-paragraph-text">Hi! I'm Spencer, a software engineer based in the beautiful.
                                    San Francisco Bay Area. I enjoy coding fun projects that I can share with others.  Whether it
                                    be elegant web apps or simple 2-d games, my goal is to create an enjoyable experience for people.
                                    <br/><br/>
                                    I attended the University of California Irvine, where I received an invaluable education. I learned
                                    many tools to succeed not only in the workplace, but also in life in general.
                                    Click on the "experience" tab to see what skills and technologies I learned at UCI!
                                    <br/><br/>
                                    I've had the opportunity to intern at LSpire over the summer of 2019 where I worked on the front-end
                                    developement team.  Learning React during that internship helped me create this portfolio you see
                                    today.
                                    <br/><br/>
                                    When I'm not coding, you'll find me playing Call of Duty Warzone, watching
                                    Netflix, giving haircuts, or playing tennis.
                                </p>
                                <Button2 button_text={"See My Experience"} link_text={"/experience"}/>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-3">
                                <PortraitSlider/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;