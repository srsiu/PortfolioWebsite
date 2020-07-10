import React, { useState, Component } from 'react';
import './homePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import garden from "./img/garden.jpg"
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