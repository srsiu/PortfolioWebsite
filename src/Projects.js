import React, { Component } from 'react';
import './homePage.css';
import uci from "./img/uci.png";
import Bubble from "./Bubble";
import lspire from "./img/lspire.PNG";
import fablix from "./img/fablix.png"

class Projects extends Component{
    render(){
        return(
            <div>
                <div className="project-section">
                    <div className="project-page-left-spacing">
                        <p className="experience-text">Projects</p>
                        <div className="project-block">
                            <div className="project-info">
                                <p className="project-title">Fablix Movies<br/> </p>
                                <p className="year-text">Mar 2020 - Present <br/></p>
                                <br/>
                                <div className="project-points">
                                    <p>A web app that helps users find new movies to buy and watch. Provides <br/>
                                    an extensive database of movies, actors, and genres for users to <br/>
                                    browse through. </p>
                                </div>
                                <div className="project-bubble-block">
                                    <Bubble btext={"Java"} nline={false}/>
                                    <Bubble btext={"MySQL"} nline={false}/>
                                    <Bubble btext={"Javascript"} nline={false}/>
                                    <Bubble btext={"HTML"} nline={false}/>
                                    <Bubble btext={"CSS"} nline={false}/>
                                    <Bubble btext={"Git"} nline={false}/>
                                    <div className="bubble-break"/>
                                    <Bubble btext={"AWS"} nline={false}/>
                                </div>
                            </div>
                            <img src={fablix} className="project-screenshot"/>
                            <div className="project-spacing"></div>
                            <div>
                                <p className="project-title">Fablix Movies<br/> </p>
                                <p className="year-text">Mar 2020 - Present <br/></p>
                                <br/>
                                <div className="project-points">
                                    <p>A web app that helps users find new movies to buy and watch. Provides <br/>
                                        an extensive database of movies, actors, and genres for users to <br/>
                                        browse through. </p>
                                </div>
                                <div className="project-bubble-block">
                                    <Bubble btext={"Java"} nline={false}/>
                                    <Bubble btext={"MySQL"} nline={false}/>
                                    <Bubble btext={"Javascript"} nline={false}/>
                                    <Bubble btext={"HTML"} nline={false}/>
                                    <Bubble btext={"CSS"} nline={false}/>
                                    <Bubble btext={"Git"} nline={false}/>
                                    <div className="bubble-break"/>
                                    <Bubble btext={"AWS"} nline={false}/>
                                </div>
                            </div>
                        </div>
                        <p className="education-header">Work Experience:</p>
                        <div className="uci-block">
                            <img  className="lspire-logo" src={lspire}/>
                            <p className="lspire-text">LSpire<br/> Software Engineering Intern</p>
                            <p className="year-text">Summer 2019 <br/> New York, NY</p>
                            <br/>
                            <p className="relevant-course">
                                Worked on the front-end team and helped create LSpire's version 2.0 <br/>
                                website.  Designed and coded various webpages to help connect real- <br/>
                                estate brokers to various property listings in New York.
                            </p>
                            <div className="bubble-block">
                                <Bubble btext={"Javascript"} nline={false}/>
                                <Bubble btext={"React"} nline={false}/>
                                <Bubble btext={"HTML"} nline={false}/>
                                <Bubble btext={"CSS"} nline={false}/>
                                <Bubble btext={"Git"} nline={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;