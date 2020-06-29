import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import './homePage.css';

class PageHeader extends Component{

    render(){
        return(
            <div className="header-banner">
                <div className="header-block">
                    <Link to="/" className="header-font">Home</Link>
                    <Link to="/about" className="header-font">About Me</Link>
                    <Link to="/projects" className="header-font">Projects</Link>
                    <Link to="/about" className="header-font">Fun</Link>
                    <Link to="/contact" className="header-font">Contact</Link>
                    <Link to="/resume" className="header-font">Resume</Link>
                </div>
            </div>
        );
    }
}

export default PageHeader;

