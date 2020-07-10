import React, { Component } from 'react';
import './homePage.css';

class Fun extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row padding">
                        <div className="col-12 text-center">
                            <p className="fun-text">
                                This page is under construction! Come back later for some cool stuff!
                            </p>
                        </div>
                    </div>
                    <div className="row padding">
                        <div className="col-12 text-center">
                            <iframe src="https://giphy.com/embed/pALw8LdftuqAw" width="480" height="287" frameBorder="0"
                                   allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Fun;