import React, { Component } from 'react';
import './homePage.css';
import Button3 from "./Button3";
import Button2 from "./Button2"
import Particles from "react-particles-js";

class Contact extends Component{
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

    render() {
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
                    <div className="row padding-t">
                        <div className="col-12">
                            <p className="experience-text">Contact Me</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="contact-text">
                                I am looking for new opportunities in full-stack software engineering.
                                If you have questions or just want to say hello, send me an email at spencersiuu@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="row padding-b">
                        <div className="col-12">
                            <Button3 button_text={"Email Me!"} link_text={"instagram"}/>
                        </div>
                    </div>
                    <div className="row padding-t">
                        <div className="col-12">
                            <p className="experience-text">Connect with Me</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 social">
                            <a href="https://www.linkedin.com/in/spencer-siu/">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/srsiu">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://open.spotify.com/user/12140639767?si=WwUy6_3SRnq61xHpOVdDbA">
                                <i className="fa fa-spotify" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.twitch.tv/spenny0">
                                <i className="fa fa-twitch" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;