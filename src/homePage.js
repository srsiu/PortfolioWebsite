import React, { Component } from 'react';
import './homePage.css';
import Button from "./Button";
import SimpleSlider from "./SimpleSlider";
import computer2 from "./img/computerscreen2.jpg"


class HomePage extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-9 col-md-6">
                        <div className="intro-block">
                            <h1 className="hello-world-font">
                                Hello World! <br/> My name is
                            </h1>
                            <p className="name-font">Spencer Siu</p>
                            <p className="short-intro-font">
                                I'm a software engineer from the San Francisco Bay Area.  I love <br/>
                                to work on websites, mobile apps, and everything in between.
                            </p>
                        </div>
                        <div className="button-block">
                            <Button button_text={"More about me"}/>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-6">
                        <img src={computer2} className="computer-block"/>
                        <SimpleSlider/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;