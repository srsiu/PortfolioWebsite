import React, { Component } from 'react';
import './homePage.css';
import Particles from "react-particles-js";

class Fun extends Component{
    constructor(props) {
        super(props);
        this.state = {
            options:{
                particles: {
                    number: {
                        value: 200,
                        density: {
                            enable: true,
                            value_area: 2000,
                        }
                    },
                    color: {
                        value: ["#1a1a1a","#DF0000", "#FF8000", "#F0E100", "#149400", "#004B95", "#5A00B5"],
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#b6b2b2"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                    },
                    opacity:{
                        value: 0.5211089197812949,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 8.017060304327615,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 12.181158184520175,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 120,
                        color: {
                            value:["#1a1a1a","#DF0000", "#FF8000", "#F0E100", "#149400", "#004B95", "#5A00B5"]
                        },
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
                },
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
                        <div className="col-12 text-center">
                            <p className="fun-text">
                                This page is under construction! Come back later for some cool stuff!
                            </p>
                        </div>
                    </div>
                    <div className="row padding">
                        <div className="col-12 text-center">
                            <iframe src="https://giphy.com/embed/pALw8LdftuqAw" width="480" height="287" frameBorder="0"
                                   allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Fun;