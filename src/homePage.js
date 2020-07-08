import React, { Component } from 'react';
import './homePage.css';
import Button from "./Button";
import Button2 from "./Button2";

import SimpleSlider from "./SimpleSlider";
import PortraitSlider from "./PortraitSlider";
import computer2 from "./img/computerscreen2.jpg"
import gradpic from "./img/gradpic.JPG";
import SideImage from "./SideImage";
import fieldpic from "./img/fieldpic.JPG";
import funnelpic from "./img/funnelcake.jpg";
import arms from "./img/arms.JPG";
import hard from "./img/hard.JPG";
import sf from "./img/sf.JPG";
import sunset from "./img/sunset.JPG";


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
                            <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
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
                                    When I'm not coding, you'll find me playing video games, watching
                                    Netflix, giving haircuts, or playing tennis.
                                </p>
                                <Button2 button_text={"See My Experience"} link_text={"/experience"}/>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
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