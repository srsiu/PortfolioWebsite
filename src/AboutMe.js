import React, { Component } from 'react';
import './homePage.css';
import sjsu from './img/sjsulogo.png'
import uci from './img/uci.png'
import lspire from './img/lspire.PNG'
import Bubble from "./Bubble";
import Button from "./Button";
import Particles from "react-particles-js";

class AboutMe extends Component{
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
                <div className="container padding">
                    <div className="row padding">
                        <div className="col-xs-12">
                            <p className="experience-text">Experience</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="education-header">Education:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-3">
                            <img  className="sjsu-logo" src={sjsu}/>
                        </div>
                        <div className="col-xs-12 col-sm-5">
                            <p className="uci-text">San Jose State University <br/> Software Engineering, M.S.</p>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <p className="year-text">2021-2022 <br/> San Jose, CA</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row padding">
                        <div className="col-sm-12">
                            <p className="relevant-course">
                                I recently got accepted into SJSU's Master's in Software Engineering <br/>
                                program! I will begin taking classes in Spring 2021. I plan to specialize <br/>
                                in either Cloud Computing and Virtualization or Enterprise Software <br/>
                                Technologies.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-3">
                            <img  className="uci-logo" src={uci}/>
                        </div>
                        <div className="col-xs-12 col-sm-5">
                            <p className="uci-text">University of California, Irvine <br/> Computer Science, B.S.</p>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <p className="year-text">2016-2020 <br/> Irvine, CA</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row padding">
                        <div className="col-sm-12">
                            <p className="relevant-course">Relevant Coursework:</p>
                            <ul className="course-list">
                                <li>Data Structures Implementation & Analysis</li>
                                <li>Projects in Data & Web Apps</li>
                                <li>Programming in Java</li>
                                <li>Design & Analysis of Algorithms</li>
                                <li>Information Retrieval</li>
                                <li>Intro to Artificial Intelligence</li>
                                <li>Machine/Data Mining</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row padding-b">
                        <div className="col-xs-12">
                            <Bubble btext={"Java"} nline={false}/>
                            <Bubble btext={"Python"} nline={false}/>
                            <Bubble btext={"C/C++"} nline={false}/>
                            <Bubble btext={"Javascript"} nline={false}/>
                            <Bubble btext={"MySQL"} nline={false}/>
                            <Bubble btext={"HTML"} nline={false}/>
                            <Bubble btext={"CSS"} nline={false}/>
                            <Bubble btext={"Git"} nline={false}/>
                            <Bubble btext={"Linux"} nline={false}/>
                            <Bubble btext={"R"} nline={false}/>
                        </div>
                    </div>

                    <div className="row padding-t">
                        <div className="col-12">
                            <p className="education-header">Work Experience:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <img  className="lspire-logo" src={lspire}/>
                        </div>
                        <div className="col-sm-5">
                            <p className="lspire-text">LSpire<br/> Software Engineering Intern</p>
                        </div>
                        <div className="col-sm-4">
                            <p className="year-text">Summer 2019 <br/> New York, NY</p>
                        </div>
                    </div>
                    <div className="row padding">
                        <div className="col-sm-12">
                            <p className="relevant-course">
                                Worked on the front-end team and helped create LSpire's version 2.0 <br/>
                                website.  Designed and coded various webpages to help connect real- <br/>
                                estate brokers to various property listings in New York.
                            </p>
                        </div>
                    </div>
                    <div className="row padding-b">
                        <div className="col-sm-12">
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

export default AboutMe;