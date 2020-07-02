import React, { useState, Component } from 'react';
import './homePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import github from "./img/github.PNG"
import linkedin from "./img/linkedin.PNG"
import code from "./img/code.PNG"
import computer from "./img/computerscreen2.jpg"

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
            fade:true,
            cssEase:"linear",
        };
        return (
            <div>
                <img src={computer} className="computer-block"/>
                <Slider {...settings}>
                    <div>
                        <img src={code} className="slide-img"/>
                    </div>
                    <div>
                        <img src={github} className="slide-img"/>
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