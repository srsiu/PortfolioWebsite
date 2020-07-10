import React, { Component } from 'react';
import './homePage.css';
import uci from './img/uci.png'
import lspire from './img/lspire.PNG'
import Bubble from "./Bubble";
import Button from "./Button";

class AboutMe extends Component{
    render(){
        return(
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
        )
    }
}

export default AboutMe;