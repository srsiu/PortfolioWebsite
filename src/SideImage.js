import React, { Component } from 'react';
import './homePage.css';

class SideImage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hovered:false
        };
    }

    render(){
        return(
            <img
                src={this.props.img_source}
                onMouseOver={() => this.setState({hovered:true})}
                onMouseOut={() => this.setState({hovered:false})}
                className={`${this.state.hovered ? "side-img-hovered" : "side-img-unhovered" }`}
            />
        )
    }
}

export default SideImage;