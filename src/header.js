import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import './homePage.css';
import logo from "./img/anime.png"

class PageHeader extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-md header-color navbar-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item header-font">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item header-font">
                                <a className="nav-link" href="/experience">Experience</a>
                            </li>
                            <li className="nav-item header-font">
                                <a className="nav-link" href="/projects">Projects</a>
                            </li>
                            <li className="nav-item header-font">
                                <a className="nav-link" href="/fun">Fun</a>
                            </li>
                            <li className="nav-item header-font">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            {/*<Link to="/" className="header-font navbar-item">Home</Link>
                            <Link to="/experience" className="header-font navbar-item">Experience</Link>
                            <Link to="/projects" className="header-font navbar-item">Projects</Link>
                            <Link to="/fun" className="header-font navbar-item">Fun</Link>
                            <Link to="/contact" className="header-font navbar-item">Contact</Link>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default PageHeader;

