import React, { Component } from 'react';
import "./bubble.css"

class Bubble extends Component{
    constructor(props) {
        super(props);
        this.state={
            hovered:false,
            newline:this.props.nline,
            text:this.props.btext,
        }
    }

    render(){
        return(
            <div onMouseOver={() => this.setState({hovered:true})}
                 onMouseOut={() => this.setState({hovered:false})}
                 className={`${this.state.newline ? "bubble-new" : "bubble-same" }`}>
                <p className="bubble-text">{this.state.text}</p>
            </div>
        );
    }


}

export default Bubble;