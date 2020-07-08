import React, { useState, Component } from 'react';
import './homePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import funnel from "./img/funnelcake.jpg"
import grad from "./img/gradpic.JPG"
import field from "./img/fieldpic.JPG"

import Button from "./Button";

class PortraitSlider extends Component {
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
            fade:false,
            cssEase:"linear",
            adaptiveHeight:false,
        };
        return (
            <div className="carousel-section">
                <Slider {...settings}>
                    <div className="slide">
                        <img src={grad}/>
                    </div>
                    <div className="slide">
                        <img src={funnel}/>
                    </div>
                    <div className="slide">
                        <img src={field}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default PortraitSlider;