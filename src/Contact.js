import React, { Component } from 'react';
import './homePage.css';
import Button3 from "./Button3";
import Button2 from "./Button2"

class Contact extends Component{
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row padding-t">
                        <div className="col-12">
                            <p className="experience-text">Contact Me</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="contact-text">
                                I am looking for new opportunities in full-stack software engineering.
                                If you have questions or just want to say hello, send me an email at srsiu@uci.edu
                            </p>
                        </div>
                    </div>
                    <div className="row padding-b">
                        <div className="col-12">
                            <Button3 button_text={"Email Me!"} link_text={"instagram"}/>
                        </div>
                    </div>
                    <div className="row padding-t">
                        <div className="col-12">
                            <p className="experience-text">Connect with Me</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 social">
                            <a href="https://www.linkedin.com/in/spencer-siu/">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/srsiu">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://open.spotify.com/user/12140639767?si=WwUy6_3SRnq61xHpOVdDbA">
                                <i className="fa fa-spotify" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.twitch.tv/spenny0">
                                <i className="fa fa-twitch" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;