import React, { Component } from 'react';
import './homePage.css';
import Bubble from "./Bubble";
import fablix from "./img/fablix.png"

class Projects extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row padding">
                        <div className="col-12">
                            <p className="experience-text">Projects</p>
                        </div>
                    </div>
                    <div className="row padding">
                        <div className="col-md-12 col-lg-6">
                            <div className="row padding">
                                <div className="col-xs-12 col-md-6">
                                    <p className="project-title">Fablix Movies<br/> </p>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <p className="year-text">Mar 2020 - Present <br/></p>
                                </div>
                            </div>
                            <div className="row padding-b">
                                <div className="col-xs-12 col-md-12">
                                    <p className="project-points">
                                        A web app that helps users find new movies to buy and watch. Provides
                                        an extensive database of movies, actors, and genres for users to
                                        browse through.
                                    </p>
                                </div>
                            </div>
                            <div className="row padding-b">
                                <div className="col-xs-12 col-md-12">
                                    <Bubble btext={"Java"} nline={false}/>
                                    <Bubble btext={"MySQL"} nline={false}/>
                                    <Bubble btext={"Javascript"} nline={false}/>
                                    <Bubble btext={"HTML"} nline={false}/>
                                    <Bubble btext={"CSS"} nline={false}/>
                                    <Bubble btext={"Git"} nline={false}/>
                                    <Bubble btext={"AWS"} nline={false}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <img src={fablix} className="project-screenshot"/>
                        </div>
                    </div>
                </div>

                <div className="container padding">
                    <div className="row padding">
                        <div className="col-md-12 col-lg-6">
                            <img src={fablix} className="project-screenshot"/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="row padding">
                                <div className="col-xs-12 col-md-6">
                                    <p className="project-title">Wumpus World <br/> </p>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <p className="year-text">Feb 2020 - Apr 2020<br/></p>
                                </div>
                            </div>
                            <div className="row padding-b">
                                <div className="col-xs-12 col-md-12">
                                    <p className="project-points">
                                        A 2-d artifically intelligent simulation of the survival/obstacle course game called
                                        Wumpus World.  Received 10th place out of 167 teams in class tournament.
                                    </p>
                                </div>
                            </div>
                            <div className="row padding-b">
                                <div className="col-xs-12 col-md-12">
                                    <Bubble btext={"Python"} nline={false}/>
                                    <Bubble btext={"Linux"} nline={false}/>
                                    <Bubble btext={"Git"} nline={false}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container padding">
                    <div className="row padding">
                        <div className="col-md-12 col-lg-6">
                            <div className="row padding">
                                <div className="col-xs-12 col-md-6">
                                    <p className="project-title">Search UC Irvine<br/> </p>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <p className="year-text">May 2019 - Jun 2019<br/></p>
                                </div>
                            </div>
                            <div className="row padding-b">
                                <div className="col-xs-12 col-md-12">
                                    <p className="project-points">
                                        An instant search engine (&lt;2sec) to help users find webpages relating
                                        to UC Irvine.  Utilizes an extensive database of webpages to help users find
                                        the information they are seeking.
                                    </p>
                                </div>
                            </div>
                            <div className="row padding-b">
                                <div className="col-xs-12 col-md-12">
                                    <Bubble btext={"Python"} nline={false}/>
                                    <Bubble btext={"Linux"} nline={false}/>
                                    <Bubble btext={"Git"} nline={false}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <img src={fablix} className="project-screenshot"/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row padding">
                        <div className="col-12 text-center">
                            <p className="other-proj-header">Other Notable Projects</p>
                        </div>
                    </div>
                    <div className="row padding">
                        <div className="col-lg-4">
                            <div className="single-proj card">
                                <div className="card-body">
                                    <p className="single-proj-title">Casino Craps</p>
                                    <p className="single-proj-text">
                                        A multi-threaded program that can run 5 simulations at once of the
                                        casino game craps. Game statistics are tracked across all 5 games and
                                        are totaled to output the best/avg/worse games.
                                    </p>
                                    <div className="single-proj-bblock padding">
                                        <Bubble btext={"Java"} nline={false}/>
                                        <Bubble btext={"Git"} nline={false}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-proj card">
                                <div className="card-body">
                                    <p className="single-proj-title">Fault Finder</p>
                                    <p className="single-proj-text">
                                        A program that predicts buggy lines of code in a codebase.  Creates
                                        an excel/csv file displaying the percent likelihood of bugs in the
                                        source code.
                                    </p>
                                    <div className="single-proj-bblock">
                                        <Bubble btext={"Python"} nline={false}/>
                                        <Bubble btext={"Linux"} nline={false}/>
                                        <Bubble btext={"Git"} nline={false}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-proj card">
                                <div className="card-body">
                                    <p className="single-proj-title">MapQuest GPS</p>
                                    <p className="single-proj-text">
                                        A GPS program that builds on top of MapQuest API to help users learn more
                                        about their route to destination. Finds useful  data like longitude/latitude/etc.
                                        to inform users.
                                    </p>
                                    <div className="single-proj-bblock">
                                        <Bubble btext={"Python"} nline={false}/>
                                        <Bubble btext={"Git"} nline={false}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row padding">
                        <div className="col-lg-4">
                            <div className="single-proj card">
                                <div className="card-body">
                                    <p className="single-proj-title">Class Royale</p>
                                    <p className="single-proj-text">
                                        A program that is modeled after the popular mobile game Clash Royale.
                                        Built for the web, users can explore new units and tactics. All art used was
                                        hand-drawn.
                                    </p>
                                    <div className="single-proj-bblock">
                                        <Bubble btext={"Java"} nline={false}/>
                                        <Bubble btext={"Git"} nline={false}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-proj card">
                                <div className="card-body">
                                    <p className="single-proj-title">Space Hunter</p>
                                    <p className="single-proj-text">
                                        A fun survival game where users try
                                        to avoid enemy units in a 2-d world.
                                        There are a variety of roles to play
                                        and learn.
                                    </p>
                                    <div className="single-proj-bblock">
                                        <Bubble btext={"Python"} nline={false}/>
                                        <Bubble btext={"Git"} nline={false}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-proj card">
                                <div className="card-body">
                                    <p className="single-proj-title">Photo Gallery</p>
                                    <p className="single-proj-text">
                                        A simple program that displays pictures in a slideshow.  Users
                                        can upload their personal photos and see them on the site.
                                    </p>
                                    <div className="single-proj-bblock">
                                        <Bubble btext={"Java"} nline={false}/>
                                        <Bubble btext={"Javascript"} nline={false}/>
                                        <Bubble btext={"HTML"} nline={false}/>
                                        <Bubble btext={"CSS"} nline={false}/>
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