import React, { Component } from 'react';
import './homePage.css';
import SideImage from "./SideImage";
import gradpic from './img/gradpic.JPG'
import fieldpic from './img/fieldpic.JPG'
import funnelpic from './img/funnelcake.jpg'
import arms from './img/arms.JPG'
import hard from './img/hard.JPG'
import sf from './img/sf.JPG'
import sunset from './img/sunset.JPG'
import uci from './img/uci.png'
import lspire from './img/lspire.PNG'
import Bubble from "./Bubble";
import Button from "./Button";

class AboutMe extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="about-me-block">
                            <p className="about-me-header">About Me</p>
                            <br/>
                            <p className="about-me-paragraph-text">Hi! I'm Spencer, a software engineer based in the beautiful <br/>
                                San Francisco Bay Area. I enjoy coding fun projects that I can  <br/>share with others.  Whether it
                                be elegant web apps or simple<br/> 2-d games, my goal is to create an enjoyable experience for people.
                                <br/><br/>
                                I attended the University of California Irvine, where I received <br/> an invaluable education. I learned
                                many tools to succeed not only in <br/>the workplace, but also in life in general.  Scroll down to see what <br/>
                                skills I learned at UCI and where I have worked!
                                <br/><br/>
                                When I'm not coding, you'll find me playing video games, watching <br/>
                                Netflix, giving haircuts, or playing tennis.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="image-block">
                            <img src={gradpic} className="grad_pic"/>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="side-image-block">
                            <SideImage img_source={fieldpic}/>
                            <SideImage img_source={funnelpic}/>
                            <SideImage img_source={arms}/>
                            <SideImage img_source={hard}/>
                            <SideImage img_source={sf}/>
                            <SideImage img_source={sunset}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="experience-block">
                            <p className="experience-text">Experience</p>
                            <p className="education-header">Education:</p>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img  className="uci-logo" src={uci}/>
                                    </div>
                                    <div className="col-sm-5">
                                        <p className="uci-text">University of California, Irvine <br/> Computer Science, B.S.</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="year-text">2016-2020 <br/> Irvine, CA</p>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
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
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="bubble-block">
                                            <Bubble btext={"Java"} nline={false}/>
                                            <Bubble btext={"Python"} nline={false}/>
                                            <Bubble btext={"C/C++"} nline={false}/>
                                            <Bubble btext={"Javascript"} nline={false}/>
                                            <Bubble btext={"MySQL"} nline={false}/>
                                            <Bubble btext={"HTML"} nline={false}/>
                                            <div className="bubble-break"/>
                                            <Bubble btext={"CSS"} nline={false}/>
                                            <Bubble btext={"Git"} nline={false}/>
                                            <Bubble btext={"Linux"} nline={false}/>
                                            <Bubble btext={"R"} nline={false}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="education-header">Work Experience:</p>
                            <div className="container-fluid">
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
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="relevant-course">
                                            Worked on the front-end team and helped create LSpire's version 2.0 <br/>
                                            website.  Designed and coded various webpages to help connect real- <br/>
                                            estate brokers to various property listings in New York.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
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
                    </div>
                </div>
            </div>
            /*<div className="container-fluid">
                <div className="first-section">
                    <div className="about-me-block">
                        <p className="about-me-header">About Me</p>
                        <p className="about-me-paragraph-text">Hi! I'm Spencer, a software engineer based in the beautiful <br/>
                            San Francisco Bay Area. I enjoy coding fun projects that I can  <br/>share with others.  Whether it
                            be elegant web apps or simple<br/> 2-d games, my goal is to create an enjoyable experience for people.
                            <br/><br/>
                            I attended the University of California Irvine, where I received <br/> an invaluable education. I learned
                            many tools to succeed not only in <br/>the workplace, but also in life in general.  Scroll down to see what <br/>
                            skills I learned at UCI and where I have worked!
                            <br/><br/>
                            When I'm not coding, you'll find me playing video games, watching <br/>
                            Netflix, giving haircuts, or playing tennis.
                        </p>
                    </div>
                    <div className="image-block">
                        <img src={gradpic} className="grad_pic"/>
                    </div>
                    <div className="side-image-block">
                        <SideImage img_source={fieldpic}/>
                        <SideImage img_source={funnelpic}/>
                        <SideImage img_source={arms}/>
                        <SideImage img_source={hard}/>
                        <SideImage img_source={sf}/>
                        <SideImage img_source={sunset}/>
                    </div>
                </div>
                <div className="second-section">
                    <div className="experience-block">
                        <p className="experience-text">Experience</p>
                        <p className="education-header">Education:</p>
                        <div className="uci-block">
                            <img  className="uci-logo" src={uci}/>
                            <p className="uci-text">University of California, Irvine <br/> Computer Science, B.S.</p>
                            <p className="year-text">2016-2020 <br/> Irvine, CA</p>
                            <br/>
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
                            <div className="bubble-block">
                                <Bubble btext={"Java"} nline={false}/>
                                <Bubble btext={"Python"} nline={false}/>
                                <Bubble btext={"C/C++"} nline={false}/>
                                <Bubble btext={"Javascript"} nline={false}/>
                                <Bubble btext={"MySQL"} nline={false}/>
                                <Bubble btext={"HTML"} nline={false}/>
                                <div className="bubble-break"/>
                                <Bubble btext={"CSS"} nline={false}/>
                                <Bubble btext={"Git"} nline={false}/>
                                <Bubble btext={"Linux"} nline={false}/>
                                <Bubble btext={"R"} nline={false}/>
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
            </div>*/
        )
    }
}

export default AboutMe;