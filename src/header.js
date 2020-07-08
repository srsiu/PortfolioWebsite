import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import './homePage.css';

class PageHeader extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-md header-banner sticky-top">
                <div className="container-fluid">
                    <ul className="navbar-nav ml-auto header-block">
                        <Link to="/" className="header-font">Home</Link>
                        <Link to="/experience" className="header-font">Experience</Link>
                        <Link to="/projects" className="header-font">Projects</Link>
                        <Link to="/about" className="header-font">Fun</Link>
                        <Link to="/contact" className="header-font">Contact</Link>
                        <Link to="/resume" className="header-font">Resume</Link>
                    </ul>
                </div>
            </nav>
            /*<div className="container-fluid">

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
            </div>*/
            /*<div className="header-banner">
                <div className="header-block">
                    <Link to="/" className="header-font">Home</Link>
                    <Link to="/about" className="header-font">About Me</Link>
                    <Link to="/projects" className="header-font">Projects</Link>
                    <Link to="/about" className="header-font">Fun</Link>
                    <Link to="/contact" className="header-font">Contact</Link>
                    <Link to="/resume" className="header-font">Resume</Link>
                </div>
            </div>*/
        );
    }
}

export default PageHeader;

