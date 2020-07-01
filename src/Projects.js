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
                                    <p>
                                        A web app that helps users find new movies to buy and watch. Provides <br/>
                                        an extensive database of movies, actors, and genres for users to <br/>
                                        browse through.
                                    </p>
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
                            <div className="project-info-right">
                                <p className="project-title">Wumpus World <br/> </p>
                                <p className="year-text">Feb 2020 - Apr 2020<br/></p>
                                <br/>
                                <div className="project-points">
                                    <p>
                                        A 2-d artifically intelligent simulation of the survival/obstacle course game called<br/>
                                        Wumpus World.  Received 10th place out of 167 teams in class tournament. <br/>
                                    </p>
                                </div>
                                <div className="project-bubble-block">
                                    <Bubble btext={"Python"} nline={false}/>
                                    <Bubble btext={"Linux"} nline={false}/>
                                    <Bubble btext={"Git"} nline={false}/>
                                    <div className="bubble-break"/>
                                </div>
                            </div>
                            <div className="project-spacing"></div>
                            <div className="project-info">
                                <p className="project-title">Search UC Irvine<br/> </p>
                                <p className="year-text">May 2019 - Jun 2019<br/></p>
                                <br/>
                                <div className="project-points">
                                    <p>
                                        An instant search engine (&lt;2sec) to help users find webpages relating<br/>
                                        to UC Irvine.  Utilizes an extensive database of webpages to help users find<br/>
                                        the information they are seeking.
                                    </p>
                                </div>
                                <div className="project-bubble-block">
                                    <Bubble btext={"Java"} nline={false}/>
                                    <Bubble btext={"MySQL"} nline={false}/>
                                    <Bubble btext={"Javascript"} nline={false}/>
                                    <Bubble btext={"HTML"} nline={false}/>
                                    <Bubble btext={"CSS"} nline={false}/>
                                    <Bubble btext={"Git"} nline={false}/>
                                    <div className="bubble-break"/>
                                </div>
                            </div>
                            <img src={fablix} className="project-screenshot"/>
                            <div className="other-projects-section">
                                <p className="other-proj-header">Other Noteworthy Projects</p>
                                <div className="horizontal-row">
                                    <div className="single-proj">
                                        <p className="single-proj-title">Casino Craps</p>
                                        <p className="single-proj-text">
                                            A multi-threaded program that can <br/>run 5 simulations at once of the <br/>
                                            casino game craps. Game statistics <br/>
                                            are tracked across all 5 games and <br/>
                                            are totaled to output the best/avg/ <br/>
                                            worse games.
                                        </p>
                                        <div className="single-proj-bblock">
                                            <Bubble btext={"Java"} nline={false}/>
                                            <Bubble btext={"Git"} nline={false}/>
                                            <div className="bubble-break"/>
                                        </div>
                                    </div>
                                    <div className="single-proj">
                                        <p className="single-proj-title">Fault Finder</p>
                                        <p className="single-proj-text">
                                            A program that predicts buggy lines of code in a codebase.  Creates <br/>
                                            an excel/csv file displaying the percent likelihood of bugs in the <br/>
                                            source code.
                                        </p>
                                        <div className="single-proj-bblock">
                                            <Bubble btext={"Python"} nline={false}/>
                                            <Bubble btext={"Linux"} nline={false}/>
                                            <Bubble btext={"Git"} nline={false}/>
                                            <div className="bubble-break"/>
                                        </div>
                                    </div>
                                    <div className="single-proj">
                                        <p className="single-proj-title">MapQuest GPS</p>
                                        <p className="single-proj-text">
                                            A GPS program that builds on top of MapQuest API to help users learn more<br/>
                                            about their route to destination. Finds <br/> useful  data like longitude/latitude/etc. <br/>
                                            to inform users.
                                        </p>
                                        <div className="single-proj-bblock">
                                            <Bubble btext={"Python"} nline={false}/>
                                            <Bubble btext={"Git"} nline={false}/>
                                            <div className="bubble-break"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="horizontal-row">
                                    <div className="single-proj">
                                        <p className="single-proj-title">Class Royale</p>
                                        <p className="single-proj-text">
                                            A program that is modeled after the popular mobile game Clash Royale.<br/>
                                            Built for the web, users can explore <br/>
                                            new units and tactics. All art used was <br/>
                                            hand-drawn.
                                        </p>
                                        <div className="single-proj-bblock">
                                            <Bubble btext={"Java"} nline={false}/>
                                            <Bubble btext={"Git"} nline={false}/>
                                            <div className="bubble-break"/>
                                        </div>
                                    </div>
                                    <div className="single-proj">
                                        <p className="single-proj-title">Space Hunter</p>
                                        <p className="single-proj-text">
                                            A fun survival game where users try <br/>
                                            to avoid enemy units in a 2-d world.<br/>
                                            There are a variety of roles to play<br/>
                                            and learn.
                                        </p>
                                        <div className="single-proj-bblock">
                                            <div className="bubble-break"/>
                                            <Bubble btext={"Python"} nline={false}/>
                                            <Bubble btext={"Git"} nline={false}/>
                                            <div className="bubble-break"/>
                                        </div>
                                    </div>
                                    <div className="single-proj">
                                        <p className="single-proj-title">Photo Gallery</p>
                                        <p className="single-proj-text">
                                            A simple program that displays pictures  <br/> in a slideshow.  Users
                                            can upload their <br/> personal photos and see them on <br/>
                                            the site.
                                        </p>
                                        <div className="single-proj-bblock">
                                            <Bubble btext={"Java"} nline={false}/>
                                            <Bubble btext={"Javascript"} nline={false}/>
                                            <Bubble btext={"HTML"} nline={false}/>
                                            <div className="bubble-break"/>
                                            <Bubble btext={"CSS"} nline={false}/>
                                            <div className="bubble-break"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;