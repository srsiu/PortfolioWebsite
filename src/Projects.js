import React, { Component } from 'react';
import './homePage.css';
import Bubble from "./Bubble";
import fablix from "./img/fablix.png"
import discord from "./img/discord.PNG"
import amazon from "./img/amazon.PNG"
import Particles from "react-particles-js";

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = {
            options:{
                particles: {
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            value_area: 2000,
                        }
                    },
                    color: {
                        value: "#1a1a1a",
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 120,
                        color: "#B6B6B6",
                        opacity: 0.9,
                        width: 2
                    },
                    move: {
                        enable: true,
                        speed: 4,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                }
            }
        }
    }

    render(){
        return(
            <div>
                <Particles
                    style={{
                        position:"absolute",
                        zIndex:"-1"
                    }}
                    params={this.state.options}
                />
                <div className="container">
                    <div className="row padding">
                        <div className="col-12">
                            <p className="experience-text">Projects</p>
                        </div>
                    </div>

                    <div className="container padding">
                        <div className="row padding">
                            <div className="col-md-12 col-lg-6">
                                <div className="row padding">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="project-title">Amazon Clone <br/> </p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <p className="year-text">Nov 2020 - Dec 2020<br/></p>
                                    </div>
                                </div>
                                <div className="row padding-b">
                                    <div className="col-xs-12 col-md-12">
                                        <p className="project-points">
                                            A full-stack e-commerce website modeled after Amazon's home webpage. Users have
                                            the ability to create an account/sign-in and purchase products through Stripe API.
                                        </p>
                                    </div>
                                </div>
                                <div className="row padding-b">
                                    <div className="col-xs-12 col-md-12">
                                        <Bubble btext={"React.js"} nline={false}/>
                                        <Bubble btext={"JavaScript"} nline={false}/>
                                        <Bubble btext={"CSS"} nline={false}/>
                                        <Bubble btext={"Stripe"} nline={false}/>
                                        <Bubble btext={"Firebase"} nline={false}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <img src={amazon} className="project-screenshot"/>
                            </div>
                        </div>
                    </div>

                    <div className="container padding">
                        <div className="row padding">
                            <div className="col-md-12 col-lg-6">
                                <img src={discord} className="project-screenshot"/>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="row padding">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="project-title">Discord Playlists<br/> </p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <p className="year-text">Oct 2020 - Present 2020<br/></p>
                                    </div>
                                </div>
                                <div className="row padding-b">
                                    <div className="col-xs-12 col-md-12">
                                        <p className="project-points">
                                            A Spotify integration for Discord where users can synchronously listen to shared
                                            Spotify playlists in their private Discord voice calls/channels.
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
                                    <p className="single-proj-title">Wumpus World</p>
                                    <p className="single-proj-text">
                                        An artifically intelligent program that simulates the survival game
                                        Wumpus World.  Recieved 10th place for best A.I. in class tournament.
                                    </p>
                                    <div className="single-proj-bblock">
                                        <Bubble btext={"Python"} nline={false}/>
                                        <Bubble btext={"Git"} nline={false}/>
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