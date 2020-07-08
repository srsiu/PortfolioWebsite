import React, { useState, Component } from 'react';
import './homePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import github from "./img/github.PNG"
import linkedin from "./img/linkedin.PNG"
import code from "./img/code.PNG"
import ocean from "./img/rock_beach.jpg"
import forest from "./img/forest.jpg"
import garden from "./img/garden.jpg"
import trees from "./img/trees.JPG"
import rocks from "./img/rocks.JPG"
import mountain from "./img/mountain.jpg"
import houses from "./img/houses.jpg"
import longocean from "./img/longocean.jpg"
import path from "./img/path.JPG"
import road from "./img/road.jpg"

import Button from "./Button";

class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000,
            arrows:false,
            fade:true,
            cssEase:"linear",
            adaptiveHeight:false,
        };
        return (
            <div className="carousel-section">
                <div className="slide-caption">
                    <h1 className="hello-world-font">
                        Hello World! <br/>
                    </h1>
                    <h3 className="name-font">My name is Spencer Siu</h3>
                    <Button button_text={"More About Me"}/>
                </div>
                <Slider {...settings}>
                    <div className="slide">
                        <img src={road}/>
                    </div>
                    <div className="slide">
                        <img src={garden}/>
                    </div>
                    <div className="slide">
                        <img src={path}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;