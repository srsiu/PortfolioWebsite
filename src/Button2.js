import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import './button.css';

class Button2 extends Component{
    constructor(props) {
        super(props);
        this.state={
            text:this.props.button_text,
            hovered:false,
            link:this.props.link_text
        }
    }

    onClickHandler(){
        console.log("clocked")
    }

    render() {
        return(
            <div className="link-detail2">
                <Link to={this.state.link}>
                    <div onMouseOver={() => this.setState({hovered:true})}
                         onMouseOut={() => this.setState({hovered:false})}
                         onClick={this.onClickHandler}
                         className={`${this.state.hovered ? "button2-hovered" : "button2-unhovered" }`}>
                        <div  className={`${this.state.hovered ? "button2-text-hovered" : "button2-text-unhovered" }`}>
                            {this.state.text}
                        </div>
                    </div>
                </Link>
            </div>
        );
    }


}

export default Button2;