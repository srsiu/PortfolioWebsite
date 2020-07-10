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
                        <Link to="/fun" className="header-font">Fun</Link>
                        <Link to="/contact" className="header-font">Contact</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default PageHeader;

