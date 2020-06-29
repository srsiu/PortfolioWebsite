import React, { useState, Component } from 'react';
import './homePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import github from "./img/github.PNG"
import code from "./img/code.PNG"
import linkedin from "./img/linkedin.PNG"

class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000,
            arrows:false,
            cssEase: "linear"
        };
        return (
            <div className="slides-block">
                <Slider {...settings}>
                    <div>
                        <img src={github} className="slide-img"/>
                    </div>
                    <div>
                        <img src={code} className="slide-img"/>
                    </div>
                    <div>
                        <img src={linkedin} className="slide-img"/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;